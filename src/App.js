import './App.css';
import foodData from './foods.json'
import {useState} from 'react'
import FoodBox from './components/FoodBox';
import {Button, Row} from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';

function App() {

  const [foods, setFood] = useState(foodData)
  const [searchInput, setSearchInput] = useState('')
  const [foodsCopy, setFoodsData] = useState(foodData)
  const [showForm, setShowForm] = useState(false)

  const addNewFood = (newFood) => {
    const updatedFoodData = [...foods, newFood]
    const updateFoodCopy = [...foods, newFood]
    setFood(updatedFoodData)
    setFoodsData(updateFoodCopy)
  }

  const searchFoodFilter = (e) => {
    setSearchInput(e.target.value)

    if (e.target.value === ''){
      setFood(foods)
    }
    const textInputValue = e.target.value.toLowerCase();

    const filteredList = foodsCopy.filter((food)=> {
      const foodIncludes = food.name.toLowerCase();
      return foodIncludes.includes(textInputValue);
    })

    setFood(filteredList)

  }

  const deleteFood = (name) => {
    const foodToDelete = foods.filter((food)=> {
      return food.name.toLowerCase() !== name.toLowerCase()
    })
    setFood(foodToDelete)
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }


  return (
    <div className="App">
      
      <Button onClick={toggleForm}>{showForm ?  'Hide Form ' : 'Add New Food' }</Button>
      <br/>
      {showForm ? (<AddFoodForm addFood={addNewFood}/>): null}
      

      <SearchFood searchInput={searchInput} searchFoodFilter={searchFoodFilter}/>

      <h2>Food List</h2>

      {foods.length !== 0 ? (
          <Row>
          {foods.map(food => {
            return (
              <FoodBox food={food} key={food.name} deleteFood={deleteFood}/>
            )}
            )}
          
          </Row>
        ): (<h1>No food to display</h1>
      )
      }
      

      </div>
  );
}

export default App;
