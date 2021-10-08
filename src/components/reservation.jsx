export const Reservations= (props) => {
    return (
       
		
			
			
        
        
            <div className="content container-fluid">
            <div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Tickets</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item active">Tickets</li>
								</ul>
							</div>
							<div className="col-auto float-right ml-auto">
								<a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_ticket"><i classNameName="fa fa-plus"></i> Add Ticket</a>
							</div>
						</div>
					</div>
                    <div className="container">
                        <div className="row">
						
							<div className="card-group m-b-30">
								<div className="card col-md-3 ">
									<div className="card-body">
										<div className="d-flex justify-content-between mb-3">
											<div>
												<span className="d-block">New Tickets</span>
											</div>
											<div>
												<span className="text-success">+10%</span>
											</div>
										</div>
										<h3 className="mb-3">112</h3>
										<div className="progress mb-2" style={{height: "5px"}}>
											<div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							
								<div className="card col-md-3 ">
									<div className="card-body">
										<div className="d-flex justify-content-between mb-3">
											<div>
												<span className="d-block">Solved Tickets</span>
											</div>
											<div>
												<span className="text-success">+12.5%</span>
											</div>
										</div>
										<h3 className="mb-3">70</h3>
										<div className="progress mb-2" style={{height: "5px"}}>
											<div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							
								<div className="card col-md-3 ">
									<div className="card-body">
										<div className="d-flex justify-content-between mb-3">
											<div>
												<span className="d-block">Open Tickets</span>
											</div>
											<div>
												<span className="text-danger">-2.8%</span>
											</div>
										</div>
										<h3 className="mb-3">100</h3>
										<div className="progress mb-2"style={{height: "5px"}}>
											<div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							
								<div className="card col-md-3 ">
									<div className="card-body">
										<div className="d-flex justify-content-between mb-3">
											<div>
												<span className="d-block">Pending Tickets</span>
											</div>
											<div>
												<span className="text-danger">-75%</span>
											</div>
										</div>
										<h3 className="mb-3">125</h3>
										<div className="progress mb-2" style={{height: "5px"}}>
											<div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							
						</div>
                        </div>	
					</div>
                    <div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th>#</th>
											<th>Ticket Id</th>
											<th>Ticket Subject</th>
											<th>Assigned Staff</th>
											<th>Created Date</th>
											<th>Last Reply</th>
											<th>Priority</th>
											<th className="text-center">Status</th>
											<th className="text-right">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td><a href="ticket-view.html">#TKT-0001</a></td>
											<td>Laptop Issue</td>
											<td>
												<h2 className="table-avatar">
													<a className="avatar avatar-xs" href="profile.html"><img alt="" src="assets/img/profiles/avatar-10.jpg"/></a>
													<a href="#">John Smith</a>
												</h2>
											</td>
											<td>5 Jan 2019 07:21 AM</td>
											<td>5 Jan 2019 11.12 AM</td>
											<td>
												<div className="dropdown action-label">
													<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger"></i> High </a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> High</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning"></i> Medium</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Low</a>
													</div>
												</div>
											</td>
											<td className="text-center">
												<div className="dropdown action-label">
													<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
														<i className="fa fa-dot-circle-o text-danger"></i> New 
													</a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info"></i> Open</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info"></i> Reopened</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> On Hold</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Closed</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> In Progress</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> Cancelled</a>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_ticket"><i className="fa fa-pencil m-r-5"></i> Edit</a>
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_ticket"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>2</td>
											<td><a href="ticket-view.html">#TKT-0001</a></td>
											<td>Internet Issue</td>
											<td>
												<h2 className="table-avatar">
													<a className="avatar avatar-xs" href="profile.html"><img alt="" src="assets/img/profiles/avatar-08.jpg"/></a>
													<a href="#">Catherine Manseau</a>
												</h2>
											</td>
											<td>5 Jan 2019 07:21 AM</td>
											<td>5 Jan 2019 11.12 AM</td>
											<td>
												<div className="dropdown action-label">
													<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-warning"></i> Medium </a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> High</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning"></i> Medium</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Low</a>
													</div>
												</div>
											</td>
											<td className="text-center">
												<div className="dropdown action-label">
													<a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
														<i className="fa fa-dot-circle-o text-info"></i> Reopened 
													</a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info"></i> Open</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info"></i> Reopened</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> On Hold</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> Closed</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success"></i> In Progress</a>
														<a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger"></i> Cancelled</a>
													</div>
												</div>
											</td>
											<td className="text-right">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_ticket"><i className="fa fa-pencil m-r-5"></i> Edit</a>
														<a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_ticket"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					


            </div>
            
            
         
            
        
       

    
   

    
    )}