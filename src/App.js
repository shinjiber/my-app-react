import React from 'react';

const Profile = (props) => {
  return (
    <ul>
      {props.data.map((index, text)=> {
        return <li>{index}: {text}</li>
      })}
    </ul>
  );
};

export default Profile;