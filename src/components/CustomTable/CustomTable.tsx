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
import CustomTableProvider from "../../providers/CustomTableProvider/CustomTableProvider";
import ActionsCols from "../ActionsCols/ActionsCols";
import Cell from "../Cell/Cell";
import { CustomTableProps, useCustomTable } from "./useCustomTable";

const Root = styled("div")`
  width: 100%;
  margin-top: 8px;
`;

const Title = styled(Typography)`
  flex: 1;
`;

const StripedBody = styled(TableBody)`
  tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const DarkHeader = styled(TableCell)`
  background-color: #f2f2f2;
`;

const CustomTable = <T,>(props: CustomTableProps<T>) => {
  const { title, onAdd, headers, children, sharedCtx, data } =
    useCustomTable(props);

  return (
    <CustomTableProvider {...sharedCtx}>
      <Root>
        <Paper>
          <Toolbar>
            <Title variant="h6">{title}</Title>
            {onAdd && (
              <Button variant="contained" onClick={onAdd}>
                Add new user
              </Button>
            )}
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((title) => (
                  <DarkHeader align="center" key={title}>
                    {title}
                  </DarkHeader>
                ))}
              </TableRow>
            </TableHead>
            <StripedBody>
              {data.map((rowData: any, index) => (
                <TableRow key={rowData.id}>
                  {children.map((cols) => (
                    <Cell
                      key={cols.props.bindKey}
                      {...cols.props}
                      index={index}
                    />
                  ))}
                  <ActionsCols index={index} />
                </TableRow>
              ))}
            </StripedBody>
          </Table>
        </Paper>
      </Root>
    </CustomTableProvider>
  );
};

export default CustomTable;
