import React, {useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d3d066b82c5117aa34e8d08e4c3c0774`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
        axios.get(url).then((response) => {
         setData(response.data)
        console.log(response.data)
  })
  setLocation('')
}
}


  return (
    <div className="w-full min-h-screen px-4 py-8 bg-center bg-fixed bg-cover bg-[url('https://courses.ansys.com/wp-content/uploads/2020/04/DM_03242016_11131-scaled.jpg')]"> 
        <div class="max-w-xl mx-auto text-center">
        <div className="input w-auto align-center">
      <input type="text" name='search'  placeholder='Search City' aria-label='Search City'autoComplete='off'
      class='text-xl py-2 px-3 rounded-xl text-center'
      value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation}
      /> 
      <div className="search-button px-3 py-2">
      </div>
    </div>
    </div>
    <div className="container mx-auto text-center">
      <div className="main min-w-fit bg-transparent absolte py-3">
      <div className="city py-8">
        <h2 className='font-semibold text-8xl text-white'>{data.name} </h2>
      </div>
      <div className="app">
        <div className='font-semibold text-6xl text-white'>{data.main ? <h1>{data.main.temp} °F</h1> : null}</div>
      </div>
</div>

      </div>
      <div className="container-2 mx-auto min-h-screen justify-center">
      <div className="min-h-fit min-w-fit py-8  rounded-xl flex gap-8 md:gap-16 lg:gap-32 justify-center backdrop-blur-2xl">
   <div className="situation"><h1 className='font-semibold text-white text-xl md:text-2xl'>Situation</h1>
        <div className='font-semibold  text-white text-xl md:text-2xl'>{data.weather ? <h1>{data.weather[0].main}</h1> : null}</div>
      </div>

      <div className="humidity"><h1 className='font-bold text-white text-xl md:text-2xl'>Wind Speed</h1>
        <div className='font-semibold text-white text-xl md:text-2xl'>{data.wind ? <h1>{data.wind.speed}MPH</h1> : null}</div>
      </div>
      <div className="wind-speed"><h1 className='font-bold text-white text-xl md:text-2xl'>Humadity</h1>
        <div className='font-semibold text-white text-xl md:text-2xl'>{data.main ? <h1>{data.main.humidity}</h1> : null}</div>
      </div>
    </div>
      
      </div>
    </div>
    );
}

export default App;
