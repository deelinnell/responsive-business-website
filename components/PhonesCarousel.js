import styles from '../styles/PhoneCarousel.module.css'
import PhoneSlide from './small/PhoneSlide'
import { phones } from './small/phones.js'

if (typeof window !== "undefined") {

    let slider = document.getElementsByClassName(styles.phones_container)[0],
        slides = Array.from(slider.children)

    slides.forEach((slide, index) => {

        slide.addEventListener('touchstart', touchStart(index))
        slide.addEventListener('touchend', touchEnd)
        slide.addEventListener('touchmove', touchMove)
        slide.addEventListener('mousedown', touchStart(index))
        slide.addEventListener('mouseup', touchEnd)
        slide.addEventListener('mousemove', touchMove)
        slide.addEventListener('mouseleave', touchEnd)

    })

    let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID,
        currentIndex = 0

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }

    function touchStart(index) {
        return function (event) {
            currentIndex = index
            startPos = getPositionX(event)
            isDragging = true
            animationID = requestAnimationFrame(animation)
            slider.classList.add('grabbing')
        }
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event)
            currentTranslate = prevTranslate + currentPosition - startPos
        }
    }

    function touchEnd() {
        cancelAnimationFrame(animationID)
        isDragging = false
        const movedBy = currentTranslate - prevTranslate

        if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

        if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

        setPositionByIndex()

        slider.classList.remove('grabbing')
    }

    function animation() {
        setSliderPosition()
        if (isDragging) requestAnimationFrame(animation)
    }

    function setSliderPosition() {
        if (window.innerWidth > 1050) return
        slider.style.transform = `translateX(${currentTranslate}px)`
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -282
        prevTranslate = currentTranslate
        setSliderPosition()
    }
}

export default function PhoneCarousel() {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <h1>GET 6 MONTHS OF <div className={styles.break}><br /></div> FREE WIRELESS SERVICE</h1>
                <h2>When you buy a new phone<div className={styles.break}><br /></div> and a 6-month plan</h2>
            </div>
            <div className={styles.phones_container}>
                {phones.map((phone, index) => {
                    return <PhoneSlide phone={phone} key={index} />
                })}
            </div>
            <div className={styles.footer}>
                <a href='#'>View All Phones</a>
                <p>Limited time offer. New (port-in) subs. who purchase eligible device & any 12-month data plan receive a 50% discount (6 months) on the 12-month plan at checkout.</p>
                <p>Taxes & fees extra. Additional restrictions apply.</p>
                <p>See full terms for more details.</p>
            </div>
        </div>
    )
}