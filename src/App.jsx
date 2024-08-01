import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Spotify__api from "./query/Spotify__api";
import GetToken from "./query/GetToken";

function App() {
  let client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <h1>hello world</h1>
        {/* <Spotify__api /> */}
        {/* <GetToken /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
