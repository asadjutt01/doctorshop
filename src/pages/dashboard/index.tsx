// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     redirect: {
//       destination: "/dashboard/my-orders",
//       permanent: false, // Change to true for a permanent redirect (301)
//     },
//   };
// };

// export default function Dashboard() {
//   return null;
// }
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/my-orders");
  }, []);

  return null;
}