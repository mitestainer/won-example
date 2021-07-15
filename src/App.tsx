import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Store } from './pages/Store'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/loja" component={Store} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
