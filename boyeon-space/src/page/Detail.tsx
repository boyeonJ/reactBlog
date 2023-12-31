import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const Detail = () => {
  const params = useParams();

  console.log(params);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`../src/posts/${params.id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {markdown}
      </ReactMarkdown>
    </>
  );
};

export default Detail;
