export interface ISelect {
  label: string,
  value: any
}

export interface ISort {
  ascFilter: boolean,
  typeFilter: string,
  arraySelect: Array<ISelect>,
  onClickFilterOrder:function,
  onChangeFilterType: function
}
