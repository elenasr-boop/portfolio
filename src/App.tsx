import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contacts } from "./pages/contacts/Contacts";
import { NotFoundPage } from "./pages/notFound/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
