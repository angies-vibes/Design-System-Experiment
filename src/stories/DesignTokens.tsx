import './design-token-docs.css';

const colorTokens = [
  '--text-primary',
  '--text-secondary',
  '--text-tertiary',
  '--section-primary',
  '--button-primary-background-default',
  '--button-primary-background-hover',
  '--button-primary-background-pressed',
  '--button-secondary-background-default',
  '--button-secondary-background-hover',
  '--button-secondary-background-pressed',
  '--hero-background-blue',
  '--hero-background-orange',
  '--hero-background-lavender',
  '--hero-background-purple',
  '--hero-accent-blue',
  '--hero-accent-orange',
  '--hero-accent-lavender',
  '--hero-accent-purple',
];

const typographyTokens = [
  ['Family Primary', '--family-primary'],
  ['Weight Regular', '--weight-regular'],
  ['Weight Medium', '--weight-medium'],
  ['Size Title', '--size-title'],
  ['Size Body', '--size-body'],
  ['Size Interactive', '--size-interactive'],
];

const radiusTokens = [
  '--radius-radius-01',
  '--radius-radius-02',
  '--radius-radius-03',
  '--radius-radius-04',
  '--radius-radius-05',
  '--radius-radius-06',
];

export const DesignTokens = () => (
  <main className="ds-token-docs">
    <header>
      <p>Figma source</p>
      <h1>Prototyping Design System Tokens</h1>
      <a href="https://www.figma.com/design/ZBYvgBfGbtDjBLl9mHsNp3/Prototyping-Design-System?node-id=15-355&t=cS2SE3qROCwGhW80-1">
        Prototyping Design System / Final Design System
      </a>
    </header>

    <section>
      <h2>Color</h2>
      <div className="ds-token-grid">
        {colorTokens.map((token) => (
          <article className="ds-color-token" key={token}>
            <span style={{ background: `var(${token})` }} />
            <code>{token}</code>
          </article>
        ))}
      </div>
    </section>

    <section>
      <h2>Typography</h2>
      <div className="ds-token-list">
        {typographyTokens.map(([label, token]) => (
          <article key={token}>
            <strong>{label}</strong>
            <code>{token}</code>
            <span style={{ fontFamily: 'var(--family-primary)' }}>
              The quick brown fox jumps over the lazy dog.
            </span>
          </article>
        ))}
      </div>
    </section>

    <section>
      <h2>Radius</h2>
      <div className="ds-radius-list">
        {radiusTokens.map((token) => (
          <article key={token}>
            <span style={{ borderRadius: `var(${token})` }} />
            <code>{token}</code>
          </article>
        ))}
      </div>
    </section>
  </main>
);
