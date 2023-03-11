
import { useContext } from "react";
import LoginContext from "../context/login";

export default function useLogin() {
    return useContext(LoginContext);
}