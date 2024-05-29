import ProductList from "./Components/Productlist";
import { ProductProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";
import CartIcon from "./Components/CartIcon";

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
          <CartIcon />
          <ProductList />
        </ProductProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
