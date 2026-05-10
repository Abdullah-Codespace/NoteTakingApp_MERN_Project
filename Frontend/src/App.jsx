import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";
const App = () => {
  return (
     <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(220%_55%_at_50%_115%,#B85A55_0%,#D0736B_20%,#E8DFC9_55%,#E8DFC9_100%)]"/>
      <Routes></Routes>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/note/:id" element={<NoteDetailPage />}/>
      </Routes>
    </div>
  );
};

export default App;

