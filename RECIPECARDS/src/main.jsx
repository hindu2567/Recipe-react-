import { createRoot } from "react-dom/client";
import RecipeCard from "./Recipe";
const root=createRoot(document.getElementById("root"));
function Card(){
  return(
    <>
    <RecipeCard/>
    <RecipeCard/>
    </>
  )
}
root.render(<Card/>);

