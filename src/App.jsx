import ProductList from "./Components/Productlist";
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
        <ShoppingCart />
        <ProductList />
      </main>
    </QueryClientProvider>
  );
}

export default App;
