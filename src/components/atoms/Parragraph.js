const Parragraph = ({ children, bold, style }) => (
  <p
    className={`font-light text-gray-500 text-md pb-4 ${
      bold && 'font-medium'
    } ${style && style}`}
  >
    {children}
  </p>
)

export default Parragraph
