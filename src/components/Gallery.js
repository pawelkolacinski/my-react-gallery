import './Gallery.css'
import { useState } from 'react'

export default function Gallery({items}) {
    const [selectedItem, setSelectedItem] = useState(null)
    console.log('Active  state ',selectedItem)
    items = items.map((i,index) => { return {...i, id: index}})

    

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

    const resizePopupImage = e => {
        const image = e.target
        const parent = image.closest('.item-popup-content')

        


        const factor = image.naturalWidth/image.naturalHeight
        
        const maxWidth = 0.8 * window.innerWidth
        const maxHeight = 0.8 * window.innerHeight

        const allowedAreaFactor = maxWidth/maxHeight

        let width = 0
        let height = 0

        /* to do calculations for perfect width. height of container */
        
        if(factor>=1) {
            width = maxWidth
            height = width/factor

            if(height>maxHeight) {
                let fitFactor=height/maxHeight
                width = width/fitFactor
                height = height/fitFactor
            }

        } else {
            height = maxHeight;
            width = height*factor

            if(width>maxWidth) {
                let fitFactor=width/maxWidth
                width = width/fitFactor
                height = height/fitFactor
            }
        }
        


        parent.style.width = width + 'px'
        parent.style.height = height + 'px'


        
        /*
        
        if(factor>=1) {
            parent.style.width = '80vw';
            parent.style.height = (80/factor)+'vw'
        } else {
            parent.style.height = '80vh';
            parent.style.width = (80*factor)+'vh'
        }
        
        */

        
        
    }


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
                        onLoad={(e) => {
                            const image = e.target
                            image.classList.add('loaded')
                            
                        }} 
                        ></img>
                    </article>
                ))}
            </div>

            

        
            {selectedItem!==null && (
            <div className="item-popup" onClick={(e)=> { if(!e.target.classList.contains('arrow')) setSelectedItem(null);}} onKeyDown={handleKeyPress} tabIndex="0">
                <div className="item-popup-content">
                    <img className="image-popup" src={items[selectedItem].url} onLoad={resizePopupImage} />
                    <div className='title'>
                        
                        {items[selectedItem].title ? items[selectedItem].title : ''}
                        
                    </div>
                    <span className="arrow left" onClick={(e)=> { changeSlide(-1)}} >&#x3c;</span>
                    <span className="arrow right" onClick={(e)=> { changeSlide(1)}} >&#x3e;</span>
                    
                </div>
            
            </div>
            )}
        </div>

        
  )
}
