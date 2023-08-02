import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js"
import Payment from './components/Payment';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/paymentsuccess"} element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
