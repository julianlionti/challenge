import { Button, Typography } from '@mui/material'
import { ColumnTemplate } from '../../components/ColumnTemplate/ColumnTemplate'
import CustomModal from '../../components/CustomModal/CustomModal'
import CustomTable from '../../components/CustomTable/CustomTable'
import PageContainer from '../../components/PageContainer/PageContainer'
import { useDashboard } from './useDashboard'

const Dashboard = () => {
  const {
    onAddUser,
    onEditUser,
    data,
    toggleDeleteConfirmation,
    showDeleteConfirmation,
    onDeleteUser,
    userToBeDelete,
    confirmDelete,
    isLoadingGet,
    isLoadingDelete,
    onSortUsers,
    sortConfiguration,
  } = useDashboard()
  return (
    <PageContainer title='Dashboard'>
      <CustomTable
        loading={isLoadingGet}
        rowKey='id'
        title='User list'
        onAdd={onAddUser}
        onDelete={onDeleteUser}
        onEdit={onEditUser}
        onSort={onSortUsers}
        sortConfiguration={sortConfiguration}
        data={data}
        height={450}
        emptyListLegend={'There are no users to show in table'}
      >
        <ColumnTemplate bindKey='id'>ID</ColumnTemplate>
        <ColumnTemplate bindKey='name'>Name</ColumnTemplate>
        <ColumnTemplate bindKey='username' sortable>
          Username
        </ColumnTemplate>
        <ColumnTemplate bindKey='email'>Email</ColumnTemplate>
        <ColumnTemplate bindKey='address.city'>City</ColumnTemplate>
      </CustomTable>
      <CustomModal
        loading={isLoadingDelete}
        show={showDeleteConfirmation}
        title='Delete user confirmation'
        message={`You are about to remove the user '${userToBeDelete?.email}'. Are you sure?`}
        ActionBtn={
          <Button disabled={isLoadingDelete} onClick={confirmDelete}>
            Yes, delete it!
          </Button>
        }
        onClose={toggleDeleteConfirmation}
      />
    </PageContainer>
  )
}

export default Dashboard
