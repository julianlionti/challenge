import { Box, styled, Typography } from "@mui/material";
import { PageContainerProps } from "./usePageContainer";

const Root = styled(Box)`
  /* height: 100%; */
  flex: 1;
`;

const Container = styled("main")`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Centered = styled("div")`
  width: 80%;
  padding-bottom: 36px;
`;

const Title = styled(Typography)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children, title } = props;

  return (
    <Root sx={{ bgcolor: "background.default" }}>
      <Container>
        <Centered>
          <Title sx={{ color: "text.primary" }} variant="h3">
            {title}
          </Title>
          {children}
        </Centered>
      </Container>
    </Root>
  );
};

export default PageContainer;
