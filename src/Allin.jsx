import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from'./HomePage/Home';
import Register from './Register/componants/register';
import NotFound from './notFound';
import SignIn from './Sign in/components/SignIn';
import MainPage from './TalkingPage/components/main';
import AddNewServ from './TalkingPage/components/AddNewPrivateServer';
const AllIn = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/AskAndAnswer/AddNewServ' element={<AddNewServ/>}/>
                <Route path='/AskAndAnswer/main' element={<MainPage/>}/>
                <Route path='/AskAndAnswer/signin' element={<SignIn/>}/>
                <Route path='/AskAndAnswer/register' element={<Register/>}/>

                <Route path={"/AskAndAnswer/home"}  element={<Home/>}/>
            </Routes>
        </Router>
     );
}
 
export default AllIn;
