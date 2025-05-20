import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import ListOffers from './pages/Offers/ListOffers';

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ListOffers />
    </QueryClientProvider>
  )
}

export default App
