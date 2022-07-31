import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Form from "./components/Form";

import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute";
import SharedLayout from "./components/SharedLayout";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <>
      <Routes>
        
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Form />}/>
        <Route path="login" element={<Login/>}/>
        <Route element={<ProtectedRoute />} >
           <Route path="welcome" element={<WelcomePage/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>
        </Route>
        
      </Routes>
      
      
    </>
  );
}

export default App;
