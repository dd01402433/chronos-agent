from state_manager import chronos_checkpoint, chronos
import time
import random

@chronos_checkpoint("Research_Phase")
def research_step(state):
    print(f"🔎 {state['current_task']}... (Researching)")
    time.sleep(1)
    state['progress'] += 20
    state['history'].append("Research completed")
    return state

@chronos_checkpoint("Analysis_Phase")
def analysis_step(state):
    print(f"🔎 {state['current_task']}... (Analyzing)")
    time.sleep(1)
    state['progress'] += 20
    state['history'].append("Analysis completed")
    return state

@chronos_checkpoint("Synthesis_Phase")
def synthesis_step(state):
    print(f"🔎 {state['current_task']}... (Synthesizing)")
    time.sleep(1)
    state['progress'] += 20
    state['history'].append("Synthesis completed")
    return state

@chronos_checkpoint("Final_Delivery")
def delivery_step(state):
    print(f"🔎 {state['current_task']}... (Delivering)")
    time.sleep(1)
    if random.random() < 0.7:
        print("❌ CRITICAL ERROR: API Timeout during final delivery!")
        raise RuntimeError("Final delivery failed")
    state['progress'] += 20
    state['history'].append("Delivery completed")
    return state

def main():
    state = {"current_task": "Deep Dive into AgentOps", "progress": 0, "history": []}
    try:
        research_step(state)
        analysis_step(state)
        synthesis_step(state)
        delivery_step(state)
        print("\n🎉 Task completed successfully!")
    except RuntimeError:
        print("\n⚠️ Triggering Chronos Rollback...")
        snaps = chronos.list_snapshots()
        if snaps:
            last_id = snaps[0][0]
            state = chronos.load_snapshot(last_id)
            print(f"🚀 State restored. Progress: {state['progress']}%")
            try:
                delivery_step(state)
                print("🎉 Task successfully recovered!")
            except RuntimeError:
                print("❌ Second attempt failed.")
if __name__ == "__main__":
    main()
