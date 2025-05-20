import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import ListOffers from './pages/Offers/ListOffers';
import ListSkills from './pages/Skills/ListSkills';

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ListOffers />
    </QueryClientProvider>
  )
}

export default App
