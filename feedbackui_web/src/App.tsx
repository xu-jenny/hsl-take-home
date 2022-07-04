import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Outlet } from "react-router-dom";
import Home from './pages/Home';
import Thankyou from './pages/Thankyou';
import FeedbackForm from './pages/FeedbackForm';

const Layout = () => {
  return (
    <>
      <AppBar position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Havard Skills lab
          </Typography>
      </AppBar>
      <Box sx={{ m: "3rem", p: "3rem"}}>
        <Outlet />
      </Box>
    </>
  )
};

const NoPage = () => {
  return (
    <Grid container justifyContent="center">404 Page does not exist</Grid>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<FeedbackForm />} />
            <Route path="thanks" element={<Thankyou />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
