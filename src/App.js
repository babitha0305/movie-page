import './App.css';
import PrimarySearchAppBar from './appbar';
import PermanentDrawerLeft from './PermanentDrawerLeft';
import Grid from './grid';
import ImageSlider from './Imageslidder';
import FadeInImage from './fadeinimage';
import SimpleFooter from './SimpleFooter';
import SecondImageSlider from './Grid2';
import FadeInImage2 from './fadeinimage2';


function App() {
  return (
    <div style={{backgroundColor: 'black'}}>
    <div>
     <PrimarySearchAppBar />
    </div>
    <div>
      <PermanentDrawerLeft/>
    </div>
    <div>
      <Grid />
    </div>
    <div>
      <ImageSlider />
    </div>
    <div>
      <FadeInImage />
    </div>
    <div>
      <SecondImageSlider />
    </div>
    <div>
      <FadeInImage2 />
    </div>
    <div>
     <SimpleFooter />
    </div>
    </div>
    
  );
}

export default App;
