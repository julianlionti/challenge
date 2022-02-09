import { styled, Typography } from "@mui/material";
import Header from "../Header/Header";
import { PageContainerProps } from "./usePageContainer";

const Root = styled("div")`
  height: 100vh;
`;

const Container = styled("main")`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Centered = styled("div")`
  width: 80%;
`;

const Title = styled(Typography)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children, withBack, title } = props;

  return (
    <Root>
      <Header withBack={withBack} />
      <Container>
        <Centered>
          <Title variant="h3">{title}</Title>
          {children}
        </Centered>
      </Container>
    </Root>
  );
};

export default PageContainer;
