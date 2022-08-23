# Gallery component

Simple responsive grid gallery component

Live demo : https://gallery.phpdoktor.pl

## Usage 

```javascript


import './App.css';
import Gallery from './components/Gallery'

function App() {

  const images = [
    {
    url: 'https://...',
    thumb: 'https://...',
    title:  'azoty arena'
    },
    {
      url: 'https://...'
    },
    {
      url: 'https://...',
      title: 'Berlin'
    },
    {
      url: 'https://...'
    }

  ]


  return (
    <div className="App container">
      <Gallery items={images} />  
    </div>
  );
}

export default App;

```