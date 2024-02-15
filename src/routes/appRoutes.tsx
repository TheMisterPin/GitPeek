import { Route, Routes, Navigate } from 'react-router-dom'
import * as routes from './paths'
import * as components from '../pages'

const {
  HomePage, ResultsPage, ErrorPage,
} = components
const {
  HOME, RESULTS, ERROR,
} = routes

function AppRoutes(): JSX.Element {
  return (

    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={RESULTS} element={<ResultsPage />} />
      <Route path={ERROR} element={<ErrorPage />} />
      <Route path="/" element={<Navigate to={HOME} />} />
    </Routes>

  )
}

export default AppRoutes
