import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <h2>bzy</h2>
            <p>Social Media Management</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3>Navigation</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#portfolio">Work</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Services</h3>
              <ul>
                <li><Link href="#services">Content Strategy</Link></li>
                <li><Link href="#services">Video Production</Link></li>
                <li><Link href="#services">Account Management</Link></li>
                <li><Link href="#services">Analytics & Growth</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>Connect</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} bzy. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}