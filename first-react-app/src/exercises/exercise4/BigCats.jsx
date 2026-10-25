import { useState } from 'react'
import SingleCat from './SingleCat'

//Data for cats with unique images and ids
const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cheetah_(Acinonyx_jubatus)_female_2.jpg?width=400' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mountain_Lion_in_Glacier_National_Park.jpg?width=400' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar_(Panthera_onca_palustris)_male_Three_Brothers_River_2.jpg?width=400' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_(Panthera_pardus_pardus)_young_female_Kruger.jpg?width=400' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lion_waiting_in_Namibia.jpg?width=400' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panthera_uncia_-_Zoo_Karlsruhe_02.jpg?width=400' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bengal_tiger_(Panthera_tigris_tigris)_female_3.jpg?width=400' },
];

function BigCats() {

    //list state, starts with all cats
    const [currentCats, setCurrentCats] = useState(cats);

    //map each cat to a SingleCat, key for list
    const catItems = currentCats.map(cat => (
        <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image} />
    ));

    //sort A-Z
    const handleSortCats = () => {
        let newCats = [...currentCats];
        newCats.sort((a, b) => a.name.localeCompare(b.name));
        setCurrentCats(newCats);
    }

    //reverse order, clone first
    const handleReverseCats = () => {
        let newCats = [...currentCats];
        newCats.reverse();
        setCurrentCats(newCats);
    }

    //Panthera cats only
    const handleFilterPanthera = () => {
        let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera'));
        setCurrentCats(newCats);
    }

    //back to full list
    const handleResetCats = () => {
        setCurrentCats(cats);
    }

    return (
        <div className="BigCats componentBox">
            <div className="catButtons">
                <button onClick={handleSortCats}>Sort A-Z</button>
                <button onClick={handleReverseCats}>Reverse List</button>
                <button onClick={handleFilterPanthera}>Panthera Only</button>
                <button onClick={handleResetCats}>Reset</button>
            </div>
            <ul>{catItems}</ul>
        </div>
    )
}

export default BigCats;