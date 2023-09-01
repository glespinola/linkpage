import { BrowserRouter, Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Err404 from "../pages/Err404/Err404"
import Layout from '../components/Layout/Layout'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Err404/>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes