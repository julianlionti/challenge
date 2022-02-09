import { styled } from "@mui/material";
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

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children } = props;

  return (
    <Root>
      <Header />
      <Container>
        <Centered>{children}</Centered>
      </Container>
    </Root>
  );
};

export default PageContainer;
