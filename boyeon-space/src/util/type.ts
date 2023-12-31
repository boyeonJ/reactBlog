import { ReactNode } from "react";

export type FoundationProps = {
  className?: string;
  children?: ReactNode;
};

export type ColorType =
  | "primary1"
  | "primary2"
  | "gray1"
  | "gray2"
  | "primary3";
