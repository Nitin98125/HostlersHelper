import Navbar from "./Navbar/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='Userprofile'>
        <div className="student_details">
          <img srcSet="animation.png"></img>
          <label>Nitin</label>
        </div>
      </div>
    </>
  );
};

export default Profile;
