
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from './pages/About';
import Services from './pages/services';
import  Contact from './pages/Contact';
import  Work from './pages/Work';
import './App.css';
import Layout from "./layout/Layout"




export default function App() {
  return (
    <Router>
      <Routes>
        {/* All routes wrapped in Layout individually */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/work" element={<Layout><Work /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}




// export default function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }




















