import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate replace to="dashboard"></Navigate>}
            ></Route>

            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="bookings" element={<Bookings></Bookings>}></Route>
            <Route path="account" element={<Account></Account>}></Route>
            <Route path="cabins" element={<Cabins></Cabins>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="settings" element={<Settings></Settings>}></Route>
          </Route>
          <Route path="Login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      ></Toaster>
    </QueryClientProvider>
  );
}

export default App;
