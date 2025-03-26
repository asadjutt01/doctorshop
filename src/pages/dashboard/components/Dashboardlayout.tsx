// src/pages/dashboard/layout.tsx
import Footer from '@/components/Footer';
import HeaderWithCat from '@/components/HeaderWithCat';
import LabeledSelectDashboard from '@/components/LabeledSelectDashboard/LabeledSelectDashboard';
import Sidebar from '@/components/SideBar/SideBar';
import SideBarNew from '@/components/SideBar/SideBarNew';
import { DashboardList } from '@/constants/constant';
import { Option } from '@/types/types';
import { generateSlug, handleSelectChange } from '@/utils/functions';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { Modal } from "react-bootstrap";
import { RxCross1 } from 'react-icons/rx';
// Define props type for the layout component
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const router = useRouter();
    const { route } = router.query;
    //   const [currentStep, setCurrentStep] = useState(1);
    //   const [activeKey, setActiveKey] = useState("NewOrders");
    //   const [activeKey2, setActiveKey2] = useState("userDetail");
    //   const [menuRow, setMenuRow] = useState<number | null>(null);
    //   const [isOpenAdd, setIsOpenAdd] = useState(false);
    //   const handleShowAdd = () => setIsOpenAdd(true);
    const routes = [
      { value: 1, label: "My Orders" },
      { value: 2, label: "My Whishlist" },
      { value: 3, label: "My Account Profile" },
    ];
    const currentRoute  = routes?.find( (item:any)=>generateSlug(item.label) === route)
 const [dashboard, setDashboard] = useState<Option | any>({
    label: currentRoute?.label,
    value: 1,
  });
 
  // const { route } = router.query;
  
  const handleRoutesClick = (route: number) => {
    // console.log(step);
    // setCurrentStep(step);
    const current = routes?.find((item) => item.value === route);
    setDashboard(current);
  };
 const handleSelectDashBoardChange =
  (setter: React.Dispatch<React.SetStateAction<Option | null>>) =>
  (option: Option | null) => {
    setter(option);
    router.push(`/dashboard/${generateSlug(option?.label)}`)
    // setVatRateError('');
  };
  return (
   <div>
        <HeaderWithCat />
        <div className="panel-layout">
          <SideBarNew
            currentRoute={route}
            handleRoutesClick={handleRoutesClick}
            routes={routes}
          />
  
          <div className="form-input-container-dashboard">
            <LabeledSelectDashboard
              id="dashboard"
              options={routes}
              onChange={handleSelectDashBoardChange(setDashboard)}
              value={dashboard}
              required={false}
            />
          </div>
          <div className="user-panel-page">
          {children}
          </div>
        </div>
  
        <Footer />
      </div>
  );
}