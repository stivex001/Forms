import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";

import Login from "./components/Login"
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <div >
      <Routes>
      {/* <Route path="/" element={<Nav />}/> */}
        <Route path="/" element={<Form />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
