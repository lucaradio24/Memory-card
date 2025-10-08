import "./ImagesToggle.css";
import {TextAlignCenter, ToggleLeft} from 'lucide-react'
import { ToggleRight } from 'lucide-react';

export function ImagesToggle({ onToggle, toggleImages }) {


  return (
    <div>
      <h2 className="aside-title">
        {toggleImages ? 'Artwork' : 'Sprites'}
      </h2>
      {toggleImages ?
      <ToggleRight  onClick={onToggle} size={40}/>
      :
      <ToggleLeft onClick={onToggle} size={40} /> 
}
    </div>
  );
}


