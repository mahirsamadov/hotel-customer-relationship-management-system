import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "../hoc/Layout";
import { RequireAuth } from "../hoc/RequireAuth";
import { RoomDetails } from "../pages/roomDetails";
import { Rooms } from "../pages/rooms";
import { UserLogin } from "../pages/userLogin";

const routes = createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<RequireAuth/>} >
        <Route path="/" element={<Layout/>}>
            <Route path="/rooms" element={<Rooms/>}>
                <Route path="/:id" element={<RoomDetails/>} />
            </Route>
        </Route>
    </Route>,
    <Route path="/login" element={<UserLogin/>} />,
    <Route path="*" element={<div className="text-white">404</div>} />
]))

export default routes;