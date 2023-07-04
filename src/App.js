import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

function App() {

  const queryqlient = new QueryClient();

  return (
    <div>
    <QueryClientProvider client={queryqlient}>

      <Homepage/>
    </QueryClientProvider>
    </div>
  );
}

export default App;
