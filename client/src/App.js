
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Completed from './components/Completed';
import FormPage from './components/FormPage';
import HomePage from './components/HomePage';
import SelectPage from './components/SelectPage';
import TellUs from './components/TellUs';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path="/select" element={<SelectPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/tellus" element={<TellUs />} />
      <Route path="/completed" element={<Completed />} />

    </Routes>
    </>
  );
}

export default App;
