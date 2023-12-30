/** @jsxImportSource @emotion/react */
import colors from "../component/atom/foundation/Color";
import FlexBox from "../component/atom/FlexBox";
import StyledTypography from "../component/atom/StyledTypography";

const posts = [
  {
    title: "Lorem, ipsum.",
    date: "2022년 11월 21일",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi labore ipsam, dolores iure veritatis nihil repudiandae autem vero! Adipisci, placeat magnam? Quia sit debitis consectetur id magni sed repellendus.",
  },
  {
    title: "Lorem, ipsum. labore ipsam, dolores iure veritatis nihil r",
    date: "20223년 11월 21일",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi labore ipsam, dolores iure veritatis nihil repudiandae autem vero! Adipisci, placeat magnam? Quia sit debitis consectetur id magni sed repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi labore ipsam, dolores iure veritatis nihil repudiandae autem vero! Adipisci, placeat magnam? Quia sit debitis consectetur id magni sed repellendus.",
  },
  {
    title: "Lorem",
    date: "2025년 11월 21일",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi labore ipsam, dolores ",
  },
];

const Blog = () => {
  return (
    <>
      <section css={{ backgroundColor: colors.gray1, margin: "0 50px" }}>
        <header>
          <FlexBox css={{borderBottom: `1px solid ${colors.gray2}`}}>
            <StyledTypography variant="h1">Blog</StyledTypography>
            <StyledTypography color="gray2">
              기술을 기록합니다.(클린코드, 최적화, basic)
            </StyledTypography>
          </FlexBox>
        </header>
        <article>
          {posts.map((value) => (
            <FlexBox css={{borderBottom: `1px solid ${colors.gray2}`}}>
              <StyledTypography>{value.title}</StyledTypography>
              <StyledTypography>{value.date}</StyledTypography>
              <StyledTypography>{value.content}</StyledTypography>
            </FlexBox>
          ))}
        </article>
      </section>
    </>
  );
};

export default Blog;
