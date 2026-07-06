import { Button } from './Button';
import './hero.css';

export interface HeroProps {
  title?: string;
  body?: string;
  ctaLabel?: string;
}

export const Hero = ({
  title = "It's never too late to try something new",
  body = 'Three paths lead to knowledge, the path of reflection is the noblest, the path of imitation is the easiest, and the path of experience is the bitterest.',
  ctaLabel = 'Book Now',
}: HeroProps) => (
  <section className="ds-hero">
    <div className="ds-hero__copy">
      <h1>{title}</h1>
      <p>{body}</p>
      <Button label={ctaLabel} variant="primary" />
    </div>

    <div className="ds-hero__art" aria-hidden="true">
      <article className="ds-hero-tile ds-hero-tile--blue">
        <span className="ds-hero-arrow" />
        <span className="ds-hero-bar ds-hero-bar--orange ds-hero-bar--top" />
        <span className="ds-hero-bar ds-hero-bar--purple ds-hero-bar--left" />
        <strong>Explore</strong>
      </article>

      <article className="ds-hero-tile ds-hero-tile--orange">
        <span className="ds-hero-arrow" />
        <span className="ds-hero-dot ds-hero-dot--lavender" />
        <span className="ds-hero-bar ds-hero-bar--lavender ds-hero-bar--center" />
        <span className="ds-hero-bar ds-hero-bar--purple ds-hero-bar--low" />
        <strong>Stories</strong>
      </article>

      <article className="ds-hero-tile ds-hero-tile--lavender">
        <span className="ds-hero-arrow" />
        <span className="ds-hero-dot ds-hero-dot--blue" />
        <span className="ds-hero-dot ds-hero-dot--orange ds-hero-dot--small" />
        <strong>About</strong>
        <small>Our company history</small>
      </article>

      <article className="ds-hero-tile ds-hero-tile--purple">
        <span className="ds-hero-arrow" />
        <span className="ds-hero-pill">
          <span />
          <span />
        </span>
        <strong>Help</strong>
        <small>FAQ and Support</small>
      </article>
    </div>
  </section>
);
