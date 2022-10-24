import { useState } from "react"
import { AddCatergory, GifGrid } from "./components";

export const GifExpertApp = () => {
  

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if ( categories.includes(newCategory) ) return;

    setCategories([newCategory,...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCatergory 
        onNewCategory={onAddCategory}
      />

      
      { categories.map( (category) => (
        
        <GifGrid key={category} category={category}/>

      ))
      }

      
    
    </>
  )
}
