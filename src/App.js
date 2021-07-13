import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cn from "./pages/Cn";
import Dbms from "./pages/Dbms";
import Oosd from "./pages/Oosd";
import Os from "./pages/Os";
import Timetable from "./pages/Timetable";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />

      <Route path="/cn" exact component={Cn} />
      <Route path="/dbms" exact component={Dbms} />
      <Route path="/oosd" exact component={Oosd} />
      <Route path="/os" exact component={Os} />
      <Route path="/timetable" exact component={Timetable} />
    </div>
  );
}

export default App;
