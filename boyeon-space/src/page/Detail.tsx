/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import StyledTypography from "../component/atom/StyledTypography";
import { Post, posts } from "../../public/posts/posts";
import FlexBox from "../component/atom/FlexBox";
import Icons from "../component/atom/Icon";
import colors from "../component/atom/foundation/Color";

const Detail = () => {
  const params = useParams();
  const [markdown, setMarkdown] = useState("");
  const post: Post[] = posts.filter(
    (value: Post) => value.id === Number(params.id)
  );

  useEffect(() => {
    fetch(`/posts/${params.id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <section css={{border: `2px solid ${colors.gray1}`, padding: '30px 30px', marginTop: '10px'}}>
        <header>
          <FlexBox css={{gap: '10px'}}>
            <StyledTypography variant="h1">{post[0].title}</StyledTypography>
            <FlexBox direction="row" css={{ gap: "5px" }}>
              <Icons size="medium" name="calendar_today" color="gray2" />
              <StyledTypography variant="h2" color="gray2">
                {post[0].date}
              </StyledTypography>
            </FlexBox>
          </FlexBox>
        </header>
        <article css={{borderTop: `2px solid ${colors.gray1}`, paddingTop: '30px', color: colors.primary3}}>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </>
  );
};

export default Detail;
