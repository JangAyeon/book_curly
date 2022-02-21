import Footer from "./Components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import List from "./Pages/List/List";
import Header from "./Components/Header/Header";

import { Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/list/:type" component={List} />

      <Footer />
    </>
  );
}

export default App;
