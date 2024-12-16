import { Link } from 'react-router-dom' 
import './home.css'

const Home = () => {

return (
    <div>
      <h1>Hello from the home page of the Odin Shop!</h1>
      <p>We have different products that are worth checking out</p>
    
      <button>
          <Link to="shop">Go to shop</Link>
      </button>        
    </div>
  );
}

export default Home;