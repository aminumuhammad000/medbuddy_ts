import { useState } from "react";
import style from "./SpecialistNav.module.css";
import { selectSpecialist } from "../../../../store/slices/patientNavSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { Icon } from "@iconify/react";
const specialist = [
  { name: "Cardiologist", icon: "mdi:heart", amount: 43 },
  { name: "Neurologist", icon: "mdi:brain", amount: 30 },
  { name: "Pulmonologist", icon: "mdi:lungs", amount: 9 },
  { name: "Gastroenterologist", icon: "mdi:stethoscope", amount: 13 },
  { name: "Nephrologist", icon: "mdi:water", amount: 40 },
  { name: "Dermatologist", icon: "mdi:doctor", amount: 45 },
  { name: "Endocrinologist", icon: "mdi:flask", amount: 63 },
  { name: "Hematologist", icon: "mdi:water", amount: 23 },
  { name: "Oncologist", icon: "mdi:ribbon", amount: 43 },
  { name: "Rheumatologist", icon: "mdi:bone", amount: 33 },
  { name: "Ophthalmologist", icon: "mdi:eye", amount: 43 },
  { name: "Otolaryngologist", icon: "mdi:headphones", amount: 43 },
  { name: "Psychiatrist", icon: "mdi:head-cog", amount: 11 },
  { name: "Urologist", icon: "mdi:note-text", amount: 23 },
  { name: "Gynecologist", icon: "mdi:gender-female", amount: 43 },
  { name: "Obstetrician", icon: "mdi:baby", amount: 43 },
  { name: "Orthopedist", icon: "mdi:bone", amount: 10 },
  { name: "Pediatrician", icon: "mdi:human-child", amount: 43 },
  { name: "Geriatrician", icon: "mdi:human-cane", amount: 43 },
  { name: "Surgeon", icon: "mdi:stethoscope", amount: 25 },
  { name: "Radiologist", icon: "mdi:flask-empty-outline", amount: 8 },
  { name: "Pathologist", icon: "mdi:flask-empty-outline", amount: 43 },
  { name: "Anesthesiologist", icon: "mdi:syringe", amount: 7 },
  { name: "Immunologist", icon: "mdi:shield", amount: 20 },
  { name: "Infectious Disease Specialist", icon: "mdi:virus", amount: 43 },
];

type Specialist = {
  name: string;
  icon: string;
  amount: number;
};

export const SpecialistNav: React.FC = () => {
  const [showAllSpecialties, setShowAllSpecialties] = useState<boolean>(false);

  // ✅ use Redux state for the selected name, not the full list
  const selectedSpecialist = useSelector(
    (state: RootState) => state.patientNav.specialist
  );
  const dispatch = useDispatch();

  const visibleSpecialists: Specialist[] = showAllSpecialties
    ? specialist
    : specialist.slice(0, 5);

  const handleSpecialistClick = (name: string) => {
    dispatch(selectSpecialist(name));
  };

  return (
    <>
      {/* Specialties Section */}
      <div
        className={
          showAllSpecialties ? style.iconsContainerAll : style.iconsContainer
        }
      >
        {visibleSpecialists.map((item, index) => (
          <div
            key={index}
            className={showAllSpecialties ? style.iconBoxAll : style.iconBox}
            id="flexColumnCenter"
            style={{ cursor: "pointer" }}
            onClick={() => handleSpecialistClick(item.name)}
          >
            <div
              className={showAllSpecialties ? style.iconDivAll : style.iconDiv}
              style={
                selectedSpecialist === item.name
                  ? { backgroundColor: "#1771B7" }
                  : {}
              }
            >
              <Icon
                icon={item.icon}
                className={style.icon}
                style={
                  selectedSpecialist === item.name ? { color: "#fff" } : {}
                }
              ></Icon>
            </div>
            <h4 className={style.name}>{item.name}</h4>
            {showAllSpecialties && (
              <h4 className={style.amount}>{item.amount} Available</h4>
            )}
          </div>
        ))}

        {/* Toggle Button */}
        <div
          className={showAllSpecialties ? style.iconBoxAll : style.iconBox}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowAllSpecialties((prev) => !prev);
            dispatch(selectSpecialist(null)); // reset selection
          }}
        >
          <div className={showAllSpecialties ? style.less : style.more}>
            <Icon
              icon={showAllSpecialties ? "mdi:arrow-left" : "mdi:arrow-right"}
              // rotation={showAllSpecialties ? 180 : 0}
              className={style.icon}
            ></Icon>

            <h3 className={showAllSpecialties ? style.name : style.moreName}>
              {showAllSpecialties ? "See less" : "See more"}
            </h3>
          </div>
          <h3 className={showAllSpecialties ? style.name2 : style.moreName2}>
            {showAllSpecialties ? "See less" : "See more"}
          </h3>
        </div>
      </div>
    </>
  );
};
