import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Form from "./components/Form";

import Login from "./components/Login"
import SharedLayout from "./components/SharedLayout";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Form />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="welcome" element={<WelcomePage/>}/>
        <Route path="*" element={<Error/>}/>
        </Route>
        
      </Routes>
      
      
    </>
  );
}

export default App;
