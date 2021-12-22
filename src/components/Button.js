const Button = ({ color, text }) => {
    const onClick = () => {
       console.log('ya clicked')
    }
    return (
        <div>
            <button 
            onClick={onClick}
            style={{backgroundColor: color}}
            className='btn'>
            {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

const cssStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Button
