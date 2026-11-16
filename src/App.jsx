import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboadlayout from "./components/layouts/dashboadLayout";
import Landingpage from "./pages/LandingPage";

export default function App() {
  return (
   <BrowserRouter>
      <Routes>

        <Route element={<Dashboadlayout/>}>
            <Route path="/" element={<Landingpage/>}/>
        </Route>

      </Routes>
   </BrowserRouter>
  );
}
