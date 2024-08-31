import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import CoursesView from './views/admin/educationalPlanner/CoursesView';
import ScheduleView from './views/admin/educationalPlanner/ScheduleView';
import GoalsView from './views/admin/educationalPlanner/GoalsView';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  return (
    <ChakraProvider theme={currentTheme}>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route
          path="admin/*"
          element={
            <AdminLayout theme={currentTheme} setTheme={setCurrentTheme}>
              <Route path="courses" element={<CoursesView />} />
              <Route path="schedule" element={<ScheduleView />} />
              <Route path="goals" element={<GoalsView />} />
            </AdminLayout>
          }
        />
        <Route
          path="rtl/*"
          element={
            <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
          }
        />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </ChakraProvider>
  );
}