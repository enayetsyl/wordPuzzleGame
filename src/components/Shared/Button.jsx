const Button = ({ children, className, onClick, disabled = false, style }) => {
  return (
    <button
      className={`${className} rounded-md px-6 py-2 bg-theme hover:bg-[#f1c40f] duration-300`}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
