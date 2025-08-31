import "./index.css";
import { useSelector } from "react-redux";
// import Profile from "./components/Profile";
// import Login from "./components/Login";
// import ChangeTheme from "./components/ChangeTheme";
import { type RootState } from "./main";
import Theme from "./components/Theme";

function App() {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div
      style={{backgroundColor: theme}}
      className={`w-3/4 mx-auto mt-10 text-xl py-16 flex flex-col gap-y-10 justify-center items-center`}
    >
     
      {/* <Profile />
      <Login />
      <ChangeTheme /> */}
      {/* <UseReducer />*/}
      <Theme />
    </div>
  );
}

export default App;

