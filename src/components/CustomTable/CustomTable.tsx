import {
  Button,
  Collapse,
  LinearProgress,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material'
import CustomTableProvider from '../../providers/CustomTableProvider/CustomTableProvider'
import ActionsCols from '../ActionsCols/ActionsCols'
import Cell from '../Cell/Cell'
import TableHeaderCell from '../TableHeaderCell/TableHeaderCell'
import { CustomTableProps, useCustomTable } from './useCustomTable'
import { Scrollbars } from 'react-custom-scrollbars'

const Root = styled('div')`
  width: 100%;
  margin-top: 8px;
`

const Title = styled(Typography)`
  flex: 1;
`

const CustomTable = <T,>(props: CustomTableProps<T>) => {
  const {
    title,
    onAdd,
    headers,
    children,
    sharedCtx,
    data,
    loading,
    emptyListLegend,
    height,
  } = useCustomTable(props)

  return (
    <CustomTableProvider {...sharedCtx}>
      <Root>
        <Paper>
          <Toolbar>
            <Title variant='h6'>{title}</Title>
            {onAdd && (
              <Button variant='contained' onClick={onAdd}>
                Add new user
              </Button>
            )}
          </Toolbar>
          <Collapse in={loading}>
            <LinearProgress />
          </Collapse>
          <Scrollbars style={{ width: '100%', height }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {headers.map((headerType) => (
                    <TableHeaderCell key={headerType.title} {...headerType} />
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!loading && data?.length === 0 && emptyListLegend && (
                  <TableRow>
                    <TableCell align='center' colSpan={children.length + 2}>
                      {emptyListLegend}
                    </TableCell>
                  </TableRow>
                )}
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
              </TableBody>
            </Table>
          </Scrollbars>
        </Paper>
      </Root>
    </CustomTableProvider>
  )
}

export default CustomTable
