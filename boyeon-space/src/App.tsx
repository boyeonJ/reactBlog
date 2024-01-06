/** @jsxImportSource @emotion/react */

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/molecules/Header";
import { Global } from "@emotion/react";
import reset from "./reset";
import colors from "./component/atom/foundation/Color";
import Footer from "./component/molecules/Footer";
import { maxq } from "./utils/styles";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <main
        css={{
          backgroundColor: colors.primary1,
          minHeight: "100vh",
          paddingTop: "30px",
        }}
      >
        <div
          css={{
            [maxq[2]]: { margin: "0 100px" },
            [maxq[1]]: { margin: "0px 20px" },
            margin: "0 200px",
          }}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
