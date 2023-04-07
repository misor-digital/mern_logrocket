import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import BookList        from "./BookList";
import CreateBook      from "./CreateBook";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo  from "./components/UpdateBookInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/books"          element = { <BookList /> } exact />
          <Route path = "/books/create"   element = { <CreateBook /> } />
          <Route path = "/books/:id"      element = { <ShowBookDetails /> } />
          <Route path = "/books/:id/edit" element = { <UpdateBookInfo /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
