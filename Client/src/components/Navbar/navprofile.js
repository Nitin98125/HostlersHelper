import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './navprofile.css'

const NavProfile = () => {
  const { setAuth,auth } = useAuth();
  const navigation = useNavigate();

  return (
    <div style={{fontSize:30}} id='navprof'>
      <FontAwesomeIcon
        onClick={() => {
          setAuth({});
          localStorage.removeItem("auth");
          navigation("/");
        }}
        icon={faUserCircle}
      />
    </div>
  );
};

export default NavProfile;
