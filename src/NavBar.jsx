import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/">translations</Link>
            <Link to="/jautajumi">questions</Link>
        </nav>  
    )
}