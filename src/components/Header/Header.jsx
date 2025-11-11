import Logo from "./Logo";
import MenuHorizontal from "./MenuHorizontal";


const Header = () => {
  return (
    <header className="header">
      <div className="header__container container align-center">
        <Logo />
        <MenuHorizontal />
      </div>
    </header>
  );
};

export default Header
