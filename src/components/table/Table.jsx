import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TList = () => {
  const rows = [
    {
      id: 1143155,
      product: "Plumber",
      customer: "John Smith",
      serv:"Arthur",
      date: "1 March | 5:36 PM",
      amount: "$785",
      status: "Pending",
    },
    {
      id: 2235235,
      product: "HVAC",
      customer: "Michael Doe",
      date: "8 March | 6:17 AM",
      amount: "$900",
      serv:"Martha",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "ELECTRICAL",
      customer: "John Smith",
      date: "1 March | 5:36 PM",
      serv:"Eddie",
      amount: "$35",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "HVAC",
      customer: "Jane Smith",
      date: "8 March | 6:17 AM",
      serv:"Jonas",
      amount: "$920",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "LOCKSMITH",
      customer: "Harold Carol",
      date: "8 March | 6:17 AM",
      serv:"Adam",
      amount: "$2000",
      status: "Pending",
    },
    {
      id: 5342355,
      product: "ELECTRICAL",
      customer: "Harold Carol",
      date: "1 March | 5:36 PM",
      serv:"Harro",
      amount: "$2000",
      status: "Pending",
    },
    {
      id: 3342355,
      product: "PLUMBER",
      customer: "Harold Carol",
      date: "8 March | 6:17 AM",
      serv:"BISH",
      amount: "$2000",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Booking ID</TableCell>
            <TableCell className="tableCell">Service</TableCell>
            <TableCell className="tableCell">Service Provider</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date & Time</TableCell>
            <TableCell className="tableCell">Estimate Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.serv}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TList;
