export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row' style={{position:'relative', left:'90px'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='card col-md-4' style={{backgroundImage: "url("+d.img+")"}}>
                  {' '}
                  <img src='img/rovoo_3.png' alt="Denim Jeans" style={{width:"100%"}} />
                  
                    <h1 style={{fontSize:"45"}}>{d.name}</h1>
                    <p class="price">{d.price}</p>
                    <p>{d.text}</p> 
                    <p><button>Voir plus</button></p>
                  
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
