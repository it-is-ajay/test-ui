import './assets/index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './component/Dashboard'
import RenderCircle from './component/RenderCircle'
import { Route, Routes } from 'react-router-dom';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/render-circle' element={<RenderCircle/>} />
    </Routes>
    
  </>
}

export default App;
