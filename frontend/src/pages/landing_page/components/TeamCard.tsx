import style from "./TeamCard.module.css";
import SocialMedia from "./SocialMedia";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className={style.TeamCard} id="flexColumnCenter">
      <img src={image} alt="profile image" className={style.imgProfile} />
      <h5 className={style.name}>{name}</h5>
      <p className={style.role} id="smallText">
        {role}
      </p>

      <SocialMedia />
    </div>
  );
};

export default TeamCard;
