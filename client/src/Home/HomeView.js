import { Link } from 'react-router-dom';

const HomeView = (props) => {
  return (
    <div className='main-container'>
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">MERN MVC</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/books"
              className="btn btn-outline-warning float-right"
            >
              Show Book List
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
