export interface IFilterOptions {
  title:string,
  status: boolean
}

export interface IFilter {
  filterCategory: Array<IFilterOptions>,
  filterPrice: Array<IFilterOptions>
}
