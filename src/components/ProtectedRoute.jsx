import { Route } from 'react-router';

import { Link } from 'react-router-dom';
import { useAuthCtx } from '../store/authContext';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;
  console.log(isUserLoggedIn);
  return (
    <Route {...rest}>
      {isUserLoggedIn ? (
        children
      ) : (
        <>
          <h2>Jus neprisujungęs...</h2>

          <Link to={'/login'}>Prisijungti čia...</Link>
        </>
      )}
    </Route>
  );
}

export default ProtectedRoute;
