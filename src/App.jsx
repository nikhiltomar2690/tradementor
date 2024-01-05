import NavBar from "./components/NavBar";
import { BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Blogs from "./components/Blogs";
import MonthlyReport from "./components/MonthlyReport";
import JoinNow from "./components/Joinnow";
export default function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blogs" element={<Blogs/>} />
        <Route path="quiz" element={<Quiz/>} />
        <Route path="monthlyreport" element={<MonthlyReport/>} />
        <Route path="joinnow" element={<JoinNow/>} />
      </Routes>
    </Router>
  );
}
