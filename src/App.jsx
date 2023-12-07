import './App.css'

import { foods } from "./components/foods";
import FoodList from './components/FoodList';

function App() {
  return (
    <div>
    <h1>Food Search App</h1>
    <FoodList foods={foods} />
  </div>
  )
  }
export default App
