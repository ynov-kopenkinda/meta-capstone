import { Route, Routes } from "react-router-dom";
import pages from "./utils/pages";
import Layout from "./components/layout/layout";
import Home from "./components/pages/home";
import Bookings from "./components/pages/bookings";
import ConfirmedBooking from "./components/pages/bookings/confirmed-booking";
import NotFound from "./components/pages/not-found";
import UnderConstruction from "./components/pages/under-construction";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route
            path={pages.get("about").path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get("menu").path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get("bookings").path} element={<Bookings />} />
          <Route
            path={pages.get("confirmedBooking").path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={pages.get("orderOnline").path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get("login").path}
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
