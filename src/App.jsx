import NavBar from "./components/NavBar"
import Destacada from "./components/Destacada"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CarContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />
        
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
            <Route path={"/cart"} element={<Cart />}/>
            <Route path={"/checkout"} element={<Checkout/>}/>
            <Route path={"/thankyou/:boletaId"} element={<ThankYou/>}/>
            <Route path={"*"} element={<Error404/>}/>
          </Routes>

          <Destacada />
        
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App;
