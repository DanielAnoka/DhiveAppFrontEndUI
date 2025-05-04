// AppNavigator.js
import React from 'react';
import { Routes, Route } from 'react-router-native';
import Business from '../screens/Business';
import Business_Notification from '../screens/Business_Notification';
import MessageScreen from '../screens/MessageScreen';

export default function AppNavigator() {
  return (
    <Routes>
      <Route
        path='/b'
        element={<Business_Notification />}
      />
      <Route
        path='/Business'
        element={<Business />}
      />
      <Route
        path='/'
        element={<MessageScreen />}
      />
    </Routes>
  );
}
