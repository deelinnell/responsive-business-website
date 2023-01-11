import styles from '../styles/Phones.module.css'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'

export default function Phones() {
    return (
        <div className={styles.container}>
            <Navbar />
            <HeroImg />
        </div>
    )
}