import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../ui/Row";
function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <header>Dashboard</header>
        <DashboardFilter></DashboardFilter>
      </Row>
      <DashboardLayout></DashboardLayout>
    </>
  );
}

export default Dashboard;
