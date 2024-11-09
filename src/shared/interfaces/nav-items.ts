export interface ILinkItem {
  label: string
  url: string
  items?: ILinkItem[]
}

/**
 * data: ILinkItem
 */
export interface ILinkDataProps {
  /** ILinkItem */
  data: ILinkItem
}
