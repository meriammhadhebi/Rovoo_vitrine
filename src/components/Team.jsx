
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
      
         
       
         {props.data
            ? props.data.map((d, i) => (
              <div className='card col-md-4'>
         <div className='imgBx'>
         <img className='team-img'
                        src={d.img}
                        onMouseOver={e => (e.currentTarget.src = d.hoverimg)}
                        onMouseOut={e => (e.currentTarget.src = d.img)}
                    />
         </div>
         <div className='content'>
           <h3>{d.name}</h3>
           <p>{d.job}</p>
         </div >
         </div> 
                
              ))
            : 'loading'}
       
     
    </div>
    </div>
  )
}
