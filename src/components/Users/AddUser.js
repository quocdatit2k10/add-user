import { useRef, useState } from "react";
import Wrapper from "../Helpper/Wrapper";
import Button from "../UI/Button";
import Cart from "../UI/Cart";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

function AddUser(props) {
  const userNameRef = useRef();
  const userAgeRef = useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = userNameRef.current.value;
    const enteredUserAge = userAgeRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age > 0.",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Cart className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={userNameRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={userAgeRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Cart>
    </Wrapper>
  );
}

export default AddUser;
