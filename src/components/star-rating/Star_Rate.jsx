import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const Star_Rate = ({noOfStars = 5}) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
  }

  function handleOnMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex);
  }

  function handleMouseOnLeave(getCurrentIndex){
    setHover(rating);
  }

  return (
    <div className='w-full min-h-dvh flex items-center justify-center'>
      {[...Array(noOfStars)].map((_, index)=>{
        index += 1;
        return (
          <FaStar 
          size={40}
          onClick={()=>handleClick(index)}
          onMouseEnter={()=>handleOnMouseEnter(index)}
          onMouseLeave={()=>handleMouseOnLeave(index)}
          className={index <= (hover || rating) ? "text-yellow-500 cursor-pointer" : "text-black cursor-pointer"}
          />
        )
      })}
    </div>
  )
}

export default Star_Rate