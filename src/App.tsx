import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles/styles'

import Rotas from './routesConfig/routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}
export default App
