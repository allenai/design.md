// Generated from strata/DESIGN.md by scripts/emit-tokens.ts. Do not edit.

export interface Colors {
  "extra-dark-teal": string;
  "dark-teal": string;
  cream: string;
  teal: string;
  "teal-20": string;
  "teal-40": string;
  "teal-60": string;
  "teal-80": string;
  pink: string;
  "pink-20": string;
  "pink-40": string;
  "pink-60": string;
  "pink-80": string;
  green: string;
  "green-20": string;
  "green-40": string;
  "green-60": string;
  "green-80": string;
  gray: string;
  "gray-20": string;
  "gray-40": string;
  "gray-60": string;
  "gray-80": string;
  white: string;
  "info-blue": string;
  "error-red": string;
  "error-red-dark": string;
  "success-green": string;
  "warning-orange": string;
  "extra-dark-teal-10": string;
  "extra-dark-teal-20": string;
  "extra-dark-teal-30": string;
  "extra-dark-teal-40": string;
  "extra-dark-teal-50": string;
  "extra-dark-teal-60": string;
  "extra-dark-teal-70": string;
  "extra-dark-teal-80": string;
  "extra-dark-teal-90": string;
  "cream-10": string;
  "cream-20": string;
  "cream-30": string;
  "cream-40": string;
  "cream-50": string;
  "cream-60": string;
  "cream-70": string;
  "cream-80": string;
  "cream-90": string;
  background: string;
  "background-reversed": string;
  text: string;
  "text-reversed": string;
  "text-disabled": string;
  "text-error": string;
  "interactive-default": string;
  "interactive-default-hover": string;
  "interactive-primary": string;
  "interactive-primary-hover": string;
  "interactive-secondary": string;
  "interactive-secondary-hover": string;
  link: string;
  "link-reversed": string;
  subtle: string;
  "extra-subtle": string;
  "on-subtle": string;
  "on-extra-subtle": string;
}

export type ColorName = keyof Colors;

export interface Typography {
  display: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "heading-xl": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "heading-lg": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "heading-md": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "heading-sm": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "body-lg": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "body-md": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "body-sm": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  "body-xs": {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  mono: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
}

export type TypographyName = keyof Typography;

export type TypographyToken = Typography[TypographyName];

export interface Spacing {
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
}

export type SpacingName = keyof Spacing;

export interface Rounded {
  "3xs": string;
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
}

export type RoundedName = keyof Rounded;

export interface Components {
  "button-default": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-default-hover": {
    backgroundColor: string;
    textColor: string;
  };
  "button-reversed": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-reversed-hover": {
    backgroundColor: string;
    textColor: string;
  };
  "button-primary": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-primary-hover": {
    backgroundColor: string;
    textColor: string;
  };
  "button-secondary": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-secondary-hover": {
    backgroundColor: string;
    textColor: string;
  };
  "button-default-outlined": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-default-outlined-hover": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  "button-reversed-outlined": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-reversed-outlined-hover": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  "button-primary-outlined": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-primary-outlined-hover": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  "button-secondary-outlined": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "button-secondary-outlined-hover": {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  "button-disabled": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "button-size-sm": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "button-size-md": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "button-size-lg": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "input-default": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "input-error": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "input-disabled": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "input-size-sm": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "input-size-md": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "input-size-lg": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "checkbox-default": {
    backgroundColor: string;
    borderColor: string;
    width: string;
    height: string;
    rounded: string;
  };
  "checkbox-checked": {
    backgroundColor: string;
    textColor: string;
  };
  "radio-default": {
    backgroundColor: string;
    borderColor: string;
    width: string;
    height: string;
  };
  "radio-checked": {
    backgroundColor: string;
    textColor: string;
  };
  "switch-default": {
    backgroundColor: string;
    borderColor: string;
    width: string;
    height: string;
  };
  "switch-checked": {
    backgroundColor: string;
    textColor: string;
  };
  "slider-track": {
    backgroundColor: string;
    height: string;
  };
  "slider-track-filled": {
    backgroundColor: string;
  };
  "chip-default": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "chip-primary": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "chip-secondary": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "chip-subtle": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "chip-extra-subtle": {
    backgroundColor: string;
    textColor: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
    rounded: string;
    padding: string;
  };
  "chip-size-sm": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "chip-size-md": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "chip-size-lg": {
    height: string;
    padding: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "avatar-default": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "avatar-primary": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "avatar-secondary": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "avatar-subtle": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "avatar-extra-subtle": {
    backgroundColor: string;
    textColor: string;
    rounded: string;
  };
  "avatar-size-xs": {
    width: string;
    height: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "avatar-size-sm": {
    width: string;
    height: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
  "avatar-size-md": {
    width: string;
    height: string;
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    };
  };
}

export type ComponentName = keyof Components;

export type ComponentToken<K extends ComponentName> = Components[K];

export interface AnyComponentToken {
  backgroundColor?: string;
  textColor?: string;
  typography?: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  rounded?: string;
  padding?: string;
  borderColor?: string;
  height?: string;
  width?: string;
}

export type GroupName = "colors" | "typography" | "spacing" | "rounded" | "components";

export interface Tokens {
  $name: string;
  $version: string | null;
  $description: string | null;
  $groups: readonly string[];
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  rounded: Rounded;
  components: Components;
}
