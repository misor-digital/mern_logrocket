import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Home        from "./Home";
import BookList    from "./BookList";
import CreateBook  from "./CreateBook";
import BookDetails from "./BookDetails";
import UpdateBook  from "./UpdateBook";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/"               element = { <Home /> } exact />
          <Route path = "/books"          element = { <BookList /> } />
          <Route path = "/books/create"   element = { <CreateBook /> } />
          <Route path = "/books/:id"      element = { <BookDetails /> } />
          <Route path = "/books/:id/edit" element = { <UpdateBook /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
