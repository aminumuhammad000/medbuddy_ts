import TeamCard from "../components/TeamCard";
import style from "./Team.module.css";
import doctor from "../../../assets/images/backgrounds/profile.jpg";

const Team = () => {
  return (
    <div className={style.Team} id="Team">
      <h1>
        Our Team <span>Expert</span>
      </h1>
      <div className={style.teamCard} id="flexCenter">
        <TeamCard image={doctor} name="Dr. Jhon Rebbio" role="Doctor Dental" />
        <TeamCard image={doctor} name="Dr. Jhon Rebbio" role="Doctor Dental" />
        <TeamCard image={doctor} name="Dr. Jhon Rebbio" role="Doctor Dental" />
      </div>
    </div>
  );
};

export default Team;
