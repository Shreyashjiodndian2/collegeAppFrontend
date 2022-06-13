import { Box } from '@mui/system';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex', flexDirection: "row" }} whiteSpace="0">
        <Login />
        <Login />
      </Box>
    </div>
  );
}

export default App;
