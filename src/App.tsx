import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        {/* index itu page pertama */}
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="product" element={<Products/>}/>
        <Route path="contact" element={<Contact/>}>
          <Route path="info" element={<ContactInfo/>}/>
          <Route path="form" element={<ContactForm/>}/>
        </Route>
        <Route path="jobs" element={<Jobs/>}/>
      </Route>
    )
  );

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
