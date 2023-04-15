import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "../hoc/Layout";
import { RequireAuth } from "../hoc/RequireAuth";
import { RoomDetails } from "../pages/RoomDetails";
import { Rooms } from "../pages/Rooms";
import { UserLogin } from "../pages/UserLogin";

const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RequireAuth />}>
      <Route element={<Layout />}>
        <Route index element={<Rooms />} />
        <Route path=":id" element={<RoomDetails />} />
      </Route>
    </Route>,
    <Route path="/login" element={<UserLogin />} />,
    <Route path="*" element={<div className="text-white">404</div>} />,
  ])
);

export default routes;
