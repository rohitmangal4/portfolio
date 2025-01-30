import { Route, Routes } from "react-router-dom";
import Project from "./pages/ProjectPage";
// import NotFoundPage from "./Components/ReusableComponents/PageNotFound";


const App = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFoundPage/>} /> */}
      <Route path="/" element={<Project />} />
    </Routes>
  );
};

export default App;
