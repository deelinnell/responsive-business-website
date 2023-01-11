import Head from 'next/head'
import styles from '../styles/PlanSteps.module.css'

export default function PlanSteps() {
    return (
        <>
            <div className="horizontal_space"></div>
            <div className={styles.container}>
                <div className="vertical_space"></div>
                <div className={styles.background}>
                    <div className="corner_topLeft"></div>
                    <div className="corner_botLeft"></div>
                    <div className="corner_topRight"></div>
                    <div className="corner_botRight"></div>
                    <h1>HOW IT WORKS</h1>
                    <div className={styles.flex_container}>
                        <div className={styles.card + " " + styles.one}>
                            <h4>1</h4>
                            <span className={"material-symbols-outlined" + " " + styles.icon}>
                                where_to_vote
                            </span>
                            <p>CHECK COVERAGE IN YOUR AREA</p>
                        </div>
                        <div className={styles.card + " " + styles.two}>
                            <h4>2</h4>
                            <span className={"material-symbols-outlined" + " " + styles.icon}>
                                mobile_friendly
                            </span>
                            <p>BRING CURRENT PHONE OR GET A NEW ONE</p>
                        </div>
                        <div className={styles.card + " " + styles.three}>
                            <h4>3</h4>
                            <span className={"material-symbols-outlined" + " " + styles.icon}>
                                swipe
                            </span>
                            <p>PICK A PLAN, ANY PLAN</p>
                        </div>
                        <div className={styles.card + " " + styles.four}>
                            <h4>4</h4>
                            <span className={"material-symbols-outlined" + " " + styles.icon}>
                                add_shopping_cart
                            </span>
                            <p>PLACE YOUR ORDER & ACTIVATE YOUR PLAN</p>
                        </div>
                    </div>
                </div>
                <div className="vertical_space"></div>
            </div>
            <div className="horizontal_space"></div>
        </>
    )
}