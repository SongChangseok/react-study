import React from "react";
import PropTypes from "prop-types";

function Test1({ name, using }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? "used here" : "not used here"}</p>
    </div>
  );
}

Test1.propTypes = {
  name: PropTypes.any.isRequired,
  using: PropTypes.bool
};

function Test2({ status }) {
  return (
    <div>
      <h1>We`re {status === "Open" ? "Open!" : "Closed!"}</h1>
    </div>
  );
}

Test2.propTypes = {
  status: PropTypes.oneOf(["Open", "Closed"])
};

export default function PropTypesTest() {
  return <Test2 status="Open" />;
}
