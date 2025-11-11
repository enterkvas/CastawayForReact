const MenuHorizontal = () => {
  return (
    <div className="header__menu menu align-center">
      <div className="menu__icon">
        <span />
      </div>
      <nav className="menu__body">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#home" className="menu__link">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a href="#episodes" className="menu__link">
              Episodes
            </a>
          </li>
          <li className="menu__item">
            <a href="#about" className="menu__link">
              About
            </a>
          </li>
          <li className="menu__item">
            <a href="#reviews" className="menu__link">
              Reviews
            </a>
          </li>
          <li className="menu__item">
            <a href="#contact" className="menu__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuHorizontal