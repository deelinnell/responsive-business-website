import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import logo from '../public/images/logo.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.newsletter}>
                    <div className={styles.logo}>
                        <Image
                            src={logo}
                            alt='none'
                            width='180'
                            height='50'
                        />
                    </div>
                    <p>Want to learn more?</p>
                    <p>Sign up for our newsletter!</p>
                    <form>
                        <input type='email' className={styles.email} id='newsletter_email' name='email' placeholder='E-mail Address: ' />
                        <button type='submit' className={styles.submit} id='newsletter_submit' value='Submit'>Subscribe</button>
                    </form>
                </div>
                <div className={styles.links}>
                    <ul>
                        <a>
                            <li className={styles.header}>SHOP</li>
                        </a>
                        <a>
                            <li>Plans</li>
                        </a>
                        <a>
                            <li>Phones</li>
                        </a>
                        <a>
                            <li>Deals</li>
                        </a>
                    </ul>
                    <ul>
                        <a>
                            <li className={styles.header}>SHOP BY BRAND</li>
                        </a>
                        <a>
                            <li>Apple Phones</li>
                        </a>
                        <a>
                            <li>Samsung Phones</li>
                        </a>
                    </ul>
                </div>
                <div className={styles.links}>
                    <ul>
                        <a>
                            <li className={styles.header}>SERVICE FEATURES</li>
                        </a>
                        <a>
                            <li>Coverage</li>
                        </a>
                        <a>
                            <li>Family Plans</li>
                        </a>
                        <a>
                            <li>Bring Own Phone</li>
                        </a>
                        <a>
                            <li>International Calling</li>
                        </a>
                        <a>
                            <li>International Roaming</li>
                        </a>
                        <a>
                            <li>WiFi Calling & Text</li>
                        </a>
                    </ul>
                </div>
                <div className={styles.links}>
                    <ul>
                        <a>
                            <li className={styles.header}>SUPPORT</li>
                        </a>
                        <a>
                            <li>Help Center</li>
                        </a>
                        <a>
                            <li>Returns & Exchanges</li>
                        </a>
                        <a>
                            <li>Unlock Policy</li>
                        </a>
                        <a>
                            <li>Return Policy</li>
                        </a>
                    </ul>
                </div>
                <p className={styles.name}>© 2023 Fast Mobile, LLC</p>
            </div>
            <div className={styles.foot}>
                <ul>
                    <a>
                        <li>Plan Terms & Conditions</li>
                    </a>
                    <a>
                        <li>Privacy Policy</li>
                    </a>
                    <a>
                        <li>Return Policy</li>
                    </a>
                    <a>
                        <li>Acceptable Use Policy</li>
                    </a>
                    <a>
                        <li>Accessibility</li>
                    </a>
                    <a>
                        <li>Site Terms of Use</li>
                    </a>
                    <a>
                        <li>Prepaid MTS Surcharge</li>
                    </a>
                    <a>
                        <li>Sitemap</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}
