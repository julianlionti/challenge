export interface ColumnTemplateProps {
  bindKey: string
  renderColumn?: (value: any, row: any) => JSX.Element
  sortable?: boolean
}

export const ColumnTemplate: React.FC<ColumnTemplateProps> = () => null
