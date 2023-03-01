import "./App.css";
import Search from "./component/search/Search";
import Category from "./component/category/Category";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>SnapShot</h1>
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
