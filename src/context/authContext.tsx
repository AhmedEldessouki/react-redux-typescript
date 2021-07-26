import React from "react";
// import type { GeneralUserType } from "../types/user";

type SignedUser = {
  username: string;
  password: string;
  role: string;
  access: Array<string>;
};

type AuthAction =
  | { type: "sign_in"; payload: SignedUser }
  // | { type: "update"; payload: Partial<SignedUser> }
  | { type: "sign_out" };
type AuthState = { user: SignedUser | undefined };

const AuthContext = React.createContext<{
  user: undefined | SignedUser;
  dispatch: React.Dispatch<AuthAction>;
}>({
  user: undefined,
  dispatch: () => {},
});
AuthContext.displayName = "authContext";

function AuthProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const [authState, dispatch] = React.useReducer(
    (state: AuthState, action: AuthAction) => {
      switch (action.type) {
        case "sign_in":
          return { user: { ...action.payload } };
        case "sign_out":
          return { user: undefined };
        // case  "update":
        //   return { ...state, user: {...action.payload} };
        default:
          return { user: undefined };
      }
    },
    { user: undefined }
  );
  return (
    <AuthContext.Provider value={{ user: authState.user, dispatch }}>
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
