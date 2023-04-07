import "../styles/completeprofile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
const CompleteYourProfile = () => {
  const { auth, setAuth } = useAuth();
  const navigation = useNavigate();
  const [user, setUser] = useState({
    userId: auth._id || "",
    name: "",
    hostel: "",
    sid: "",
    roomNumber: "",
    block: "",
    roomSize: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const updateProfile = async () => {
    const res = await axios.post("/updateUser", { user: user });
    setAuth(res.data);
    navigation("/");
  };

  useEffect(()=>{
    setUser((prevstate) => ({ ...prevstate, userId: auth._id }));
  },[auth])

  return (
    <div id={"cyp_authform"}>
      <h1 className="login">Complete Your Profile</h1>
      <br />
      <div className="Cyp" style={{ marginTop: 30 }}>
        <div className="inputs_cyp">
          <div
            style={{
              width: "50%",
              marginRight: "10%",
              display: "inline-block",
            }}
          >
            <label>Name</label>
            <br></br>
            <input
              type="username"
              placeholder=""
              name="name"
              onChange={handleChange}
              value={user.name}
            ></input>
          </div>
          <div style={{ width: "40%", display: "inline-block" }}>
            <label>SID</label>
            <br></br>
            <input
              type="text"
              placeholder=""
              name="sid"
              onChange={handleChange}
              value={user.sid}
            ></input>
          </div>
          <div
            style={{
              marginTop: 20,
              width: "55%",
              marginRight: "10%",
              display: "inline-block",
            }}
          >
            <label>Room Number</label>
            <br></br>
            <input
              type="number"
              placeholder=""
              name="roomNumber"
              min="0"
              max="999"
              onChange={handleChange}
              value={user.roomNumber}
            ></input>
          </div>
          <div style={{ width: "35%", display: "inline-block" }}>
            <label>Room Size</label>
            <br></br>
            <select
              name="roomSize"
              onChange={handleChange}
              value={user.roomSize}
            >
              <option value="">Size</option>
              <option value="1">Single</option>
              <option value="2">Double</option>
              <option value="3">Triple</option>
            </select>
          </div>
          <div
            style={{
              marginTop: 20,
              width: "61%",
              marginRight: "9%",
              display: "inline-block",
            }}
          >
            <label>Hostel</label>
            <br></br>
            <select value={user.hostel} onChange={handleChange} name="hostel">
              <option value="">Choose Hostel</option>
              <option value="Aravali">Aravali Hostel</option>
              <option value="Kurukshetra">Kurukshetra Hostel</option>
              <option value="Himalaya">Himalaya Hostel</option>
              <option value="Shivalik">Shivalik Hostel</option>
              <option value="Vindhya">Vindhya Hostel</option>
              <option value="Kalpna">Kalpna Chawla Hostel</option>
            </select>
          </div>
          <div style={{ width: "30%", display: "inline-block" }}>
            <label>Block</label>
            <br></br>
            <select value={user.block} onChange={handleChange} name="block">
              <option value="">Block</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>
        <div id="nxt" onClick={updateProfile}>
          Next
        </div>
      </div>
    </div>
  );
};

export default CompleteYourProfile;
