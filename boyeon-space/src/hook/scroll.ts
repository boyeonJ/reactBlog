import { RefObject } from "react";

export const useMoveScroll =  (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}