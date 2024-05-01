import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/style.scss'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const MapPage = React.lazy(() => import('./pages/MapPage'))
const SalePage = React.lazy(() => import('./pages/SalePage'))
const VoucherPage = React.lazy(() => import('./pages/VoucherPage'))
const EarnCoinsPage = React.lazy(() => import('./pages/EarnCoinsPage'))
const BlogPage = React.lazy(() => import('./pages/BlogPage'))
const BlogDetailPage = React.lazy(() => import('./pages/BlogDetailPage'))
const MainLayout = React.lazy(() => import('./layout/MainLayout'))
const Booking = React.lazy(() => import('./pages/Booking'))
const ViewBooking = React.lazy(() => import('./pages/ViewBooking'))

const renderUserRouter = () => {
  const userRouters = [
    {
      path: '',
      element: <HomePage />,
    },
    {
      path: '/lich-hen',
      element: <Booking />,
    },
    {
      path: '/lich-hen/xem-lai-lich-hen',
      element: <ViewBooking />,
    },
    {
      path: '/map',
      element: <MapPage />,
    },

    {
      path: '/Dang-giam-gia',
      element: <SalePage />,
    },
    {
      path: '/Voucher',
      element: <VoucherPage />,
    },
    {
      path: '/kiem-xu',
      element: <EarnCoinsPage />,
    },
    {
      path: '/cam-nam-lam-dep',
      element: <BlogPage />,
    },
    {
      path: '/cam-nam-lam-dep/chi-tiet',
      element: <BlogDetailPage />,
    },
  ]

  return (
    <Suspense fallback="Đang tải trang, bạn đợi xíu nhé…">
      <MainLayout>
        <Routes>
          {userRouters.map((item, key) => (
            <Route key={key} path={item.path} element={item.element} />
          ))}
        </Routes>
      </MainLayout>
    </Suspense>
  )
}

const App = () => {
  return renderUserRouter()
}

export default App
