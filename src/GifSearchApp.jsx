import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifSearchApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
 
  const onAddCategory = ( newCategory ) =>{
    setCategories([ newCategory, ...categories ]);
    // setCategories(cat => [...cat, 'valorant'])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifSearchApp</h1>

      {/* Input */}
      <AddCategory onNewCategory ={ onAddCategory }/>

      {/* Listado de Gifs */}
      
      <ol>
        {categories.map( category => {
            return <li key={ category }>{category}</li>
          })
        }
      </ol>
        {/* Gif item */}
    </>
  )
}
