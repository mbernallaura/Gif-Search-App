import { useState } from "react";

export const GifSearchApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
 
  const onAddCategory = () =>{
    setCategories(['valorant', ...categories ]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifSearchApp</h1>

      {/* Input */}

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
