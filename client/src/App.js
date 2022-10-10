import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/getUsers/GetUsers";
import Form from "./Components/Form/Form";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Download from './pages/Download/download';
import OFirmie from './pages/O-firmie/O_firmie';
import Pomoc from './pages/Pomoc/Pomoc'
import Kontakt from './pages/Kontakt/Kontakt'


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
      {/* <Form /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/O_Firmie' element={<OFirmie />}/>
        <Route path='/Download' element={<Download />}/>
        <Route path='/Pomoc' element={<Pomoc />}/>
        <Route path='/Kontakt' element={<Kontakt />}/>
      </Routes>
    </BrowserRouter>
      
  </ApolloProvider>
  );
}

export default App;
