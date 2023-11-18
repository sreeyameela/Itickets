import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, Container, Row, Col } from "react-bootstrap";
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

const tdata = [
  // Your data
  { name: "Anom", Description: "about classes" },
  { name: "Raghu", Description: "about CPT application" },
  { name: "Preetham", Description: "List of Required Docs for the Processing" },
  { name: "Roy", Description: "Summer Vacation?" },
  { name: "Subham", Description: "Applied OPT and waiting for reply" },
];

const AdminMetrics = () => {
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
        <Col xs={9} md={3}></Col>
        <Col xs={12} md={9}>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>Ticket</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {tdata.map((val, key) => (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.Description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMetrics;
