import './Gallery.css'
import { useState } from 'react'

export default function Gallery({items}) {
    const [selectedItem, setSelectedItem] = useState(null)
    console.log('Active  state ',selectedItem)

    const changeSlide = (step) => {
        
        
        if( selectedItem === 0 && step === -1) {setSelectedItem(items.length -1); return } 
        if( selectedItem === (items.length -1) && step === 1) {setSelectedItem(0); return }
        
        setSelectedItem(selectedItem + step)
    } 

    const handleKeyPress = e => {
        if(e.key==='ArrowRight') changeSlide(1)
        if(e.key==='ArrowLeft') changeSlide(-1)
        if(e.key==='Escape') setSelectedItem(null)
    }

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
                        <img 
                        className="image"
                        src={item.thumb?item.thumb:item.url}
                        
                        loading="lazy" 
                        ></img>
                    </article>
                ))}
            </div>

            

        
            {selectedItem!==null && (
            <div className="item-popup" onClick={(e)=> { if(!e.target.classList.contains('arrow')) setSelectedItem(null);}} onKeyDown={handleKeyPress} tabIndex="0">
                <div className="item-popup-content">
                    <img className="image-popup" src={items[selectedItem].url} />
                    <div className='title'>
                        <span className="arrow left" onClick={(e)=> { changeSlide(-1)}} >&#x3c;</span>
                        {items[selectedItem].title ? items[selectedItem].title : ''}
                        <span className="arrow right" onClick={(e)=> { changeSlide(1)}} >&#x3e;</span>
                    </div>
                    
                    
                </div>
            
            </div>
            )}
        </div>

        
  )
}
