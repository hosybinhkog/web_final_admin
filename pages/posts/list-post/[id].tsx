import { Seo } from "@/components";
import { useRouter } from "next/router";
import React from "react";

const ListPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Seo title='list report post' />
    </>
  );
};

export default ListPostPage;
