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
import FavoritesMeals from "./Pages/Dashboard/FavoritesMeals/FavoritesMeals";
import Dashboard from "./Pages/Dashboard/Admin/Dashboard/Dashboard";
import MealList from "./Pages/Dashboard/Admin/MealList/MealList";
import AddMeal from "./Pages/Dashboard/Admin/AddMeal/AddMeal";
import Categories from "./Pages/Dashboard/Admin/Categories/Categories";
import Users from "./Pages/Dashboard/Admin/Users/Users";
import { AdminProtectionRouter, ProtectedRouter } from "./ProtectedRouter";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/*----- Public Routes -----*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/*----- Private Routes -----*/}
        <Route element={<ProtectedRouter />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<FavoritesMeals />} />
        </Route>
        {/*----- Admin Routes -----*/}
        <Route element={<AdminProtectionRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/meal-list" element={<MealList />} />
          <Route path="/add-meal" element={<AddMeal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
