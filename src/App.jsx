import { Route, Routes } from "react-router-dom";
// import NotFoundPage from "./Components/ReusableComponents/PageNotFound";
import Navbar from "./Components/ReusableComponents/NavbarComponent";

const App = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFoundPage/>} /> */}
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
};

export default App;
