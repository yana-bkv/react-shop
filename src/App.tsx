import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/header/Header.tsx";
import ProductsList from "./components/products/ProductsList.tsx";
import ProductCartDrawer from "./components/products/ProductCartDrawer.tsx";
import {useState} from "react";

function App() {
const [show, setShow] = useState<boolean>(false);

const closeCartDrawer = () => setShow(false);
const openCartDrawer = () => setShow(true);

  return (
      <div className="main">
          <Header handleOpen={openCartDrawer}/>
          <ProductsList />
          <ProductCartDrawer open={show} handleClose={closeCartDrawer}/>
      </div>
  )
}

export default App