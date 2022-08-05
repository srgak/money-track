export interface ListItem {
  label: string;
  value: any;
  disabled?: boolean;
}
export interface ListItemInfo {
  itemInfo: ListItem;
  el: Element;
}