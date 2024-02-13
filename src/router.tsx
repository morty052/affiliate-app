import React from 'react'
import {
  createHashRouter,
  RouteObject,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { Dashboard } from './pages'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/dashboard/*" element={<Dashboard />} />
    </>,
  ),
)

export function Router() {
  return <RouterProvider router={router} />
}


