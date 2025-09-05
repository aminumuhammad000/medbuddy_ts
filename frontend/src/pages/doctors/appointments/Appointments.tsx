import React, { useState } from "react";
import styles from "./Appointments.module.css";
import { Icon } from "@iconify/react";
const Appointments: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Sample appointments data matching the UI screenshots
  const appointments = [
    {
      id: 1,
      patient: "Mustapha Hussein",
      dateTime: "16 Oct, 10:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Scheduled",
    },
    {
      id: 2,
      patient: "Aminu Muhammad",
      dateTime: "17 Oct, 10:00 AM",
      type: "In-Clinic",
      mode: "Physical",
      status: "Scheduled",
    },
    {
      id: 3,
      patient: "Mustapha Hussein",
      dateTime: "18 Oct, 9:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Pending",
    },
    {
      id: 4,
      patient: "Mustapha Hussein",
      dateTime: "16 Oct, 10:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Completed",
    },
    {
      id: 5,
      patient: "Aminu Muhammad",
      dateTime: "17 Oct, 10:00 AM",
      type: "In-Clinic",
      mode: "Physical",
      status: "Completed",
    },
    {
      id: 6,
      patient: "Mustapha Hussein",
      dateTime: "18 Oct, 9:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Completed",
    },
    {
      id: 7,
      patient: "Mustapha Hussein",
      dateTime: "16 Oct, 10:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Completed",
    },
    {
      id: 8,
      patient: "Aminu Muhammad",
      dateTime: "17 Oct, 10:00 AM",
      type: "In-Clinic",
      mode: "Physical",
      status: "Completed",
    },
    {
      id: 9,
      patient: "Mustapha Hussein",
      dateTime: "18 Oct, 9:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Cancelled",
    },
    {
      id: 10,
      patient: "Mustapha Hussein",
      dateTime: "16 Oct, 10:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Cancelled",
    },
    {
      id: 11,
      patient: "Aminu Muhammad",
      dateTime: "17 Oct, 10:00 AM",
      type: "In-Clinic",
      mode: "Physical",
      status: "Cancelled",
    },
    {
      id: 12,
      patient: "Mustapha Hussein",
      dateTime: "18 Oct, 9:00 AM",
      type: "Virtual",
      mode: "Video",
      status: "Cancelled",
    },
  ];

  // Filter appointments based on active filter
  const getFilteredAppointments = () => {
    switch (activeFilter) {
      case "today":
        return appointments.filter(
          (app) =>
            app.dateTime.includes("10:00 AM") ||
            app.dateTime.includes("9:00 AM")
        );
      case "upcoming":
        return appointments.filter(
          (app) => app.status === "Scheduled" || app.status === "Pending"
        );
      case "completed":
        return appointments.filter((app) => app.status === "Completed");
      case "cancelled":
        return appointments.filter((app) => app.status === "Cancelled");
      default:
        return appointments;
    }
  };

  const filteredAppointments = getFilteredAppointments();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return styles.statusScheduled;
      case "Pending":
        return styles.statusPending;
      case "Completed":
        return styles.statusCompleted;
      case "Cancelled":
        return styles.statusCancelled;
      default:
        return "";
    }
  };

  const renderActionButtons = (appointment: any) => {
    if (
      appointment.status === "Completed" ||
      appointment.status === "Cancelled"
    ) {
      return null;
    }

    return (
      <div className={styles.actionButtons}>
        {appointment.type === "Virtual" &&
          appointment.status === "Scheduled" && (
            <button className={styles.joinCallButton}>Join Call</button>
          )}
        {appointment.type === "In-Clinic" &&
          appointment.status === "Scheduled" && (
            <span className={styles.viewDetailsLink}>View Details</span>
          )}
        <button className={styles.rescheduleButton}>Reschedule</button>
        <button className={styles.cancelButton}>Cancel</button>
      </div>
    );
  };

  return (
    <div className={styles.appointmentsContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton}>
            <Icon
              icon="material-symbols:arrow-back-rounded"
              style={{ fontSize: "30px" }}
            ></Icon>
          </button>
          <h1 className={styles.pageTitle}>Appointments</h1>
        </div>
        <div className={styles.notificationIcon}>
          <Icon
            icon="mdi:bell-notification"
            style={{ color: "var(--blue-color)", fontSize: "26px" }}
          ></Icon>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className={styles.searchFilterSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <Icon icon="tabler:search" className={styles.searchIcon}></Icon>
            <input
              type="text"
              placeholder="Search by patient name, ID, or date..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterIcon}>
            <Icon icon="mdi:filter" style={{ fontSize: "25px" }}></Icon>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className={styles.filterTabs}>
        <button
          className={`${styles.filterTab} ${
            activeFilter === "all" ? styles.activeFilterTab : ""
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterTab} ${
            activeFilter === "today" ? styles.activeFilterTab : ""
          }`}
          onClick={() => handleFilterChange("today")}
        >
          Today
        </button>
        <button
          className={`${styles.filterTab} ${
            activeFilter === "upcoming" ? styles.activeFilterTab : ""
          }`}
          onClick={() => handleFilterChange("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`${styles.filterTab} ${
            activeFilter === "completed" ? styles.activeFilterTab : ""
          }`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
        <button
          className={`${styles.filterTab} ${
            activeFilter === "cancelled" ? styles.activeFilterTab : ""
          }`}
          onClick={() => handleFilterChange("cancelled")}
        >
          Cancelled
        </button>
      </div>

      {/* Appointments Table */}
      <div className={styles.appointmentsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Patient</div>
          <div className={styles.headerCell}>Date & Time</div>
          <div className={styles.headerCell}>Type</div>
          <div className={styles.headerCell}>Mode</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}></div>
        </div>

        <div className={styles.tableBody}>
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className={styles.tableRow}>
              <div className={styles.tableCell}>
                <span className={styles.patientName}>
                  {appointment.patient}
                </span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.dateTime}>{appointment.dateTime}</span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.appointmentType}>
                  {appointment.type}
                </span>
              </div>
              <div className={styles.tableCell}>
                <span className={styles.appointmentMode}>
                  {appointment.mode}
                </span>
              </div>
              <div className={styles.tableCell}>
                <span
                  className={`${styles.status} ${getStatusColor(
                    appointment.status
                  )}`}
                >
                  {appointment.status}
                </span>
              </div>
              <div className={styles.tableCell}>
                {renderActionButtons(appointment)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
