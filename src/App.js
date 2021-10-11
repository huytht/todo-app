   
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MenuNgang } from './components/MenuNgang';
import { routes } from './config/routes';
import { MyRoute } from './components/MyRoute';
import { ToDoContextProvider } from './context/ToDoContext';

function App() {
  return (
    <div className="App">
      <h1>MY TODO APP</h1>
      <ToDoContextProvider>
        <BrowserRouter>
          {/* <!-- Menu ngang --> */}
          <MenuNgang />
          {/* Định tuyến */}
          <Switch>
            {routes.map((item, index) => {
              return (
                <MyRoute key={index} path={item.path} component={item.component} />
              )
            })}
          </Switch>
        </BrowserRouter>
      </ToDoContextProvider>
    </div>
  );
}

export default App;