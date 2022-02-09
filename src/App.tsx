import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Main from "./routes/Main";
import { CssBaseline } from "@mui/material";
import { injectStore } from "./utils/makeRequest";

injectStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
