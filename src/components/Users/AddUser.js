import { useState } from "react";
import Button from "../UI/Button";
import Cart from "../UI/Cart";
import "./AddUser.css";

function AddUser(props) {
  const [enteredUserName, setEnteredUserNamr] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };

  const userNameHandler = (event) => {
    setEnteredUserNamr(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Cart>
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" onChange={userNameHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Cart>
  );
}

export default AddUser;
