import './Gallery.css'
import { useEffect, useState } from 'react'
import Slider from './Slider'

export default function Gallery({ items }) {
  const [selectedItemId, setSelectedItemId] = useState(null)

  items = items.map((i, index) => {
    return { ...i, id: index }
  })

  useEffect(() => {
    const enterKeyHandler = (e) => {
      if (e.key === 'Enter') setSelectedItemId(0)
    }

    document.addEventListener('keydown', enterKeyHandler)
    return () => document.removeEventListener('keydown', enterKeyHandler)
  }, [])

  return (
    <div className="react-gallery">
      <div className="items">
        {items.map((item) => (
          <article
            key={item.id}
            className="item"
            onClick={() => {
              setSelectedItemId(item.id)
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
          closeSliderHandler={() => setSelectedItemId(null)}
        />
      )}
    </div>
  )
}
