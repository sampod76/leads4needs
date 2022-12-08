import React,{ useEffect } from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import Loader from './Loader';



const ProtectedRoute = ({isAdmin,children,loading,user,isAuthenticated}) => {

    if(loading===undefined || loading===true){
        return <Loader/>
    } 

    console.log(isAuthenticated);
    console.log( user && user.role);
 


    const notIsAuthenticated = isAuthenticated ? !isAuthenticated :true;
    const notAuthorized = user ? (user.role!=='admin') : true;

  
    
    // useEffect(()=>{

    //     if(notIsAuthenticated){
    //         toast.error('login first to access this route')
    //     }

    //     if(notAuthorized){
    //         toast.error('not authorized role')
    //     }
    // },[notIsAuthenticated,notAuthorized])


    
    

    if(!isAuthenticated){
        return <Navigate to={'/'} />
    }

    if(isAdmin && user.role!=='admin'){
        return <Navigate to={'/'}/>
    }



    

    return children ? children:<Outlet/>
    
}

export default ProtectedRoute