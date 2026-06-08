import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/header/Header.tsx";
import ProductsList from "./components/products/ProductsList.tsx";

function App() {

  return (
      <div className="main">
          <Header/>
          <ProductsList />
      </div>
  )
}

export default App