import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Provider from "./Provider";
import Message from "./Components/Message";
import StyleRender from "./Components/StyleRender";
import Nav from './Style/Nav';
import List from './Style/List';

const App = () => {
  return (
    <Provider>
      {/**  Navigation router */}
      <Router>
        <Nav>
          <ul>
            <List><Link to="/message">Message</Link></List>
            <List><Link to="/render">Style Render</Link></List>
          </ul>
        </Nav>

        <Switch>
          <Route exact path="/message" component={Message} />
          <Route exact path="/render" component={StyleRender} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
