import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import SingUp from './components/SingUp';
import Navbaar from './componnt_todo/Navbaar';
import Home from './componnt_todo/Home';

function App() {
  return (
//     <div className="App">
// <BrowserRouter>
// <Routes>
//   <Route path='/' element={<Signin/>} />
//   <Route path='/singup' element={<SingUp/>} />
// </Routes>
// </BrowserRouter>
//     </div>
<>
<Navbaar/>
<Home/>

</>
  );
}

export default App;
