import './App.css'
import PlayList from './Components/PlayList.js'
import SideBar from './Components/SideBar.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

const App = () => {
  return (
    <div>
      <h1>Meet My Playlist</h1>
      <PlayList />
      <SideBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
