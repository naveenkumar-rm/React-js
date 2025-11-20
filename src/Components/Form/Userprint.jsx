import React from "react";

const Userprint = (props) => {
  const users = Array.isArray(props.usr) ? props.usr : [];

  return (
    <div>
      {users.map((e, i) => (
        <div key={i}>
          <h1>{e.name}</h1>
           <h1>{e.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default Userprint;