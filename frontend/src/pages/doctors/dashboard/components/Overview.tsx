import React from "react";
import doctorImage from "../../../../assets/images/profiles/doctor.jpg";
import styles from "./Overview.module.css";

const Overview: React.FC = () => {
  return (
    <div className={styles.overview}>
      {/* Top Header with Notification */}
      <div className={styles.topHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.welcomeTitle}>
            Welcome back, Dr. Musa
          </h1>
          <p className={styles.dateText}>
            15 October, 2025
          </p>
        </div>
        
        {/* Notification Bell */}
        <div className={styles.notificationBell}>
          <iconify-icon icon="mdi:bell-notification" style={{ color: "var(--blue-color) " }}>
          </iconify-icon>

           
          {/* Notification Dot */}
          <div className={styles.notificationDot} />
        </div>
      </div>

      {/* Doctor Profile Section */}
      <div className={styles.doctorProfileSection}>
      <div className={styles.profileHeader}>
        <img 
          src={doctorImage} 
          alt="Doctor image" 
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>
            Dr. Musa Abdullahi
          </h2>
          <p>
            Neurologist
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className={styles.statisticsGrid}>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>
            Today's Appointment
          </h3>
          <div className={styles.statValue}>
          <p className={styles.statNumber}>
            6
          </p>
          <p className={styles.statUnit}>
            Scheduled
          </p>
        </div>
        </div>

        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>
            Completed Consultation
          </h3>
           <div className={styles.statValue}>
          <p className={styles.statNumber}>
            12
          </p>
          <p className={styles.statUnit}>
            Completed
          </p>
        </div>
        </div>

        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>
            New Patients
          </h3>
           <div className={styles.statValue}>
          <p className={styles.statNumber}>
            4
          </p>
          <p className={styles.statUnit}>
            Registered
          </p>
        </div>
        </div>
      </div>
</div>
      {/* Upcoming Consultation Section */}
      <div className={styles.upcomingConsultation}>
        <div className={styles.consultationHeader}>
          <h3 className={styles.consultationTitle}>
            Upcoming Consultation
          </h3>
             <div className={styles.tableHeader}>
              <div>Patient</div>
              <div>Time</div>
              <div>Type</div>
              <div>Mode</div>
              <div style={{ display: "flex", gap: "8px" }}>
               
              </div>
            </div>

          <div className={styles.consultationRows}>

            {/* Row 1 */}
            <div className={styles.consultationRow}>
              <div>Mustapha Hussein</div>
              <div>2:00 PM</div>
              <div>Virtual</div>
              <div>Video</div>
              <div className={styles.actionButtons}>
                <button className={styles.joinCallButton}>
                  Join Call
                </button>
                <button className={styles.actionButton}>
                  Reschedule
                </button>
                <button className={styles.actionButton}>
                  Cancel
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.consultationRow}>
              <div>Aminu Muhammad</div>
              <div>3:30 PM</div>
              <div>In-Clinic</div>
              <div>Physical</div>
              <div className={styles.actionButtons}>
                <button className={styles.viewDetailsButton}>
                  View Details
                </button>
                <button className={styles.actionButton}>
                  Reschedule
                </button>
                <button className={styles.actionButton}>
                  Cancel
                </button>
              </div>
            </div>

            {/* Row 3 */}
            <div className={styles.consultationRow}>
              <div>Mustapha Hussein</div>
              <div>2:00 PM</div>
              <div>Virtual</div>
              <div>Video</div>
              <div className={styles.actionButtons}>
                <button className={styles.joinCallButton}>
                  Join Call
                </button>
                <button className={styles.actionButton}>
                  Reschedule
                </button>
                <button className={styles.actionButton}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Patient Section */}
      <div className={styles.recentPatientsSection}>
        <div className={styles.recentPatientsHeader}>
          <h3 className={styles.recentPatientsTitle}>
            Recent Patient
          </h3>
        </div>

            {/* Row 1 */}
            <div className={styles.patientsTableHeader}>
              <div>Patient</div>
              <div>Last Consolation</div>
              <div>Diagnosis/Reason</div>
            </div>
        
        <div className={styles.patientsRows}>
          <div className={styles.consultationRows}>
            {/* Row 1 */}
            <div className={styles.patientRow}>
              <div>Mustapha Hussein</div>
              <div>15 Oct 2025</div>
              <div>Diabetes check-up</div>
              <button className={styles.viewRecordButton}>
                View Record
              </button>
            </div>

            {/* Row 2 */}
            <div className={styles.patientRow}>
              <div>Aminu Muhammad</div>
              <div>15 Oct 2025</div>
              <div>Diabetes check-up</div>
              <button className={styles.viewRecordButton}>
                View Record
              </button>
            </div>

            {/* Row 3 */}
            <div className={styles.patientRow}>
              <div>Mustapha Hussein</div>
              <div>15 Oct 2025</div>
              <div>Diabetes check-up</div>
              <button className={styles.viewRecordButton}>
                View Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
