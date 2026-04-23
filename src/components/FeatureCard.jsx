import React from 'react';

export const FeatureCard = ({ title, description }) => (
  <div className="card-surface group hover:border-[var(--color-accent)] transition-colors cursor-default">
    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors">{title}</h3>
    <p className="text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
  </div>
);
