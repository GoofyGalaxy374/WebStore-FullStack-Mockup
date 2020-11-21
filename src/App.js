import logo from './logo.svg';
import './App.css';

import Products from './Components/Products'
import HoodiesPage from './Components/HoodiesPage'
import MasksPage from './Components/MasksPage'

import {store} from './Components/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
function App() {
  return (
      <div className="App">
      <Provider store={store}>
        <Router> 
          <Switch>
              <Route exact path='/Home' component={Products}/>

              <Route path='/Hoodies' component={HoodiesPage}/>
              <Route path='/Masks' component={MasksPage}/>

          </Switch>
        </Router>
      </Provider>

      </div>
  );
}

export default App;
