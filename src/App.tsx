import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes'

function App() {

  return (
    <div className="App bg-black">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
