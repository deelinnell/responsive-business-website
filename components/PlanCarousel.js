import styles from '../styles/PlanCarousel.module.css'
import PlanSlide from './small/PlanSlide'
import { sale_plans } from './small/plans'


if (typeof window !== "undefined") {

  let slider = document.querySelector(`.${styles.slide_container}`),
    slides = Array.from(slider.children),
    dataBar = document.querySelector(`.${styles.data_bar}`),
    dataBubbles = Array.from(dataBar.children)

  slides.forEach((slide, index) => {

    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mousemove', touchMove)
    slide.addEventListener('mouseleave', touchEnd)

  })

  dataBubbles.forEach((bubble, index) => {
    bubble.onclick = () => dataBarOnClick(index)
  })

  function dataBarOnClick(index) {
    currentIndex = index
    touchEnd()
  }

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
    currentTranslate = currentIndex * -266
    setDataBarPosition()
    prevTranslate = currentTranslate
    setSliderPosition()
  }

  function setDataBarPosition() {
    dataBubbles.forEach(bubble => bubble.style.backgroundColor = 'var(--peach)')
    dataBubbles[currentIndex].style.backgroundColor = 'var(--orange)'
  }
}

export default function PlanCarousel() {

  return (
    <div className={styles.container}>
      <h1>NEW CUSTOMER OFFER</h1>
      <h3>Our New Customer Offer lets you try us out for 3 Months at our lowest possible price.</h3>
      <div className={styles.data_bar}>
        <div className={styles.data_5gb}>5GB</div>
        <div className={styles.data_10gb}>10GB</div>
        <div className={styles.data_15gb}>15GB</div>
        <div className={styles.data_unltd}>UNLTD</div>
      </div>
      <div className={styles.slide_container}>
        {sale_plans.map((plan, index) => {
          return <PlanSlide plan={plan} key={index} />
        })}
      </div>
      <div className={styles.footer}>
        <p>Unlimited plan customers using more than 35GB/mo will experience lower speeds. Videos stream at 480p. Capable device required. Coverage not available in all areas.</p>
        <a href='#'>See All Plans</a>
      </div>
    </div>
  )
}