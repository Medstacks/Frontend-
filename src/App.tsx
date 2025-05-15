import './App.css'
import Dashboard from './components/dashboard';
import Homepage from './components/home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
export default function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Homepage />} path='/' />
        <Route element={<Dashboard/>} path='/dashbooard' />
      </Route>
    )
  )
    return (
      <RouterProvider router={routes} />

    )
  }

