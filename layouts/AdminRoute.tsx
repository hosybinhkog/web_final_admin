import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Loading } from "../components";
import { useAppSelector } from "../hooks";

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { isAuthenticated, user, loading } = useAppSelector(
    (state) => state.user
  );

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "admin") {
      router.push("/login");
    }
  }, [isAuthenticated, user.role]);

  return <>{loading === true ? <Loading /> : children}</>;
};

export default AdminRoute;
