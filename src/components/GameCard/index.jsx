import './styles.css';
import { mortalkombat1, starfield, baldursgate3 } from '../../util/game-list';

export const GameCard = ({ name, img, id }) => {
  return ( 
    <li className="game-card" id={id}>
      <img src={img} alt="" />
      <h2>{name}</h2>
    </li>
   );
}
 