import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Html from './components/Html';
import Css from './components/Css';
import JavaScript from './components/JavaScript';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    { path: '/html/:slug?', element: <><Navbar /><Html /></> },
    { path: '/css/:slug?', element: <><Navbar /><Css /></> },
    { path: '/bootstrap/:slug?', element: <><Navbar /><Html /></> },
    { path: '/tailwindCss/:slug?', element: <><Navbar /><Html /></> },
    { path: '/javascript/:slug?', element: <><Navbar /><JavaScript /></> },
    { path: '/react.js/:slug?', element: <><Navbar /><Html /></> },
    { path: '/node.js/:slug?', element: <><Navbar /><Html /></> },
    { path: '/express.js/:slug?', element: <><Navbar /><Html /></> },
    { path: '/mongodb/:slug?', element: <><Navbar /><Html /></> },
    { path: '/next.js/:slug?', element: <><Navbar /><Html /></> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;