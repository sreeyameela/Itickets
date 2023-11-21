import React,{useState,useEffect} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, Container, Row, Col, Table } from "react-bootstrap";
import "../Page/Styles.css";
import ticketData from "./Ticket_data.json";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = ticketData.map((entry) => ({
  ...entry,
  uv: entry.Ticket, // Use the 'Ticket' property as the 'uv' value, customize as needed
  date: entry.Date,
  ticketsclosed: entry.TicketsClosed,
  ticketsopened: entry.TicketsOpened,
 
}));

// const tdata = [
//   // Your data
//   { name: "Anom", Description: "about classes" },
//   { name: "Raghu", Description: "about CPT application" },
//   { name: "Preetham", Description: "List of Required Docs for the Processing" },
//   { name: "Roy", Description: "Summer Vacation?" },
//   { name: "Subham", Description: "Applied OPT and waiting for reply" },
// ];


const AdminMetrics = () => {

  const [openedTickets, setOpenedTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching opened tickets...');
        const response = await fetch('http://localhost:9999/getOpenedTickets');
        if (response.ok) {
          console.log('Data received successfully.');
          const data = await response.json();
          console.log('Data from server:', data);

          // Update the state with the fetched data
          setOpenedTickets(data);
        } else {
          console.error('Failed to fetch data from the server');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const cardData = [
    { title: "Tickets Created", value: 100, variant: "primary" },
    { title: "Tickets Solved", value: 200, variant: "success" },
    { title: "Tickets Pending", value: 300, variant: "danger" },
    { title: "Tickets Drafted", value: 400, variant: "light" },
  ];

  return (
    <Container className="p-0">
      {/* Header Row */}
      <Row className="container-header">
        <Col xs={12}></Col>
      </Row>

      {/* Sidebar and Main Area Row */}
      <Row className="main-area">
        <Col xs={3} md={3}></Col>
        <Col xs={9} md={9}>
          {/* Main content, including metrics */}
          <Row className="card-container">
            {cardData.map((data, index) => (
              <Col key={index} xs={12} md={6} lg={3}>
                <Card
                  bg={data.variant}
                  text={data.variant === "light" ? "dark" : "white"}
                  className="mb-3"
                >
                  <Card.Header>{data.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{data.value}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Area Chart and Table */}
          <Row>
            <Col xs={12} md={12} className="chart-container">
              <h3 className="text-center mb-3">Tickets Overview</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="ticketsopened"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="ticketsclosed"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Col>
            <Col xs={12} md={12} className="table-container">
              <h3 className="text-center mb-3">Tickets Details</h3>
              <Table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Assignee</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                {openedTickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.title}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.priority}</td>
                    <td>{ticket.assignee}</td>
                    <td style={{ color: 'green', fontWeight: 'bold' }}>
                      {/* Replace with an appropriate tick symbol */}
                      OPENED
                    </td>
                  </tr>
                ))}

                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMetrics;
