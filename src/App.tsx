import './App.css'

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish'


function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  let [dishes, setDishes] = useState<Dish[]>([]);

  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data: Dish[]) => setDishes(data))
      .catch(error => console.error("Error fetching dishes:", error));
  }, []);  


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student 
            apellidos={["Ruano", "Ledesma"]}
            nombres={["Joseph", "Antony"]}
            paralelo={2}>
          </Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={dishes}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
