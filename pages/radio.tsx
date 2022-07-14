import { NextPage } from 'next'

import styles from 'styles/Radio.module.scss'

const Radio: NextPage = () => {
    return (
        <div className={`fullscreen ${styles.radio}`}>
            <div>
                <iframe src="https://open.spotify.com/embed/artist/15HdoPMP89EsIfIvN1coko?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    )
}

export default Radio;