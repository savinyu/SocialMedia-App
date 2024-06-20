import { Link } from "react-router-dom"

const BottomWarning = ({label,buttontext,to}) => {
  return (
    <div className="text-sm py-2 flex justify-around">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 " to={to} >
            {buttontext}
        </Link>
    </div>
  )
}

export default BottomWarning