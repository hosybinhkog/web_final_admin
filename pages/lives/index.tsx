import { Seo } from "@/components";
import LayoutAdmin from "@/layouts";
import logger from "@/libs/logger";
import { NextPage } from "next";
import React from "react";

const Lives: NextPage = () => {
  logger({ Binh: "Hồ Sỹ Bình" }, "error");
  return (
    <LayoutAdmin>
      <Seo title='Lives-manage' />
    </LayoutAdmin>
  );
};

export default Lives;
