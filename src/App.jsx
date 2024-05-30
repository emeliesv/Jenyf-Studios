import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Checkout from "./Pages/Checkout";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import CartIcon from "./Components/CartIcon";
import Header from "./Components/Header";
import AllProducts from "./Pages/AllProducts";
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
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
