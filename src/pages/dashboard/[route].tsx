import { useRouter } from "next/router";
import MyOrders from "./pages/my-orders";
import MyAccountProfile from "./pages/my-account-profile";
import MyWhishlist from "./pages/my-whishlist";

const DashboardPage = () => {
  const router = useRouter();
  const { route } = router.query; // Dynamic route

  return (
    <>
      {route === "my-orders" && <MyOrders />}
      {route === "my-whishlist" && <MyWhishlist />}
      {route === "my-account-profile" && <MyAccountProfile />}
    </>
  );
};

export default DashboardPage;
