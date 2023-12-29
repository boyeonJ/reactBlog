/** @jsxImportSource @emotion/react */

import { maxq, minq } from "../../util/style";
import colors from "../atom/Color";
import Icons from "../atom/Icons";
import Typography from "../atom/Typography";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      css={{
        height: "85px",
      }}
    >
      <div
        css={{
          backgroundColor: colors.white,
          position: "fixed",
          top: 0,
          width: "100%",
          height: "85px",
          borderBottom: `2px solid ${colors.gray3}`,
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

          <img src="/src/assets/logo.png" css={{ height: "2rem" }} />

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
                  <Typography variant="h1">BLOG</Typography>
                </Link>
              </li>
              <li>
                <Link to={"resume"}>
                  <Typography variant="h1">RESUME</Typography>
                </Link>
              </li>
              <li>
                <Link to={"book"}>
                  <Typography variant="h1">BOOK</Typography>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <Icons name="clear_night" size="large" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
