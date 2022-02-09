export interface ColumnTemplateProps<T = any> {
  bindKey: string;
  renderColumn?: (value: any, row: any) => JSX.Element;
}

export const useColumnTemplate = () => {
  return {};
};
