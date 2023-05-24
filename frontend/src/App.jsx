import Category from './pages/Category'
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import SiteHeader from './components/SiteHeader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>
        <SiteHeader></SiteHeader>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route path='/details/:id' element={<ReviewDetails/>}></Route>
          <Route path='/category/:id' element={<Category/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
