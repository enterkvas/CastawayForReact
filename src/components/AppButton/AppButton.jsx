const AppButton = ({
  label = "View all episodes",
  href = "#",
  className = "episodes__header-link button text-small",
  arialabel,
}) => {
  return (
    <a 
      href={href} 
      arialabel = {arialabel || label}
      className={`${className}`}
    >
      {label}
    </a>
  );
};

export default AppButton;