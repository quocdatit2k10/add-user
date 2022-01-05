import Cart from "../UI/Cart";
import "./UserList.css";

function UserList(props) {
  return (
    <Cart className="user-list">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Cart>
  );
}

export default UserList;
