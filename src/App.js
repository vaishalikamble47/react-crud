import logo from './logo.svg';
import './App.css';
import RouteLayout from './Layout/RouteLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddStudent from './Component/AddStudent';
import Home from "./Component/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element:<Home />
        
      },
      {
        path: "/addstudent",
        element: <AddStudent />
        
      },
      {
        path: "/addstudent/:id",
        element: <AddStudent />
        
      }
      
    ]
  }
])
function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
