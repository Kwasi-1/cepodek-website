import Footer from "./components/Footer";
// import Header from "./components/Header";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
