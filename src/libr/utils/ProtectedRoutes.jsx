import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { StartContext } from '../../context/StartContext';

const ProtectedRoutes = () => {
   
    const {username
	} = useContext(StartContext);

    if ( username === undefined) {
    return <Navigate to='/login' replace />;
    }
    return <Outlet/>;
}
 
export default ProtectedRoutes ;