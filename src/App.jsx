import ProductList from "./Components/Productlist";
import { ProductProvider } from "./Context/ProductContext";
import ShoppingCart from "./Components/Shoppingcart";

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
      <main>
        <h1>HEJ JENYF</h1>
        <ProductList />
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default App;
