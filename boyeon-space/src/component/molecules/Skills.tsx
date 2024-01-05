/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import FlexBox from "../atom/FlexBox";
import StyledTypography from "../atom/StyledTypography";
import colors from "../atom/foundation/Color";

const skillStyle = {
  title: css({ paddingBottom: "10px", display: "inline-block" }),
  layout: css({
    borderTop: `2px solid ${colors.gray1}`,
    article: {
      display: "grid",
      gridTemplateColumns: "15% 85%",
      borderBottom: `1px solid ${colors.gray1}`,
      width: "100%",
      padding: "10px",
    },
  }),
};

const skills = [
  {
    name: "JavaScript",
    descriptions: [
      "ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.",
      "Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.",
      "reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.",
    ],
  },
  {
    name: "HTML / CSS",
    descriptions: [
      "디자인을 보고 페이지의 구조를 결정할 수 있습니다.",
      "Sass(Scss) 등의 CSS Preprocessor를 사용할 수 있습니다.",
      "Chrome, Safari, Edge 등 다양한 브라우저를 지원해본 경험이있습니다.",
    ],
  },
  {
    name: "DevOps",
    descriptions: [
      "AWS CodePipeline를 활용해 CI/CD를 구축할 수 있습니다.",
      "AWS EC2, RDS, S3, CloudFront, WAF 등 다양한 인프라 요소를 직접 구축 및 설정해본 경험이 있습니다.",
    ],
  },
  {
    name: "React",
    descriptions: [
      "React hooks를 능숙하게 사용하고, 거의 모든 컴포넌트를 함수로만듭니다. hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해사용할 수 있습니다. 각종 컴포넌트 디자인 패턴에 능숙하며, 합리적인방식으로 컴포넌트를 분리합니다.",
      "PureComponent와 React.memo에 대해서 이해하고 적절한 상황에서만 사용합니다",
      "Storybook을 사용한 컴포넌트 주도 개발을 할 수 있습니다.",
    ],
  },
];

const Skill = () => {
  return (
    <>
      <StyledTypography variant="h1" css={skillStyle.title}>
        기술 스택
      </StyledTypography>
      <FlexBox css={skillStyle.layout}>
        {skills.map((skill) => (
          <article key={skill.name}>
            <StyledTypography variant="h2">{skill.name}</StyledTypography>
            <ul>
              {skill.descriptions.map((description) => (
                <li key={description}>
                  <StyledTypography>{description}</StyledTypography>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </FlexBox>
    </>
  );
};

export default Skill;
