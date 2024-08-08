import React, { Dispatch, useContext } from "react";
import { authAction } from "./AuthProvider";

interface AuthContextType{
    user:string;
    dispatch: Dispatch<authAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;