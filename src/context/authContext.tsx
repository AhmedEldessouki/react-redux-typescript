import React from "react";
import type { GeneralUserType } from "../types/user";

interface SignedUser extends GeneralUserType {
  username: string;
  password: string;
}

class UserClass {
  userData: GeneralUserType;
  constructor(args: GeneralUserType) {
    this.userData = { ...args };
  }

  update(args: Partial<GeneralUserType>) {
    return { ...this.userData, ...args };
  }
}

const AuthContext = React.createContext<any | undefined>(undefined);
AuthContext.displayName = "authContext";

type AuthAction =
  | { type: "sign_in"; payload: SignedUser }
  | { type: "sign_out"; payload: {} };
type AuthState = SignedUser | {};
function AuthProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const [authState, dispatch] = React.useReducer(
    (state: AuthState, action: AuthAction) => {
      switch (action.type) {
        case "sign_in":
          return { ...new UserClass({ ...action.payload }) };
        case "sign_out":
          return {};

        default:
          return {};
      }
    },
    {}
  );
  return (
    <AuthContext.Provider value={{ user: authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const value = React.useContext(AuthContext);

  if (!value) {
    throw new Error('"useAuth" should be wrapped in AuthProvider');
  }
  return value;
}

export { useAuth };
export default AuthProvider;
