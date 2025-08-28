import React, { useState } from "react";

const Updates: React.FC = () => {
  const [updateData, setUpdateData] = useState({
    firstName: "Musa",
    lastName: "Abdullahi",
    email: "dr.musa.abdullahi@medbuddy.com",
    phone: "+234 801 234 5678",
    specialization: "Neurology",
    licenseNumber: "MDC/2023/001",
    experience: "15 years",
    education: "MBBS, MD (Neurology)",
    hospital: "Federal Medical Center, Abuja",
    address: "Plot 123, Central Business District, Abuja, Nigeria"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Profile updates submitted:", updateData);
      setIsSubmitting(false);
      alert("Profile updates submitted successfully!");
    }, 1000);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ 
        background: "white", 
        padding: "30px", 
        borderRadius: "16px", 
        marginBottom: "30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "32px", 
          fontWeight: "700", 
          color: "#1a1a1a", 
          margin: "0 0 10px 0" 
        }}>
          Profile Updates
        </h1>
        <p style={{ 
          fontSize: "18px", 
          color: "#666", 
          margin: "0" 
        }}>
          Update your professional information and credentials
        </p>
      </div>

      {/* Update Form */}
      <div style={{ 
        background: "white", 
        padding: "30px", 
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <form onSubmit={handleSubmit}>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: "600", 
            color: "#1a1a1a", 
            margin: "0 0 30px 0",
            borderBottom: "2px solid #1771b7",
            paddingBottom: "10px"
          }}>
            Professional Information
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "20px" 
          }}>
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={updateData.firstName}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={updateData.lastName}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={updateData.email}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={updateData.phone}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Specialization *
              </label>
              <input
                type="text"
                name="specialization"
                value={updateData.specialization}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                License Number *
              </label>
              <input
                type="text"
                name="licenseNumber"
                value={updateData.licenseNumber}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Years of Experience *
              </label>
              <input
                type="text"
                name="experience"
                value={updateData.experience}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Education & Qualifications *
              </label>
              <input
                type="text"
                name="education"
                value={updateData.education}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Hospital/Clinic *
              </label>
              <input
                type="text"
                name="hospital"
                value={updateData.hospital}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white"
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                fontWeight: "500", 
                color: "#666" 
              }}>
                Address *
              </label>
              <textarea
                name="address"
                value={updateData.address}
                onChange={handleInputChange}
                required
                rows={3}
                style={{ 
                  width: "100%", 
                  padding: "12px", 
                  border: "1px solid #ddd", 
                  borderRadius: "8px", 
                  fontSize: "16px",
                  background: "white",
                  resize: "vertical"
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ 
            marginTop: "40px", 
            textAlign: "center",
            borderTop: "1px solid #eee",
            paddingTop: "30px"
          }}>
            <button 
              type="submit"
              disabled={isSubmitting}
              style={{ 
                background: "#1771b7", 
                color: "white", 
                border: "none", 
                padding: "15px 40px", 
                borderRadius: "8px", 
                fontSize: "18px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontWeight: "600",
                opacity: isSubmitting ? 0.7 : 1,
                minWidth: "200px"
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Updates"}
            </button>
          </div>
        </form>
      </div>

      {/* Information Note */}
      <div style={{ 
        background: "#f8f9fa", 
        padding: "20px", 
        borderRadius: "12px",
        marginTop: "20px",
        border: "1px solid #e9ecef"
      }}>
        <h3 style={{ 
          fontSize: "18px", 
          fontWeight: "600", 
          color: "#1a1a1a", 
          margin: "0 0 15px 0" 
        }}>
          📝 Important Notes
        </h3>
        <ul style={{ 
          margin: "0", 
          paddingLeft: "20px", 
          color: "#666",
          lineHeight: "1.6"
        }}>
          <li>All fields marked with * are required</li>
          <li>License number updates may require verification</li>
          <li>Changes will be reviewed within 24-48 hours</li>
          <li>You will receive an email confirmation once approved</li>
        </ul>
      </div>
    </div>
  );
};

export default Updates;
