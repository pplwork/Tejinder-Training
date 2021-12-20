function Button({ className, ...otherProps }) {
    return (<button className={`btn ${className}`} {...otherProps}></button>)
}

export default Button