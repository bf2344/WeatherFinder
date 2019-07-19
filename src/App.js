import React from 'react'
import Titles from './components/Titles'
import Form from "./components/Form"
import Weather from './components/Weather'

const API_KEY = "01b3cd1976a0c8efe2a1cf86798399b9"

class App extends React.Component {

getWeather = async () => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}
  `)
  const data = await api_call.json();
}

  //JSX in render method
  render(){
    return(
    <div>
      <Titles />
      <Form />
      <Weather />
    </div>
    )
  }
}

export default App