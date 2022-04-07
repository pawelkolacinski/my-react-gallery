import './Gallery.css'
import { useState } from 'react'

export default function Gallery({items}) {
    const [selectedItem, setSelectedItem] = useState(null)

    items = items.map((i,index) => { return {...i, id: index}})

  return (
      
        <div className="react-gallery">
            <div className='items'>
                {items.map(item => (
                    <article 
                        key={item.id} 
                        className='item'
                        onClick={()=> { setSelectedItem(item.id)}}
                        >
                        <div 
                        className="image"
                        style={{
                            backgroundImage: `url(${item.thumb?item.thumb:item.url})`
                        }} 
                        ></div>
                    </article>
                ))}
            </div>

            

        
            {selectedItem!==null && (
            <div className="item-popup" onClick={()=>setSelectedItem(null)}>
                <div className="item-popup-content">
                    <img className="image-popup" src={items[selectedItem].url} />
                </div>
            
            </div>
            )}
        </div>

        
  )
}
