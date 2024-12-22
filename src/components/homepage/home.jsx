import { Link } from 'react-router-dom' 
import './home.css'

const Home = () => {

return (
    <div className='homeContainer'>
      <h1>Hello from the home page of the Odin Shop!</h1>
      <p>{"We sell fashionable women's clothing - check out our high end sortiment"}</p>
    
      <button>
          <Link to="shop">Go to shop</Link>
      </button>        
    </div>
  );
}

export default Home;