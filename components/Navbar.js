import styles from '../styles/Navbar.module.css'
import logo from '../public/img/logo.png'
import Image from 'next/image'

if (typeof window !== "undefined") {

    window.onscroll = () => { navScroll(), landingScroll() }

    const login = document.querySelector(`.${styles.login_container}`),
        nav = document.querySelector(`.${styles.navbar_container}`),
        landing = document.getElementById("landing_content"),
        img = document.getElementById("landing_img"),
        text = document.getElementById("landing_text"),
        p = document.getElementById("landing_p")

    function navScroll() {

        if (window.innerWidth > 1050) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                login.style.border = "none"
                login.style.height = "0"
                nav.style.top = "0"
            } else {
                login.style.height = "40px"
                login.style.borderBottom = "2px solid var(--blue)"
                nav.style.borderBottom = "1px solid #ff9671"
                nav.style.top = "40px"
            }
        }

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            nav.style.borderBottom = "1px solid #ff9671"
        } else {
            nav.style.borderBottom = "none"
        }
    }

    function landingScroll() {

        if (landing) {

            document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? p.style.display = "none" : p.style.display = "block"

            if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
                img.style.display = "none"
                text.style.display = "none"
            } else {
                img.style.display = "block"
                text.style.display = "block"
            }

            if (window.innerWidth < 1050) {
                document.body.scrollTop > 570 || document.documentElement.scrollTop > 570 ? img.style.display = "none" : img.style.display = "block"
                document.body.scrollTop > 390 || document.documentElement.scrollTop > 390 ? text.style.display = "none" : text.style.display = "block"
            } else {
                document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? landing.style.marginTop = "-2rem" : landing.style.marginTop = "0"
            }

            if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
                landing.style.position = "relative"
            } else {
                landing.style.position = "fixed"
            }
        }
    }
}

function toggleNav() {

    const checkBox = document.getElementById("checkbox_toggle"),
        background = document.getElementById("background"),
        nav = document.querySelector(`.${styles.navbar}`),
        list = nav.querySelector("ul"),
        top_bar = document.querySelector(`.${styles.top_bar}`),
        bot_bar = document.querySelector(`.${styles.bot_bar}`)

    console.log(list)

    if (checkBox.checked == true) {
        list.style.width = "200px"
        list.style.outline = "1px solid var(--peach)"
        top_bar.style.transform = "rotate(45deg)"
        top_bar.style.top = "18px"
        bot_bar.style.transform = "rotate(-45deg)"
        bot_bar.style.bottom = "18px"
    } else {
        list.style.width = "0"
        list.style.outline = "none"
        top_bar.style.transform = "rotate(0deg)"
        top_bar.style.top = "10px"
        bot_bar.style.transform = "rotate(0deg)"
        bot_bar.style.bottom = "10px"
    }
}

export default function Navbar() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.login_container}>
                    <div className={styles.login_row}>
                        <p id='p1'>6 MONTHS FREE SERVICE When You Buy a Phone + 6 Month Plan</p>
                        <div className={styles.login}>
                            <a href='#'>
                                <p id='p2'>Log In
                                </p>
                                <span className="material-symbols-outlined">
                                    login
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.navbar_container}>
                    <div className={styles.logo}>
                        <a href='./'>
                            <Image
                                src={logo}
                                alt="none"
                                fill
                                sizes="max-width: 220px"
                            />
                        </a>
                    </div>
                    <div className={styles.navbar}>
                        <label htmlFor="checkbox_toggle" className={styles.hamburger}>
                            <div className={styles.top_bar}></div>
                            <div className={styles.bot_bar}></div>
                        </label>
                        <input type="checkbox" id="checkbox_toggle" onClick={() => toggleNav()} />
                        <ul className={styles.links}>
                            <li>
                                <a href='./plans'>Shop Plans</a>
                            </li>
                            <li>
                                <a href='./phones'>Phones</a>
                            </li>
                            <li>
                                <a href='./'>Coverage</a>
                            </li>
                            <li>
                                <a href='./'>Help</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.cart}>
                        <a href='#'>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}