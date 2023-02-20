import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import NewsPage from '../pages/NewsPage';
import { NoticesList } from './NoticesList/NoticesList';

const FriendsPage = lazy(() => import('../pages/FriendsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  // const isRefreshing = useSelector()
  // const dispatch = useDispatch();

  //     useEffect(() => {
  //         dispatch();
  //     }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="sell" />} />
            <Route
              path="lost-found"
              element={<NoticesList search="lost_found" />}
            />
            <Route
              path="for-free"
              element={<NoticesList search="in_good_hands" />}
            />
            <Route path="sell" index element={<NoticesList search="sell" />} />
            <Route
              path="favorite"
              element={<NoticesList search="favorite" />}
            />
            <Route path="own" element={<NoticesList search="own" />} />
          </Route>
          <Route path="friends" element={<FriendsPage />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
