import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import ToastContainer from "./Components/Notifications/ToastContainer/ToastContainer";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Password from "./Pages/Dashboard/Password/Password";
import FavoritesMeals from "./Pages/Dashboard/FavoritesMeals/FavoritesMeals";
import Dashboard from "./Pages/Dashboard/Admin/Dashboard/Dashboard";
import MealList from "./Pages/Dashboard/Admin/MealList/MealList";
import AddMeal from "./Pages/Dashboard/Admin/AddMeal/AddMeal";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/favorites" element={<FavoritesMeals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meal-list" element={<MealList />} />
        <Route path="/add-meal" element={<AddMeal />} />
      </Routes>
    </>
  );
}

export default App;
