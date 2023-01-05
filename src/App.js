import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Countdown from './pages/Countdown';
import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import FillSubscription from './pages/Dashboard/FillSubscription';
import Payment from './pages/Dashboard/Payment';
import CardPayment from './pages/Dashboard/CardPayment';
import CardPaymentPaid from './pages/Dashboard/CardPaymentPaid';
import Hotel from './pages/Dashboard/Hotel';
import Activities from './pages/Dashboard/Activities';
import Certificate from './pages/Dashboard/Certificate';
import { useContextPayment } from './components/Payment/useContextPayment';
import { EventInfoProvider } from './contexts/EventInfoContext';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import { useState } from 'react';

export default function App() {
  const [paymentStatement, setPaymentStatement] = useState({});
  const [finalPayment, setFinalPayment] = useState(false);
  const [ticket, setTicket] = useState('');
  const [hotelId, setHotelId] = useState(0);
  const [roomId, setRoomId] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <>
      <ToastContainer />
      <EventInfoProvider>
        <UserProvider>
          <useContextPayment.Provider
            value={{
              paymentStatement,
              setPaymentStatement,
              finalPayment,
              setFinalPayment,
              setTicket,
              ticket,
              hotelId,
              setHotelId,
              roomId,
              setRoomId,
              total,
              setTotal,
            }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Countdown />} />
                <Route path="/enroll" element={<Enroll />} />
                <Route path="/sign-in" element={<SignIn />} />

                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRouteGuard>
                      <Dashboard />
                    </ProtectedRouteGuard>
                  }
                >
                  <Route path="subscription" element={<FillSubscription />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="cardpayment" element={<CardPayment />} />
                  <Route path="cardpaymentpaid" element={<CardPaymentPaid />} />
                  <Route path="hotel" element={<Hotel />} />
                  <Route path="activities" element={<Activities />} />
                  <Route path="certificate" element={<Certificate />} />
                  <Route index path="*" element={<Navigate to="/dashboard/subscription" />} />
                </Route>
              </Routes>
            </Router>
          </useContextPayment.Provider>
        </UserProvider>
      </EventInfoProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
