import CountUp from 'react-countup';
export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>What our clients say</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3'>
                 <div  >
  
            <span className="dot ">
              <h3 style={{position:'relative', top:'70px',fontSize:'20'}}>{d.title}</h3>
              <h2> <CountUp end={d.stat} 
              duration={4} 
              decimals={1}
              decimal="."
              style={{position:'relative', top:'95px'}}/>
                
              </h2>
            </span>
    
</div>
                  </div>
                
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
