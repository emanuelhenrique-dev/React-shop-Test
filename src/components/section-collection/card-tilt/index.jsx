
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';



export const TiltCard = (props) => {
  const { img, options, ...rest } = props;
  const tilt = useRef(null);

    
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  
  return ( 
    <div ref={tilt} {...rest}>
      <img src={img} alt="" draggable="false"/>
    </div>
    
  );
}
 
