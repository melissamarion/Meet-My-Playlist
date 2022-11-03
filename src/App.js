import './App.css'
import PlayList from './Components/PlayList.js'
import SideBar from './Components/SideBar.js'
import Main from './Components/Main.js'

const App = () => {
  return (
    <div>
      <h1>Meet My Playlist</h1>
      <PlayList text="Genre:" />
      <PlayList text="Title:" />
      <PlayList text="Count:" />
      <PlayList text="Song:" />
      <br></br> <br></br> <br></br>
      <PlayList text="Genre:" />
      <PlayList text="Title:" />
      <PlayList text="Count:" />
      <PlayList text="Song:" />
      <br></br> <br></br> <br></br>
      <PlayList text="Genre:" />
      <PlayList text="Title:" />
      <PlayList text="Count:" />
      <PlayList text="Song:" />
      <br></br> <br></br> <br></br>
      <PlayList text="Genre:" />
      <PlayList text="Title:" />
      <PlayList text="Count:" />
      <PlayList text="Song:" />
      <SideBar />
      <Main />
    </div>
  )
}

export default App
