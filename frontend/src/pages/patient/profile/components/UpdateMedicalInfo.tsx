import style from "./UpdatesPersonalInfo.module.css";
import { useSelector } from "react-redux";

// Options
const ALLERGIES = [
  "Peanuts",
  "Shellfish",
  "Dairy",
  "Eggs",
  "Soy",
  "Gluten",
  "Pollen",
  "Dust",
  "Latex",
];
const CONDITIONS = [
  "Diabetes",
  "Asthma",
  "Hypertension",
  "Arthritis",
  "Heart Disease",
  "Cancer",
  "Epilepsy",
];
const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const UpdateMedicalInfo = ({ formData = {}, handleChange }) => {
  const { user } = useSelector((state) => state.auth);

  // helper for multi-select
  const handleMultiChange = (e) => {
    const { name, options } = e.target;
    const values = Array.from(options)
      .filter((o) => o.selected)
      .map((o) => o.value);
    handleChange({ target: { name, value: values } });
  };

  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      <h1>Medical Information</h1>

      <div className={style.fullName}>
        {/* Known Allergies */}
        <div>
          <label htmlFor="known_allergies" className={style.mediumText}>
            Known Allergies
          </label>
          <select
            // multiple
            name="known_allergies"
            id="known_allergies"
            value={formData.known_allergies ?? []}
            onChange={handleMultiChange}
          >
            {ALLERGIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Chronic Conditions */}
        <div>
          <label htmlFor="chronic_conditions" className={style.mediumText}>
            Chronic Conditions
          </label>
          <select
            // multiple
            name="chronic_conditions"
            id="chronic_conditions"
            value={formData.chronic_conditions ?? []}
            onChange={handleMultiChange}
          >
            {CONDITIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={style.Email}>
        {/* Current Medications (still text for now) */}
        <div>
          <label htmlFor="current_medications" className={style.mediumText}>
            Current Medications
          </label>
          <input
            type="text"
            name="current_medications"
            id="current_medications"
            value={formData.current_medications ?? ""}
            onChange={handleChange}
            placeholder={(user?.medical_info?.current_medications || []).join(
              ", "
            )}
          />
        </div>

        {/* Blood Type */}
        <div>
          <label htmlFor="blood_type" className={style.mediumText}>
            Blood Type
          </label>
          <select
            name="blood_type"
            id="blood_type"
            value={formData.blood_type ?? ""}
            onChange={handleChange}
          >
            <option value="">Select Blood Type</option>
            {BLOOD_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Vaccination Record */}
      <div
        className={style.UpdateVaccine}
        style={{ marginTop: "30px", width: "50%" }}
      >
        <label htmlFor="vaccination_record" className={style.mediumText}>
          Vaccination Record
        </label>
        <input
          type="text"
          name="vaccination_record"
          id="vaccination_record"
          value={formData.vaccination_record ?? ""}
          onChange={handleChange}
          placeholder={(user?.medical_info?.vaccination_record || []).join(
            ", "
          )}
        />
      </div>
    </div>
  );
};

export default UpdateMedicalInfo;
