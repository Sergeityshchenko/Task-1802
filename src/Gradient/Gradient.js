import React from 'react';
import Controls from './Controls/Controls';

import './Gradient.css';

function Gradient(props) {
  const style = {
    background: `linear-gradient(90deg, ${props.color1} 0%, ${props.color2} 100%)`
  }

  return (
    <div className='Gradient' style={style}>
      <Controls
        color1={props.color1}
        color2={props.color2}
        changeColor1={props.changeColor1}
        changeColor2={props.changeColor2}
        />
    </div>
  );
}

export default Gradient;