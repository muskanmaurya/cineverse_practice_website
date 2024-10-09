
// import './App.css'
// import {AllRoutes} from "./Routes/AllRoutes"
// // import{Routes} from "./Routes"
// import {Header} from "./Components/Header"
// import {Footer} from "./Components/Footer"


// function App() {

//   return <>
//   <Header/>
//   <Footer/> 
//   <AllRoutes/>
//   {/* <h1 className="text-2xl bg-red-700">Hello!</h1> */}
//   </>
  
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import { MovieList } from "./Pages/MovieList";
import { PageNotFound } from "./Pages/PageNotFound";

const App = () => {
  return (
    <Router>

      <Header />
        
        <Routes>
        <Route path="/" elements={<MovieList />}></Route>
        <Route path="/movie/:id" elements={<MovieList />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/movies/popular" elements={<MovieList />}></Route>
        <Route path="/movies/top" elements={<MovieList />}></Route>
        <Route path="/movies/upcoming" elements={<MovieList />}></Route>
        <Route path="/search" elements={<MovieList />}></Route>
      </Routes>

    <Footer/>
    </Router>
  );
};

export default App;
