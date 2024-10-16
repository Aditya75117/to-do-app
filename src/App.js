import { MyProvider } from "./MyContext";
import AppRouter from "./appRouter";

function App() {
  
  return (
    <MyProvider>
      <AppRouter/>
    </MyProvider>
  );
}

export default App;
