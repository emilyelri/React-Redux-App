import React, { useState } from "react";
import { connect } from "react-redux";
import { getDogs } from "../actions";
import Select from "./Select";

function DogGrid(props) {
  const [api, setAPI] = useState(`https://dog.ceo/api/breeds/image/random/100`);

  const fetchDogs = e => {
    e.preventDefault();
    props.getDogs(api);
    console.log("Selected dogAPI: ", api);
  };

  const handleChange = e => {
    console.log(e.target.value);
    setAPI(`https://dog.ceo/api/breed/${e.target.value}/images`);
  };

  return (
    <>
      <div className="header">
        <h1>All The Doggos</h1>
        <Select handleChange={handleChange} fetchDogs={fetchDogs} />
      </div>
      {props.isFetching && <p className="fetching">Fetching...</p>}
      <div className="grid">
        {props.data.map(dog => (
          <div className="container">
            <img className="dog" key={dog} src={dog} />
          </div>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
    </>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getDogs }
)(DogGrid);
