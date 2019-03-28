import React from 'react';

function Home(props) {
  // ({ match, history, location })
  function navigateToList(e) {
    e.preventDefault();
    props.history.push('/food-list');
  }

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={navigateToList} className="md-button shop-button">
        View the List!
      </button>
    </div>
  );
}

export default Home;