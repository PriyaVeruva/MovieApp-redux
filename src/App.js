import React from "react";
import MoviesContainer from "./components/MoviesContainer";
const App=(props)=>
{
  return (
    <div className = "container">
      <h2 className ='display-3'>My Big Movie List </h2>
      <MoviesContainer/>
    </div>
  )
}
export default App