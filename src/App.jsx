import ProductList from "./Components/Productlist";
import { ProductProvider } from "./Context/ProductContext";

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
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default App;
