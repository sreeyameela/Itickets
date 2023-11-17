import React from 'react';
import SideBar from '../Sidebar/Sidebar';
const Admin = () => {
    return (
           

        <div className="container-fluid">
            <div className="row">
                <SideBar />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        {/* <h1 className="h2">Dashboard</h1> */}
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                        </div>
                    </div>
                    <h2>Section title</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>    
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Action</th>
                                </tr>

                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Computer Science</td>
                                    <td></td>   
                                    <td>1234567890</td>
                                    <td><button type="button" className="btn btn-sm btn-outline-secondary">Edit</button></td>
                                </tr>   
                                </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
           
    )
}

export default Admin;
