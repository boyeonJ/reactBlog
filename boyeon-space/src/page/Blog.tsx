/** @jsxImportSource @emotion/react */
import colors from "../component/atom/foundation/Color";
import FlexBox from "../component/atom/FlexBox";
import StyledTypography from "../component/atom/StyledTypography";
import "highlight.js/styles/a11y-dark.css";
import { posts } from "../posts/posts";
import { Link } from "react-router-dom";
import Icons from "../component/atom/Icons";

const Blog = () => {
  return (
    <>
      <section>
        <header>
          <FlexBox
            css={{
              borderBottom: `2px solid ${colors.gray1}`,
              padding: "20px 0",
            }}
          >
            <StyledTypography variant="h1">Blog</StyledTypography>
            <StyledTypography color="gray2">
              기술을 기록합니다.(클린코드, 최적화, basic)
            </StyledTypography>
          </FlexBox>
        </header>
        {posts.map((value) => (
          <article
            css={{
              borderBottom: `2px solid ${colors.gray1}`,
              padding: "30px 20px",
            }}
          >
            <Link to={`/detail/${value.id}`}>
              <FlexBox css={{ gap: "10px" }}>
                <StyledTypography variant="h1">{value.title}</StyledTypography>
                <FlexBox direction="row" css={{gap: '5px'}}>
                  <Icons size="medium" name="calendar_today" color="gray2"/>
                  <StyledTypography variant="h2" color="gray2">
                    {value.date}
                  </StyledTypography>
                </FlexBox>
                <StyledTypography variant="h2" color="gray2">
                  {value.description}
                </StyledTypography>
              </FlexBox>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default Blog;
