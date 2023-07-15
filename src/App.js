import logo from './logo.svg';
import './App.css';
import RouteFun from './Route/Route';
import { BrowserRouter } from 'react-router-dom';
import { TodosProvider } from './context/Todos';


function App() {
  return (
    <div>
      <TodosProvider>
        <BrowserRouter>
          <RouteFun/>
        </BrowserRouter>
      </TodosProvider>
      
      
    </div>
  );
}

export default App;
