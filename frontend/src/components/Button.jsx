
const Button = ({label,onclick}) => {
  return (
    <div>
        <button 
            onClick={onclick}
            type="button"
            className="w-full text-white bg-gray-700 mt-2 hover:bg-gray-900  focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 rounded-lg  "    
        >
            {label}
        </button>
    </div>
  )
}

export default Button