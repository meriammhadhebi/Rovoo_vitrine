import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    NavNavLink
  } from "react-router-dom";
import { Clients } from "./clients";

import { Maindash } from "./maindash"
import { Pilotes } from "./pilotes";
import { Reservations } from "./reservation";
import { Rovoo } from "./roovo";

export const Dashboard = (props) => {
    return (<Router>
        
            <div className="header">
			
                <div className="header-left">
                    <NavLink to="/">
						<img src="img/rovoo.png" height='45' style={{position:'relative',top:'5px' ,left:'-10px'}} alt=""/>
					</NavLink>
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
								<NavLink to={'/admin/dashboard'} activeClassName='disabled-link' ><i class="la la-dashboard"></i> <span> Dashboard </span></NavLink>
							</li>
							<li id="ROVOOs">
								<NavLink to={'/admin/rovoo'} activeClassName='disabled-link'><i class="la la-cube"></i> <span> ROVOOs </span> </NavLink>
							</li>
							<li id="Pilotes">
								<NavLink to={'/admin/pilotes'} activeClassName='disabled-link'><i class="la la-user"></i> <span> Pilotes </span></NavLink>
							</li>
							<li id="Clients"> 
								<NavLink to={'/admin/clients'} activeClassName='disabled-link'><i class="la la-users"></i> <span>Clients </span></NavLink>
							</li>
							<li id='Reservations'> 
								<NavLink to={'/admin/reservations'} activeClassName='disabled-link'><i class="la la-ticket"></i> <span> Reservations </span></NavLink>
							</li>
							<li> 
								<NavLink to={'/admin/logout'} activeClassName='disabled-link'><i class="las la-sign-out-alt"></i> <span> Logout </span></NavLink>
							</li>
						</ul>	
					</div>
                </div>
            </div>
            <div className="page-wrapper">
			
                <div className="content container-fluid">
               
               <Switch>
                    <Route exact path='/admin/dashboard'>
                    <Maindash></Maindash>
                    </Route>

                    <Route exact path='/admin/rovoo'>
                    <Rovoo></Rovoo>
                    </Route>

                    <Route exact path='/admin/clients'>
                    <Clients></Clients>
                    </Route>

                    <Route exact path='/admin/reservations'>
                    <Reservations></Reservations>
                    </Route>

                    <Route exact path='/admin/pilotes'>
                    <Pilotes></Pilotes>
                    </Route>
                </Switch>
               
                </div>

            </div>
            </Router>
    )
}