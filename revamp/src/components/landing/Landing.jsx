import React from 'react'
import SearchBar from '../searchBar/searchBar';
import LandBody from '../landBody/landBody';

const Landing = () => {
  return (
    <div style = {landing.body}>
    <div>
      <div className="heading" style={landing.heading}>
        <h1 style={landing.heading.h1}>Find your <span style={landing.heading.span}>dream job</span> today</h1>
        <p style = {landing.heading.p}>Job that is perfect match to you might be just here.</p>
      </div>
    </div>
    <div className="search_bar">
        <SearchBar/>
    </div>
    <LandBody/>
    </div >
  )
}

export default Landing;
const landing = {
    body :{
        padding: '64px 80px',
    },
    heading:{
        width: '100%',
        height: '30vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '1.5rem',
        padding: '0 20px',
        h1:{
            color:'#141414',
        },
        span:{
        color: '#3575E2',
        },
        p:{
            color: '#5E5E5E',
            fontSize: '1rem',
        }
    },
    SearchBar : {
        pass: 'pass'
    }
}
