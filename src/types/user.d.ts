type GeneralUserType = {
  firstName: string;
  gender: string;
  jobTitle: string;
  title: string;
  prefix: string;
  phoneNumber: string;
  company: string;
  role: "admin" | "user";
};

export type UserType = GeneralUserType | Omit<GeneralUserType, "company">;
