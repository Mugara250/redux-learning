import { useSelector } from "react-redux";
import { type RootState } from "../main";

const Profile = () => {
    const user = useSelector((state: RootState) => state.value);
  return (
    <div className="text-base">
        <h1 className="text-[32px] font-bold">Profile</h1>
        <p><span className="font-semibold">Name:</span>{user.name}</p>
        <p><span className="font-semibold">Age:</span>{user.age}</p>
        <p><span className="font-semibold">Email:</span>{user.email}</p>
    </div>
  )
}

export default Profile