import Loading from "@/app/loading";
import { data } from "@/_data/data";
import Home from "@/app/components/Home";

export default function Page() {
  return (
    <Loading />
    // <div>
    //   {
    //     data ? <Home data={data} /> : <Loading />
    //   }
    // </div>
  );
}