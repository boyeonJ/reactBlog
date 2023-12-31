/** @jsxImportSource @emotion/react */
import colors from "../component/atom/foundation/Color";
import FlexBox from "../component/atom/FlexBox";
import StyledTypography from "../component/atom/StyledTypography";
import "highlight.js/styles/a11y-dark.css";
import { posts } from "../posts/posts";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section css={{ backgroundColor: colors.gray1 }}>
        <header>
          <FlexBox css={{ borderBottom: `1px solid ${colors.gray2}` }}>
            <StyledTypography variant="h1">Blog</StyledTypography>
            <StyledTypography color="gray2">
              기술을 기록합니다.(클린코드, 최적화, basic)
            </StyledTypography>
          </FlexBox>
        </header>
        <article>
          {posts.map((value) => (
            <Link to={`/detail/${value.id}`}>
              <FlexBox css={{ borderBottom: `1px solid ${colors.gray2}` }}>
                <StyledTypography>{value.title}</StyledTypography>
                <StyledTypography>{value.date}</StyledTypography>
                <StyledTypography>{value.description}</StyledTypography>
              </FlexBox>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default Blog;
