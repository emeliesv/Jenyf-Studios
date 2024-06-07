import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Checkout from "./Pages/Checkout";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import Header from "./Components/Header";
import AllProducts from "./Pages/AllProducts";
import ProductInfo from "./Pages/Productinfo";
import Footer from "./Components/Footer";
import Confirmation from "./Pages/Confirmation";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/product/:productId" element={<ProductInfo />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
