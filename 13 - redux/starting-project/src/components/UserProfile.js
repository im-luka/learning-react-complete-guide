import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className={classes.profile}>
      <h2>Welcome {user.email} !</h2>
    </main>
  );
};

export default UserProfile;
