import type { NextPage } from "next";
import styles from 'styles/Portfolio.module.scss';

const Portfolio: NextPage = () => {
    return(
        <div className={`fullscreen ${styles.portfolio}`}>
            <div className={styles.projcontainer}>
            </div>
        </div>
    );
}

export default Portfolio;