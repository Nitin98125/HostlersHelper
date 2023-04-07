import useAuth from "../../../Hooks/useAuth";

const UserDetails = () => {
  const { auth } = useAuth();
  return (
    <div>
      <div className="user_profile">
        <img
          srcSet="animation.png"
          alt=""
          style={{
            width: "40%",
            height: "40%",
            border: "2px solid",
            borderRadius: "50%",
          }}
        ></img>
        <div className="user_details">
          <label>{auth.name}</label>
          <label>{auth.sid}</label>
        </div>
        <div className="user_buttons">
            <button>Made Your Potfolio</button>
            <button>Update Details</button>
        </div>
      </div>
      <div className="hostel_profile"></div>
    </div>
  );
};

export default UserDetails;