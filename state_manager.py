import sqlite3
import json
import datetime
import functools
from typing import Any, Dict, Optional, Callable

class ChronosStateManager:
    def __init__(self, db_path: str = "chronos_snapshots.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS snapshots (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    timestamp TEXT,
                    step_name TEXT,
                    state_data TEXT,
                    metadata TEXT
                )
            ''')
            conn.commit()

    def save_snapshot(self, step_name: str, state: Dict[str, Any], metadata: Optional[Dict] = None):
        timestamp = datetime.datetime.now().isoformat()
        state_json = json.dumps(state)
        meta_json = json.dumps(metadata) if metadata else "{}"
        
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO snapshots (timestamp, step_name, state_data, metadata) VALUES (?, ?, ?, ?)",
                (timestamp, step_name, state_json, meta_json)
            )
            conn.commit()
            return cursor.lastrowid

    def load_snapshot(self, snapshot_id: int) -> Dict[str, Any]:
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT state_data FROM snapshots WHERE id = ?", (snapshot_id,))
            row = cursor.fetchone()
            if row:
                return json.loads(row[0])
            raise ValueError(f"Snapshot {snapshot_id} not found.")

    def list_snapshots(self):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, timestamp, step_name FROM snapshots ORDER BY id DESC")
            return cursor.fetchall()

# Global instance for easy access
chronos = ChronosStateManager()

def chronos_checkpoint(step_name: str):
    """
    Decorator that automatically saves a snapshot of the 'state' argument 
    after the function executes successfully.
    """
    def decorator(func: Callable):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # We assume the first argument or a keyword argument 'state' is the state dictionary
            state = None
            if args and isinstance(args[0], dict):
                state = args[0]
            elif 'state' in kwargs:
                state = kwargs['state']
            
            if state is None:
                raise TypeError(f"Function {func.__name__} decorated with @chronos_checkpoint must accept a 'state' dictionary.")

            result = func(*args, **kwargs)
            
            # Save snapshot after successful execution
            snap_id = chronos.save_snapshot(step_name, state)
            print(f"📸 [Chronos] Checkpoint reached: {step_name} (ID: {snap_id})")
            
            return result
        return wrapper
    return decorator
