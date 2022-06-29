import React, { Children } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home(props) {
    // let history = useHistory();
  const signOut = () => {
     props.history.push("/");
  };
  return (
    <div>
      <h1>Dashboard Page</h1>
      <hr />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}