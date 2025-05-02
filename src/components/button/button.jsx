import './button.css'
const Button = ({text, clickHandler}) => {
    return (
        <button onClick={clickHandler} className='button'>
            {text}
        </button>
    )
}
export default Button