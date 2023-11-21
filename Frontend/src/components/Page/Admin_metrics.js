import React, { useState, useEffect } from "react";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import { Card, Container, Row, Col } from "react-bootstrap";
import "../Page/Styles.css";
import ticketData from "./Ticket_data.json";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = ticketData.map((entry) => ({
  ...entry,
  uv: entry.Ticket, // Use the 'Ticket' property as the 'uv' value, customize as needed
  date: entry.Date,
  ticketsclosed: entry.TicketsClosed,
  ticketsopened: entry.TicketsOpened,
}));

const AdminMetrics = () => {
  const [openedTickets, setOpenedTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9999/getOpenedTickets');
        if (response.ok) {
          const data = await response.json();
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

  const columns = [
    { dataField: 'title', text: 'Title' },
    { dataField: 'description', text: 'Description' },
    { dataField: 'category', text: 'Category' },
    { dataField: 'priority', text: 'Priority' },
    { dataField: 'assignee', text: 'Assignee' },
    {
      dataField: 'status',
      text: 'Status',
      formatter: (cell, row) => (
        <span style={{ color: 'green', fontWeight: 'bold' }}>OPENED</span>
      ),
    },
  ];

  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);

  const handleTableChange = (type, { page, sizePerPage }) => {
    setPage(page);
    setSizePerPage(sizePerPage);
  };

  return (
    <Container className="p-0">
      <Row className="container-header">
        <Col xs={12}></Col>
      </Row>

      <Row className="main-area">
        <Col xs={3} md={3}></Col>
        <Col xs={9} md={9}>
          <Row className="card-container">
            {cardData.map((data, index) => (
              <Col key={index} xs={12} md={6} lg={3}>
                <Card bg={data.variant} text={data.variant === "light" ? "dark" : "white"} className="mb-3">
                  <Card.Header>{data.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{data.value}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

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
            <Col xs={12} md={12} lg={12} className="table-container">
              <h3 className="text-center mb-3">Tickets Details</h3>
              <BootstrapTable
                keyField='id'
                data={openedTickets}
                columns={columns}
                pagination={paginationFactory({ page, sizePerPage })}
                onTableChange={handleTableChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminMetrics;
