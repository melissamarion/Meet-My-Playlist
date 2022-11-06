import './App.css'
import music from './data.json'
import PlayList from './Components/PlayList.js'
import SideBar from './Components/SideBar.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'

const App = () => {
  // function App() {
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
