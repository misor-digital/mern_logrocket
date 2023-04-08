import { ButtonLink } from "../components/elements/buttons";

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
            <ButtonLink
              path      = '/books'
              className = 'btn-outline-warning float-right'
              title     = 'Show Book List'
            />
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
