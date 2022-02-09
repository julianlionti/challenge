import { Card, CardContent, Divider, styled, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer/PageContainer";
import { useUserCreation } from "./useUserCreation";

const UserCreation = () => {
  const { title } = useUserCreation();
  return (
    <PageContainer withBack title={"Dashboard"}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default UserCreation;
