import ProductList from "./Components/Productlist";

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
        <ProductList/>
      </main>
   </QueryClientProvider>
  );
}

export default App;
