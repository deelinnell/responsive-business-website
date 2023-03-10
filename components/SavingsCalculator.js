import styles from '../styles/SavingsCalculator.module.css'

if (typeof window !== "undefined") {

    const color = `${styles.highlighted}`

    let lines = document.querySelector(`.${styles.lines_picker}`),
        linesArray = Array.from(lines.children),
        spending = document.querySelector(`.${styles.spending}`),
        spendingArray = Array.from(spending.children),
        data = document.querySelector(`.${styles.data_num}`),
        dataArray = Array.from(data.children)

    function highlightOnclick(array) {
        array.forEach((num, index) => {
            num.onclick = () => highlight(array, index)
        })
    }

    function highlight(array, index) {
        array.forEach(index => index.classList.remove(color))
        array[index].classList.add(color)
    }

    highlightOnclick(linesArray)
    highlightOnclick(spendingArray)
    highlightOnclick(dataArray)

    linesArray[0].classList.add(color)
    spendingArray[0].classList.add(color)
    dataArray[0].classList.add(color)
}

export default function SavingsCalculator() {
    return (
        <div className={styles.container}>
            <div className={styles.vertical_space_white}></div>
            <div className={styles.vertical_space}>
                <div className="corner_topLeft"></div>
                <div className="corner_botLeft"></div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>LET'S GET YOU SOME <span>SAVINGS</span></h1>
                    <h2>Find your perfect plan with this handy dandy calculator planning thing.</h2>
                </div>
                <div className={styles.num_lines}>
                    <p>How many lines do you need?</p>
                    <div className={styles.lines_picker}>
                        <div className={styles.lines1}>1</div>
                        <div className={styles.lines2}>2</div>
                        <div className={styles.lines3}>3</div>
                        <div className={styles.lines4}>4</div>
                    </div>
                </div>
                <div className={styles.data_container}>
                    <p>How would you describe your data usage per line, per month?</p>
                    <div className={styles.data_num}>
                        <div>
                            <h4>Light</h4>
                            <p>0-4 GB/mo</p>
                        </div>
                        <div>
                            <h4>Moderate</h4>
                            <p>5-10 GB/mo</p>
                        </div>
                        <div>
                            <h4>Heavy</h4>
                            <p>11-15 GB/mo</p>
                        </div>
                        <div>
                            <h4>Heavy+</h4>
                            <p>15+ GB/mo</p>
                        </div>
                    </div>
                </div>
                <div className={styles.calculate}>
                    <p>How much do you currently spend on wireless per line, per month?</p>
                    <div className={styles.spending}>
                        <div>$40-$80</div>
                        <div>$80-$120</div>
                        <div>$120+</div>
                    </div>
                    <a href='#'>See My Recommended Plan</a>
                </div>
            </div>
            <div className={styles.vertical_space}>
                <div className="corner_topRight"></div>
                <div className="corner_botRight"></div>
            </div>
            <div className={styles.vertical_space_white}></div>
        </div>
    )
}