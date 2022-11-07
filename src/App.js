import './App.css'
import songs from './songs.json'
import PlayList from './Components/PlayList.js'
import SideBar from './Components/SideBar.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

console.log(songs.json)

// const App = () => {
function App() {
  return (
    <div className="flex-row">
      <PlayList />
      <SideBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
