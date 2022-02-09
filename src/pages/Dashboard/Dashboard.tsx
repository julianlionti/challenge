import { Typography } from "@mui/material";
import { ColumnTemplate } from "../../components/ColumnTemplate/ColumnTemplate";
import CustomTable from "../../components/CustomTable/CustomTable";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useDashboard } from "./useDashboard";

const Dashboard = () => {
  const { onAddUser, data } = useDashboard();

  return (
    <PageContainer>
      <Typography variant="h4" component="h1">
        Dashboard
      </Typography>
      <CustomTable
        title="User list"
        onAdd={onAddUser}
        onDelete={onAddUser}
        onEdit={onAddUser}
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
