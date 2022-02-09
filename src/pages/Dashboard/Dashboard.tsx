import { Typography } from "@mui/material";
import { ColumnTemplate } from "../../components/ColumnTemplate/ColumnTemplate";
import CustomTable from "../../components/CustomTable/CustomTable";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDashboard } from "./useDashboard";

const Dashboard = () => {
  const { onAddUser, onEditUser, data } = useDashboard();

  return (
    <PageContainer title="Dashboard">
      <CustomTable
        rowKey="id"
        title="User list"
        onAdd={onAddUser}
        onDelete={onAddUser}
        onEdit={onEditUser}
        data={data}
      >
        <ColumnTemplate bindKey="id">ID</ColumnTemplate>
        <ColumnTemplate bindKey="name">Name</ColumnTemplate>
        <ColumnTemplate bindKey="username">Username</ColumnTemplate>
        <ColumnTemplate bindKey="email">Email</ColumnTemplate>
        <ColumnTemplate bindKey="address.city">City</ColumnTemplate>
      </CustomTable>
    </PageContainer>
  );
};

export default Dashboard;
