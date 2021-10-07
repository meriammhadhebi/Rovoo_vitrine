import {Button} from '@material-ui/core';
export const Navigation = (props) => {
  return (
    <nav  className='navbar  navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
         
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <a className='navbar-brand page-scroll' href='#page-top'>
           <img style={{position:'relative',top:'-50',left:'-390px',height:'130px',width:'135px'}} src="img/rovoo_3.png" /> 
           {/* Rovoo */}
          </a>{' '}
            </li>
         
            <li>
            
        <a href='#about' >
          about
          </a>
      
            </li>
            <li>
            
        <a href='#services' >
          services
          </a>
      
            </li>
            <li>
            
        <a href='#portfolio' >
          reservation
          </a>
     
            </li>
            <li>
            
              <a href='#testimonials' >
                Statistic
              </a>
              
            </li>
            <li>
            
              <a href='#team' >
                Team
              </a>
              
            </li>
            <li>
            
              <a href='#contact' >
                Contact
              </a>
              
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
