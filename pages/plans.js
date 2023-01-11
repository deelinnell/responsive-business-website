import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import styles from '../styles/Plans.module.css'

export default function Plans() {
    return (
        <div className={styles.container}>
            <Navbar />
            <HeroImg />
        </div>
    )
}