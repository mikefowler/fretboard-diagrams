import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import FretboardPage from "./pages/FretboardPage";
import FretboardsPage from "./pages/FretboardsPage";
import ChordsPage from "./pages/ChordsPage";
import SheetPage from "./pages/SheetPage";
import AppProvider from "./providers/AppProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/fretboard" element={<FretboardPage />} />
      <Route path="/fretboards" element={<FretboardsPage />} />
      <Route path="/chords" element={<ChordsPage />} />
      <Route path="/sheet" element={<SheetPage />} />
    </Route>
  )
);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;