import './styles.css';
import img from '../../assets/banne.png'
import { Button } from '../button';
import {gameList} from '../../util/game-list'
import { Steam } from './Steam';


export const SectionHome = () => {

  return ( 
  <div id="home">
    <div className="home-top">
      <div className="content">
      <h2>Descubra os melhores jogos na nossa loja</h2>
      <p>Adiciona nossos jogos a sua biblioteca </p>
      <Button text="explorar"/>
      <div className="stats">
        <div><h5>+20 mil</h5><p>Jogos</p></div>
        <div><h5>+100 mil</h5><p>Vendas</p></div>
        <div><h5>+40 mil</h5><p>Avaliações</p></div>
      </div>
      </div>
      <div className='image'>
      <img className='main-image' src={img} alt="" />
      <Steam/>
      </div>
    </div>
      
  </div> 

  
  );
}
 
