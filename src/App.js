import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/HomePage/Home'
import ScrollToTop from './components/ScrollToTop';
import StudentProfile from './pages/StudentProfile/StudentProfile'

function App() {
  return (
    <div>
    
    <Router basename="/contact_tracing">

    <ScrollToTop/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/my-profile/" element={<StudentProfile/>}/>
    </Routes>    
    </Router>
    </div>
  );
}

export default App;
