import React from 'react'
import navLogo from '../../assets/logo.jpg'
import { BrowserRouter,Link } from 'react-router-dom'; // Assuming you're using React Router
import menuData from './elements/navLinks.json'
const navBar = () => {
    // const navLinksData = require('./elements/navLinks.json');
    // const [data, setData] = useState([]);

//   useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('./elements/navLinks.json');
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

//     fetchData();
//   }, []);
  return (
    // <BrowserRouter>
    <nav style = {nav.main}>
    <div className='nav' style={nav.navStyle}>
        <Link to="/" style={nav.logo}>
      <div className="logo">
        <img src={navLogo} style = {nav.logo} alt="logo" />
      </div>
        </Link>
      <div className="nav-items" >
      <ul style={nav.ul}>
        <li style = {nav.ul.li}><Link to="/" style={nav.ul.li.linkto}>Start a search</Link></li>
        <li style = {nav.ul.li}><Link to="/" style={nav.ul.li.linkto}>Blog</Link></li>
        <li style = {nav.ul.li}><Link to="/" style={nav.ul.li.linkto}>Salary estimate</Link></li>
        <li style = {nav.ul.li.btn}><Link to="/" style={nav.ul.li.btn.txt}>For Freelancers</Link></li>
      </ul>
      </div>
      <div className="thirdMan">
        <div style = {nav.thirdMan}className="thirdMan-items">
            <Link to="/chat" style={nav.thirdMan.btn}>Chat</Link>
            <Link to="/login" style={nav.thirdMan.btn}>
            <button style = {nav.thirdMan.button}>Login</button>
            </Link>
            <Link to="/signup" style={nav.thirdMan.btn}>
            <button style = {nav.thirdMan.button}>Sign Up</button>
            </Link>
            {/* <button style={nav.thirdMan.btn}>Login</button> */}
        </div>
    </div>
    </div>
    
    </nav>
    // </BrowserRouter>
  )
}
// import Logo from '../../'
export default navBar;
const nav = {
    main:{
        width: '100%',
        // height: '90px',
        padding: '0 20px',
        backgroundColor: 'white',
        // overflow: 'hidden',
    },
    navStyle:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: '90px',
        width: '100%',
        backgroundColor: 'white',
        // boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)'
    },
    logo:{
        width: '160px',
        height: '90px'
    },
   
    ul :{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        listStyleType: 'none',
        // width: '50%',
        fontSize: '10px',
        fontWeight: 'bold',
        li : {
            padding: '10px 10px',
        linkto:{
            color: '#5E5E5E'
        },
        btn: {
            backgroundColor: '#CCF3D7',
            padding: '10px 20px',
            borderRadius: '50px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            fontSize: '10px',
            fontWeight: 'bold',
            txt:{
                color: '#4CD472',
            },
        },},
    },
    thirdMan:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '20%',
        // backgroundColor: 'red',
        btn : {
            backgroundColor: '#FFFFFF',
            padding: '10px 10px',
            // borderRadius: '50px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            fontSize: '10px',
            fontWeight: 'bold',
            marginRight: '10px',
            // fontSize: '10px',
        },
        button:{
            backgroundColor: '#3574e2',
            color: '#E6EEFB',
            padding: '10px 10px',
            // borderRadius: '50px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            fontSize: '10px',
            fontWeight: 'bold',
        }
    }
}
