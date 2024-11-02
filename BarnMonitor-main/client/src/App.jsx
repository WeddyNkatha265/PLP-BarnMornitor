// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AnimalTypeList from "./components/AnimalTypeList";
import AddHealthRecord from "./components/AddHealthRecord";
import SplashScreen from "./components/SplashScreen";
import Sales from "./components/Sales";
import Animals from "./components/Animals";
import AnimalDetail from "./components/AnimalDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Production from "./components/Production";
import Feed  from "./components/Feed";
import FarmerProfile from  "./components/Farmer";


import AuthProvider, {useAuth} from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  return (
    <>
    
      <div className="flex items-start">                
        <div className="ml-60 w-full">
          <Router>
            <AuthProvider>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/signup" element={<Signup />} />
              
              <Route element={<PrivateRoute />}> 
                <Route path="/sales" element={<Sales />} />         
                <Route path="/dashboard" element={<Dashboard  />} />
                <Route path="/animal_types" element={<AnimalTypeList />} />
                <Route path="/health_records" element={<AddHealthRecord />} />
                <Route path="/profile" element={<FarmerProfile  />} />
                <Route path="/feeds" element={<Feed  />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/production" element={<Production />} />
                <Route path="/animals" element={<Animals />} />
                <Route path="/animal_detail/:animalId" element={<AnimalDetail />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
            </AuthProvider>
          </Router>
        </div>
      </div>
      
    </>
  );
};

export default App;
