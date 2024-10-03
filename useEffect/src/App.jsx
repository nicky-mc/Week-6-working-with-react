import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
// useEffect is a hook that allows you to perform side effects in function components
export default function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    //fetch data and async await
    async function fetchRecipes() {
      const response = await fetch("https://dummyjson.com/recipes");
      //convert the response to json
      const data = await response.json();
      //data wrangling so we can only get the recipes
      const wrangledData = data.recipes;
      console.log(wrangledData);
      setRecipes(wrangledData);
      console.log("recipes after setting state", wrangledData);
    }
    fetchRecipes();
  }, []);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch("https://dummyjson.com/comments");
      const data = await response.json();
      const wrangledData = data.comments;
      console.log(wrangledData);
      setComments(wrangledData);
      console.log("comments after setting state", wrangledData);
    }
    fetchComments();
  }, []);
  //the dependency array controls when the useEffect triggers after mounting or updating
  // if there is a value in the array, it will trigger when the value changes
  //if the array is empty, it will only trigger when the component mounts
  //if there is no array, it will trigger every time the component updates and potentially cause an infinite loop which can break your computer
  return (
    <>
      <div className="header">
        <header>
          <h1>useEffect - Fetch!</h1>
        </header>
      </div>
      <main>
        <h2>Recipes</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <div className="recipe-card-content">
              <h2>{recipe.name}</h2>
              <h3>{recipe.cuisine}</h3>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
            </div>
          </div>
        ))}
        <div className="comments-section">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <h3>{comment.user.username}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
