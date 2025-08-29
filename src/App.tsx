import "./index.css";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeTheme from "./components/ChangeTheme";
import { type RootState } from "./main";
import UseReducer from "./UseReducer";
function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  console.log(theme);
  return (
    <div
      style={{backgroundColor: theme}}
      className={`w-2/6 mx-auto mt-10 text-xl py-4 flex flex-col gap-y-10 justify-center items-center`}
    >
      <Profile />
      <Login />
      <ChangeTheme />
      {/* <UseReducer /> */}
    </div>
  );
}

export default App;
