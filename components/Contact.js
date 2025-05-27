import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically handle the form submission, like sending to an API
    alert('Thanks for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>Ready to elevate your social media presence? Contact us today!</p>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>hello@bzy.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Follow Us</h3>
              <div className={styles.social}>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="TikTok">🎵</a>
                <a href="#" aria-label="YouTube">▶️</a>
                <a href="#" aria-label="Twitter">🐦</a>
              </div>
            </div>
          </div>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}