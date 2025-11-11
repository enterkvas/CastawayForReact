import logo from '../../assets/images/header/logo.png'

const Logo = () => {
  return (
    <a href="/" className="header__logo" aria-label="Home" title="Home">
      <img
        className="header__logo-img"
        width="160"
        height="33"
        src={logo}
        alt="logo"
      />
    </a>
  );
};

export default Logo 