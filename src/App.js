import React, { useEffect } from "react";
import LoginPage from "./componenets/LoginPage";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from './componenets/userProfile';
import MediaCard from './componenets/homePage';
import Edit from './componenets/edit';
import CreatePg from './componenets/CreatePg';
import AllPGList from './componenets/admin/AllPGList';
import AllUsersList from './componenets/admin/AllUsersList';
import OwnedPGList from './componenets/admin/OwnedPGList';
import UpdatePg from './componenets/admin/UpdatePg';
import { useDispatch, useSelector } from "react-redux";
import UpdateUser from './componenets/admin/UpdateUser';
import ProtectedRoute from './componenets/ProtectedRoute'
import { getAllUsers, getmyprofile } from "./redux/userActions";
import ApproveReject from "./componenets/admin/ApproveReject";
import Header from "./componenets/Layout/Header";
import Notification from "./componenets/Notification";
import PendingPg from "./componenets/admin/PendingPg";
import ViewPg from "./componenets/ViewPg";
import Copied from './componenets/Copied'
import Homes from './componenets/Layout/Home'
import Register from './componenets/Layout/Register'
import Bussiness from './componenets/Layout/Buiseness'
import UserPage from './componenets/Layout/User'
import PgListPage from './componenets/Layout/PgList'
import PendingPageList from './componenets/Layout/PendingPageList'
import UpdatePG from './componenets/UpdatePG';
import Mcd from './componenets/Layout/Mcd'
import Main from "./sampodnath/Main/Main";
import Main2 from "./sampodnath2/main/Main2";
import Main3 from "./sampodnath3/Main3";
import Main4 from "./sampodnath4/Main4";
import Main6 from "./sampodnath6/Main6";
import Main5 from "./sampodnath5/Main5";
import Main7 from "./sampodnath7_carosal/Main/Main7";
import Main9 from './sampod_9_leds_home/Main9'
import Login from "./sampodnath8_login/Login";
import Main10 from "./sampodnath10_registion2/Main10";
import MainBlog from "./sampodnath11_blog/MainBlog";
import { Question } from "./Theory/QuestionsPage/Question";
import { Users } from "./Theory/UserProfilePage/Users";



function App() {

  const dispatch = useDispatch();

  const { loading, isAuthenticated, user, users, specialUser } = useSelector(state => state.user);




  useEffect(() => {
    dispatch(getmyprofile());
    dispatch(getAllUsers())
  }, [dispatch]);




  return (

    <BrowserRouter>

    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sampod' element={<Main />} />
        <Route path='/sampod2' element={<Main2 />} />
        <Route path='/sampod3' element={<Main3 />} />
        <Route path='/sampod4' element={<Main4 />} />
        <Route path='/sampod5' element={<Main5 />}  />
        <Route path='/sampod6' element={<Main6 />} />
        <Route path='/sampod7' element={<Main7 />} />
        <Route path='/sampod8' element={<Login />} />
        <Route path='/sampod9' element={<Main9 />} />
        <Route path='/sampod10' element={<Main10 />} />
        <Route path='/sampod11' element={<MainBlog />} />
        <Route path='/qu' element={<Users />} />
        <Route path='/q' element={<Question />} />

       



  
       
        <Route path='/app' element={<UserProfile  user={user}/>} />
        <Route path='/homePage' element={<MediaCard />} />
        <Route path='/createpg' element={<CreatePg />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/view/:id' element={<ViewPg/>} />
        <Route path='/notification' element={<Notification user={user}/>} />



        {/* these are the main routes which has design  */}

        <Route path='/register' element={<Register/>} />
        <Route path='/bussiness' element={<Bussiness/>} />
        <Route path='/user' element={<UserPage/>} />
        <Route path='/pg' element={<PgListPage/>} />
        <Route path='/pending' element={<PendingPageList/>} />
        <Route path='/mcd' element={<Mcd user={user}/>} />
        <Route path='/view/edit/:id' element={<UpdatePG/>} />
        <Route path='/home' element={<Homes/>} />



   {/* custom  ProtectedRoute used to protect routes  watch 6 pack programmer's protected route video for info it is just 25 min */}
        {/* <Route
          path='/admin/user/ownedpg/:id'
          element={

            <ProtectedRoute isAuthenticated={isAuthenticated} user={user} loading={false} isAdmin={true} >
              <OwnedPGList user={user} />
            </ProtectedRoute>

          }
        /> */}

        {/* <Route
          path='/admin/pending'
          element={

            <ProtectedRoute isAuthenticated={isAuthenticated} user={user} loading={false} isAdmin={true} >
              <PendingPg user={user} />
            </ProtectedRoute>

          }
        /> */}


        {/* testing purpose routes  */}

           <Route path='/admin/user-list' element={ <AllUsersList users={users} /> } />
           <Route path='/admin/pg-list' element={ <AllPGList />} />
           <Route path='/admin/pending' element={  <PendingPg user={user} />} />
           <Route path='/admin/user/ownedpg/:id' element={ <OwnedPGList user={user} />} />
   

       {/* <Route path='/admin/user-list' element={(user && user.role==='admin') ? <AllUsersList users={users} /> : <LoginPage /> } />
       <Route path='/admin/pg-list'  element={(user && user.role==='admin') ? <AllPGList /> : <LoginPage /> } /> */}
         
       

         <Route path='/admin/view-profile/:id/:userId' element={<ApproveReject user={specialUser} />} />
          <Route path='/admin/update/user/:id' element={<UpdateUser />} />
         
          <Route path='/admin/update/pg/:id' element={<UpdatePg />} />



          {/* custom  ProtectedRoute used to protect routes  watch 6 pack programmer's  youtube channel  protected route video for info it is just 25 min */}

         <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} loading={loading} isAdmin={true} />}>
                      {/* 

                                <Route path='/admin/view-profile/:id/:userId' element={<ApproveReject user={specialUser} />} />
                                <Route path='/admin/update/user/:id' element={<UpdateUser />} />
                              
                                <Route path='/admin/update/pg/:id' element={<UpdatePg />} /> */}


        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App;