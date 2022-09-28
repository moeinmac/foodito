import { useState } from 'react';
import Button from '../../../UI/Button';
import './AddToCartButton.css';

const AddToCartButton = props => {
  const [isAdd,setAdd] = useState(false)

  const addToCartHandler = ()=> {
    if(!isAdd){
      setAdd(true)
      setTimeout(()=>setAdd(false),3700)
    };
  };

  return (
    <Button className={`addToCart ${isAdd ? "loading" : ""}`} onClick={addToCartHandler}>
      <span>Add to cart</span>
      <div className={"cart"}>
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
          <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
      </div>
    </Button>
  );
}

export default AddToCartButton