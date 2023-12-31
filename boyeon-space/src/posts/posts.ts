export type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
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
      "React query 캐시와 캐시 상태 활용해봅시다. React Query의 캐시 상태(fresh, stale, inactive)는 데이터가 얼마나 신선하고 활성 상태인지를 나타냅니다.      ",
  },
];
