import { Link } from "react-router-dom"

export const DashboardMenu = (props) => {
    return (<div>
        
            <div className="header">
			
                <div className="header-left">
                    <Link to="/">
						<img src="img/rovoo.png" height='45' style={{position:'relative',top:'5px' ,left:'-10px'}} alt=""/>
					</Link>
                </div>
				<div id='section_title' className="header-right">
				
				</div>

				<a id="toggle_btn" href="javascript:void(0);">
					<span className="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a>
				
                
				<a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars"></i></a>
				
				
				
            </div>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
					<div id="sidebar-menu" className="sidebar-menu">
                    <ul>
							<li id="Dashboard">
								<a href="#"><i class="la la-dashboard"></i> <span> Dashboard </span></a>
							</li>
							<li id="ROVOOs">
								<a href="#"><i class="la la-cube"></i> <span> ROVOOs </span> </a>
							</li>
							<li id="Pilotes">
								<a href="#"><i class="la la-user"></i> <span> Pilotes </span></a>
							</li>
							<li id="Clients"> 
								<a href="#"><i class="la la-users"></i> <span>Clients </span></a>
							</li>
							<li id='Reservations'> 
								<a href="#"><i class="la la-ticket"></i> <span> Reservations </span></a>
							</li>
							<li> 
								<a href="#"><i class="las la-sign-out-alt"></i> <span> Logout </span></a>
							</li>
						</ul>	
					</div>
                </div>
            </div>
            <div className="page-wrapper">
			
                <div className="content container-fluid"></div>
            </div>
            </div>
    )
}