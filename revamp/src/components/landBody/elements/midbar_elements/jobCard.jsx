// import React from 'react'

// const jobCard = () => {
//   return (
//     <div style={style.body}>
//       <div className="wrapper" style={style.body.wrapper}>
//       <div className="card" style={style.body.wrapper.card}>
//         <div className="logo">
//           <span>LOGO</span>
//         </div>
//         <div style = {style.body.info} className="info">
//             <div className="info-company">
//                 <p style={{fontSize :'12px'}}>Google</p>
//             </div>

//             <div className="info-title">
//                 <h1 style={{fontSize:'16px'}}>Software Engineer</h1>
//             </div>
//             <div className="flex-items" style={style.body.info.flex_items}>
//                 <div className="info-location">
//                     <p style={{fontSize:'12px'}}>Mountain View, CA</p>
//                 </div>
//                 <div className="info-location">
//                     <p style={{fontSize:'12px'}}>Full Time</p>
//                 </div>
                
//                 <div className="info-location">
//                     <p style={{fontSize:'12px'}}>50-55k</p>
//                 </div>
//                 <div className="info-location">
//                     <p style={{fontSize:'12px'}}>29 min ago</p>
//                 </div>

//             </div>
//       </div>
//       <div className="apply-btn">
//           <button style={{backgroundColor:'#3575E2', color:'white', borderRadius:'4px', border:'none', padding:'8px 16px'}}>Apply Now</button>
//       </div>
//     </div>
//     <div className="job_desc">
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates repudiandae architecto sapiente vitae, excepturi ab deserunt dolore saepe commodi quisquam nulla. Dolores fuga est veritatis numquam cupiditate, nulla enim cum!
//     </div>
//     </div>
//     </div>
//   )
// }

// export default jobCard;
// const style = {
//     body:{
//         padding: '24px',
//         wrapper:{
//           width: '100%',
//           backgroundColor: 'white',
//         padding: '1.5rem',
//         boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
//         height: '100%',
//           card : {
//             width: '100%',
//             backgroundColor: 'white',
//             borderRadius: '8px',
//             display: 'flex',
//             // flexDirection: 'column',
//         flexWrap: 'wrap',
//         justifyContent: 'space-evenly',
           
//          },
  
//         },
//         info : {
//           display: 'flex',
//           flexDirection: 'column',
//           width: '80%',
//           flex_items : {
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           }
//         }
//     }
// }

import * as React from "react";

export default function JobCard(props) {
  return (
    <div className="border shadow-sm bg-white flex justify-between gap-5 p-6 rounded-lg border-solid border-neutral-900 border-opacity-10 items-start max-md:flex-wrap max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
        className="aspect-square object-contain object-center w-[72px] overflow-hidden shrink-0 max-w-full"
      />
      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
        <div className="justify-between items-stretch content-between flex-wrap flex w-full gap-5 max-md:max-w-full">
          <div className="items-stretch flex flex-col">
            <div className="text-neutral-900 text-lg leading-7">
              Leapfrog Technology Inc.
            </div>
            <div className="justify-between items-stretch flex gap-3 mt-1">
              <div className="text-neutral-900 text-2xl font-medium leading-9 grow whitespace-nowrap">
                Software Engineer
              </div>
              <div className="text-green-600 text-xs font-medium leading-5 whitespace-nowrap items-stretch bg-green-600 bg-opacity-10 self-center aspect-[2.5454545454545454] justify-center my-auto px-1.5 py-0.5 rounded">
                Remote
              </div>
            </div>
          </div>
          <div className="justify-end items-stretch flex gap-3 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37c5f7fc764c4dbc6317e4050ba9d73b71bd4ba00ecfd2c2dda478cdf6351ffc?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
              className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch content-center flex-wrap rounded bg-blue-500 grow px-14 py-2 max-md:px-5">
              APPLY
            </div>
          </div>
        </div>
        <div className="justify-between items-center flex gap-5 mt-1.5 py-0.5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-center self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/acd24b24e9cb5c2aafa609729d505a5ab88ed3495130dae299f3953871849369?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-neutral-900 text-opacity-50 text-base leading-6 self-stretch grow whitespace-nowrap">
              Brussels
            </div>
          </div>
          <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
          <div className="items-center self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b67b1b8fb78957d21aa4caf32d69071eeb26add9538c3b0df0888b5405b53a4e?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-neutral-900 text-opacity-50 text-base leading-6 self-stretch grow whitespace-nowrap">
              Full time
            </div>
          </div>
          <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
          <div className="items-center self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eae84fad094048caa7d7b685772e4011f51b2fa535b2a4b30f6cdacda65b4fa?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-neutral-900 text-opacity-50 text-base leading-6 self-stretch grow whitespace-nowrap">
              50-55k
            </div>
          </div>
          <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
          <div className="items-center self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31f5a77a70bf03a6c5f1724dae03ef82782bc8698fa7d7f12fa035654a423d35?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-neutral-900 text-opacity-50 text-base leading-6 self-stretch grow whitespace-nowrap">
              29 min ago
            </div>
          </div>
        </div>
        <div className="text-neutral-900 text-opacity-70 text-base leading-6 mt-3 max-md:max-w-full">
          Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
          Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum
          tempor Lorem incididunt.
        </div>
      </div>
    </div>
  );
}


