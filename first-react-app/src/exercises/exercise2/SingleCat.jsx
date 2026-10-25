//displays a single cat
function SingleCat({ name, latinName, image }) {

    return (
        <li className="SingleCat">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div><em>{latinName}</em></div>
        </li>
    )
}

export default SingleCat;