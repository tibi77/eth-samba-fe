import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Login } from "./screens/Login";
import { Startup } from "./screens/Startup";
import { Backer } from "./screens/Backer";
import { Profile } from "./screens/Profile";


// Connects out Contract instance to the deployed contract
// address using the given wallet.
// ADD contract anywhere we need it
// const contract = CounterContractAbi__factory.connect(CONTRACT_ID, wallet);

const Layout = () => {
  return <>
    <div style={{
      background: "red",
      height: 100
    }}>

    </div>
    <Outlet />
  </>
}

function App() {
  // EXAMPLE HOW TO CALL Functions
  // const [counter, setCounter] = useState(0);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function main() {
  //     // Executes the counter function to query the current contract state
  //     // the `.get()` is read-only, because of this it don't expand coins.
  //     const { value } = await contract.functions.count().get();
  //     setCounter(Number(value));
  //   }
  //   main();
  // }, []);

  // async function increment() {
  //   // a loading state
  //   setLoading(true);
  //   // Creates a transactions to call the increment function
  //   // because it creates a TX and updates the contract state this requires the wallet to have enough coins to cover the costs and also to sign the Transaction
  //   try {
  //     await contract.functions.increment().txParams({ gasPrice: 1 }).call();
  //     const { value } = await contract.functions.count().get();
  //     setCounter(Number(value));
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  // </Router >
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/user/start-up" element={<Startup />} />
          <Route path="/user/crowd-founding" element={<Backer />} />
          <Route path="/user/profile" element={<Profile />} />
        </Route>
      </>
    )
  );
  return <>
    <RouterProvider router={router} />;
  </>;
}

export default App;