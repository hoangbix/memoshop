import { EmotionCache } from "@emotion/cache";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  guestGuard?: boolean;
  authGuard?: boolean;
  setConfig?: (() => void) | undefined;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

export type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};
