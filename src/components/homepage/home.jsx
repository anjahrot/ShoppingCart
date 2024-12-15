import { Link } from 'react-router-dom' 

const Home = () => {

return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="shop">Go to shop!</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;