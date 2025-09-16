export type UserType = "C" | "H"; // C = Client, H = Host

export const UserTypeEnum = { 
  C: "C",
  H: "H"
} as const;

export type User = {
  name: string;
  email: string;
  type: UserType;
  initials: string;
  isLogin: boolean;
};