// import type { HTMLAttributeAnchorTarget } from 'react'

// type HTMLAttributeAnchorTarget =
//    | "_self"
//    | "_blank"
//    | "_parent"
//    | "_top"
//    | (string & {});

/**
 * HTML Anchor Target
 * @see HTMLAttributeAnchorTarget
 */
export enum HtmlAnchorTarget {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top'
}
