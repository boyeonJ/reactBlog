/** @jsxImportSource @emotion/react */
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/molecules/Header";
import { Global } from "@emotion/react";
import reset from "./reset";
import colors from "./component/atom/foundation/Color";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <main css={{height: "100vh", backgroundColor: colors.primary1 }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
