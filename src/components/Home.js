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
        alt=""
      />
      {/* <button onClick={navigateToList} className="md-button shop-button">
        View the List!
      </button> */}
    </div>
  );
}

export default Home;