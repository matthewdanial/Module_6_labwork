//displays a single cat with delete
function SingleCat({ id, name, latinName, image, onDeleteCat }) {

    return (
        <li className="SingleCat">
            {/* image only if provided */}
            {image && <img src={image} alt={name} />}
            <h3>{name}</h3>
            <div><em>{latinName}</em></div>
            <button className="deleteButton" onClick={() => onDeleteCat(id)}>Delete</button>
        </li>
    )
}

export default SingleCat;