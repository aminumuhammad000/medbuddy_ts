import React from "react";
import doctorImage from "../../../../assets/images/profiles/doctor.jpg";

const Overview: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: "100%", 
      margin: "0 0",
      background: "var( --background-color)",

    }}>
      {/* Top Header with Notification */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "25px",
        background: "var( --background-color)",
        
      }}>
        <div style={{ 
          padding: "0px", 
          flex: 1,
          marginRight: "1px"
        }}>
          <h1 style={{ 
            fontSize: "28px", 
            fontWeight: "600", 
            color: "#1a1a1a", 
            margin: "0 0 5px 0" 
          }}>
            Welcome back, Dr. Musa
          </h1>
          <p style={{ 
            fontSize: "16px", 
            color: "#666", 
            margin: "0" 
          }}>
            15 October, 2025
          </p>
        </div>
        
        {/* Notification Bell */}
        <div style={{ 
          width: "60px", 
          height: "60px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
  
        }}>
          <iconify-icon icon="mdi:bell-notification" style={{ color: "var(--blue-color) " }}>
          </iconify-icon>

           
          {/* Notification Dot */}
          <div style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            width: "12px",
            height: "12px",
            background: "#ef4444",
            borderRadius: "50%",
            border: "2px solid white"
          }} />
        </div>
      </div>

      {/* Doctor Profile Section */}
      <div style={{background: "white", 
        padding: "25px", 
        top:"42px",
        borderRadius: "16px", height:"281px"}} >
      <div style={{ 
        marginBottom: "25px",
        display: "flex",
        
        alignItems: "center",
        gap: "20px"
      }}>
        <img 
          src={doctorImage} 
          alt="Doctor image" 
          style={{ 
            width: "80px", 
            height: "80px", 
            borderRadius: "50%", 
            objectFit: "cover",
            border: "1px solid #0000"
          }} 
        />
        <div>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: "700", 
            color: "#1a1a1a", 
            margin: "0 0 5px 0" 
          }}>
            Dr. Musa Abdullahi
          </h2>
          <p style={{ 
            fontSize: "16px", 
            color: "#666", 
            margin: "0" 
          }}>
            Neurologist
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px", 
        marginBottom: "25px", 
      }}>
        <div style={{ 
          padding: "20px", 
          borderRight:"solid 1px #00000033",
          marginBottom: "50px",
          textAlign: "left",
          height:"150px"
        
        }}>
          <h3 style={{ 
            fontSize: "14px", 
            color: "#1a1a1a", 
            margin: "0 0 35px 0px",
            fontWeight: "500",
          }}>
            Today's Appointment
          </h3>
          <div style={{display: "inline-flex"}}>
          <p style={{ 
            fontSize: "50px", 
            fontWeight: "700", 
            color: "#1771b7", 
            margin: "0 0 5px 0" 
          }}>
            6
          </p>
          <p style={{ 
            fontSize: "15px", 
            color: "#1771b7", 
            margin: "30px 10px ",
            fontWeight: "500"
          }}>
            Scheduled
          </p>
        </div>
        </div>

        <div style={{ 
          padding: "20px", 
          textAlign: "left"
        }}>
          <h3 style={{ 
            fontSize: "14px", 
            color: "#1a1a1a", 
            margin: "0 0 35px 0",
            fontWeight: "500"
          }}>
            Completed Consultation
          </h3>
           <div style={{display: "inline-flex"}}>
          <p style={{ 
            fontSize: "50px", 
            fontWeight: "700", 
            color: "#1771b7", 
            margin: "0 0 5px 0" 
          }}>
            12
          </p>
          <p style={{ 
            fontSize: "12px", 
            color: "#1771b7", 
            margin: "30px 10px ",
            fontWeight: "500"
          }}>
            Completed
          </p>
        </div>
        </div>

        <div style={{ 
        
          padding: "20px", 
          textAlign: "left",
          borderLeft:"solid 1px #00000033",
          marginBottom: "50x",
          height:"150px"
        }}>
          <h3 style={{ 
            fontSize: "14px", 
            color: "#1a1a1a", 
            margin: "0 0 35px 0",
            fontWeight: "500"
          }}>
            New Patients
          </h3>
           <div style={{display: "inline-flex"}}>
          <p style={{ 
            fontSize: "50px", 
            fontWeight: "700", 
            color: "#1771b7", 
            margin: "0 0 5px 0" 
          }}>
            4
          </p>
          <p style={{ 
            fontSize: "12px", 
            color: "#1771b7", 
            margin: "30px 10px ",
            fontWeight: "500"
          }}>
            Registered
          </p>
        </div>
        </div>
      </div>
</div>
      {/* Upcoming Consultation Section */}
      <div style={{ 
        background: "#1771b7", 
        borderRadius: "16px", 
        marginBottom: "25px",
        marginTop:"25px",
        overflow: "hidden"
      }}>
        <div style={{ 
          padding: "20px", 
          color: "white"
        }}>
          <h3 style={{ 
            fontSize: "20px", 
            fontWeight: "600", 
            margin: "0 0 20px 0" 
          }}>
            Upcoming Consultation
          </h3>
             <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto", 
              gap: "15px", 
              alignItems: "center",
              padding: "2px 0 10px ",
              borderBottom: "1px solid rgba(255,255,255,0.2)"
            }}>
              <div style={{ color: "white", fontWeight: "500" }}>Patient</div>
              <div style={{ color: "white" }}>Time</div>
              <div style={{ color: "white" }}>Type</div>
              <div style={{ color: "white" }}>Mode</div>
              <div style={{ display: "flex", gap: "8px" }}>
               
              </div>
            </div>

          <div style={{ 
            display: "grid", 
            gap: "15px" 
          }}>

            {/* Row 1 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "2px 0",
            }}>
              <div style={{ color: "white", fontWeight: "500" }}>Mustapha Hussein</div>
              <div style={{ color: "white" }}>2:00 PM</div>
              <div style={{ color: "white" }}>Virtual</div>
              <div style={{ color: "white" }}>Video</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ 
                  background: "white", 
                  color: "#1771b7", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Join Call
                </button>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Reschedule
                </button>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Cancel
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "2px 0",
           
            }}>
              <div style={{ color: "white", fontWeight: "500" }}>Aminu Muhammad</div>
              <div style={{ color: "white" }}>3:30 PM</div>
              <div style={{ color: "white" }}>In-Clinic</div>
              <div style={{ color: "white" }}>Physical</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 

                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  <u>
                   View Details
                  </u>
                </button>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Reschedule
                </button>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Cancel
                </button>
              </div>
            </div>

            {/* Row 3 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "2px 0"
            }}>
              <div style={{ color: "white", fontWeight: "500" }}>Mustapha Hussein</div>
              <div style={{ color: "white" }}>2:00 PM</div>
              <div style={{ color: "white" }}>Virtual</div>
              <div style={{ color: "white" }}>Video</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ 
                  background: "white", 
                  color: "#1771b7", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Join Call
                </button>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Reschedule
                </button>
                <button style={{ 
                  background: "transparent", 
                  color: "white", 
                  border: "1px solid white", 
                  padding: "6px 12px", 
                  borderRadius: "6px", 
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "500"
                }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Patient Section */}
      <div style={{ 
        background: "white", 
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        overflow: "hidden"
      }}>
        <div style={{ 
          padding: "20px", 
        
        }}>
          <h3 style={{ 
            fontSize: "20px", 
            fontWeight: "600", 
            margin: "0",
            color: "#1a1a1a"
          }}>
            Recent Patient
          </h3>
        </div>

            {/* Row 1 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "20px",
              margin: "0px 85px 1px 1px",
              borderBottom: "1px solid #00000033",
            }}>
              <div style={{ fontWeight: "500" }}>Patient</div>
              <div style={{ color: "#666" }}>Last Consolation</div>
              <div style={{ color: "#666" }}>Diagnosis/Reason</div>
            </div>
        
        <div style={{ padding: "20px" }}>
          <div style={{ 
            display: "grid", 
            gap: "15px" 
          }}>
            {/* Row 1 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "2px 0",
            }}>
              <div style={{ fontWeight: "500" }}>Mustapha Hussein</div>
              <div style={{ color: "#666" }}>15 Oct 2025</div>
              <div style={{ color: "#666" }}>Diabetes check-up</div>
              <button style={{ 
                background: "#1771b7", 
                color: "white", 
                border: "none", 
                padding: "6px 12px", 
                borderRadius: "6px", 
                fontSize: "11px",
                cursor: "pointer",
                fontWeight: "500"
              }}>
                View Record
              </button>
            </div>

            {/* Row 2 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "2px 0",
            }}>
              <div style={{ fontWeight: "500" }}>Aminu Muhammad</div>
              <div style={{ color: "#666" }}>15 Oct 2025</div>
              <div style={{ color: "#666" }}>Diabetes check-up</div>
              <button style={{ 
                background: "#1771b7", 
                color: "white", 
                border: "none", 
                padding: "6px 12px", 
                borderRadius: "6px", 
                fontSize: "11px",
                cursor: "pointer",
                fontWeight: "500"
              }}>
                View Record
              </button>
            </div>

            {/* Row 3 */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr 1fr auto", 
              gap: "20px", 
              alignItems: "center",
              padding: "2px 0"
            }}>
              <div style={{ fontWeight: "500" }}>Mustapha Hussein</div>
              <div style={{ color: "#666" }}>15 Oct 2025</div>
              <div style={{ color: "#666" }}>Diabetes check-up</div>
              <button style={{ 
                background: "#1771b7", 
                color: "white", 
                border: "none", 
                padding: "6px 12px", 
                borderRadius: "6px", 
                fontSize: "11px",
                cursor: "pointer",
                fontWeight: "500"
                }}>
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
