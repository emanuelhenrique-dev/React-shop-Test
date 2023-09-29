import './styles.css'
import { Button } from '../button';
import { TiltCard } from './card-tilt';
import {
  img1,
  img2,
  img3
} from '../../assets/images'



export const SectionCollection = () => {

  const options = {
    scale: 1.1,
    speed: 2500,
    max: 25,
    glare: true,
    "max-glare": 0.2
  };
  

  return ( 
    <div id="collection">
      <div className="collections">
        <TiltCard img={img1} options={options}/>
        <TiltCard img={img2} options={options}/>
        <TiltCard img={img3} options={options}/>
      </div>
      <div className="more">
        <h3>Confira as ultimas coleções</h3>
        <Button text="ver mais"/>
      </div>
    </div>
   );
}
 

