function Button({ className, children, ...otherProps }) {
    return (<button className={`btn ${className}`} {...otherProps}>{children}</button>)
}

export default Button