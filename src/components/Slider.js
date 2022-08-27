import { useCallback, useEffect, useState, useRef } from 'react'
import './Slider.css'

export default function Slider({
  items,
  initialSelectedItemId = 0,
  closeSliderHandler,
}) {
  const [selectedItemId, setselectedItemId] = useState(initialSelectedItemId)
  const slider = useRef(null)

  const changeSlide = useCallback(
    (step) => {
      if (selectedItemId === 0 && step === -1) {
        setselectedItemId(items.length - 1)
        return
      }
      if (selectedItemId === items.length - 1 && step === 1) {
        setselectedItemId(0)
        return
      }

      setselectedItemId(selectedItemId + step)
    },
    [items.length, selectedItemId]
  )

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') changeSlide(1)
      if (e.key === 'ArrowLeft') changeSlide(-1)
      if (e.key === 'Escape') closeSliderHandler()
    },
    [changeSlide, closeSliderHandler]
  )


  useEffect(() => {
    const currentSlider = slider.current
    currentSlider?.focus()
    currentSlider?.addEventListener('keydown', handleKeyPress)

    return () => currentSlider?.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  const resizePopupImage = (e) => {
    const image = e.target
    const parent = image.closest('.item-popup-content')

    const factor = image.naturalWidth / image.naturalHeight

    const maxWidth = 0.8 * window.innerWidth
    const maxHeight = 0.8 * window.innerHeight

    let width = 0
    let height = 0

    /* to do calculations for perfect width. height of container */

    if (factor >= 1) {
      width = maxWidth
      height = width / factor

      if (height > maxHeight) {
        let fitFactor = height / maxHeight
        width = width / fitFactor
        height = height / fitFactor
      }
    } else {
      height = maxHeight
      width = height * factor

      if (width > maxWidth) {
        let fitFactor = width / maxWidth
        width = width / fitFactor
        height = height / fitFactor
      }
    }

    parent.style.width = width + 'px'
    parent.style.height = height + 'px'
  }

  return (
    <div className="slider" ref={slider} tabIndex="1">
      <div
        className=" item-popup"
        onClick={(e) => {
          if (!e.target.classList.contains('arrow')) closeSliderHandler()
        }}
      >
        <div className="item-popup-content">
          <img
            alt={items[selectedItemId].title}
            className="image-popup"
            src={items[selectedItemId].url}
            onLoad={resizePopupImage}
          />
          <div className="title">
            {items[selectedItemId].title ? items[selectedItemId].title : ''}
          </div>
          <span
            className="arrow left"
            onClick={(e) => {
              changeSlide(-1)
            }}
          >
            &#x3c;
          </span>
          <span
            className="arrow right"
            onClick={(e) => {
              changeSlide(1)
            }}
          >
            &#x3e;
          </span>
        </div>
      </div>
    </div>
  )
}
