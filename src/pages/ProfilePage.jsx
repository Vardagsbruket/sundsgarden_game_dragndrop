import ProfileContent from '../components/Images/ProfileContent.png';
import "./ProfilePage.css";
import { Welcome } from "../components/Welcome";

export const ProfilePage = () => {
  return (
    <>
      <Welcome/>
      <img className="ProfileContent" src={ProfileContent}/>
    </>
  );
};
