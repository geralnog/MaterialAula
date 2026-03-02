import React from "react";
import localUser from "../data/localuser.js";

function Pessoa({
    firstName = localUser.firstName,
    lastName = localUser.lastName,
    title = localUser.title
} = {})
{
  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <h3> {title}</h3>
    </div>
  );
}
export default Pessoa;


