import React from "react";
import { useSelector } from "react-redux";
import style from "./Overview.module.css";
import profile from "../../../../assets/images/profiles/profile.jpg";
import AIChat from "../../ai/AIChat";
import Loading from "../../../auth/components/Loading";
import type { RootState } from "../../../../store/store";
import { Icon } from "@iconify/react";

const Overview: React.FC = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  // const date = new Date();

  const getAge = (dob?: string | null): number | string => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  interface SimpleCardProps {
    title: string;
    value: number | string;
    unit?: string;
    icon: string;
  }

  const SimpleCard: React.FC<SimpleCardProps> = ({
    title,
    value,
    unit,
    icon,
  }) => {
    return (
      <div className={style.div} id="flexColumnCenter">
        <Icon icon={icon} className={style.icon} />
        <h4 className={style.titleName}>{title}</h4>
        <h1>
          {value}
          {unit && <span id="mediumText">{unit}</span>}
        </h1>
      </div>
    );
  };

  interface DocCardProps {
    name: string;
    date: string;
  }

  const DocCard: React.FC<DocCardProps> = ({ name, date }) => {
    return (
      <div className={style.card} id="flexCenter">
        <Icon icon="material-symbols-light:docs" className={style.iconDoc} />
        <div>
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading && <Loading />}
      {/* {!user && <div>No profile data available</div>} */}

      <div className={style.Overview}>
        <div className={style.user} id="flexColumnCenter">
          <div className={style.userCard} id="flexColumnCenter">
            <img
              src={user?.profile?.profile || profile}
              alt="profile image"
              className={style.profile}
            />
            <div className={style.details} id="flexColumn">
              <h4>{user?.auth?.name || "Unknown User"}</h4>
              <h5>Age: {getAge(user?.profile?.dob)}</h5>
            </div>

            <button className={style.btnUpdate} id="mediumText">
              Updates
            </button>
          </div>

          <div className={style.userInfo}>
            <h4>Information:</h4>
            <table>
              <tbody>
                <tr>
                  <td className={style.bold}>Gender:</td>
                  <td>{user?.profile?.gender || "N/A"}</td>
                </tr>
                <tr>
                  <td className={style.bold}>Blood Type:</td>
                  <td>{user?.medical_info?.blood_type || "N/A"}</td>
                </tr>
                <tr>
                  <td className={style.bold}>Allergies:</td>
                  <td>{user?.medical_info?.known_allergies || "None"}</td>
                </tr>
                <tr>
                  <td className={style.bold}>Diagnosis:</td>
                  <td>{user?.diagnosis || "N/A"}</td>
                </tr>
                <tr>
                  <td className={style.bold}>Height:</td>
                  <td>{user?.height || "N/A"}</td>
                </tr>
                <tr>
                  <td className={style.bold}>Weight:</td>
                  <td>{user?.weight || "N/A"}</td>
                </tr>
                <tr>
                  <td className={style.bold}>Patient ID:</td>
                  <td>{user?.auth?.nhis_id || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={style.otherContainer}>
          <div className={style.summaryDetails} id="flexCenter">
            <SimpleCard
              title={"Heart Rate"}
              value={80}
              unit={"bpm"}
              icon={"material-symbols:ecg-heart"}
            />
            <SimpleCard
              title={"Temperature"}
              value={36.5}
              icon={"streamline-ultimate-color:temperature-thermometer-high"}
            />
            <SimpleCard
              title={"Oxygen Level"}
              value={98}
              unit={"%"}
              icon={"streamline-flex:heart-rate"}
            />
          </div>

          <div className={style.consultationContainer} id="flexColumn">
            <h4 style={{ marginLeft: "26px" }}>Consultation Report</h4>
            <div className={style.consultDoc} id="flexCenter">
              <DocCard
                name={"Eye Fluoricine Test"}
                date={"20th February 2025"}
              />
              <DocCard name={"Blood Test Report"} date={"15th February 2025"} />
              <DocCard name={"MRI Scan"} date={"10th February 2025"} />
            </div>
          </div>

          <div className={style.aiChat}>{<AIChat />}</div>
        </div>
      </div>
    </>
  );
};

export default Overview;
