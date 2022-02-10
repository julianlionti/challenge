import { useCustomTableCtx } from "../../providers/CustomTableProvider/useCustomTableProvider";

export interface HeaderType {
  title: string;
  bindKey?: string;
}

export interface TableHeaderCellProps extends HeaderType {}

export const useTableHeaderCell = (props: TableHeaderCellProps) => {
  const { bindKey } = props;
  const { sortConfiguration, onSort } = useCustomTableCtx();
  const handleOnSort = () => {
    if (onSort && sortConfiguration && bindKey) {
      const getNextSort = () => {
        const actualSort = sortConfiguration[bindKey];
        switch (actualSort) {
          case "":
            return "desc";
          case "desc":
            return "asc";
          default:
            return "";
        }
      };
      onSort({ ...sortConfiguration, [bindKey]: getNextSort() });
    }
  };

  const direction = sortConfiguration && bindKey && sortConfiguration[bindKey];
  const isSortable = direction !== undefined;
  const isActive = direction !== "";

  return {
    handleOnSort,
    sortConfiguration,
    isSortable,
    isActive,
    direction,
    ...props,
  };
};
