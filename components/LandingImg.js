import Image from 'next/image'
import horse from '../public/static/images/horse.png'
import styles from '../styles/LandingImg.module.css'

export default function LandingImg() {
    return (
        <>
            <div className={styles.container}>
                <div className="vertical_space"></div>
                <div className={styles.background}>
                    <div className="corner_topLeft"></div>
                    <div className="corner_topRight"></div>
                    <div className={styles.content_container} id="landing_content">
                        <div className={styles.content} >
                            <div className={styles.img_container} id="landing_img">
                                <Image
                                    src={horse}
                                    alt="none"
                                    fill
                                    sizes="max-width: 330px"
                                    priority
                                />
                            </div>
                            <div className={styles.text_container} id="landing_text">
                                <h3>PREMIUM WIRELESS</h3>
                                <h1>3 MONTHS FREE</h1>
                                <h2>WHEN YOU BUY ANY 3-MONTH PLAN</h2>
                                <a href='#'>View Plans</a>
                            </div>
                        </div>
                        <p className={styles.p} id="landing_p">Limited time new customer offer. Activation required w/in 45 days of purchase.Taxes & fees extra. Additional restrictions apply.</p>
                    </div>
                </div>
                <div className="vertical_space"></div>
            </div>
        </>
    )
}