import type { NextPage } from "next";
import styles from 'styles/Portfolio.module.scss';

import Donut from "components/Donut";
import ProjectCard from "components/ProjectCard";

import project_cards from "cfg/project_cards";

const Portfolio: NextPage = () => {
    return(
        <div className={`fullscreen ${styles.portfolio}`}>
            <div className={styles.projcontainer}>
                {
                    project_cards.map((card, i) => {
                        return <ProjectCard key={i} {...card} />
                    })
                }
            </div>
            <Donut />
            <div 
                style={{
                    textAlign: "center",
                    marginBottom: "10px"
                }}
            >
                Spinning Donut Code is by&nbsp;
                <a href="https://www.a1k0n.net/2011/07/20/donut-math.html">
                    a1k0n
                </a>
            </div>
        </div>
    );
}

export default Portfolio;