import { useState, useEffect } from "react";
import fetchData from "../../utils/fetch";
import { ListItems } from "../listItems/listItems";

export const Parent = (myList) => {
  const [list, setList] = useState([]);
  
  // ... code here
  
  const listHandler = (array) => {
    setList(array);
  };

  const populateFields = () => {
  // executed with useEffect  
  setList(myList);
  };

  const submitForm = async (e) => {
    // ... code here
  };

  return (
    <div className="frm-container">
      <form onSubmit={submitForm} className="form">
        // ... code here 
        
        <ListItems list={list} listHandler={listHandler} />

	// ... code here
      
        <input type="submit" value="Submit" className="sub-btn-pri" />
      </form>
    </div>
  );
};

