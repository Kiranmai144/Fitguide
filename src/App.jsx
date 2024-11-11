import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/home/Home"
import Workouts from "./pages/workouts/Workouts"
import Workout from "./pages/workout/Workout"
import Category from "./pages/category/Category"
import Calculators from "./pages/calculators/Calculators"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import NotFound from "./pages/notFound/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="exercises" >
            <Route index element={<Workouts />} />
            <Route path=":category" element={<Category />} />
            <Route path="exercise/:id" element={<Workout />} />
          </Route>
          <Route path="calculators" element={<Calculators />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App