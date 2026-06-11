import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/header/Header.tsx";
import ProductsList from "./components/products/ProductsList.tsx";
import ProductCartDrawer from "./components/products/ProductCartDrawer.tsx";
import {useState} from "react";
import ProductsCartProvider from "./context/cartContext/ProductsCartProvider";

function App() {
const [show, setShow] = useState<boolean>(false);

const closeCartDrawer = () => setShow(false);
const openCartDrawer = () => setShow(true);

  return (
      <div className={'main'}>
          <ProductsCartProvider>
              <Header handleOpenCartDrawer={openCartDrawer}/>
              <ProductsList />
              <ProductCartDrawer open={show} handleClose={closeCartDrawer}/>
          </ProductsCartProvider>
      </div>
  )
}

export default App