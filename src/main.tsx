import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/tailwind.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './routes/Root';
import PageNotFound from './pages/others/404';
import CommingSoon from './pages/comming-soon';

const NODE_ENV = import.meta.env.VITE_USER_NODE_ENV;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: NODE_ENV !== 'development' && <PageNotFound />,
    children: [
      {
        path: '/',
        element: <CommingSoon />
      }
    ]

  }
])


const root = ReactDOM.createRoot(document.getElementById('root')!);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


// Render the application using the root object
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);