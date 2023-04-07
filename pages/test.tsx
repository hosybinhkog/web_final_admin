import { NextPage } from "next";
import  Button  from "@/custom-binh/Button";

const Test: NextPage = () => {
  return (
   <div>
     <Button variant={"default"} size="lg" children={"hello"}></Button>
   </div>
  );
};

export default Test;
