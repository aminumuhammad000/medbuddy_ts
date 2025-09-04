import style from "./ConsultBooking.module.css";
import Search from "../components/Search";
import DoctorList from "./components/DoctorList";
import ConsultPreview from "./layout/ConsultPreview";
import { SpecialistNav } from "./components/SpecialistNav";
import Booking from "./layout/Booking";
import { useSelector } from "react-redux";
import { type RootState } from "../../../store/store";

const ConsultBooking = () => {
  const { consultStep } = useSelector((state: RootState) => state.patientNav);

  return (
    <div className={style.ConsultBooking}>
      {consultStep === "preview" && <ConsultPreview />}

      {consultStep === "main" && (
        <>
          <Search label="Search Doctors" />
          <SpecialistNav />
          <DoctorList />
        </>
      )}

      {consultStep === "booking" && <Booking />}
    </div>
  );
};

export default ConsultBooking;
