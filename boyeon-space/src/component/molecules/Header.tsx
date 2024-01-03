/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { maxq, minq } from "../../util/style.ts";
import colors from "../atom/foundation/Color.tsx";
import Icon from "../atom/Icon.tsx";
import IconButton from "../atom/IconButton.tsx";
import StyledTypography from "../atom/StyledTypography.tsx";
import { Link } from "react-router-dom";
import FlexBox from "../atom/FlexBox.tsx";
import FixedBox from "../atom/FixedBox.tsx";

const headerStyle: {
  height: any;
  container: any;
} = {
  height: css({ height: "90px" }),
  container: css({
    top: 0,
    padding: "1rem 2rem",
    backgroundColor: colors.primary1,
    borderBottom: `2px solid ${colors.gray1}`,
  }),
};

const navStyle = {
  li: css({ li: { marginRight: "3rem" } }),
};

const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <header css={headerStyle.height}>
      <FixedBox css={[headerStyle.height, headerStyle.container]}>
        <FlexBox
          direction="row"
          align="center"
          justify="space-between"
          css={{ height: "100%" }}
        >
          <HeaderLeft />
          <NavBar />
          <HeaderRight setTheme={setTheme} theme={theme} />
        </FlexBox>
      </FixedBox>
    </header>
  );
};

const HeaderLeft = () => {
  return (
    <>
      <Icon
        name="menu"
        size="large"
        style={{
          [minq[1]]: {
            display: "none",
          },
        }}
      />
      <div className="logo">
        <StyledTypography variant="h0B">보연</StyledTypography>
        <StyledTypography variant="h0" css={{ lineHeight: "38px" }}>
          공간
        </StyledTypography>
      </div>
    </>
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
      <ul css={navStyle.li}>
        <FlexBox direction="row">
          {["blog", "resume"].map((value: string) => (
            <li key={value}>
              <Link to={value}>
                <StyledTypography variant="h0">{value.toUpperCase()}</StyledTypography>
              </Link>
            </li>
          ))}
        </FlexBox>
      </ul>
    </nav>
  );
};

const HeaderRight = ({ setTheme, theme }: any) => {
  return (
    <div>
      <IconButton
        onClick={() => setTheme("light" === theme ? "dark" : "light")}
        name={"light" === theme ? "clear_night" : "clear_day"}
        size="large"
      />
    </div>
  );
};

export default Header;
