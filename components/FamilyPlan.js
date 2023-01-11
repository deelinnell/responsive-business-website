import styles from '../styles/FamilyPlan.module.css'

export default function FamilyPlan() {
    return (
        <>
            <div className={styles.container}>
                <div className="vertical_space"></div>
                <div className={styles.background}>
                    <div className={styles.block}>
                        <div className={styles.top}>
                            <h2>INTRODUCING</h2>
                        </div>
                        <div className={styles.mid}>
                            <h1>THE MODERN FAMILY PLAN</h1>
                        </div>
                        <div className={styles.bot}>
                            <h3>The most affordable family plan has arrived</h3>
                            <a href='#'>Save Together</a>
                        </div>
                    </div>
                </div>
                <div className="vertical_space"></div>
            </div>
            <div className={styles.footer}>
                <div className="vertical_space"></div>
                <div className={styles.text_footer}>
                    <div className="corner_botLeft"></div>
                    <div className="corner_botRight"></div>
                </div>
                <div className="vertical_space"></div>
            </div>
            <div className="horizontal_space"></div>
        </>
    )
}