import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About bzy</h2>
          <p className={styles.text}>
            At bzy, we're passionate about creating engaging social media content that resonates with audiences. 
            Our team of creative professionals specializes in managing social network accounts that produce 
            entertainment and niche videos.
          </p>
          <p className={styles.text}>
            Founded with the vision to help brands cut through the noise, we combine creative storytelling 
            with data-driven strategies to grow your online presence and connect with your target audience.
          </p>
          <p className={styles.text}>
            Whether you're looking to increase your follower count, boost engagement, or create viral content, 
            our team has the expertise to make it happen.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}