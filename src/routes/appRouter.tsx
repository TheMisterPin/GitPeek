import { Route, Routes } from 'react-router-dom'
import AppRoutes from './appRoutes'

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  )
}

export default AppRouter
