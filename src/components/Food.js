import React from 'react';

import { Route, NavLink } from 'react-router-dom';

//note to self: take the e out


function Food({ foods, match, deleteFood, setUpdateForm }) {
  // DESTRUCTURING FTW
  // const foods = props.foods;
  // const match = props.match;
  // const {
  //   foods,
  //   match
  // } = props;
  const { id } = match.params;

  // props.match.params.id is from the URL (string)
  // thing.id is from data (number)
  // to "find" the correct food for const food, change one to the different type

  // params is any dynamic thing that is on the path in the URL
  const food = foods.find(thing => `${thing.id}` === id); // Look for where "id" is descturctered
  console.log('rendering Food: ', foods, food);
  if (!food) {
    return <h3>Loading foods...</h3>;
  }


  // function Food(props) {
  //   const food = props.foods.find(
  //     thing => `${thing.id}` === props.match.params.id
  //   );
  
    // if (!props.foods.length || !food) {
    //   return <h2>Loading food data...</h2>;
    // }

  return (
    <div className="food-wrapper">
      <div className="food-header">
        <div className="image-wrapper">
          <img src={food.imageUrl} alt={food.name} />
        </div>
        <div className="food-title-wrapper">
          <h2>{food.name}</h2>
          <h4>{food.breakfast}</h4>
          <h4>{food.lunch}</h4>
        </div>
      </div>

      {/* Add a nested nav, and nested routes in our JSX */}
      {/* <nav className="food-sub-nav">
        <NavLink exact to={`/food-list/${food.id}`}>
          the story
        </NavLink>
      </nav> */}

{/* TODO: able to delete on the page & in data after refresh  */}
      <button
        onClick={e => {
          console.log('Hitting delete button - onClick handler');
          deleteFood(e, food.id);
        }} className="md-button"> Delete Food
      </button>

       {/* TODO: gets form but doesnt update after submit */}
      <button onClick={e => setUpdateForm(e, food)} className="md-button">
        Update Food
      </button>

    </div>
  );
}

export default Food;




// const Food = props => {
//   return (
//     <div className="Food">
//       <strong>{props.name} </strong> 
//       <h3>{props.breakfast}</h3>
//       <p>{props.lunch} </p>
//     </div>
//   );
// };

// // 1. watch walk through video
// // 3. update button here? & 
// // 2. Add delete & 
// // 5. Add form for Update food
// // 4. (button onClick here? 

// // render() {
// //   return (
// //     <div className="EditFoodForm">
// //             <h2>{`${this.props.activeFood ? 'Update' : 'Add New'} Food`}</h2>
// //             <form onSubmit={this.handleSubmit}>

// //         <input
// //           type="string"
// //           onChange={this.changeHandler}
// //           placeholder="name"
// //           value={this.state.name}
// //           name="name"
// //         />
// //         <input
// //           onChange={this.changeHandler}
// //           placeholder="breakfast"
// //           value={this.state.breakfast}
// //           name="breakfast"
// //         />
// //         <input
// //           onChange={this.changeHandler}
// //           placeholder="lunch"
// //           value={this.state.lunch}
// //           name="lunch"
// //         />
// //         <button type="submit">Edit to GigaPets</button>
// //       </form>
// //     </div>
// //   );
// // }

// /* <div>
// <button type="submit">Edit</button>
// {/* <button>Delete</button> */
// // </div> 

// Food.defaultProps = {
//   name: '',
//   breakfast: '',
//   lunch: ''
// };

// export default Food;