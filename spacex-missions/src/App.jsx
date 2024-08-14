// import './App.css'
import { Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import logo from './assets/spacex_logo_black.png';
import { LaunchItem } from './components/LaunchItem';
import * as API from "./services/launches";

export function App() {
  const [launches, setLaunches] = useState([]); //siempre tiene que estar a la altura del componente
 
  // si el array de dependencias tiene otra variable o ese valor cambia, es que se ejecuta, si esta vacio se ejecuta al montar el componente
  useEffect(() => {
  API.getLaunches().then(setLaunches)
}, [])
  return (
  <>
  <Image src={logo} width={300} alt="logo" m={4}/>
   <Heading as ='h1' size='lg' m={4}>SpaceX Launches</Heading>
   <section>
    {launches.map(launch => (
     <LaunchItem key={launch.flight_number} {...launch}/>
    ))}
   </section>
   <div>Hola mundo</div>
   </>
  )
}
