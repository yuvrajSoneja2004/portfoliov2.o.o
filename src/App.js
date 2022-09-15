import Header from "./components/Header";
import { Routes , Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Error from "./components/Error";


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route  path="/" element={<Header />} />
    <Route  path="*" element={<Error />} />
    
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
