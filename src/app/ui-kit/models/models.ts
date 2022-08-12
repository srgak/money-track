export interface ListItem {
  label: string;
  value: any;
  disabled?: boolean;
}
export interface ListItemInfo {
  itemInfo: ListItem;
  el: Element;
}
// export interface DateChangeInfo {
//   param: 'year' | 'month',
//   action: 'prev' | 'next'
// }
export interface DateDay {
  value: number;
  disabled: boolean;
  active?: boolean;
}