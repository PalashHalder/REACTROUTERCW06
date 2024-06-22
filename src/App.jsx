import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements, 
} from 'react-router-dom'
import Product from './pages/Product';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RootLayouts from './RootLayouts';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<RootLayouts />}>
          <Route path ='/' element = {<Home />} />
          <Route path ='/about' element = {<About />} />
          <Route path ='/services' element = {<Services />} />
          <Route path ='/product' element = {<Product />} />
          <Route path ='/contact' element = {<Contact />} />
        </Route>
      </Route>
    )
  );
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
