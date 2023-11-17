import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import './style.css';

export default function ViewTicket() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const dummyData = [
    {
      ticketNo: '001',
      firstName: 'John',
      lastName: 'Doe',
      ticketCategory: 'Technical Support',
      priority: 'High',
      subject: 'Issue with login',
    },
    {
      ticketNo: '002',
      firstName: 'Alice',
      lastName: 'Johnson',
      ticketCategory: 'Billing',
      priority: 'Medium',
      subject: 'Payment not processed',
    },
    {
      ticketNo: '003',
      firstName: 'Bob',
      lastName: 'Smith',
      ticketCategory: 'General Inquiry',
      priority: 'Low',
      subject: 'Product information',
    },
  ];

  const filteredData = dummyData.filter(
    (data) =>
      data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.ticketCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='table-container'>
      <h2>Welcome Back Admin!</h2>
      <div className='header'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className='fa fa-search' aria-hidden="true"></i>
        </div>
      </div>
      <Table className='table'>
      <thead>
          <tr>
            <th>Ticket No.</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Ticket Category</th>
            <th>Priority</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.ticketNo}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.ticketCategory}</td>
              <td className='border-right-0'>
                <span className='badge bg-warning rounded-pill'>{data.priority}</span>
              </td>
              <td>{data.subject}</td>
              <td className='border-right-0'>
                <button className='btn btn-success btn-sm mr-2'> Edit </button>
                <button className='btn btn-danger btn-sm ml-2'> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination-container">
        <Pagination className="pagination" style={{ justifyContent: 'flex-end' }}>
          <Pagination.Prev
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
              >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          />
        </Pagination>
      </div>
    </div>
  );
}