import { NextPage } from 'next'
import { useState } from 'react';

import styles from 'styles/About.module.scss'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const About: NextPage = () => {
    const [mkdwn, set_mkdwn] = useState('');

    fetch(`https://raw.githubusercontent.com/${process.env.GH_USERNAME}/${process.env.GH_USERNAME}/master/README.md`).then(async e => {
        set_mkdwn(await e.text());
    })

    return (
        <div className={`fullscreen ${styles.wrapper}`}>
            <div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {mkdwn}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default About;