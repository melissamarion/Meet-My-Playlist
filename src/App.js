import './App.css'
import PlayList from './Components/PlayList.js'

const App = () => {
  return (
    <div>
      <PlayList text="Genre:" />
      <PlayList text="Title:" />
      <PlayList text="Count:" />
      <PlayList text="Song:" />
    </div>
  )
}

export default App
