const InputBox = ({label,onchange}) => {
  return (
    <div >
      <label htmlFor={label} className="text-sm font-medium flex justify-start pl-1 py-2  ">
        {label}
      </label>
      <input key={label} type="text" placeholder={label} onChange={onchange} 
        className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
  )
}

export default InputBox