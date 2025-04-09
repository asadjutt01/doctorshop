import TableList from "@/components/TableList/TableList";
import Image from "next/image";
import { Tab, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { TableColumn } from "react-data-table-component";
import { FaEllipsisV } from "react-icons/fa";
import DashboardLayout from "../components/Dashboardlayout";
import Service from "@/services";
import { getItem } from "@/utils/localStorage/localStorage";

interface RowData {
  id: number;
  [key: string]: any;
}
const MyOrders = () => {
  const router = useRouter();
  //   const [currentStep, setCurrentStep] = useState(1);
  const [activeKey, setActiveKey] = useState("NewOrders");
  //   const [activeKey2, setActiveKey2] = useState("userDetail");
  const [menuRow, setMenuRow] = useState<number | null>(null);
  const user_id: any = getItem("user_id");
  //   const [isOpenAdd, setIsOpenAdd] = useState(false);
  //   const handleShowAdd = () => setIsOpenAdd(true);
  //   const handleCloseAdd = () => {
  //     setPostCode("");
  //     setAddressLine1("");
  //     setAddressLine2("");
  //     setAddressLine3("");
  //     setTown("");
  //     setCity("");
  //     setCounty("");
  //     setCountry(null);
  //     setIsOpenAdd(false);
  //   };

  // Add Deliery Modal States
  //   const [postCode, setPostCode] = useState<string>("");
  //   const [addressLine1, setAddressLine1] = useState<string>("");
  //   const [addressLine2, setAddressLine2] = useState<string>("");
  //   const [addressLine3, setAddressLine3] = useState<string>("");
  //   const [town, setTown] = useState<string>("");
  //   const [city, setCity] = useState<string>("");
  //   const [county, setCounty] = useState<string>("");
  //   const [country, setCountry] = useState<Option | any>(null);

  //   const [postCodeError, setPostCodeError] = useState<string>("");
  //   const [addressLine1Error, setAddressLine1Error] = useState<string>("");
  //   const [addressLine2Error, setAddressLine2Error] = useState<string>("");
  //   const [addressLine3Error, setAddressLine3Error] = useState<string>("");
  //   const [townError, setTownError] = useState<string>("");
  //   const [cityError, setCityError] = useState<string>("");
  //   const [countyError, setCountyError] = useState<string>("");
  //   const [countryError, setCountryError] = useState<string>("");

  //   const [dashboard, setDashboard] = useState<Option | any>({
  //     label: "My Orders",
  //     value: 1,
  //   });
  //   const steps = [
  //     { stepNumber: 1, title: "My Orders" },
  //     { stepNumber: 2, title: "My Whishlist" },
  //     { stepNumber: 3, title: "My Account Profile" },
  //   ];

  //   const handleStepClick = (step: number) => {
  //     // console.log(step);
  //     // setCurrentStep(step);
  //     const current = DashboardList?.find((item) => item.value === step);
  //     setDashboard(current);
  //   };

  const handleMenuToggle = (id: number) => {
    setMenuRow(menuRow === id ? null : id);
  };

  // const newOrdersData = Array.from({ length: 40 }, (_, index) => ({
  //   id: index + 1,
  //   date: `${index + 2} Jan 2025 `,
  //   invoiceNumber: `${index + 16876000}`,
  //   deliveryDate: `${index + 4} Jan 2025`,
  //   price: `$${index + 16876000}`,
  //   status: `Pending`,
  // }));
  // const deliveredData = Array.from({ length: 40 }, (_, index) => ({
  //   id: index + 1,
  //   date: `${index + 2} Jan 2025 `,
  //   invoiceNumber: `${index + 16876000}`,
  //   deliveryDate: `${index + 4} Jan 2025`,
  //   price: `$${index + 16876000}`,
  //   status: `Delivered`,
  // }));
  // const canceledData = Array.from({ length: 40 }, (_, index) => ({
  //   id: index + 1,
  //   date: `${index + 2} Jan 2025 `,
  //   invoiceNumber: `${index + 16876000}`,
  //   deliveryDate: `${index + 4} Jan 2025`,
  //   price: `$${index + 16876000}`,
  //   status: `Canceled`,
  // }));
  const [newOrdersData, setnewOrdersData] = useState<any>('')
  const [deliveredData, setdeliveredData] = useState<any>('')
  const [canceledData, setcanceledData] = useState<any>('')

  const fetchOrders = async () => {
    try {
      const formData = new FormData();
      formData.append("user_id", user_id); // Append user_id to FormData

      const response: any = await Service.Orders_Methods.getNewOrders(formData);

      // console.log("Orders Data >>>>>>", response);

      if (response) {
        setnewOrdersData(response.orders); // Assuming response contains an 'orders' array
      } else {
        // console.log("No orders received.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const deliveredOrders = async () => {
    try {
      const formData = new FormData();
      formData.append("user_id", user_id); // Append user_id to FormData

      const response: any = await Service.Orders_Methods.getDeliveredOrders(formData);

      // console.log("Orders Data >>>>>>", response);

      if (response) {
        setdeliveredData(response.orders); // Assuming response contains an 'orders' array
      } else {
        // console.log("No orders received.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const CancledOrders = async () => {
    try {
      const formData = new FormData();
      formData.append("user_id", user_id); // Append user_id to FormData

      const response: any = await Service.Orders_Methods.getCancelOrders(formData);

      // console.log("Orders Data >>>>>>", response);

      if (response) {
        setcanceledData(response.orders); // Assuming response contains an 'orders' array
      } else {
        // console.log("No orders received.");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    // console.log("Fetching orders...");
    fetchOrders();
    deliveredOrders();
    CancledOrders();
  }, []);


  // const getOrderDetail = async () => {

  //   try {
  //     const response: any = await Service.Orders_Methods.getCancelOrders();

  //     console.log("Orders Data >>>>>>", response);

  //     if (response) {
  //       setcanceledData(response.orders); // Assuming response contains an 'orders' array
  //     } else {
  //       console.log("No orders received.");
  //     }
  //   } catch (err) {
  //     console.error("Error fetching orders:", err);
  //   } finally {

  //   }
  // };




  const columns: TableColumn<RowData>[] | any = useMemo(
    () => [
      {
        name: "Date",

        selector: (row: any) => row.date || "—",
      },
      {
        name: "#Invoice Number",
        selector: (row: any) => row.invoice_number || "—",
      },
      {
        name: "Delivery Date",
        selector: (row: any) => row.delivery_date || "—",
      },
      {
        name: "Price",
        selector: (row: any) => (row.price ? `$${row.price}` : "—"),
      },
      {
        name: "Status",
        cell: (row: any) => (
          <div
            className="w-full"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  (row.status === "Pending" && "#FFD4D4") ||
                  (row.status === "Delivered" && "#87F5C9") ||
                  (row.status === "Cancel" && "#C5C1FF") ||
                  "#eee", // Default color
                color: "#000",
                padding: "4px",
                minWidth: "110px",
                borderRadius: "20px",
              }}
            >
              {row.status || "—"}
            </div>
          </div>
        ),
      },
      {
        name: "Action",
        cell: (row: any) => (
          <div style={{ position: "relative" }}>
            <FaEllipsisV
              color="#005eb8"
              style={{ cursor: "pointer" }}
              onClick={() => handleMenuToggle(row.id)}
            />
            {menuRow === row.id && (
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  top: "20px",
                  right: "0",
                  padding: "5px",
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  zIndex: 50,
                  width: "150px",
                  borderRadius: "2px",
                  boxShadow: "0px 3px 6px #00000029",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 5px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                  onClick={() => router.push(`/order-detail/${row.id}`)}
                  className="simple-bg-gray-hover"
                >
                  <Image
                    src={"/view-detail.svg"}
                    width={18}
                    height={18}
                    alt="View Detail Icon"
                  />
                  <span>Detail</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 5px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                  className="simple-bg-gray-hover"
                >
                  <Image
                    src={"/view-invoice.svg"}
                    width={18}
                    height={18}
                    alt="View Invoice Icon"
                  />
                  <span>View Invoice</span>
                </div>
              </div>
            )}
          </div>
        ),
        maxWidth: "100px",
        center: true,
      },
    ],
    [menuRow]
  );


  return (
    <DashboardLayout>


      <Tab.Container
        activeKey={activeKey}
        onSelect={(k: any) => setActiveKey(k)}
      >
        <div className="tabs-container-dashboard">
          <Nav variant="tabs" className="custom-tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="NewOrders"
                className="tabs-header-button"
              >
                New Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="DeliveredOrders"
                className="tabs-header-button"
              >
                Delivered Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="CanceledOrders"
                className="tabs-header-button"
              >
                Canceled Orders
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="custom-tab-content">
            <Tab.Pane eventKey="NewOrders">
              <div className="">
                <TableList
                  columns={columns}
                  data={newOrdersData}
                  fileName="Delivery Address Information"
                />
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="DeliveredOrders">
              <div className="">
                <TableList
                  columns={columns}
                  data={deliveredData}
                  fileName="Delivery Address Information"
                />
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="CanceledOrders">
              <div className="">
                <TableList
                  columns={columns}
                  data={canceledData}
                  fileName="Delivery Address Information"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </DashboardLayout>
  );
}

export default MyOrders;