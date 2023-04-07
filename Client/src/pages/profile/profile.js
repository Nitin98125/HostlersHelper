import Navbar from "../../components/Navbar/Navbar";
import "./profile.css";
import UserDetails from "./components/userDetails";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="Profile" style={{ margin: "20px" }}>
        <UserDetails/>
      </div>
    </>
  );
};

export default Profile;
