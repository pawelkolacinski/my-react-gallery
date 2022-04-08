
import './App.css';
import Gallery from './components/Gallery'

function App() {

  const images = [
    {
    url: 'https://photos.phpdoktor.pl/user/pages/01.home/azoty-poglad.jpg',
    thumb: 'https://photos.phpdoktor.pl/user/pages/01.home/azoty-poglad.jpg?thumb',
    title:  'azoty arena'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/azoty-wejscie.jpg'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/brama_bw_reticulation.jpg',
      title: 'Berlin'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/drzewo_pozerane.jpg'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/dzwigi-smoki.jpg'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/waly-od-odry.jpg'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/berlin_festiwal_swiatel.jpg'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/dziewoklicz_zachod.jpg'
    },
    {
      url: 'https://photos.phpdoktor.pl/user/pages/01.home/memento.jpg'
    }

  ]


  return (
    <div className="App container">
      <Gallery items={images} />  
    </div>
  );
}

export default App;
