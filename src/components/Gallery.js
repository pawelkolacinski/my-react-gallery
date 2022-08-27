import './Gallery.css'
import { useState } from 'react'
import Slider from './Slider'

export default function Gallery({ items }) {
  const [selectedItemId, setselectedItemIdId] = useState(null)

  items = items.map((i, index) => {
    return { ...i, id: index }
  })

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
        <Slider
          items={items}
          initialSelectedItemId={selectedItemId}
          closeSliderHandler={() => setselectedItemIdId(null)}
        />
      )}
    </div>
  )
}
