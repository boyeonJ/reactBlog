/** @jsxImportSource @emotion/react */

import FlexBox from "../component/atom/FlexBox";
import { css } from "@emotion/react";
import Skills from "../component/molecules/Skills";
import Spacing from "../component/atom/Spacing";

const resume = {
  section: css({
    section: { width: "100%"},
  }),
};

const Resume = () => {
  return (
    <FlexBox css={resume.section}>
      <Skills />
      <Spacing size={30} />
      <Skills />
      <Spacing size={30} />
      <Skills />
    </FlexBox>
  );
};

export default Resume;
