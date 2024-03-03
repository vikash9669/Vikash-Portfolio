import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Open to Work</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:mrvk017@email.com">mrvk017@email.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/kumarvikash25/">linkedin.com/Vikash Kushwaha</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/vikash9669">github.com/Vikash Kushwaha</a>
      </li>
    </ul>
  </footer>
  );
};
