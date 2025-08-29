import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeTheme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="w-2/4 mx-auto">
      <input
        type="text"
        placeholder="Enter your preferred color"
        value={color}
        className="border-[1px] py-1.5 px-2 rounded-lg"
        onChange={(event) => setColor(event.target.value)}
      />
      <div className="flex justify-center">
        <button
          className="bg-amber-300 mt-3 font-bold cursor-pointer px-2 py-1.5 rounded-lg hover:bg-amber-400"
          onClick={() => dispatch(changeColor(color))}
        >
          ChangeTheme
        </button>
      </div>
    </div>
  );
};

export default ChangeTheme;
