import React, { useEffect, useState } from 'react'

const Load_data = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  async function fetchProducts(){
    try{
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=
        ${count === 0 ? 0 : count * 20}`
      );
      const data = await response.json();
        console.log(data);
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count])
  

  return (
    <div className="">

    </div>
  )
}

export default Load_data