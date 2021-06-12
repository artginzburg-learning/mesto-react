import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">

      <a target="_self" href="https://github.com/artginzburg/mesto-react" className="logo header__logo">
        <img className="logo__img" alt="Mesto" src={logo} />
      </a>

    </header>
  );
}

export default Header;