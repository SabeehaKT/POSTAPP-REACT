import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import SearchPost from './Components/SearchPost';
import DeletePost from './Components/DeletePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPost/>}/>
      <Route path="/search" element={<SearchPost/>}/>
      <Route path="/delete" element={<DeletePost/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
