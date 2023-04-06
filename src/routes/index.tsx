import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { UserLogin } from "../pages/userLogin";

const routes = createBrowserRouter(createRoutesFromElements([
    <Route path="/login" element={<UserLogin/>} />,
]))

export default routes;