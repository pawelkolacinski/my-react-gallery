# Gallery component

Simple responsive grid gallery component (with Slider on-click)

Live demo : https://gallery.phpdoktor.pl

## Usage

```javascript
import './App.css'
import Gallery from './components/Gallery'

function App() {
  const images = [
    {
      url: 'https://...',
      thumb: 'https://...',
      title: 'azoty arena',
    },
    {
      url: 'https://...',
    },
    {
      url: 'https://...',
      title: 'Berlin',
    },
    {
      url: 'https://...',
    },
  ]

  return (
    <div className="App">
      <Gallery items={images} />
    </div>
  )
}

export default App
```

## Installation

Download/clone repository and run this in project folder

```
$ npm install 
```

```
$ npm run start 
```
