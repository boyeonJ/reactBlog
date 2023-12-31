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
      <main css={{ backgroundColor: colors.primary1 }}>
        <div css={{ margin: "0 200px" }}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
