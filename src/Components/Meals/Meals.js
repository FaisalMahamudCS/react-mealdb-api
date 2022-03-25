

import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import './Meals.css'

const Meals = () => {
    
    const [meals,setMeals]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(() =>{
        fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
      },[])

    const handleCart=(meals)=>{
     console.log(meals)
     const newCart=[...cart,meals];
     setCart(newCart);
    }
    return (
        


        <div>
       <div className='meals '>
           <div className="meal-container">
{
     
        meals.map(meal=><Meal key={meal.idMeal} handleCart={handleCart} meal={meal}></Meal>)
      

}
</div>
<div className="cart">
this is cart
{
    cart.map(cart=><Cart cart={cart}></Cart>)
}
</div>
       </div>
        </div>


    );
};

export default Meals;