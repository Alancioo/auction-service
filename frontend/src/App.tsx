import './App.css';
import UserForm from './ui/users/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Confiration from './ui/Confirmation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/form/:action' element={<UserForm />} />
          <Route path='/confirm/:userId/:login' element={<Confiration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
