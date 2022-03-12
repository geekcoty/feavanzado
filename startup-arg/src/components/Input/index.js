function Input(props){
  const {label,onChange, type, placeholder,name} = props
  return(
    <>
    <p>{label}</p>
    <input name={name} onChange={onChange} type={type} placeholder={placeholder}/>
    </>
  )
}

export default Input