const Button = ({ children, className, onClick, disabled = false }) => {
  return (
    <button
      className={`${className} rounded-md px-6 py-2 bg-theme hover:bg-cyan-600 duration-300`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
