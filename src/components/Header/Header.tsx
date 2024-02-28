import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <p className="logo">
            Logo
          </p>
        </nav>
        <nav>
          <ul>
            <li>Home</li>
            <li>Otros</li>
            <li>Otros</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
