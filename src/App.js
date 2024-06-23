
import { RouterProvider } from 'react-router-dom';
import router from './rutas';
import './index.css'
import HomeCliente from './rutas/Cliente/Home/HomeCliente';


function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
