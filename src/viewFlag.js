import React from 'react';

const ViewFlagValue = (props) => {
  return <p>{props.flag ? "valid" : "invalid"}</p>;
};

export default ViewFlagValue;