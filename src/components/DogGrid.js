import React, { useState } from "react";
import { connect } from "react-redux";
import { getDogs } from "../actions";

function DogGrid(props) {
  const [input, setInput] = useState("");

  const fetchDogs = e => {
    e.preventDefault();
    props.getDogs();
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="header">
        <h1>All The Doggos</h1>
        <form onSubmit={fetchDogs}>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Fetch Dogs!</button>
        </form>
        {props.isFetching && <p>Fetching...</p>}
      </div>
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
