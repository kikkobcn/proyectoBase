import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeBody } from "./components/HomeBody";
import { NetworksBody } from "./components/NetworksBody";
import { Form_add_network } from "./components/Form_add_network";
import { Form_add_node } from "./components/Form_add_node";
import { Form_delete_network } from "./components/Form_delete_network";
import { Form_delete_node } from "./components/Form_delete_node";
import { Form_Faucet } from "./components/Form_Faucet";
import { Home } from "./Home";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody></HomeBody>}></Route>
            <Route path="/contact" element="contactar"></Route>
            <Route path="/whoami" element="nosotros"></Route>
            <Route
              path="/networkList"
              element={<NetworksBody></NetworksBody>}
            ></Route>
            <Route
              path="/Form_add_network"
              element={<Form_add_network></Form_add_network>}
            ></Route>
            <Route
              path="/Form_add_node"
              element={<Form_add_node></Form_add_node>}
            ></Route>
            <Route
              path="/Form_delete_network"
              element={<Form_delete_network></Form_delete_network>}
            ></Route>
             <Route
              path="/Form_delete_node"
              element={<Form_delete_node></Form_delete_node>}
            ></Route>
            <Route
              path="/Form_Faucet"
              element={<Form_Faucet></Form_Faucet>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
