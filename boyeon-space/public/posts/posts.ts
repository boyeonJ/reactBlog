export type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
  tag?: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Emotion 더 잘 사용하기!",
    date: "2022년 11월 21일",
    description:
      "Emotion 더 잘 사용해봅시다! 이 글은 emotion 공식문서의 Best Practices 참고하여 작성되었습니다.",
  },
  {
    id: 2,
    title: "React query 캐시와 캐시 상태 활용하기",
    date: "2022년 11월 21일",
    description:
      "React query 캐시와 캐시 상태 활용해봅시다. React Query의 캐시 상태(fresh, stale, inactive)는 데이터가 얼마나 신선하고 활성 상태인지를 나타냅니다.",
    tag: ["최적화", "쇼핑몰"],
  },
  {
    id: 3,
    title: "emotion 활용하기와 최적화 방법",
    date: "2024년 01월 05일",
    description:
      "emotion을 활용한 방법과 최적화하는 방법을 소개합니다. 직접 프로젝트에 적용해 본 코드를 예시로 기록하였습니다.",
    tag: ["최적화", "blog", 'css'],
  },
];
