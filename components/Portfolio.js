import styles from '../styles/Portfolio.module.css';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Entertainment Series",
      description: "A viral comedy series that gained 2M+ views across platforms.",
      category: "Video Production"
    },
    {
      title: "Tech Reviews",
      description: "Niche tech review channel growing from 0 to 50K subscribers in 6 months.",
      category: "Channel Growth"
    },
    {
      title: "Fashion Brand",
      description: "Social media management increasing engagement by 300%.",
      category: "Account Management"
    },
    {
      title: "Food & Lifestyle",
      description: "Content strategy resulting in 5 viral videos and multiple brand deals.",
      category: "Strategy & Production"
    }
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Work</h2>
        <p className={styles.subtitle}>Recent projects and success stories</p>
        
        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.image}></div>
              <div className={styles.content}>
                <span className={styles.category}>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}