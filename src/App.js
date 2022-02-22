import Footer from "./Components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import List from "./Pages/List/List";
import KakaoProfile from "./Pages/UserProfile/KakaoProfile";
import Header from "./Components/Header/Header";
import Detail from "./Pages/Detail/Detail";

import { Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Route path="/book_curly" component={Main} exact />
      <Route path="/login" component={Login} />
      <Route path="/myprofile" component={KakaoProfile} />
      <Route path="/signup" component={Signup} />
      <Route path="/list/:type" component={List} />
      <Route path="/detail/:isbn" component={Detail} />
      <Footer />
    </>
  );
}

export default App;
