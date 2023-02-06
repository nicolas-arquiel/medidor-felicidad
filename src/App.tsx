import { Provider } from 'react-redux/es/exports'
import './App.css'

import { Navbar } from './components'
import { Home } from './pages'
import store from './redux/store'
import { LayoutContainer } from './styledComponents'


function App() {

  return (
    <div className="App">
      <Provider store={store} >
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </Provider>
    </div>
  )
}

export default App
