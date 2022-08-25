import './Gallery.css'
import { useState } from 'react'

export default function Gallery({ items }) {
  const [selectedItemId, setselectedItemIdId] = useState(null)

  items = items.map((i, index) => {
    return { ...i, id: index }
  })

  const changeSlide = (step) => {
    if (selectedItemId === 0 && step === -1) {
      setselectedItemIdId(items.length - 1)
      return
    }
    if (selectedItemId === items.length - 1 && step === 1) {
      setselectedItemIdId(0)
      return
    }

    setselectedItemIdId(selectedItemId + step)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') changeSlide(1)
    if (e.key === 'ArrowLeft') changeSlide(-1)
    if (e.key === 'Escape') setselectedItemIdId(null)
  }

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
    <div className="react-gallery">
      <div className="items">
        {items.map((item) => (
          <article
            key={item.id}
            className="item"
            onClick={() => {
              setselectedItemIdId(item.id)
            }}
          >
            <img
              alt={item.title}
              className="image"
              src={item.thumb ? item.thumb : item.url}
              loading="lazy"
              onLoad={(e) => {
                const image = e.target
                image.classList.add('loaded')
              }}
            ></img>
          </article>
        ))}
      </div>

      {selectedItemId !== null && (
        <div
          className="item-popup"
          onClick={(e) => {
            if (!e.target.classList.contains('arrow')) setselectedItemIdId(null)
          }}
          onKeyDown={handleKeyPress}
          tabIndex="0"
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
      )}
    </div>
  )
}
