import './App.css';
import DataFetching from './components/DataFetching';
import ProductContextProvider from './context/ProductContextProvider'
import Home from '../src/pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

function App() {

  return (
    <ProductContextProvider>
      <BrowserRouter>
        <DataFetching />
        <Navbar />
        <Switch>
          <Route path="/" exact> <Home /></Route>
          <Route path="/Product/:id"> <Products /> </Route>
          <Route path="/Cart"> <Cart /> </Route>

        </Switch>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;
