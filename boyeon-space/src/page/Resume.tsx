/** @jsxImportSource @emotion/react */

import { useRef, useState } from "react";
import FlexBox from "../component/atom/FlexBox";
import StyledTypography from "../component/atom/StyledTypography";
import colors from "../component/atom/foundation/Color";
import { useMoveScroll } from "../hook/scroll";

const Resume = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(1);
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);
  const content3Ref = useRef<HTMLDivElement>(null);

  return (
    <div css={{
      display: "grid",
      gridTemplateColumns: "17% 80%",
      gap: '3%'
    }}>
      <aside css={{
        position: 'fixed',
        top: '90px',
        paddingTop: '30px'
      }}>
        <ul css={{ li: { marginBottom: '20px', } }}>
          {[{ title: '기술스택', ref: content1Ref }, { title: '경험', ref: content2Ref }, { title: '프로젝트', ref: content3Ref }].map((value, index) => {
            return (
              <li key={index} onClick={() => { useMoveScroll(value.ref); setCurrentMenu(index) }}>
                <StyledTypography variant={currentMenu === index ? "h1B" : "h1"}>{value.title}</StyledTypography>
              </li>
            )
          })}
        </ul>
      </aside>
      <FlexBox css={{ gap: '50px', gridColumn: '2', section: { width: '100%', scrollMarginTop: '100px' } }}>
        <section ref={content1Ref}>
          <FlexBox css={{
            borderTop: `2px solid ${colors.gray1}`
            , article: {
              display: "grid",
              gridTemplateColumns: "15% 85%",
              borderBottom: `1px solid ${colors.gray1}`,
              width: '100%',
              padding: '10px'
            }
          }}>
            <article>
              <StyledTypography variant="h2">JavaScript</StyledTypography>
              <ul>
                <li><StyledTypography>ES6 문법을 활용해 웹 어플리케이션을 개발하는 데 익숙합니다.</StyledTypography></li>
                <li><StyledTypography>Vanilla JavaScript를 활용해 DOM 조작하는 데 익숙합니다.</StyledTypography></li>
                <li><StyledTypography>reduce, map, filter 등 다양한 고차함수를 적극적으로 활용합니다.</StyledTypography></li>
              </ul>
            </article>

            <article >
              <StyledTypography variant="h2">HTML / CSS</StyledTypography>
              <ul>
                <li><StyledTypography>디자인을 보고 페이지의 구조를 결정할 수 있습니다.</StyledTypography></li>
                <li><StyledTypography>Sass(Scss) 등의 CSS Preprocessor를 사용할 수 있습니다.</StyledTypography></li>
                <li><StyledTypography>Chrome, Safari, Edge 등 다양한 브라우저를 지원해본 경험이 있습니다.</StyledTypography></li>
              </ul>
            </article>

            <article>
              <StyledTypography variant="h2">DevOps</StyledTypography>
              <ul>
                <li><StyledTypography>AWS CodePipeline를 활용해 CI/CD를 구축할 수 있습니다.</StyledTypography></li>
                <li><StyledTypography>AWS EC2, RDS, S3, CloudFront, WAF 등 다양한 인프라 요소를 직접 구축 및 설정해본 경험이 있습니다.</StyledTypography></li>
              </ul>
            </article>
            <article>
              <StyledTypography variant="h2">React</StyledTypography>
              <ul>
                <li><StyledTypography>React hooks를 능숙하게 사용하고, 거의 모든 컴포넌트를 함수로 만듭니다. hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해 사용할 수 있습니다.
                  각종 컴포넌트 디자인 패턴에 능숙하며, 합리적인 방식으로 컴포넌트를 분리합니다.</StyledTypography></li>
                <li><StyledTypography>PureComponent와 React.memo에 대해서 이해하고 적절한 상황에서만 사용합니다.</StyledTypography></li>
                <li><StyledTypography>Storybook을 사용한 컴포넌트 주도 개발을 할 수 있습니다.</StyledTypography></li>
              </ul>
            </article>


          </FlexBox>
        </section>
        <section ref={content2Ref} css={{ backgroundColor: colors.gray2 }}>

          <FlexBox css={{
            borderTop: `2px solid ${colors.gray1}`,
          }}>
            {[1, 2, 3, 4, 5, 6, 7].map(value => (
              <article css={{
                display: "grid",
                gridTemplateColumns: "10% 90%",
                borderBottom: `1px solid ${colors.gray1}`,
                width: '100%'
              }}>
                <StyledTypography>REACT</StyledTypography>
                <ul>
                  <li>클린 코드</li>
                  <li>최적화</li>
                  <li>hook</li>
                </ul>
              </article>
            ))}
          </FlexBox>
        </section>
        <section ref={content3Ref} css={{ width: '100%' }}>

          <FlexBox css={{
            borderTop: `2px solid ${colors.gray1}`,
          }}>
            {[1, 2, 3, 4, 5, 6, 7].map(value => (
              <article css={{
                display: "grid",
                gridTemplateColumns: "10% 90%",
                borderBottom: `1px solid ${colors.gray1}`,
                width: '100%'
              }}>
                <StyledTypography>REACT</StyledTypography>
                <ul>
                  <li>클린 코드</li>
                  <li>최적화</li>
                  <li>hook</li>
                </ul>
              </article>
            ))}
          </FlexBox>
        </section>
      </FlexBox>

    </div>
  );
};

export default Resume;
