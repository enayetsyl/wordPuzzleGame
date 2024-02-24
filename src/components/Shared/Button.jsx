
const Button = ({children, className, onClick, disabled = false}) => {
  return (
    <button className={`${className} rounded-lg  px-4 py-2`}
    disabled={disabled}
    onClick={onClick}>
      {children}
    </button>
  )
}

export default Button