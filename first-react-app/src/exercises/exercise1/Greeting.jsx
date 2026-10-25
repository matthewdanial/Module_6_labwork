function Greeting ({ name = 'World', children }) {

    return (
        <div className="Greeting componentBox">
            <h3>Hello, {name}!</h3>
            {children}
        </div>
    )
}

export default Greeting;