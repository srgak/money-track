export interface ListItem {
  label: string;
  value: any;
  disabled?: boolean;
}
export interface ListItemInfo {
  itemInfo: ListItem;
  el: Element;
}
export interface DateDay {
  value: number;
  disabled: boolean;
  active?: boolean;
}
export interface PaginationItem {
  num: number;
  isActive: boolean
}
export interface PaginationInfo {
  type: 'num' | 'extreme';
  num: number;
}