/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { maxq, minq } from "../../util/style.ts";
import colors from "../atom/foundation/Color.tsx";
import Icons from "../atom/Icons";
import StyledTypography from "../atom/StyledTypography.tsx";
import { Link } from "react-router-dom";
import FlexBox from "../atom/FlexBox.tsx";
import FixedBox from "../atom/FixedBox.tsx";

const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);


  const headerStyle = {
    height: css({ height: "90px" }),
    container: css({
      top: 0,
      padding: "1rem 2rem",
      backgroundColor: colors.primary1,
      borderBottom: `2px solid ${colors.gray1}`,
    }),
  };

  return (
    <header css={headerStyle.height}>
      <FixedBox css={[headerStyle.height, headerStyle.container]}>
        <FlexBox
          direction="row"
          align="center"
          justify="space-between"
          css={{ height: "100%" }}
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
          <Logo />
          <NavBar />
          <HeaderRight setTheme theme/>
        </FlexBox>
      </FixedBox>
    </header>
  );
};

const Logo = () => {
  return (
    <div>
      <StyledTypography variant="h0B">보연</StyledTypography>
      <StyledTypography variant="h0" css={{ lineHeight: "38px" }}>
        공간
      </StyledTypography>
    </div>
  );
};

const NavBar = () => {
  return (
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
          {/* <Link to={"book"}>
          <StyledTypography variant="h0">BOOK</StyledTypography>
        </Link> */}
        </li>
      </ul>
    </nav>
  );
};

const HeaderRight = ({setTheme, theme}: any) => {
  return (
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
  );
};

export default Header;
