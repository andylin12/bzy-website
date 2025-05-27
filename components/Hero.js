import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Elevate Your Social Media Presence</h1>
        <p className={styles.subtitle}>
          We manage and grow your social network accounts with engaging entertainment and niche video content
        </p>
        <div className={styles.cta}>
          <Link href="#contact">
            <button className={styles.button}>Get Started</button>
          </Link>
          <Link href="#services">
            <button className={styles.outlineButton}>Our Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
}