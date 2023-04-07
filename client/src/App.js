import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import BookList    from "./BookList";
import CreateBook  from "./CreateBook";
import BookDetails from "./BookDetails";
import UpdateBook  from "./components/UpdateBookInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/books"          element = { <BookList /> } exact />
          <Route path = "/books/create"   element = { <CreateBook /> } />
          <Route path = "/books/:id"      element = { <BookDetails /> } />
          <Route path = "/books/:id/edit" element = { <UpdateBook /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
