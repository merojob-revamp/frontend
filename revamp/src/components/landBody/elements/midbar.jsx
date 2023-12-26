import React from 'react'
import JobCard from './midbar_elements/jobCard.jsx'
const midbar = () => {
  return (
    <div style={style.body}>
      <div className="header" style={style.header}>
        <div className="heading" style={style.header.heading}>
            <h1 style={style.header.heading.h1}>3177 jobs for Software Engineer</h1>
        </div>
        <div className="dropdown">
            <div className="dropdown-btn">
                <div className="dropdown-btn-text">
                    <p>Filter by</p>
                </div>
                <div className="dropdown-btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7"><path fill="#3575E2" fill-rule="evenodd" d="M6 7l6-7H0z"/></svg>
                </div>
            </div>
            <div className="dropdown-content">
                <div className="dropdown-content-item">
                    <p>Relevance</p>
                </div>
                <div className="dropdown-content-item">
                    <p>Date</p>
                </div>
            </div>
        </div>
      </div>
      <div className="card">
        <JobCard/>
      </div>
    </div>
  )
}

export default midbar;
const style = {
    body: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        heading:{
            // fontSize: '32px',
            h1: {
                fontSize: '32px',
            }
        }
    }

}