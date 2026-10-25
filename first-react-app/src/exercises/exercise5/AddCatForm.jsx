import { useState } from 'react'

function AddCatForm({ onAddCat }) {

    //controlled input state
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')

    //send new cat to parent, clear form
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({ name, latinName, image })

        setName('')
        setLatinName('')
        setImage('')
    }

    return (
        <div className="AddCatForm componentBox">
            <form onSubmit={handleSubmit}>
                <label>Cat Name:
                    <input name="name" value={name} required
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Latin Name:
                    <input name="latinName" value={latinName} required
                        onChange={(e) => setLatinName(e.target.value)} />
                </label>
                <label>Image URL:
                    <input name="image" value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </label>
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatForm;