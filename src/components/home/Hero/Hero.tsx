import { heroData } from "./Hero.data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>{heroData.badge}</span>
          
          <h1 className={styles.title}>{heroData.title}</h1>
          
          <h2 className={styles.subtitle}>{heroData.subtitle}</h2>
          
          <p className={styles.description}>{heroData.description}</p>
          
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>{heroData.primaryButton}</button>
            <button className={styles.btnSecondary}>{heroData.secondaryButton}</button>
          </div>
        </div>

        <div className={styles.imagePlaceholder}>
          <p>Illustration / Image Placeholder</p>
        </div>
      </div>
    </section>
  );
}
