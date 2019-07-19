import React from 'react'
import Titles from './components/Titles'
import Form from "./components/Form"
import Weather from './components/Weather'

const API_KEY = "01b3cd1976a0c8efe2a1cf86798399b9"

class App extends React.Component {
state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
  }

getWeather = async (e) => {
  e.preventDefault()
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}id=524901&APPID=${API_KEY}
  `)
  const data = await api_call.json();
  console.log(data)
  this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.name.humidity,
    description: data.weather[0].description,
    error: ""
  })
}

  //JSX in render method
  render(){
    return(
    <div>
      <Titles />
      <Form getWeather={this.getWeather}/>
      <Weather />
    </div>
    )
  }
}

export default App