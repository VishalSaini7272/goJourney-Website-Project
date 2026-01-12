import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import PackageDetails from "./pages/PackageDetails";
import OffersPage from "./pages/OffersPage";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import FamilyPackages from "./pages/FamilyPackages";
import HoneymoonPackages from "./pages/HoneymoonPackages";
import AdventurePackages from "./pages/AdventurePackages";
import GroupTours from "./pages/GroupTours";

import TripDetailsPage from "./pages/TripDetailsPage";
import BookingForm from "./pages/BookingForm";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/booking/:tripId"
            element={
              <ProtectedRoute>
                <BookingForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/confirmation"
            element={
              <ProtectedRoute>
                <ConfirmationPage />
              </ProtectedRoute>
            }
          />

          {/* Header Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packageDetails" element={<PackageDetails />} />
          <Route path="/offersPage" element={<OffersPage />} />
          <Route path="/contactUs" element={<ContactUs />} />

          {/* Packages Routes */}
          <Route path="/packages/family" element={<FamilyPackages />} />
          <Route path="/packages/honeymoon" element={<HoneymoonPackages />} />
          <Route path="/packages/adventure" element={<AdventurePackages />} />
          <Route path="/packages/group" element={<GroupTours />} />

          {/* Trip Details Page */}
          <Route path="/trip/:tripId" element={<TripDetailsPage />} />
          {/* <Route path="/booking/:tripId" element={<BookingForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
