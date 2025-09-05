import React, { useState } from "react";
import styles from "./Booking.module.css";
import doctor from "../../../../assets/images/profiles/doctor1.png";
import { Icon } from "@iconify/react";

const Booking: React.FC = () => {
  const [consultType, setConsultType] = useState("virtual");

  const handleClinick = () => {
    setConsultType("virtual");
  };

  const handleVirtual = () => {
    setConsultType("clinic");
  };

  return (
    <div className={styles.Booking}>
      <div className={styles.doctorProfile}>
        <div className={styles.imgContainer}>
          <img src={doctor} alt={doctor} className={styles.profiles} />
        </div>

        <div className={styles.details}>
          <h1 className={styles.name}>Dr. Musa Abdullahi</h1>
          <h4 className={styles.specialist}>Neurologist</h4>
        </div>
      </div>

      <ul className={styles.nav}>
        <li
          className={consultType === "clinic" ? `${styles.active}` : `{}`}
          onClick={handleVirtual}
        >
          In-Clinic Appointment
        </li>
        <li
          className={consultType === "virtual" ? `${styles.active}` : `{}`}
          onClick={handleClinick}
        >
          Virtual Appointment
        </li>
      </ul>

      <form action="" className={styles.form}>
        <div className={styles.message}>
          <label htmlFor="symptoms">Symptoms</label>
          <textarea
            name="symptoms"
            id="symptoms"
            placeholder="State your symptoms here"
          ></textarea>
        </div>

        {consultType === "virtual" && (
          <ul className={styles.consultType}>
            <li>
              <input type="radio" name="type" />{" "}
              <label htmlFor="Video" className={styles.label}>
                Video
              </label>
              <Icon icon="typcn:video" className={styles.icon}></Icon>
            </li>

            <li>
              <input type="radio" name="type" />{" "}
              <label htmlFor="Audio" className={styles.label}>
                Audio
              </label>
              <Icon icon="basil:headset-solid" className={styles.icon}></Icon>
            </li>

            <li>
              <input type="radio" name="type" />{" "}
              <label htmlFor="Chat" className={styles.label}>
                Chat
              </label>
              <Icon icon="humbleicons:chat" className={styles.icon}></Icon>
            </li>
          </ul>
        )}

        {consultType === "virtual" && (
          <div className={styles.documentContainer}>
            <div className={styles.document}>
              <label htmlFor="Document">Document (Optional)</label>
              <input type="file" name="document" id="document" />
            </div>

            <div className={styles.document}>
              <label htmlFor="Document">Preferred Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className={styles.date}
              />
            </div>
          </div>
        )}

        <div className={styles.availableTime}>
          <button className={`${styles.check} ${styles.active}`}>
            9:00 AM
          </button>
          <button className={styles.check}>9:00 AM</button>

          <button className={styles.check}>9:00 AM</button>

          <button className={styles.check}>9:00 AM</button>

          <button className={styles.check}>9:00 AM</button>
          <button className={styles.check}>9:00 AM</button>

          <button className={styles.check}>9:00 AM</button>
        </div>

        <button type="submit" className={styles.submit}>
          Book Consultation
        </button>
      </form>
    </div>
  );
};

export default Booking;
