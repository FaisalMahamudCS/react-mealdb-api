import React from 'react';
import './Meal.css'
const Meal = (props) => {
    //const {meal}=props.meal;
  
    return (
        <div className="">
        <div className='all'>
       
        <img className='img-fluid' src={props.meal.strMealThumb} alt="" srcset="" />
        <h5>{props.meal.strMeal}</h5>
        <button onClick={()=>props.handleCart(props.meal)}>Cart</button>
        </div>
        </div>
    );
};

export default Meal;