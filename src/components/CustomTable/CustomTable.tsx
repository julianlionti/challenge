import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  CustomTableCtx,
  CustomTableProps,
  useCustomTable,
} from "./useCustomTable";

const Root = styled("div")`
  width: 100%;
  margin-top: 8px;
`;

const Title = styled(Typography)`
  flex: 1;
`;

const CustomTable = <T,>(props: CustomTableProps<T>) => {
  const { title, onAdd, headers, data, children } = useCustomTable(props);
  console.log(data);
  return (
    // <CustomTableCtx.Provider value={data}>
    <Root>
      <Paper>
        <Toolbar>
          <Title variant="h6">{title}</Title>
          {onAdd && <Button>Add</Button>}
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((title) => (
                <TableCell key={title}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((rowData: any) => (
              <TableRow key={rowData.id}>
                {children.map((cols) => cols)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Root>
    // </CustomTableCtx.Provider>
  );
};

export default CustomTable;
