import React from 'react';
import { Route, NavLink } from 'react-router-dom';


const Food = props => {
  return (
    <div className="Food">
      <strong>{props.name} </strong> 
      <h3>{props.breakfast}</h3>
      <p>{props.lunch} </p>
    </div>
  );
};

// 1. watch walk through video
// 3. update button here? & 
// 2. Add delete & 
// 5. Add form for Update food
// 4. (button onClick here? 

// render() {
//   return (
//     <div className="EditFoodForm">
//             <h2>{`${this.props.activeFood ? 'Update' : 'Add New'} Food`}</h2>
//             <form onSubmit={this.handleSubmit}>

//         <input
//           type="string"
//           onChange={this.changeHandler}
//           placeholder="name"
//           value={this.state.name}
//           name="name"
//         />
//         <input
//           onChange={this.changeHandler}
//           placeholder="breakfast"
//           value={this.state.breakfast}
//           name="breakfast"
//         />
//         <input
//           onChange={this.changeHandler}
//           placeholder="lunch"
//           value={this.state.lunch}
//           name="lunch"
//         />
//         <button type="submit">Edit to GigaPets</button>
//       </form>
//     </div>
//   );
// }

/* <div>
<button type="submit">Edit</button>
{/* <button>Delete</button> */
// </div> 

Food.defaultProps = {
  name: '',
  breakfast: '',
  lunch: ''
};

export default Food;

