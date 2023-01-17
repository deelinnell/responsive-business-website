import styles from '../../styles/PhoneSlide.module.css'
import Image from 'next/image'

export default function PhoneSlide({ phone }) {

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <Image src={phone.img}
                    alt='none'
                    fill
                    sizes='max-height: 220px'
                />
            </div>
            <div className={styles.text_container}>
                <h2>{phone.name}</h2>
                <p>As low as</p>
                <h1><span>$</span>{phone.price_month}<span>/MO</span></h1>
                <a href='#'>View Details</a>
                <p className={styles.price}>Total Price: ${phone.total}</p>
                <p className={styles.deal}>HOLIDAY DEAL</p>
                <p className={styles.free}>Get 6 months FREE</p>
            </div>
        </div>
    )

}