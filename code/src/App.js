import "./app.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Services from "./pages/Services/Services";
import Price from "./pages/Price/Price";
import { News } from "./pages/pages";
// import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="price" element={<Price />} />
          <Route path="news" element={<News />} />
          {/* <Route path="services" element={<Services />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
