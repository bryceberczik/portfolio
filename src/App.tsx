import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
