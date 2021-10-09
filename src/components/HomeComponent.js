import '../styles/HomeComponent.css';
import { Link } from 'react-router-dom';

function HomeComponent() {
    return (
        <div className="homeComponent">
            <h1>Home Component</h1>
            <p>
                Click the Link Below for Changing Route and Fetching Data.
            </p>
            <Link to="/Data">Go to Data Component</Link>
        </div>
    )
}

export default HomeComponent;
