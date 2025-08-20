import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import NewTask from "./pages/NewTask";
import CreateNewTask from "./pages/CreateNewTask";
import Valuation from "./pages/Valuation";
import ValuationDetails from "./pages/ValuationDetails";
import Budget from "./pages/Budget";
import Inspections from "./pages/Inspections";
import InspectionsView from "./pages/InspectionsView";
import Suppliers from "./pages/Suppliers";
import SuppliersSearch from "./pages/SuppliersSearch";
import Utilities from "./pages/Utilities";
import Financing from "./pages/Financing";
import AIAssistant from "./pages/AIAssistant";
import PlannerByRoom from "./pages/PlannerByRoom";
import Documents from "./pages/Documents";





const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/valuation" element={<Valuation />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/inspections-view" element={<InspectionsView />} />
        <Route path="/inspections" element={<Inspections />} />
        <Route path="/valuation-details" element={<ValuationDetails />} />
        <Route path="/newtask-planner" element={<NewTask />} />
        <Route path="/create-newtask-planner" element={<CreateNewTask />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/suppliers-search" element={<SuppliersSearch />} />
        <Route path="/planner-by-room" element={<PlannerByRoom />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/" element={<Dashboard />} />


      </Routes>
    </div>
  );
};

export default App;
