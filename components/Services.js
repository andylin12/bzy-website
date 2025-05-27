import styles from '../styles/Services.module.css';

export default function Services() {
  const services = [
    {
      title: "Content Strategy",
      description: "Custom content strategies tailored to your brand's voice and audience.",
      icon: "📊"
    },
    {
      title: "Video Production",
      description: "High-quality entertainment and niche video content creation.",
      icon: "🎬"
    },
    {
      title: "Account Management",
      description: "Day-to-day management of your social media accounts across all platforms.",
      icon: "📱"
    },
    {
      title: "Analytics & Growth",
      description: "Data-driven insights to continuously improve and grow your audience.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>Comprehensive social media management solutions</p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}