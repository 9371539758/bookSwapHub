import { RouterProvider } from 'react-router-dom';
import router from '../app/app.routes.jsx'; // Ensure router is exported correctly

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;   