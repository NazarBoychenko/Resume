import './App.css'

import { Header } from './componets/Header'
import { Arrow } from './componets/Arrow';

import { useState } from "react";

function App() {
   const [switches, setSwitches] = useState([]);

   return (
      <div className='App'>
         <Header Switch={(number) => { setSwitches(number) }} />
         <Arrow Switch={switches} />
      </div>
   )
}

export default App
