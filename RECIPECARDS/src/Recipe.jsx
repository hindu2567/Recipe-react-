import Header from "./components/Header";
import Info from "./components/Info";
import Footer from "./components/Footer";
export default function RecipeCard(){
    return(
       <div className="recipe-container">
        <Header/>
        <Info/>
        <Footer/>
       </div> 
    );
}