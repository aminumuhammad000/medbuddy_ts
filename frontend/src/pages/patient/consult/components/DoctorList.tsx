import DoctorCard from "./DoctorCard";
import style from "./DoctorList.module.css";
import doctor1 from "../../../../assets/images/profiles/doctor1.png";
import doctor2 from "../../../../assets/images/profiles/doctor2.png";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { selectSpecialist } from "../../../../store/slices/patientNavSlice";

const doctors = [
  {
    name: "Dr. Aisha Bello",
    specialist: "Cardiologist",
    title: "Heart & Blood Pressure Specialist",
    price: "$45",
    experience: "10yrs",
    rating: 4.8,
    totalPatient: "1.2k",
    profile: doctor1,
  },
  {
    name: "Dr. Yusuf Ibrahim",
    specialist: "Neurologist",
    title: "Brain & Nervous System Specialist",
    price: "$50",
    experience: "11yrs",
    rating: 4.6,
    totalPatient: "980+",
    profile: doctor2,
  },
  {
    name: "Dr. Laila Umar",
    specialist: "Dermatologist",
    title: "Skin & Hair Treatment Expert",
    price: "$40",
    experience: "9yrs",
    rating: 4.9,
    totalPatient: "1.5k",
    profile: doctor1,
  },
  {
    name: "Dr. Ahmed Sani",
    specialist: "Pediatrician",
    title: "Child Healthcare Consultant",
    price: "$35",
    experience: "8yrs",
    rating: 4.7,
    totalPatient: "1.1k",
    profile: doctor2,
  },
  {
    name: "Dr. Musa Bello",
    specialist: "Cardiologist",
    title: "Heart Disease Prevention Expert",
    price: "$45",
    experience: "12yrs",
    rating: 4.8,
    totalPatient: "1.3k",
    profile: doctor1,
  },
  {
    name: "Dr. Aminu Muhammad",
    specialist: "Neurologist",
    title: "Spinal & Brain Disorders Consultant",
    price: "$50",
    experience: "10yrs",
    rating: 4.6,
    totalPatient: "990+",
    profile: doctor2,
  },
];

const DoctorList = () => {
  const dispatch = useDispatch();
  const { specialist } = useSelector((state: RootState) => state.patientNav);

  // Filter doctors by specialist (or show all if no filter)
  const filteredDoctors = specialist
    ? doctors.filter((doc) => doc.specialist === specialist)
    : doctors;

  return (
    <>
      <div className={style.doctorListTitle} id="flexBetween">
        <h1 className={style.listTitle} id="text30">
          {filteredDoctors.length > 0
            ? `${specialist} Available`
            : "No Doctor Available"}
        </h1>
        <button
          className={style.moreDoctors}
          id="text30"
          onClick={() => dispatch(selectSpecialist("Cardiologist"))}
        >
          {specialist ? "Clear Filter" : "See more"}
        </button>
      </div>

      <div className={style.DoctorList} id="flexCenter">
        {filteredDoctors.map((doc, i) => (
          <DoctorCard
            key={i}
            name={doc.name}
            specialist={doc.specialist}
            rating={doc.rating}
            price={doc.price}
            slot={doc.slot}
            profile={doc.profile}
          />
        ))}
      </div>
    </>
  );
};

export default DoctorList;
