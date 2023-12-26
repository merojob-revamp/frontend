import React from 'react'

const jobCard = () => {
  return (
    <div style={style.body}>
      <div className="wrapper" style={style.body.wrapper}>
      <div className="card" style={style.body.wrapper.card}>
        <div className="logo">
          <span>LOGO</span>
        </div>
        <div style = {style.body.info} className="info">
            <div className="info-company">
                <p style={{fontSize :'12px'}}>Google</p>
            </div>

            <div className="info-title">
                <h1 style={{fontSize:'16px'}}>Software Engineer</h1>
            </div>
            <div className="flex-items" style={style.body.info.flex_items}>
                <div className="info-location">
                    <p style={{fontSize:'12px'}}>Mountain View, CA</p>
                </div>
                <div className="info-location">
                    <p style={{fontSize:'12px'}}>Full Time</p>
                </div>
                
                <div className="info-location">
                    <p style={{fontSize:'12px'}}>50-55k</p>
                </div>
                <div className="info-location">
                    <p style={{fontSize:'12px'}}>29 min ago</p>
                </div>

            </div>
      </div>
      <div className="apply-btn">
          <button style={{backgroundColor:'#3575E2', color:'white', borderRadius:'4px', border:'none', padding:'8px 16px'}}>Apply Now</button>
      </div>
    </div>
    <div className="job_desc">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates repudiandae architecto sapiente vitae, excepturi ab deserunt dolore saepe commodi quisquam nulla. Dolores fuga est veritatis numquam cupiditate, nulla enim cum!
    </div>
    </div>
    </div>
  )
}

export default jobCard;
const style = {
    body:{
        padding: '24px',
        wrapper:{
          width: '100%',
          backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
        height: '100%',
          card : {
            width: '100%',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            // flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
           
         },
  
        },
        info : {
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          flex_items : {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }
        }
    }
}