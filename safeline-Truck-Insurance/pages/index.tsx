import { NextPage } from "next";
import Home from "./home";

const RedirectToHome: NextPage = function() { return <Home /> };

export default RedirectToHome;