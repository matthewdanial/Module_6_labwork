import './App.css'

//Exercise 1
import Greeting from './exercises/exercise1/Greeting'

//Exercise 2
import BigCats from './exercises/exercise2/BigCats'

//Exercise 3
import Emoji from './exercises/exercise3/Emoji'

//Exercise 4
import BigCatsSortable from './exercises/exercise4/BigCats'

//Exercise 5
import BigCatsEditable from './exercises/exercise5/BigCats'

//Exercise 6
import Calculator from './exercises/exercise6/Calculator'

function App() {
  return (
    <>
      {/*Exercise 1: Greeting*/}
      <h2>Exercise 1 - Greeting</h2>

      {/* default name */}
      <Greeting />

      {/* name prop */}
      <Greeting name="John" />

      {/* name prop + children */}
      <Greeting name="Matt">
        <p>Welcome to Module 6 React!</p>
      </Greeting>

      {/*Exercise 2: Big Cats*/}
      <h2>Exercise 2 - Big Cats</h2>
      <BigCats />

      {/*Exercise 3: Emoji*/}
      <h2>Exercise 3 - Emoji</h2>
      <Emoji />

      {/*Exercise 4: Big Cats sort/filter*/}
      <h2>Exercise 4 - Big Cats Sort & Filter</h2>
      <BigCatsSortable />

      {/*Exercise 5: Big Cats add/delete*/}
      <h2>Exercise 5 - Big Cats Add & Delete</h2>
      <BigCatsEditable />

      {/*Exercise 6: Calculator*/}
      <h2>Exercise 6 - Calculator</h2>
      <Calculator />
    </>
  )
}

export default App