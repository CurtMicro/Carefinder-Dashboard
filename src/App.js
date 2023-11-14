import { Stack } from "@mui/material";

// Components
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        minHeight: "max-content",
      }}
    >
      <SideBar />
      <Main />
    </Stack>
  );
};

export default App;
