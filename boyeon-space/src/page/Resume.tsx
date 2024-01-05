/** @jsxImportSource @emotion/react */

import FlexBox from "../component/atom/FlexBox";
import Skills from "../component/molecules/Skills";
import Spacing from "../component/atom/Spacing";

const Resume = () => {
  return (
    <FlexBox>
      <Skills />
      <Spacing size={30} />
      <Skills />
      <Spacing size={30} />
      <Skills />
    </FlexBox>
  );
};

export default Resume;
