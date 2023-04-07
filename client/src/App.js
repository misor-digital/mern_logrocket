import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import CreateBook      from "./CreateBook";
import ShowBookList    from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo  from "./components/UpdateBookInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/books"          element = { <ShowBookList /> } exact />
          <Route path = "/books/create"   element = { <CreateBook /> } />
          <Route path = "/books/:id"      element = { <ShowBookDetails /> } />
          <Route path = "/books/:id/edit" element = { <UpdateBookInfo /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
