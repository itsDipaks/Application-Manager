import './App.css'
import ApplicationForm from './Components/ApplicationForm'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ApplicationForm/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
