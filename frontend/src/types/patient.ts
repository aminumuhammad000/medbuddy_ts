export interface MedicalData {
  known_allergies: string[];
  chronic_conditions: string[];
  current_medications: string;
  vaccination_record: string;
  blood_type: string;
}

export interface ProfileData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  nhis_id: string;
  house_address: string;
}

export interface AccountData {
  language_preference: string;
  communication_preference: string;
}
