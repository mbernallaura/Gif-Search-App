import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifSearchApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
 
  const onAddCategory = () =>{
    setCategories(['valorant', ...categories ]);
    // setCategories(cat => [...cat, 'valorant'])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifSearchApp</h1>

      {/* Input */}
      <AddCategory/>

      {/* Listado de Gifs */}
      <button onClick={ onAddCategory }>Agregar</button>
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
