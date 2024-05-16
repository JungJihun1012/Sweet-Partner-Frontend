import { ReactNode } from "react";

export type ImageProps = {
  src: string;
  alt: string;
}

export type BoxProps = {
  width: string;
  height: string;
}

export type HugProps = {
  children: ReactNode;
}
export type ButtonProps = {
  text: string;
  background: string;
}
export type KakaoMapProps = {
  center?: { latitude?: number; longitude?: number; }
  level: number;
  myLoca: {lat: number; lng: number;}
}

export type IconProps = BoxProps & ImageProps;
export type Valentine = BoxProps;
export type IconButtonProps = IconProps & ButtonProps;