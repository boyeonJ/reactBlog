/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { maxq, minq } from "../../util/style.ts";
import colors from "../atom/foundation/Color.tsx";
import Icons from "../atom/Icons";
import StyledTypography from "../atom/StyledTypography.tsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <header
      css={{
        height: "90px",
      }}
    >
      <div
        css={{
          backgroundColor: colors.primary1,
          position: "fixed",
          top: 0,
          width: "100%",
          height: "90px",
          borderBottom: `2px solid ${colors.gray1}`,
          padding: "1rem 2rem",
          boxSizing: "border-box",
        }}
      >
        <div
          className="header-container"
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icons
            name="menu"
            size="large"
            style={{
              [minq[1]]: {
                display: "none",
              }, 
            }}
          />

          <div css={{ display: "flex" }}>
            <StyledTypography variant="h0B">보연</StyledTypography>
            <StyledTypography variant="h0" css={{lineHeight: '38px'}}>공간</StyledTypography>
          </div>
          {/* <img src="/src/assets/logo.png" css={{ height: "2rem" }} /> */}

          <nav
            css={{
              [maxq[1]]: {
                display: "none",
              },
            }}
          >
            <ul
              css={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                li: {
                  marginRight: "3rem",
                },
              }}
            >
              <li>
                <Link to={"blog"}>
                  <StyledTypography variant="h0">BLOG</StyledTypography>
                </Link>
              </li>
              <li>
                <Link to={"resume"}>
                  <StyledTypography variant="h0">RESUME</StyledTypography>
                </Link>
              </li>
              <li>
                <Link to={"book"}>
                  <StyledTypography variant="h0">BOOK</StyledTypography>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <button
              css={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              onClick={() => setTheme("light" === theme ? "dark" : "light")}
            >
              <Icons
                name={"light" === theme ? "clear_night" : "clear_day"}
                size="large"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
