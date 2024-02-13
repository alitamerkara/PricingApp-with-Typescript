import {useState } from 'react';
import './App.css';
import Packages from './components/Packages';




function App() {
  const [deger,setDeger]=useState(false)
  return (
    <div className="App">
  <span className="ms-3 text-xl mr-4 font-medium text-gray-900 dark:text-gray-300">Monthly</span>
 <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" onChange={()=>{setDeger(deger=>!deger)
  console.log(deger)}}/>
  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
<span className="ms-3 text-xl ml-4 font-medium text-gray-900 dark:text-gray-300">Yearly</span>
<Packages deger={deger}/>
    </div>
  );
}

export default App;
