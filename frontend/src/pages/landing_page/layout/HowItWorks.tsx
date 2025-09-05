import style from "./HowItWorks.module.css";
import team from "../../../assets/images/backgrounds/team.png";
import { Icon } from "@iconify/react";
const HowItWorks = () => {
  return (
    <div className={style.HowItWorks} id="HowItWorks">
      <div className={style.imgContainer}>
        <img src={team} alt="our team" />
      </div>

      <div className={style.infoContainer}>
        <h1 className={style.heading}>
          Achieve Optimal Health <span>with Our Dedicated Doctors </span>
        </h1>
        <p id="smallText">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocabules.
        </p>

        <table className={style.table}>
          <tr>
            <td>
              <li id="smallText">
                <Icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></Icon>
                24/7 Support
              </li>
            </td>
            <td>
              <li id="smallText">
                <Icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></Icon>
                Trusted Specialist Doctor
              </li>
            </td>
          </tr>

          <tr>
            <td>
              <li id="smallText">
                <Icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></Icon>
                Best Vaccination
              </li>
            </td>
            <td>
              <li id="smallText">
                <Icon
                  icon="fluent-mdl2:check-mark"
                  className={style.icon}
                  id="flexCenter"
                ></Icon>
                High Quality Care
              </li>
            </td>
          </tr>
        </table>

        <button className={style.makeAppointment} id="smallText">
          Make an Appointment
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
