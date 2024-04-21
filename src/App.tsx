import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import EarnCoinsPage from "./pages/EarnCoinsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import MainLayout from "./layout/MainLayout";
import Booking from "./pages/Booking";
import ViewBooking from "./pages/ViewBooking";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/lich-hen",
      element: <Booking />,
    },
    {
      path: "/lich-hen/xem-lai-lich-hen",
      element: <ViewBooking />,
    },
    {
      path: "/map",
      element: <MapPage />,
    },

    {
      path: "/Dang-giam-gia",
      element: <SalePage />,
    },
    {
      path: "/Voucher",
      element: <VoucherPage />,
    },
    {
      path: "/kiem-xu",
      element: <EarnCoinsPage />,
    },
    {
      path: "/cam-nam-lam-dep",
      element: <BlogPage />,
    },
    {
      path: "/cam-nam-lam-dep/chi-tiet",
      element: <BlogDetailPage />,
    },
  ];

  return (
    <MainLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </MainLayout>
  );
};

const App = () => {
  return renderUserRouter();
};

export default App;
