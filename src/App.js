import Axios from 'axios'
import { useState } from "react"

import './App.css';
import { YOUR_APP_ID, YOUR_APP_KEY } from './key'
import RecipeTitle from './RecipeTitle';

function App() {

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [healthLabels, setHealthLabels] = useState("vegan")

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getRecipes()
  }

  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter ingredients"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <input
          className="app__submit"
          type="submit"
          value="search" />
        <select className="app__heathLabels">
          <option onClick={() => setHealthLabels("vegan")}>vegan</option>
          <option onClick={() => setHealthLabels("alcohol-coctail")}>alcohol-coctail</option>
          <option onClick={() => setHealthLabels("alcohol-free")}>alcohol-free</option>
          <option onClick={() => setHealthLabels("celery-free")}>celery-free</option>
          <option onClick={() => setHealthLabels("crustacean-free")}>crustacean-free</option>
          <option onClick={() => setHealthLabels("dairy-free")}>dairy-free</option>
          <option onClick={() => setHealthLabels("DASH")}>DASH</option>
          <option onClick={() => setHealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => setHealthLabels("fish-free")}>fish-free</option>
          <option onClick={() => setHealthLabels("fodmap-free")}>fodmap-free</option>
          <option onClick={() => setHealthLabels("gluten-free")}>gluten-free</option>
          <option onClick={() => setHealthLabels("immuno-supportive")}>immuno-supportive</option>
          <option onClick={() => setHealthLabels("keto-friendly")}>keto-friendly</option>
          <option onClick={() => setHealthLabels("kidney-friendly")}>kidney-friendly</option>
          <option onClick={() => setHealthLabels("kosher")}>kosher</option>
          <option onClick={() => setHealthLabels("low-potassium")}>low-potassium</option>
          <option onClick={() => setHealthLabels("low-sugar")}>low-sugar</option>
          <option onClick={() => setHealthLabels("lupine-free")}>lupine-free</option>
          <option onClick={() => setHealthLabels("Mediterranean")}>Mediterranean</option>
          <option onClick={() => setHealthLabels("mollusk-free")}>mollusk-free</option>
          <option onClick={() => setHealthLabels("mustard-free")}>mustard-free</option>
          <option onClick={() => setHealthLabels("No-oil-added")}>No-oil-added</option>
          <option onClick={() => setHealthLabels("paleo")}>paleo</option>
          <option onClick={() => setHealthLabels("peanut-free")}>peanut-free</option>
          <option onClick={() => setHealthLabels("pecatarian")}>pecatarian</option>
          <option onClick={() => setHealthLabels("pork-free")}>pork-free</option>
          <option onClick={() => setHealthLabels("red-meat-free")}>red-meat-free</option>
          <option onClick={() => setHealthLabels("sesame-free")}>sesame-free</option>
          <option onClick={() => setHealthLabels("shellfish-free")}>shellfish-free</option>
          <option onClick={() => setHealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => setHealthLabels("sugar-conscious")}>sugar-conscious</option>
          <option onClick={() => setHealthLabels("sulfite-free")}>sulfite-free</option>
          <option onClick={() => setHealthLabels("tree-nut-free")}>tree-nut-free</option>
          <option onClick={() => setHealthLabels("vegan")}>vegan</option>
          <option onClick={() => setHealthLabels("vegetarian")}>vegetarian</option>
          <option onClick={() => setHealthLabels("wheat-free")}>wheat-free</option>
        </select>
      </form>
      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTitle recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
