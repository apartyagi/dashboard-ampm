import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import ServiceS from "../../service/ServiceProvider";
import CutomerS from "../../service/CustomerList";
import { useEffect,useState } from "react";


const Home = () => {
  
  const [tot, settot] = useState(0);
  const [act, setact] = useState(0);
  const [ina, setina] = useState(0);
  const [alc, setalc] = useState(0);

  useEffect(() => {
    const fetchApi=async()=>{
      const alCus=await CutomerS.findCountForAllCustomers();
      const alSer=await ServiceS.findCountForAllServiceProviders();
      const acSer=await ServiceS.findCountForActiveServiceProviders();
      const inSer=await ServiceS.findCountForInActiveServiceProviders();
      setalc(alCus.data.total);
      settot(alSer.data.total);
      setact(acSer.data.active);
      setina(inSer.data.inactive);
    }
    fetchApi();
  }, [])
    

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="al-cus" amount={alc} />
          <Widget type="al-serv" amount={tot} />
          <Widget type="ac-serv" amount={act} />
          <Widget type="in-serv" amount={ina} />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
