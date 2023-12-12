//CSS
import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Esse projeto consistem em um blog feito com React no front-end e
        Firebase no back-end
      </p>
      <Link className="btn" to="/posts/create">
        Ciar Post
      </Link>
    </div>
  );
};

export default About;
