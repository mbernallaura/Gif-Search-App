import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifSearchApp = () => {
  const [categories, setCategories] = useState(['dragon ball']);
 
  const onAddCategory = ( newCategory ) =>{
    newCategory = newCategory.toLowerCase();
    //!Si la categoria ya existe, no haga nada
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ]);
    // setCategories(cat => [...cat, 'valorant'])
  }

  return (
    <>
      {/* Titulo */}
      <h1>Gif Search</h1>

      {/* Input */}
      <AddCategory onNewCategory ={ onAddCategory }/>

      {/* Listado de Gifs */}
      
      {
        categories.map( (category) => (
          <GifGrid 
            key={ category }  
            category={ category }
          />
          )
        )
      }
    </>
  )
}
