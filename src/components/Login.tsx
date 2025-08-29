import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-y-4">
      <button
        className="bg-amber-200 font-bold px-2 py-1 rounded-lg cursor-pointer hover:bg-amber-300"
        onClick={() =>
          dispatch(
            login({ name: "Jane Doe", age: 33, email: "jadoe@gmail.com" })
          )
        }
      >
        Login
      </button>
      <button
        className="bg-amber-200 font-bold px-2 py-1 rounded-lg cursor-pointer hover:bg-amber-300"
        onClick={() =>
          dispatch(
            logout()
          )
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
