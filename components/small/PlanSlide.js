import styles from '../../styles/PlanSlide.module.css'

export default function PlanSlide({ plan }) {

    function dataInfo(data) {
        if (typeof data === "number") {
            return <h1>{data}GB<span>/MO</span></h1>
        } else {
            return <h1>{data}</h1>
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>{plan.speed}</p>
                {dataInfo(plan.data)}
            </div>
            <h1><span>$</span>{plan.price}<span>/MO</span></h1>
            <ul>
                {plan.details.map((line, index) => {
                    return <li key={index}> {line} </li>
                })}
            </ul>
            <a href="#">View Details</a>
            <p>{plan.total}</p>
        </div>
    )
}