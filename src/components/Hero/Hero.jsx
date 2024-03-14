import React from "react";
import Resume from './Vikash_Resume2024.pdf'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikash</h1>
        <p className={styles.description}>
        I'm a MERN-Stack developer with 6 months of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className="d-flex">
        <a href="mailto:vk9669901922@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
            className={styles.downloadBtn}
            href={Resume}
            download="Vikash_Resume"
            target="_blank"
            rel="noreferrer"
          >
            <span>Get CV</span>
          </a>
          </div>
      </div>
      <img
        src={getImageUrl("hero/vk.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
