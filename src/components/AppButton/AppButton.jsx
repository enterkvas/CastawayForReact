const AppButton = ({
  label = "View Episode Details",
  href = "#",
  className = "",
  arialabel,
}) => {
  return (
    <a 
      href={href} 
      arialabel = {arialabel || label}
      className={`card-episodes__button button text-small ${className}`}
    >
      {label}
    </a>
  );
};

export default AppButton;