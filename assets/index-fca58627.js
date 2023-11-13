import{r as l,j as e,R as Ie}from"./react-e4f9e9db.js";import{c as ze}from"./react-dom-0329b42b.js";import{s as g}from"./styled-components-1bb8b538.js";import{t as Ge}from"./react-datepicker-25259f22.js";import{C as V,a as ae,b as re,P as ie,c as le,p as ce,d as Z,e as Q,A as Pe}from"./chart.js-bfe8637c.js";import{L as de,D as Le}from"./react-chartjs-2-6e669065.js";import{L as Re,B as Be}from"./react-router-dom-b86056e8.js";import{d as _e,a as G,e as q,f as P}from"./react-router-1e2a8358.js";import"./classnames-3ea37277.js";import"./scheduler-765c72db.js";import"./tslib-e256ba82.js";import"./@emotion-019a61c4.js";import"./stylis-bbc0ab72.js";import"./date-fns-c3a66ad6.js";import"./@babel-e65c6041.js";import"./react-onclickoutside-cb430245.js";import"./react-popper-3956628d.js";import"./react-fast-compare-399d5c84.js";import"./@popperjs-f3391c26.js";import"./warning-df10c181.js";import"./@kurkle-b1b89bbc.js";import"./@remix-run-671dfa1a.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const he=l.createContext(),$e=({children:t})=>{const[n,i]=l.useState(localStorage.getItem("accessToken")||null),[o,s]=l.useState(localStorage.getItem("userRole")||null),a=(c,h)=>{i(c),s(h),localStorage.setItem("accessToken",c),localStorage.setItem("userRole",h)},r=()=>{i(null),s(null),localStorage.removeItem("accessToken"),localStorage.removeItem("userRole")};return e.jsxs(he.Provider,{value:{accessToken:n,userRole:o,login:a,logout:r},children:[" ",t]})},pe=()=>l.useContext(he),Me=g.div`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
  padding: 25px 13px 45px;
  max-width: 1026px;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
`,Oe="https://highdardata.xyz/office/v1/customers/getAll",Ue=t=>{const[n,i]=l.useState([]),[o,s]=l.useState(10),[a,r]=l.useState(1),[c,h]=l.useState(1),[d,u]=l.useState(""),[m,j]=l.useState(null),[p,k]=l.useState([]),y=async()=>{try{const x=localStorage.getItem("accessToken"),C=await(await fetch(Oe,{headers:{Authorization:`Bearer ${x}`}})).json();C&&C.length>0?(i(C),h(Math.ceil(C.length/o))):console.error("Отримані порожні дані або масив.")}catch(x){console.error("Помилка отримання даних:",x)}};l.useEffect(()=>{y()},[t]),l.useEffect(()=>{k(n)},[n]);const v=x=>{if(x){const w=x.split(".");if(w.length===3){const[C,I,T]=w;return new Date(T,I-1,C)}}return null};l.useEffect(()=>{if(m){const x=m.toISOString().split("T")[0],w=n.filter(C=>{const I=v(C.caseStarted);return I?I.toISOString().split("T")[0]===x:!1});k(w)}else k(n)},[m,n]);const F=p.filter(x=>{const w=`${x.firstName} ${x.lastName}`.toLowerCase(),C=x.email?x.email.toLowerCase():"",I=x.phone?x.phone.toLowerCase():"",T=x.caseNumber?x.caseNumber.toString().toLowerCase():"",z=x.totalWorth?x.totalWorth.toString().toLowerCase():"";return x.numericId.toString().includes(d)||w.includes(d.toLowerCase())||C.includes(d.toLowerCase())||I.includes(d.toLowerCase())||T.includes(d.toLowerCase())||z.includes(d.toLowerCase())}).slice((a-1)*o,a*o),f=x=>{r(x)},N=x=>{j(x)};return l.useEffect(()=>{s(10),y()},[t]),{customers:F,pageSize:o,setPageSize:s,currentPage:a,setCurrentPage:r,totalPages:c,searchTerm:d,setSearchTerm:u,handlePageChange:f,selectedDate:m,handleDateChange:N,fetchCustomers:y}},We=g("div")`
  .modal-content-wrap {
    display: flex;
    flex-direction: column;
    gap: 30px;

    button {
      border-radius: 10px;
      background: #1E0F6D;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      max-width: 177px;
      width: 100%;
      margin: 0 auto;

      &:hover {
        background: #260FA0;
      }

      &:active {
        background: #1D1060;
      }
    }


    .create-customer-modal-fields {
      display: flex;
      flex-wrap: wrap;
      gap: 30px 20px;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;

        label {
          white-space: nowrap;
        }

        input {
          border: none;
          outline: none;
          color: #1A1A1A;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          width: 100%;
        }
      }
    }
  }
`,Je=({isOpen:t,onClose:n,onCreate:i,fetchCustomers:o})=>{const[s,a]=l.useState({email:"",password:"",phone:"",numericId:"",firstName:"",lastName:""}),r=h=>{const{name:d,value:u}=h.target;a({...s,[d]:u})},c=async()=>{try{const h=localStorage.getItem("accessToken");(await fetch("https://highdardata.xyz/office/v1/customers/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify(s)})).ok?(i(s),console.log("Customer created successfully!"),n(),o()):console.error("Помилка при відправці даних на сервер")}catch(h){console.error("Помилка:",h)}};return t?e.jsx(We,{children:e.jsxs("div",{className:"modal-content-wrap",children:[e.jsxs("div",{className:"create-customer-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Email:"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Password:"}),e.jsx("input",{type:"password",name:"password",value:s.password,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Phone Number:"}),e.jsx("input",{type:"tel",name:"phone",value:s.phone,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"ID:"}),e.jsx("input",{type:"text",name:"numericId",value:s.numericId,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"First Name:"}),e.jsx("input",{type:"text",name:"firstName",value:s.firstName,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Last Name:"}),e.jsx("input",{type:"text",name:"lastName",value:s.lastName,onChange:r})]})]}),e.jsx("button",{onClick:c,children:"Save"})]})}):null},He=g.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;


  .modal-content {
    background: white;
    padding: 30px 15px;
    border-radius: 10px;
    position: relative;
    max-width: 960px;
    width: 100%;
    text-align: center;

    .close-icon {
      position: absolute;
      top: -64px;
      right: 0;
      cursor: pointer;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
  }



  .save-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  body.modal-open {
    overflow: hidden;
  }


`,qe="/assets/close-e82eb8da.svg",R=({isOpen:t,onClose:n,children:i})=>(l.useEffect(()=>{const o=s=>{t?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")};return document.body.addEventListener("scroll",o),()=>{document.body.removeEventListener("scroll",o),document.body.classList.remove("modal-open")}},[t]),t?e.jsx(He,{className:"modal-overlay",onClick:n,children:e.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[e.jsx("span",{className:"close-icon",onClick:n,children:e.jsx("img",{src:qe,alt:"close"})}),i]})}):null),Ke=g("div")`
  .edit-customer-modal-fields {
    flex-wrap: wrap;
    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
  
`,xe=({customer:t,onSave:n})=>{l.useState("");const[i,o]=l.useState({numericId:t.numericId||"",name:t.name||"",status:t.status||"",country:t.country||"",recoveredAmount:t.recoveredAmount||"",date:t.date||"",password:t.password}),s=r=>{const{name:c,value:h}=r.target;o(d=>({...d,[c]:h}))},a=()=>{n({...i,id:t.id})};return e.jsxs(Ke,{className:"edit-customer-modal",children:[e.jsxs("div",{className:"edit-customer-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"numericId",children:"ID"}),e.jsx("input",{type:"text",name:"numericId",value:i.numericId,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:i.name,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Status"}),e.jsx("input",{type:"text",name:"status",value:i.status,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",children:"Country"}),e.jsx("input",{type:"text",name:"country",value:i.country,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"caseNumber",children:"Recovered Amount"}),e.jsx("input",{type:"text",name:"recoveredAmount",value:i.recoveredAmount,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"date",children:"Date"}),e.jsx("input",{type:"text",name:"date",value:i.date,onChange:s})]})]}),e.jsx("button",{onClick:a,children:"Save"})]})},Ye=t=>{const[n,i]=l.useState(null);return{handleUpdateCustomer:async s=>{try{const a=localStorage.getItem("accessToken");(await fetch("https://highdardata.xyz/office/v1/customers/setMain",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(s)})).ok?(console.log("Customer data updated successfully!"),t()):i("Error updating customer data. Please try again later.")}catch{i("Error updating customer data. Please try again later.")}},error:n}},W="/assets/edit-53ecfd5c.svg",Ve="/assets/search-a4e23e72.svg",J="/assets/data_ar-639abb75.svg",me="/assets/angle-right-2c7978c1.svg",ge="/assets/angle-left-fdf56742.svg",Ze=g.div`

  .table-control {
    display: flex;
    justify-content: space-between;
    margin-bottom: 55px;
    gap: 50px;

    @media only screen and (max-width: 991px) {
      gap: 20px;
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .search {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      display: flex;
      align-items: center;
      gap: 11px;
      max-width: 523px;
      width: 100%;
      height: 40px;

      .search-icon {
        margin-left: 18px;
      }

      input {
        border: none;
        outline: none;
        color: #1A1A1A;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 100%;
      }
    }

    .date-filter {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 188px;
      width: 100%;
      position: relative;
      height: 40px;

      .data-icon {
        position: absolute;
        right: 30px;
      }

      input {
        border: none;
        outline: none;
        color: #1A1A1A;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        max-width: 128px;
        width: 100%;
        position: relative;
        z-index: 9;
        background: transparent;
      }

    }

    .create-new {

      button {
        border-radius: 10px;
        background: #1E0F6D;
        box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        max-width: 177px;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: #260FA0;
        }

        &:active {
          background: #1D1060;
        }
      }

    }
  }

  .table-size {
    color: #1A1A1A;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    max-width: 104px;
    width: 100%;
    margin-bottom: 24px;

    select {
      color: #1A1A1A;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      border-radius: 5px;
      border: 0.5px solid rgba(143, 143, 143, 0.50);
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10), 0 2px 3px 0 rgba(30, 9, 77, 0.15) inset;
    }
  }

  .table-info {
    overflow: scroll;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;

    th {
      color: #353535;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px;
    }
    
    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &:last-of-type {
        text-align: center;
        width: 50px;
      }
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
    }


    .edit {
      cursor: pointer;
    }
    
  }


  .table-entries {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #535353;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .table-pages {
      display: flex;
      align-items: center;
      gap: 5px;

      .page {
        color: #FFF;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: #340077;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        border: 1px solid #787878;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        outline: none;

        &:disabled {
          opacity: 0.5;
        }
      }
    }
  }

`;g.div`
`;g.div`
`;const Qe=({accessToken:t})=>{const{customers:n,pageSize:i,setPageSize:o,currentPage:s,setCurrentPage:a,totalPages:r,searchTerm:c,setSearchTerm:h,handlePageChange:d,selectedDate:u,handleDateChange:m,fetchCustomers:j}=Ue(t),p=(s-1)*i+1,k=Math.min(p+i-1,n.length),y=n.length,v=()=>{s>1&&a(s-1)},F=()=>{s<r&&a(s+1)},[f,N]=l.useState(!1),x=()=>{N(!0)},w=()=>{N(!1)},C=b=>{j()},I=()=>{const b=new Date;return new Date(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate())},[T,z]=l.useState(!1),[L,A]=l.useState(null),{handleUpdateCustomer:E,error:S}=Ye(j),_=async b=>{await E(b),z(!1)},[Ae,Ne]=l.useState(!1),[te,Ee]=l.useState(null),Te=b=>{Ee(b.id),Ne(!0),console.log(b.id)};return Ae&&te?e.jsx(_e,{to:`/admin/customer?id=${te}`}):e.jsxs(Ze,{children:[e.jsxs("div",{className:"table-control",children:[e.jsxs("div",{className:"search",children:[e.jsx("img",{className:"search-icon",src:Ve,alt:"icon"}),e.jsx("input",{type:"text",placeholder:"Search...",value:c,onChange:b=>h(b.target.value)})]}),e.jsxs("div",{className:"date-filter",children:[e.jsx(Ge,{selected:u||I(),onChange:m,dateFormat:"dd.MM.yyyy"}),e.jsx("img",{className:"data-icon",src:J,alt:"icon"})]}),e.jsx("div",{className:"create-new",children:e.jsx("button",{onClick:x,children:"Create"})})]}),e.jsxs("div",{className:"table-size",children:["Show",e.jsxs("select",{value:i,onChange:b=>o(b.target.value),children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"25",children:"25"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]}),"entries"]}),e.jsx("div",{className:"table-info",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:" ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Phone Number"}),e.jsx("th",{children:"Case Number"}),e.jsx("th",{children:"Recovered Amount"}),e.jsx("th",{children:"Date"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:n.map(b=>e.jsxs("tr",{children:[e.jsx("td",{children:b.numericId}),e.jsxs("td",{children:[b.firstName," ",b.lastName]}),e.jsx("td",{children:b.email}),e.jsx("td",{children:b.phone}),e.jsx("td",{children:b.caseNumber}),e.jsx("td",{children:b.totalWorth}),e.jsx("td",{children:b.caseStarted}),e.jsx("td",{children:e.jsx("img",{className:"edit",src:W,alt:"icon",onClick:()=>{Te(b)}})})]},b.id))})]})}),e.jsxs("div",{className:"table-entries",children:[e.jsxs("p",{children:["Showing ",p," to ",k," of ",y," entries"]}),e.jsxs("div",{className:"table-pages",children:[r>1&&e.jsx("button",{onClick:v,disabled:s===1,children:e.jsx("img",{className:"page-icon",src:ge,alt:"icon"})}),e.jsx("span",{className:"page",children:s}),r>1&&e.jsx("button",{onClick:F,disabled:s===r,children:e.jsx("img",{className:"page-icon",src:me,alt:"icon"})})]})]}),T&&L&&e.jsx(R,{isOpen:T,onClose:()=>z(!1),children:e.jsx(xe,{customer:L,onSave:_})}),f&&e.jsx(R,{isOpen:f,onClose:()=>N(!1),children:e.jsx(Je,{isOpen:f,onClose:w,onCreate:C})})]})},Xe=()=>e.jsx(Me,{children:e.jsx(Qe,{})}),De=g.div`
  width: 100%;
  
  //.page_content {
  //  max-width: 1300px;
  //  padding: 0 20px;
  //  width: 100%;
  //}

  .dashboard_content {
    display: flex;
    gap: 16px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`,et=()=>{const t=G();return l.useEffect(()=>{const n=localStorage.getItem("accessToken"),i=localStorage.getItem("userRole");n||t("/login"),i!=="Admin"&&t("/login")},[t]),e.jsx(De,{children:e.jsx("div",{className:"dashboard_content",children:e.jsx(Xe,{})})})},H=()=>{const[t,n]=l.useState(null),[i,o]=l.useState(null),s="https://highdardata.xyz/office/v1/account/customerData";return l.useEffect(()=>{(async()=>{try{const r=localStorage.getItem("accessToken"),c=await fetch(s,{headers:{Authorization:`Bearer ${r}`}});if(c.ok){const h=await c.json();n(h)}else o("Failed to fetch customer data")}catch(r){console.error("An error occurred while fetching customer data:",r),o("An error occurred while fetching customer data")}})()},[]),{customerData:t,error:i}},ue="/assets/div-21edab81.png",tt=g.div`
  width: 100%;
  //.page_content {
  //  max-width: 1300px;
  //  padding: 0 20px;
  //  width: 100%;
  //}

  .dashboard_content {
    display: flex;
    gap: 16px;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

`,nt=g.div`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
  padding: 25px 13px 45px;
  max-width: 1026px;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;

  .worth {
    display: flex;
    align-items: flex-start;
    gap: 55px;

    h2 {
      color: #1C0371;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin: 0 0 30px 0;
    }

    //canvas {
    //  max-width: 540px;
    //  max-height: 111px;
    //  height: 100%!important;
    //  min-width: 540px;
    //  width: 100% !important;
    //}

    @media only screen and (max-width: 991px) {
      flex-direction: column;
    }
  }

  .worth_left {
    .total {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 18px;
    }

    .total_worth {
      color: #5100FF;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 13px;
    }

    .difference {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .difference_amount {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .difference_percent {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border-radius: 10px;
      //background: #C1F1DC;
      padding: 4px 5px;

      &.negative {
        color: #FF0000;
        background: rgba(255, 45, 86, 0.20);

        svg {
          fill: #FF0000;
        }
      }

      &.positive {
        color: #0E840C;
        background: #C1F1DC;

        svg {
          fill: #0E840C;
        }
      }

      svg {
        margin-right: 4px;
        margin-bottom: 2px;
      }

    }

    .positive {
      color: #0E840C;
    }

    .negative {
      color: #FF0000;
    }

  }
  
  .worth_right {
    @media only screen and (max-width: 991px) {
    margin: 0 auto;
    }
  }

  .assets {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
    padding: 24px 25px;
    display: flex;
    flex-direction: column;
    gap: 50px;

    h2 {
      margin: 0;
      display: flex;
      gap: 15px;
      color: #1A1A1A;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .assets_icon {
      width: 28px;
      height: 28px;
    }

    .assets_table {
      table {
        width: 100%;

        th {
          color: #353535;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: left;
          padding-bottom: 35px;

          &:last-of-type {
            text-align: right;
          }
        }

        tr {
          padding: 15px 0;

          td {
            padding: 15px 0;

            &:first-of-type {
              display: flex;
              align-items: center;
              gap: 17px;

            }
          }

        }

        td {
          color: #1A1A1A;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          &:last-of-type {
            text-align: right;
          }
        }
      }
    }

    .assets_charts {
      display: flex;
      justify-content: space-between;
      gap: 30px;

      @media only screen and (max-width: 991px) {
        flex-direction: column;
        align-items: center;
        gap: 50px;
      }
    }
  }

  .assets_charts-line {
    //max-width: 560px;
    //max-height: 116px;

    canvas {
      //width: 560px!important;
      //height: 116px!important;
      height: 100% !important;
      max-height: 116px;
      max-width: 560px;
      min-width: 207px;
    }
  }

  .assets_charts-doughnut {
    display: flex;
  }


`;V.register(ae,re,ie,le,ce,Z,Q);const Y=({mainGraph1:t,mainGraph2:n,mainGraph3:i,mainGraph4:o,mainGraph5:s,mainGraph6:a})=>{const c=(d=>({labels:[1,2,3,4,5,6],datasets:[{label:"MainGraph",data:[d.mainGraph1,d.mainGraph2,d.mainGraph3,d.mainGraph4,d.mainGraph5,d.mainGraph6],pointRadius:5,pointBackgroundColor:"#4801E6",pointBorderWidth:1,pointBorderColor:"#FF5C00",borderColor:"#4801E6",borderWidth:1}]}))({mainGraph1:t,mainGraph2:n,mainGraph3:i,mainGraph4:o,mainGraph5:s,mainGraph6:a}),h={maintainAspectRatio:!1,responsive:!0,plugins:{legend:{position:"top",display:!1},title:{display:!1,text:"Chart.js Line Chart"}},scales:{x:{display:!1,beginAtZero:!0},y:{display:!1}}};return e.jsx(de,{options:h,data:c})};V.register(ae,re,ie,le,ce,Z,Q);const fe=({secondaryGraph1:t,secondaryGraph2:n,secondaryGraph3:i,secondaryGraph4:o,secondaryGraph5:s,secondaryGraph6:a,secondaryGraph7:r,secondaryGraph8:c,secondaryGraph9:h,secondaryGraph10:d,secondaryGraph11:u,secondaryGraph12:m,secondaryGraph13:j,...p})=>{const k=["0","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=(f=>({labels:k,datasets:[{label:"Second Graph",data:[f.secondaryGraph1,f.secondaryGraph2,f.secondaryGraph3,f.secondaryGraph4,f.secondaryGraph5,f.secondaryGraph6,f.secondaryGraph7,f.secondaryGraph8,f.secondaryGraph9,f.secondaryGraph10,f.secondaryGraph11,f.secondaryGraph12,f.secondaryGraph13],pointRadius:5,pointBackgroundColor:"#5200FF",pointBorderWidth:1,pointBorderColor:"#4801E6",borderColor:"#4801E6",borderWidth:1}]}))({secondaryGraph1:t,secondaryGraph2:n,secondaryGraph3:i,secondaryGraph4:o,secondaryGraph5:s,secondaryGraph6:a,secondaryGraph7:r,secondaryGraph8:c,secondaryGraph9:h,secondaryGraph10:d,secondaryGraph11:u,secondaryGraph12:m,secondaryGraph13:j}),F={maintainAspectRatio:!1,responsive:!0,plugins:{legend:{position:"top",display:!1},title:{display:!1,text:"Chart.js Line Chart"}},scales:{}};return e.jsx(de,{options:F,data:v})},st=g.div`

  display: flex;
  gap: 28px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;

  }

  @media only screen and (max-width: 991px) {
    gap: 50px;
  }

  .doughnut-labels {
    color: #1A1A1A;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > div {
      display: flex;
      justify-content: space-between;
      gap: 24px;

      span {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #1A1A1A;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
        &:nth-child(2) {
          font-weight: 700;
          color: #2B2B2B;
        }

        .doughnut-icon {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;V.register(Pe,Z,Q);const je=({...t})=>{if(!t.assets)return null;const n=t.assets.reduce((r,c)=>r+c.amount*c.price,0),i=t.assets.map(r=>r.amount*r.price),o={labels:t.assets.map(r=>`${r.name} ${(r.amount*r.price/n*100).toFixed(2)}%`),datasets:[{data:i,backgroundColor:["#006FF4","#FF8C00","#00A979","#ff0044"],borderColor:["#006FF499","#FF8C0044","#00A97944","#ff0044"],borderWidth:1}]},s={plugins:{legend:{display:!1}}},a="/src/assets/images/cryptoIcon/";return e.jsxs(st,{className:"doughnut-wrap",children:[e.jsx(Le,{data:o,options:s,style:{maxWidth:"175px",width:"100%",maxHeight:"175px"}}),e.jsx("div",{className:"doughnut-labels",children:t.assets.map(r=>e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("img",{className:"doughnut-icon",src:`${a}${r.logoName}`,alt:r.name}),r.name]}),e.jsxs("span",{children:[(r.amount*r.price/n*100).toFixed(2),"%"]})]},r.id))})]})},ot=g.div`
  h1 {
    color: #1C0371;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    //margin: 0 0 50px 0;
  }

  h2 {
    color: #1C0371;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 0 30px 0;
  }

  .case_content {
    display: flex;
    flex-wrap: wrap;

    gap: 20px 50px;

    .case_field {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
      padding: 10px;
      max-width: 300px;
      display: flex;
      gap: 10px;
      min-width: 260px;
      width: calc(35% - 50px);

      span {
        color: #1A1A1A;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`,X=({...t})=>e.jsxs(ot,{className:"personal-info",children:[e.jsx("h2",{children:"Personal Info"}),e.jsxs("div",{className:"case_content",children:[e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"Case number:"}),e.jsx("span",{children:t==null?void 0:t.caseNumber})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"Case Started:"}),e.jsx("span",{children:t==null?void 0:t.caseStarted})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"Email:"}),e.jsx("span",{children:t==null?void 0:t.email})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"First Name:"}),e.jsx("span",{children:t==null?void 0:t.firstName})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"Last Name:"}),e.jsx("span",{children:t==null?void 0:t.lastName})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"Description:"}),e.jsx("span",{children:t==null?void 0:t.description})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"Customer status:"}),e.jsx("span",{children:t==null?void 0:t.customerStatus})]}),e.jsxs("div",{className:"case_field",children:[e.jsx("span",{children:"KYC status:"}),e.jsx("span",{children:t==null?void 0:t.kycStatus})]})]})]}),at=({...t})=>{if(!t||!t.assets)return e.jsx("div",{children:"Loading..."});const n=parseFloat(t==null?void 0:t.differenceAmount),i=n<0,o=`${i?"-":"+"}${t==null?void 0:t.currencySymbol}${Math.abs(n).toFixed(2)}`,s="/src/assets/images/cryptoIcon/";return e.jsxs(nt,{className:"dashboard",children:[e.jsx("h1",{children:"Dashboard"}),e.jsx(X,{...t}),e.jsxs("div",{className:"worth",children:[e.jsxs("div",{className:"worth_left",children:[e.jsx("h2",{className:"total",children:"Total Worth"}),e.jsxs("h2",{className:"total_worth",children:[t==null?void 0:t.currencySymbol,t==null?void 0:t.totalWorth]}),e.jsxs("div",{className:"difference",children:[e.jsx("span",{className:`difference_amount ${i?"negative":"positive"}`,children:o}),e.jsxs("span",{className:`difference_percent ${(t==null?void 0:t.differencePercent)<0?"negative":"positive"}`,children:[e.jsx("svg",{width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 6L0.73686 0.75L10.2631 0.75L5.5 6Z"})}),(t==null?void 0:t.differencePercent)>0?"+":"-",Math.abs(t==null?void 0:t.differencePercent).toFixed(2),"%"]})]})]}),e.jsx("div",{className:"worth_right",style:{maxWidth:"540px",width:"100%",maxHeight:"111px"},children:e.jsx(Y,{...t})})]}),e.jsxs("div",{className:"assets",children:[e.jsxs("h2",{children:[e.jsx("span",{children:"Assets"}),e.jsxs("span",{children:[t==null?void 0:t.currencySymbol,t==null?void 0:t.assets.reduce((a,r)=>a+r.amount*r.price,0).toFixed(3)]})]}),e.jsx("div",{className:"assets_table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:t==null?void 0:t.assets.map(a=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("img",{className:"assets_icon",src:`${s}${a.logoName}`,alt:a.name}),a.name]}),e.jsx("td",{children:a.amount.toFixed(3)}),e.jsxs("td",{children:["$",a.price.toFixed(2)]}),e.jsxs("td",{children:["$",(a.amount*a.price).toFixed(3)]})]},a.id))})]})}),e.jsxs("div",{className:"assets_charts",children:[e.jsx("div",{className:"assets_charts-line",style:{maxWidth:"555px",width:"100%",maxHeight:"111px"},children:e.jsx(Y,{...t})}),e.jsx("div",{className:"assets_charts-doughnut",children:e.jsx(je,{...t})})]})]}),e.jsx("div",{className:"chart",children:e.jsx("div",{style:{overflow:"scroll"},children:e.jsx("div",{className:"charts-line",style:{padding:"20px",maxWidth:"958px",minHeight:"369px",height:"100%",margin:"0 auto",overflow:"scroll",width:"100%"},children:e.jsx(fe,{...t})})})})]})},rt=({setUserRole:t})=>{pe();const{customerData:n,error:i}=H(),o=G();return l.useEffect(()=>{const s=localStorage.getItem("accessToken"),a=localStorage.getItem("userRole");s||o("/login"),a!=="Customer"&&o("/login")},[o]),e.jsxs(tt,{children:[e.jsx("div",{className:"dashboard_content",children:e.jsx(at,{...n})}),i&&e.jsx("div",{className:"error-message",children:i})]})},it=g.div`
  max-width: 430px;
  width: 100%;
  position: relative;
  
  @media only screen and (max-width: 991px) {
    max-width: 273px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .error-message {
      position: absolute;
      bottom: 85px;
      color: #FF646B;
      @media only screen and (max-width: 991px) {
        bottom: 58px;
      }
  }
  
  .form-group {
    box-shadow: 0px 12px 60px 0px rgba(10, 45, 97, 0.10);
    height: 40px;
    display: flex;
    position: relative;
    align-items: flex-end;
    background: #fff;
  }

    label {
      color: rgba(64, 58, 75, 0.60);
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      position: absolute;
      top: 3px;
      left: 16px;
    }
  }
  
  input {
    max-width: 430px;
    width: 100%;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
    border-bottom: 1px solid #D7C8DB;
    margin: 0 16px 7px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
      
  }

  .btn {
    position: relative;
    color: #FAF9F9;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 7px;
    border: 2px solid #FFF;
    background: #FF646B;
    width: 273px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    outline: none;
    margin: 65px auto 0;

    &:hover {
      background: #FF2731;
    }

    &:active {
      background: #D5141D;
    }

    @media only screen and (max-width: 991px) {
      position: inherit;
      margin: 25px auto 10px;
      width: 100%;
    }

  }

`,lt=({setUserRole:t})=>{const[n,i]=l.useState(""),[o,s]=l.useState(""),[a,r]=l.useState(null),[c,h]=l.useState(null),[d,u]=l.useState(null),{login:m}=pe(),j=G(),p=async y=>{u(y);try{const v=await fetch("https://highdardata.xyz/office/v1/account/me",{method:"POST",headers:{Authorization:`Bearer ${y}`}});if(v.ok){const F=await v.json();h(F.role),localStorage.setItem("userRole",F.role),console.log("LoginForm add userRole",F.role)}else console.error("Failed to fetch user role")}catch(v){console.error("An error occurred while fetching user role:",v)}},k=async y=>{y.preventDefault();try{const v=await fetch("https://highdardata.xyz/office/v1/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_type:"ServiceManagerApi",grant_type:"password",client_secret:"j3h24j5hf67eiu34y572hrj",username:n,password:o,expires_in:1209600})});if(v.ok){const F=await v.json();p(F.access_token),m(F.access_token)}else r("Invalid email or password")}catch(v){console.error("An error occurred:",v),r("An error occurred while trying to log in")}};return l.useEffect(()=>{c&&d&&j(c==="Admin"?"/admin/accounts":"/customer/dashboard")},[c,d]),e.jsxs(it,{children:[e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",id:"email",value:n,onChange:y=>i(y.target.value),required:!0,autoComplete:"email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",id:"password",value:o,onChange:y=>s(y.target.value),required:!0,autoComplete:"current-password"})]}),a&&e.jsx("div",{className:"error-message",children:a}),e.jsx("button",{className:"btn",type:"submit",children:"Login"})]}),c&&e.jsxs("div",{children:["User Role: ",c]})]})},ct="/assets/thank-you_bg-693a7458.webp",dt=g.section`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  //height: 838px;
  position: relative;
  font-family: 'Roboto', sans-serif;
  //overflow: hidden;


  @media only screen and (max-width: 991px) {
    height: auto;
  }

  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 100px 60px 0;
    
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }

    .title {
      color: #1A181E;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0 0 45px;
    }

    .image {
      margin-top: -213px;
      display: flex;
      justify-content: flex-end;
      //margin-right: 100px;

      img {
        width: 100%;
        height: auto;
        max-width: 1047px;
      }
    }

 
  }

  @media only screen and (max-width: 1440px) {
    .content {
      .image {
        margin-right: 0;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .content {
      display: flex;
      flex-direction: column;
      padding: 96px 15px 58px 15px;

      .title {
        text-align: center;
        font-size: 20px;
        line-height: 24px;
        max-width: none;
      }

      .image {
        order: 3;
        margin: 0;

        img {
          max-width: 330px;
        }
      }


    }
  }

`,ht=({setUserRole:t})=>{const n=G(),[i,o]=l.useState(!0);return l.useEffect(()=>{(async()=>{const a=localStorage.getItem("accessToken");if(a)try{const r=await fetch("https://highdardata.xyz/office/v1/account/me",{method:"POST",headers:{Authorization:`Bearer ${a}`}});if(r.ok){const c=await r.json();t(c.role),c.role==="Admin"?n("/admin/accounts"):c.role==="Customer"&&n("/customer/dashboard")}else console.error("Помилка при отриманні ролі:",r.status)}catch(r){console.error("Помилка при отриманні ролі:",r)}finally{o(!1)}else o(!1)})()},[t,n]),i?e.jsx("div",{children:"Loading..."}):e.jsx(dt,{children:e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"login-form",children:[e.jsx("h2",{className:"title",children:"Login"}),e.jsx(lt,{setUserRole:t})]}),e.jsx("div",{className:"image",children:e.jsx("img",{src:ct,alt:"img"})})]})})},pt=({children:t})=>e.jsx("div",{children:t}),xt="/assets/logo-463e5278.svg",mt="/assets/accounts-db43b069.svg",ye="/assets/customers-bb8122ef.svg",gt="/assets/dashboard-65e50592.svg",ut="/assets/transactions-9bb38487.svg",ft=g.div`
  max-width: 220px;
  height: fit-content;
  width: 100%;
  background: #fff;
  margin-top: -100px;
  position: relative;

  @media only screen and (max-width: 991px) {
    max-width: 150px;
    margin-top: -54px;
  }

  .header-sidebar {
    position: relative;
    z-index: 20;
  }

  .logo {
    margin: 13px 26px 0;
    @media only screen and (max-width: 991px) {
      margin-top: 10px;
    }

    img {
      @media only screen and (max-width: 991px) {
        max-width: 91px;

      }
    }
  }


  .sidebar-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0;
    background: #fff;
    padding: 30px 18px;

    li {
      display: flex;
      align-items: center;
      gap: 15px;

      a {
        color: #1A1A1A;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        display: flex;
        align-items: center;
        gap: 15px;
      }
    }
  }

  .coin-price {
    background: #1A1A1A;


    @media only screen and (max-width: 991px) {
      display: none;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: #FFF;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;

        &:nth-child(odd) {
          background: #353535;
        }

        &:nth-child(even) {
          background: #1A1A1A;
        }

        &:nth-child(1) {
          background: #1A1A1A;
        }

        span {
          width: 50%;
          position: relative;

          &:after {
            content: '';
            width: 50px;
            height: 1px;
            position: absolute;
            background: #B9B9B9;
            bottom: -5px;
            left: 0;
          }
        }
      }
    }
  }
`,jt=[{name:"accounts",path:"/admin/accounts",icon:mt},{name:"customers",path:"/admin/customers",icon:ye}],yt=[{name:"dashboard",path:"/customer/dashboard",icon:gt},{name:"transactions",path:"/customer/transactions",icon:ut},{name:"customers",path:"/customer/customers",icon:ye}],be=({setUserRole:t})=>{const[n,i]=l.useState({bitcoin:0,ethereum:0,litecoin:0,tether:0});l.useEffect(()=>{(async()=>{try{const c=await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur")).json(),d=await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur")).json(),m=await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=eur")).json(),p=await(await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=eur")).json();i({bitcoin:c.bitcoin.eur,ethereum:d.ethereum.eur,litecoin:m.litecoin.eur,tether:p.tether.eur})}catch(r){console.error("Error fetching crypto prices",r)}})()},[]);const s=localStorage.getItem("userRole")==="Customer"?yt:jt;return e.jsxs(ft,{children:[e.jsxs("div",{className:"header-sidebar",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:xt,alt:""})}),e.jsx("ul",{className:"sidebar-list",children:s.map(a=>e.jsx("li",{children:e.jsxs(Re,{to:a.path,style:{fontWeight:location.pathname===a.path?"bold":"inherit"},children:[e.jsx("img",{src:a.icon,alt:a.name}),a.name]})},a.name))})]}),e.jsx("div",{className:"coin-price",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{children:"Buy"}),e.jsx("span",{children:"EUR"})]}),e.jsxs("li",{children:[e.jsx("span",{children:"1 BTC"}),e.jsx("span",{children:n.bitcoin.toFixed(2)})]}),e.jsxs("li",{children:[e.jsx("span",{children:"1 ETH"}),e.jsx("span",{children:n.ethereum.toFixed(2)})]}),e.jsxs("li",{children:[e.jsx("span",{children:"1 LTC"}),e.jsx("span",{children:n.litecoin.toFixed(2)})]}),e.jsxs("li",{children:[e.jsx("span",{children:"1 USDT"}),e.jsx("span",{children:n.tether.toFixed(2)})]})]})})]})},bt=g.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;

  @media only screen and (max-width: 991px) {
    height: 54px;
  }


  h5 {
    color: #FFF;
    text-align: right;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .user_avatar {
    background: #FE7776;
    color: #FFF;
    text-align: right;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 58px;
    margin-right: 28px;
    text-transform: uppercase;
    padding-bottom: 2px;

    @media only screen and (max-width: 420px) {
      padding: 0 20px;
    }
  }

  .dots {
    cursor: pointer;

    @media only screen and (max-width: 991px) {
      height: 37px;
    }
  }

  .get_out {
    color: #1A1A1A;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid rgba(113, 113, 113, 0.20);
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
    padding: 10px;
    position: absolute;
    bottom: -22px;
    right: 10px;
    cursor: pointer;
  }
`,ve="/assets/dot-77adc4b9.svg",vt=({...t})=>{var d;const[n,i]=l.useState(!1),o=G(),s=l.useRef(null),a=()=>{i(u=>!u)},r=()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("userRole"),o("/login")},c=u=>{s.current&&!s.current.contains(u.target)&&i(!1)};l.useEffect(()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]);const h=((d=t==null?void 0:t.firstName)==null?void 0:d.charAt(0).toUpperCase())||"";return e.jsxs(bt,{className:"user",children:[e.jsxs("h5",{children:[t==null?void 0:t.firstName," ",t==null?void 0:t.lastName,"(",t==null?void 0:t.numericId,")"]}),e.jsx("span",{className:"user_avatar",children:h}),e.jsx("img",{className:"dots",ref:s,src:ve,alt:"icon",onClick:a}),n&&e.jsx("div",{className:"get_out",onClick:r,children:"Get out"})]})},wt=g.div`
  background-image: url(${ue});
  justify-content: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page_content {
    display: flex;
    gap: 16px;
    padding: 0 20px;
    width: 100%;
    max-width: 1300px;
  }
`,Ct=({children:t,setUserRole:n})=>{const{customerData:i,error:o}=H();return e.jsxs(wt,{children:[e.jsx(vt,{...i}),e.jsxs("div",{className:"page_content",children:[e.jsx(be,{setUserRole:n}),t]})]})},Ft=g.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;

  @media only screen and (max-width: 991px) {
    height: 54px;
  }


  h5 {
    color: #FFF;
    text-align: right;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media only screen and (max-width: 991px) {
      font-size: 16px;
    }
  }

  .user_avatar {
    background: #FE7776;
    color: #FFF;
    text-align: right;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 58px;
    margin-right: 28px;
    text-transform: uppercase;
    padding-bottom: 2px;

    @media only screen and (max-width: 991px) {
      width: 38px;
      height: 38px;
      font-size: 32px;
      margin: 0 24px 0 37px;
    }

    @media only screen and (max-width: 420px) {
      margin: 0 20px;
    }
  }

  .dots {
    cursor: pointer;
    
    @media only screen and (max-width: 991px) {
    height: 37px;
    }
  }

  .get_out {
    color: #1A1A1A;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid rgba(113, 113, 113, 0.20);
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
    padding: 10px;
    position: absolute;
    bottom: -22px;
    right: 10px;
    cursor: pointer;
  }
`,St=()=>{const[t,n]=l.useState(!1),i=G(),o=l.useRef(null),s=()=>{n(c=>!c)},a=()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("userRole"),i("/login")},r=c=>{o.current&&!o.current.contains(c.target)&&n(!1)};return l.useEffect(()=>(document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}),[]),e.jsxs(Ft,{className:"user",children:[e.jsx("h5",{children:"Admin"}),e.jsx("span",{className:"user_avatar",children:"A"}),e.jsx("img",{className:"dots",ref:o,src:ve,alt:"icon",onClick:s}),t&&e.jsx("div",{className:"get_out",onClick:a,children:"Get out"})]})},kt=g.div`
  background-image: url(${ue});
  justify-content: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page_content {
    display: flex;
    gap: 16px;
    padding: 0 15px;
    width: 100%;
    max-width: 1300px;

    @media only screen and (max-width: 991px) {
    flex-direction: column;
      
    }
  }
`,At=({children:t,setUserRole:n})=>e.jsxs(kt,{children:[e.jsx(St,{}),e.jsxs("div",{className:"page_content",children:[e.jsx(be,{setUserRole:n}),t]})]}),Nt=g.div`
    `,Et=g.div`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
  padding: 25px 13px 45px;
  max-width: 1026px;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
`,D=({children:t})=>e.jsx(Et,{children:t}),we="/assets/icon-1-116250cb.svg",Ce="/assets/icon-2-5b45725c.svg",Fe="/assets/icon-3-010bf047.svg",Se="/assets/icon-4-1d64370f.svg",Tt="/assets/icon-5-be9637e6.svg",It="/assets/icon-6-b51c0dca.svg",zt=g.div`
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap:  30px 10px;
    justify-content: center;

    h3 {
      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    
    li {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(101, 101, 101, 0.20);
      gap: 5px;
      display: flex;
      align-items: center;
      padding: 10px;
      height: 100px;
      min-width: 260px;
      width: calc(35% - 10px);
      max-width: 320px;

      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      
    }
  }
`,Gt=({...t})=>e.jsxs(zt,{className:"recovery-portfolio",children:[e.jsx("h2",{children:"Recovery Portfolio"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("img",{src:we,alt:""}),e.jsx("h3",{children:"Total Loss:"}),t.totalLoss]}),e.jsxs("li",{children:[e.jsx("img",{src:Ce,alt:""}),e.jsx("h3",{children:"Total Recovered:"}),t.totalRecovered]}),e.jsxs("li",{children:[e.jsx("img",{src:Fe,alt:""}),e.jsx("h3",{children:"Payment Method:"}),t.paymentMethod]}),e.jsxs("li",{children:[e.jsx("img",{src:Se,alt:""}),e.jsx("h3",{children:"Wallet:"}),t.wallet]}),e.jsxs("li",{children:[e.jsx("img",{src:Tt,alt:""}),e.jsx("h3",{children:"Smart Contract ID:"}),t.smartContractId]}),e.jsxs("li",{children:[e.jsx("img",{src:It,alt:""}),e.jsx("h3",{children:"Scammed By:"}),t.scammedBy]})]})]}),Pt=g.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }


  th {
    color: #353535;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    padding: 10px;

    &:last-of-type {
      text-align: right;
    }
  }

  tr {
    padding: 15px 0;

    td {
      padding: 10px;

      &:first-of-type {
        display: flex;
        align-items: center;
        gap: 17px;

      }
    }

  }

  td {
    color: #353535;
    //text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */

    &:last-of-type {
      text-align: right;
    }
  }

  tr{
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
  

`,Lt=({...t})=>!t||!t.transactions?e.jsx("div",{children:"Loading..."}):e.jsx(Pt,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Transaction ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Country"}),e.jsx("th",{children:"Recovered Amount"}),e.jsx("th",{children:"Date"})]})}),e.jsx("tbody",{children:t.transactions.map(n=>e.jsxs("tr",{children:[e.jsx("td",{children:n.numericId}),e.jsx("td",{children:n.name}),e.jsx("td",{children:n.statusFormatted}),e.jsx("td",{children:n.description}),e.jsx("td",{children:n.country}),e.jsx("td",{children:n.recoveredAmount}),e.jsx("td",{children:n.date})]},n.id))})]})}),Rt=g.div`
    
`,Bt=({...t})=>e.jsx(Rt,{children:e.jsxs(D,{children:[e.jsx(X,{...t}),e.jsx(Gt,{...t}),e.jsx(Lt,{...t})]})}),_t=({setUserRole:t})=>{const{customerData:n,error:i}=H(),o=G();return l.useEffect(()=>{const s=localStorage.getItem("accessToken"),a=localStorage.getItem("userRole");s||o("/login"),a!=="Customer"&&o("/login")},[o]),e.jsxs(Nt,{children:[e.jsx("div",{className:"transactions_content",children:e.jsx(Bt,{...n})}),i&&e.jsx("div",{className:"error-message",children:i})]})},$t=g.div`
    
`,Mt=g.div`

  ul {
    display: flex;
    flex-wrap: wrap;
    gap:  30px 10px;
    justify-content: flex-start;
    
    h3 {
      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    li {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(101, 101, 101, 0.20);
      gap: 5px;
      display: flex;
      align-items: center;
      padding: 10px;
      height: 100px;
      min-width: 260px;
      width: calc(35% - 10px);
      max-width: 320px;

      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

    }
  }
`,Ot=({...t})=>e.jsxs(Mt,{className:"clients-portfolio",children:[e.jsx("h2",{children:"Statistics"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("img",{src:we,alt:""}),e.jsx("h3",{children:"Total Clients:"}),t.totalClients]}),e.jsxs("li",{children:[e.jsx("img",{src:Ce,alt:""}),e.jsx("h3",{children:"Successful Cases:"}),t.successfulCases]}),e.jsxs("li",{children:[e.jsx("img",{src:Fe,alt:""}),e.jsx("h3",{children:"Amount recovered:"}),t.amountRecovered]}),e.jsxs("li",{children:[e.jsx("img",{src:Se,alt:""}),e.jsx("h3",{children:"Personal Manager:"}),t.personalManager]})]})]}),Ut=g.div`
  position: relative;

  .table-size {
    color: #1A1A1A;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    max-width: 104px;
    width: 100%;
    margin-bottom: 24px;

    select {
      color: #1A1A1A;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      border-radius: 5px;
      border: 0.5px solid rgba(143, 143, 143, 0.50);
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10), 0 2px 3px 0 rgba(30, 9, 77, 0.15) inset;
    }
  }

  .table-info {
    overflow: scroll;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;

    th {
      color: #353535;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px;

      &:last-of-type {
        text-align: center;
      }
    }

    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &:last-of-type,
      &:nth-last-child(2) {
        text-align: center;
        width: 50px;
      }
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
    }


    .add {
      border-radius: 10px;
      background: #1E0F6D;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      width: 19px;
      height: 19px;
      padding: 5px;
      cursor: pointer;
    }

    .edit,
    .bin {
      cursor: pointer;
    }

  }

  .table-entries {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #535353;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .table-pages {
      display: flex;
      align-items: center;
      gap: 5px;

      .page {
        color: #FFF;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: #340077;
        border-radius: 50%;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        border: 1px solid #787878;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        outline: none;

        &:disabled {
          opacity: 0.5;
        }
      }
    }
  }

`,Wt="https://highdardata.xyz/office/v1/adminCustomers/getAll",Jt=t=>{const[n,i]=l.useState([]),[o,s]=l.useState(10),[a,r]=l.useState(1),[c,h]=l.useState(1),d=async()=>{try{const m=localStorage.getItem("accessToken"),p=await(await fetch(Wt,{headers:{Authorization:`Bearer ${m}`}})).json();p&&p.length>0?(i(p),h(Math.ceil(p.length/o))):(console.error("Отримані порожній дані або масив."),i(p))}catch(m){console.error("Error fetching customers:",m)}};return l.useEffect(()=>{s(10),d()},[t]),{customers:n,pageSize:o,setPageSize:s,currentPage:a,setCurrentPage:r,totalPages:c,handlePageChange:m=>{r(m)},fetchCustomers:d}},Ht=g.div`
    .edit-customer-modal-fields {
      display: flex;
      
      & > div {
        display: flex;
        flex-direction: column;
      }
    }
`,qt=({onSave:t,onClose:n})=>{const[i,o]=l.useState({numericId:"",name:"",status:"",country:"",recoveredAmount:"",date:""}),s=r=>{const{name:c,value:h}=r.target;o({...i,[c]:h})},a=()=>{t({...i}),n()};return e.jsxs(Ht,{className:"edit-customer-modal",children:[e.jsxs("div",{className:"edit-customer-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"numericId",children:"ID"}),e.jsx("input",{type:"text",name:"numericId",value:i.numericId,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:i.name,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"status",children:"Status"}),e.jsx("input",{type:"text",name:"status",value:i.status,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country",children:"Country"}),e.jsx("input",{type:"text",name:"country",value:i.country,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"recoveredAmount",children:"Recovered Amount"}),e.jsx("input",{type:"text",name:"recoveredAmount",value:i.recoveredAmount,onChange:s})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"date",children:"Date"}),e.jsx("input",{type:"text",name:"date",value:i.date,onChange:s})]})]}),e.jsx("button",{onClick:a,children:"Save"})]})},ee="/assets/bin-e9c10c42.svg",Kt="/assets/add-35c3ca51.svg",Yt=t=>{const[n,i]=l.useState(null);return{handleDeleteCustomer:async s=>{try{const a=localStorage.getItem("accessToken");(await fetch(`https://highdardata.xyz/office/v1/adminCustomers/delete?id=${s}`,{headers:{Authorization:`Bearer ${a}`}})).ok?(console.log("Успішно видалено customer"),t(),console.log("Успішно оновлено customers")):i("Помилка при видаленні покупця")}catch{i("Помилка при видаленні покупця")}},error:n}},Vt=t=>{const[n,i]=l.useState(null);return{handleAddCustomer:async s=>{try{const a=localStorage.getItem("accessToken");(await fetch("https://highdardata.xyz/office/v1/adminCustomers/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(s)})).ok?(console.log("Customer data added successfully!"),t()):i("Error adding customer data. Please try again later.")}catch{i("Error adding customer data. Please try again later.")}},error:n}},Zt=t=>{const[n,i]=l.useState(null);return{handleUpdateCustomer:async s=>{try{const a=localStorage.getItem("accessToken");(await fetch("https://highdardata.xyz/office/v1/adminCustomers/update",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(s)})).ok?(console.log("Customer data updated successfully!"),t()):i("Error updating customer data. Please try again later.")}catch{i("Error updating customer data. Please try again later.")}},error:n}},ke=({accessToken:t})=>{const{customers:n,pageSize:i,setPageSize:o,currentPage:s,setCurrentPage:a,totalPages:r,handlePageChange:c,fetchCustomers:h}=Jt(t),{handleDeleteCustomer:d,error:u}=Yt(h),m=localStorage.getItem("userRole"),j=(s-1)*i+1,p=Math.min(j+i-1,n.length),k=n.length,y=()=>{s>1&&a(s-1)},v=()=>{s<r&&a(s+1)},[F,f]=l.useState(!1),[N,x]=l.useState(null),w=S=>{f(!0),x(S)},{handleUpdateCustomer:C,error:I}=Zt(h),T=async S=>{await C(S),f(!1)};Vt(h);const[z,L]=l.useState(!1),A=()=>{L(!0)},E=()=>{L(!1)};return e.jsxs(Ut,{children:[e.jsxs("div",{className:"table-size",children:["Show",e.jsxs("select",{value:i,onChange:S=>o(S.target.value),children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"25",children:"25"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]}),"entries"]}),e.jsx("div",{className:"table-info",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Country"}),e.jsx("th",{children:"Recovered amount"}),e.jsx("th",{children:"Date"}),m==="Admin"&&e.jsx("td",{}),m==="Admin"&&e.jsx("td",{children:e.jsx("img",{className:"add",src:Kt,alt:"icon",onClick:A})})]})}),e.jsx("tbody",{children:n.slice(0,i).map(S=>e.jsxs("tr",{children:[e.jsx("td",{children:S.numericId}),e.jsx("td",{children:S.name}),e.jsx("td",{children:S.status}),e.jsx("td",{children:S.country}),e.jsx("td",{children:S.recoveredAmount}),e.jsx("td",{children:S.date}),m==="Admin"&&e.jsx("td",{children:e.jsx("img",{className:"edit",src:W,alt:"icon",onClick:()=>{w(S)}})}),m==="Admin"&&e.jsx("td",{children:e.jsx("img",{className:"bin",src:ee,alt:"icon",onClick:()=>d(S.id)})})]},S.id))})]})}),e.jsxs("div",{className:"table-entries",children:[e.jsxs("p",{children:["Showing ",j," to ",p," of ",k," entries"]}),e.jsxs("div",{className:"table-pages",children:[r>1&&e.jsx("button",{onClick:y,disabled:s===1,children:e.jsx("img",{className:"page-icon",src:ge,alt:"icon"})}),e.jsx("span",{className:"page",children:s}),r>1&&e.jsx("button",{onClick:v,disabled:s===r,children:e.jsx("img",{className:"page-icon",src:me,alt:"icon"})})]})]}),F&&N&&e.jsx(R,{isOpen:F,onClose:()=>f(!1),children:e.jsx(xe,{customer:N,onSave:T})}),z&&e.jsx(R,{isOpen:z,onClose:()=>L(!1),children:e.jsx(qt,{customer:N,onSave:T,onClose:E})})]})},Qt=({...t})=>e.jsx($t,{children:e.jsxs(D,{children:[e.jsx(X,{...t}),e.jsx(Ot,{...t}),e.jsx(ke,{})]})}),Xt=g.div`
    
`,Dt=()=>{const{customerData:t,error:n}=H(),i=G();return l.useEffect(()=>{const o=localStorage.getItem("accessToken"),s=localStorage.getItem("userRole");o||i("/login"),s!=="Customer"&&i("/login")},[i]),e.jsxs(Xt,{children:[e.jsx("div",{className:"transactions_content",children:e.jsx(Qt,{...t})}),n&&e.jsx("div",{className:"error-message",children:n})]})},en=g.div`
  border-radius: 10px;
  background: #FFF;
  max-width: 1026px;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
`,tn=g("div")`
    
`,nn=()=>e.jsx(tn,{children:e.jsx(D,{children:e.jsx(ke,{})})}),sn=()=>{const t=G();return l.useEffect(()=>{const n=localStorage.getItem("accessToken"),i=localStorage.getItem("userRole");n||t("/login"),i!=="Admin"&&t("/login")},[t]),e.jsx(en,{children:e.jsx("div",{className:"customers_content",children:e.jsx(nn,{})})})},on=t=>{const[n,i]=l.useState(null);return l.useEffect(()=>(t&&(async()=>{try{const s=localStorage.getItem("accessToken"),a=await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.ok){const r=await a.json();i(r)}else console.error("Error fetching customer data:",a.statusText)}catch(s){console.error("Error fetching customer data:",s)}})(),()=>{}),[t]),n},an=g("div")`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
  padding: 30px;

  @media only screen and (max-width: 991px) {
    padding: 15px;
  }

  .control {
    display: flex;
    justify-content: space-between;
  }

  .main-info {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
      padding: 20px 15px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px 20px;
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
        align-items: center;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          white-space: nowrap;
        }
      }
    }
  }

  input {
    border: none;
    outline: none;
    color: #1A1A1A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
  }

`,rn=g("div")`
  margin-bottom: 30px;
  gap: 10px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  h2 {
    color: #1C0371;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  button {
    border-radius: 10px;
    background: #1E0F6D;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 177px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #260FA0;
    }

    &:active {
      background: #1D1060;
    }
    
    @media only screen and (max-width: 480px) {
      margin: 0 0 0 auto;
    }
  }

`,ln="/assets/check-mark-3c4bef08.svg",B=({title:t,buttonText:n,onClick:i,showText:o})=>e.jsxs(rn,{className:"control",children:[e.jsx("h2",{children:t}),e.jsx("button",{onClick:i,children:o?e.jsx("div",{className:"main-info",children:n}):e.jsx("img",{src:ln,alt:"Success Image"})})]}),cn=({...t})=>{const[n,i]=l.useState({...t}),[o,s]=l.useState(!0),a=c=>{const{name:h,value:d}=c.target;i(u=>({...u,[h]:d}))},r=async()=>{try{const c=localStorage.getItem("accessToken"),h=await fetch("https://highdardata.xyz/office/v1/customers/setMain",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify(n)});h.ok?(console.log("Data saved successfully!"),s(!1)):console.error("Error saving customer data:",h.statusText)}catch(c){console.error("Error saving customer data:",c)}};return e.jsxs(an,{children:[e.jsx(B,{title:"Main",buttonText:"Save",onClick:r,showText:o}),e.jsxs("div",{className:"main-info",children:[e.jsxs("div",{className:"main-info-group",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"text",name:"email",value:n.email,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",children:" Password:"}),e.jsx("input",{type:"text",name:"password",value:n.password,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",children:" Phone Number:"}),e.jsx("input",{type:"text",name:"phone",value:n.phone,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"numericId",children:"ID:"}),e.jsx("input",{type:"text",name:"numericId",value:n.numericId,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"firstName",children:"First Name:"}),e.jsx("input",{type:"text",name:"firstName",value:n.firstName,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"lastName",children:"Last Name:"}),e.jsx("input",{type:"text",name:"lastName",value:n.lastName,onChange:a})]})]}),e.jsxs("div",{className:"main-info-group",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"caseNumber",children:" Case number:"}),e.jsx("input",{type:"text",name:"caseNumber",value:n.caseNumber,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"caseStarted",children:"Case Started:"}),e.jsx("input",{type:"text",name:"caseStarted",value:n.caseStarted,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Description:"}),e.jsx("input",{type:"text",name:"description",value:n.description,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currencySymbol",children:"Currency symbol:"}),e.jsx("input",{type:"text",name:"currencySymbol",value:n.currencySymbol,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"kycStatus",children:" KYC status:"}),e.jsx("input",{type:"text",name:"kycStatus",value:n.kycStatus,onChange:a})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"customerStatus",children:"Customer status:"}),e.jsx("input",{type:"text",name:"customerStatus",value:n.customerStatus,onChange:a})]})]})]})]})},dn=g("div")`
  max-width: 1026px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,hn=g("div")`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media only screen and (max-width: 991px) {
    padding: 30px 15px;
  }
  
  & > .control {
    margin-bottom: 0;
  }

  .control {
    display: flex;
    justify-content: space-between;
  }

  .dashboard-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .dashboard-info {
      display: flex;
      flex-direction: column;

      &-group {
        border-radius: 10px;
        background: #FFF;
        display: flex;
        flex-wrap: wrap;
        gap: 30px 20px;
        color: #1A1A1A;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 0;

        @media only screen and (max-width: 768px) {
          flex-direction: column;
        }

        & > div {
          border-radius: 10px;
          border: 1px solid rgba(113, 113, 113, 0.20);
          background: #FFF;
          box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
          color: #1A1A1A;
          width: calc(50% - 10px);
          padding: 10px;
          display: flex;
          gap: 5px;

          @media only screen and (max-width: 768px) {
            width: 100%;
          }

          label {
            white-space: nowrap;
          }

        }
      }
    }
  }

  .main-graph-group {
    border-radius: 10px;
    background: #FFF;
    flex-direction: column;
    gap: 20px;
    padding: 0;

    .main-graph-fields {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      margin-bottom: 120px;
    }

    h3 {
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      border: none;
      box-shadow: none;
      width: 100%;
      padding: 0;
      background: #fff;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: 105px;
        padding: 10px;
        display: flex;
        gap: 5px;

        input {
          width: 81px;
        }
      }
    }

    .main-graph-chart {
      width: 100%;
      overflow: scroll;
      border: none;
      box-shadow: none;
    }

    .chart-line {

      margin-bottom: 75px;

    }

    & > div {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
      color: #1A1A1A;
      width: calc(50% - 10px);
      padding: 10px;
      display: flex;
      gap: 5px;

      label {
        white-space: nowrap;
      }

    }
  }

  .second-graph-group {
    border-radius: 10px;
    background: #FFF;
    flex-direction: column;
    gap: 20px;
    padding: 0;

    .second-graph-fields {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      margin-bottom: 50px;
    }

    h3 {
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      border: none;
      box-shadow: none;
      width: 100%;
      padding: 0;
      background: #fff;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: 105px;
        padding: 10px;
        display: flex;
        gap: 5px;

        input {
          width: 81px;
        }
      }
    }

    .second-graph-chart {
      width: 100%;
      overflow: scroll;
      border: none;
      box-shadow: none;
    }

    .chart-line {
      border: none;
      box-shadow: none;
      margin-bottom: 20px;
    }

    & > div {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
      color: #1A1A1A;
      width: calc(50% - 10px);
      padding: 10px;
      display: flex;
      gap: 5px;

      label {
        white-space: nowrap;
      }

    }

  }

  .assets-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .customers-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        padding: 10px;
        display: flex;
        gap: 5px;
        width: calc(50% - 10px);
      }
    }
  }

  .transactions-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    display: flex;
    flex-direction: column;

    .transactions-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
        align-items: center;
        height: 40px;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          white-space: nowrap;
        }

      }
    }
  }

  .customers-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    display: flex;
    flex-direction: column;

    .customers-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0 0 4px 0 rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
        align-items: center;
        height: 40px;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

        label {
          white-space: nowrap;
        }

      }
    }
  }

  input {
    border: none;
    outline: none;
    color: #1A1A1A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
  }

`,pn=g("div")`
  position: relative;

  .assets_charts-doughnut {
    margin-top: 50px;

    .doughnut-wrap {
      flex-direction: row;

      @media only screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .table-info {
    overflow: scroll;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
    min-width: 400px;

    th {
      color: #353535;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px;
    }

    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      .coin-icon {
        width: 25px;
        height: 25px;
      }

      &:last-of-type,
      &:nth-last-child(2) {
        text-align: center;
        width: 50px;
      }
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
    }


    .edit,
    .bin {
      cursor: pointer;
    }

  }

`,xn=g("div")`
  .edit-assets-modal-fields {
    display: flex;
    row-gap: 30px;

    & > div {
      display: flex;
      flex-direction: column;
      background: #FFF;
      width: 100%;
      &:not(:first-child) {
        label,
        input {
          border-left: none;
        }
      }
      
      label {
        border: 1px solid rgba(113, 113, 113, 0.20);
        text-align: left;
        padding: 10px;
        border-bottom: none;
        color: #353535;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;
        
       
      }

      input {
        width: 100%;
        border: 1px solid rgba(113, 113, 113, 0.20);
        padding: 10px;
        background: #E8E8E8;
        color: #353535;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;
      }
    }

    .custom-select {
      position: relative;
      width: 100%;
    }

    .selected-option {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      height: 40px;
      background: #E8E8E8;
      border-left: none;
      justify-content: center;

      img {
        margin-right: 10px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
      }

      .arr {
        width: 15px;
        height: 10px;
        margin: 0;
      }
    }


    .options {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border: 1px solid rgba(113, 113, 113, 0.20);
      border-top: none;
      border-radius: 0 0 5px 5px;
      overflow: hidden;
      z-index: 1;

      &.show {
        display: block;
        background: #FFF;
      }

      & div {
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: #E8E8E8;
        }
      }

      img {
        height: 25px;
      }
    }
  }
  button {
    border-radius: 10px;
    background: #1E0F6D;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 177px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;

    &:hover {
      background: #260FA0;
    }
`,$="/assets/bitcoin-bd99f642.svg",M="/assets/usdt-412d172a.svg",O="/assets/ethereum-4aa2070f.svg",U="/assets/litecoin-b3e4d598.svg",mn=({onSave:t,onClose:n,onCreate:i,editAssetData:o})=>{const[s,a]=l.useState({id:o==null?void 0:o.id,name:(o==null?void 0:o.name)||"",amount:(o==null?void 0:o.amount)||"",price:(o==null?void 0:o.price)||"",logoName:(o==null?void 0:o.logoName)||""}),r=h=>{const{name:d,value:u}=h.target;a(m=>({...m,[d]:u}))},c=async()=>{try{const h=localStorage.getItem("accessToken"),d=await fetch("https://highdardata.xyz/office/v1/assets/update",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify(s)});d.ok?(console.log("Asset successfully updated"),t(),n()):console.error("Error updating asset:",d.statusText)}catch(h){console.error("Error updating asset:",h)}};return e.jsx(xn,{children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"edit-assets-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amount",children:"Amount"}),e.jsx("input",{type:"text",id:"amount",name:"amount",value:s.amount,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"price",children:"Price"}),e.jsx("input",{type:"text",id:"price",name:"price",value:s.price,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"logoName",children:"Logo"}),e.jsxs("div",{className:"custom-select",children:[e.jsxs("div",{className:"selected-option",onClick:()=>document.getElementById("options").classList.toggle("show"),children:[e.jsx("img",{src:s.logoName==="bitcoin.svg"?$:s.logoName==="usdt.svg"?M:s.logoName==="ethereum.svg"?O:s.logoName==="litecoin.svg"?U:"",alt:s.logoName,width:"25",height:"25"}),e.jsx("img",{className:"arr",src:J,alt:"arr",width:"15",height:"10"})]}),e.jsxs("div",{id:"options",className:"options",children:[e.jsx("div",{onClick:()=>{r({target:{name:"logoName",value:"bitcoin.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:$,alt:"Bitcoin",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{r({target:{name:"logoName",value:"usdt.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:M,alt:"Tether",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{r({target:{name:"logoName",value:"ethereum.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:O,alt:"Ethereum",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{r({target:{name:"logoName",value:"litecoin.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:U,alt:"Litecoin",width:"25",height:"25"})})]})]})]})]}),e.jsx("button",{onClick:c,children:"Save"})]})})},gn=g("div")`
  .create-assets-modal-fields {
    display: flex;
    row-gap: 30px;

    & > div {
      display: flex;
      flex-direction: column;
      background: #FFF;
      width: 100%;
      &:not(:first-child) {
        label,
        input {
          border-left: none;
        }
      }

      label {
        border: 1px solid rgba(113, 113, 113, 0.20);
        text-align: left;
        padding: 10px;
        border-bottom: none;
        color: #353535;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;


      }

      input {
        width: 100%;
        border: 1px solid rgba(113, 113, 113, 0.20);
        padding: 10px;
        background: #E8E8E8;
        color: #353535;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;
      }
    }

    .custom-select {
      position: relative;
      width: 100%;
    }

    .selected-option {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      height: 40px;
      background: #E8E8E8;
      border-left: none;
      justify-content: center;

      img {
        margin-right: 10px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
      }

      .arr {
        width: 15px;
        height: 10px;
        margin: 0;
      }
    }


    .options {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border: 1px solid rgba(113, 113, 113, 0.20);
      border-top: none;
      border-radius: 0 0 5px 5px;
      overflow: hidden;
      z-index: 1;

      &.show {
        display: block;
        background: #FFF;
      }

      & div {
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: #E8E8E8;
        }
      }

      img {
        height: 25px;
      }
    }
  }
  button {
    border-radius: 10px;
    background: #1E0F6D;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 177px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;

    &:hover {
      background:
    }
`,un=t=>{const[n,i]=l.useState(null),o=async()=>{try{const s=localStorage.getItem("accessToken"),a=await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.ok){const r=await a.json();i(r)}else console.error("Error fetching customer data:",a.statusText)}catch(s){console.error("Error fetching customer data:",s)}};return l.useEffect(()=>(t&&(o(),console.log("дані оновлено")),()=>{}),[t]),{customerData:n,fetchData:o}},fn=({isOpen:t,onClose:n,onCreate:i})=>{const s=new URLSearchParams(window.location.search).get("id"),{customerData:a,fetchData:r}=un(s),[c,h]=l.useState({customerId:s,name:"",amount:"",price:"",logoName:"bitcoin.svg"}),d=m=>{const{name:j,value:p}=m.target;h({...c,[j]:p})},u=async()=>{try{const m=localStorage.getItem("accessToken");(await fetch("https://highdardata.xyz/office/v1/assets/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify(c)})).ok?(i(c),console.log("Asset created successfully!"),n(),r(),console.log("fetchData after create Asset ")):console.error("Помилка при відправці даних на сервер")}catch(m){console.error("Помилка:",m)}};return t?e.jsx(gn,{children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"create-assets-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:c.name,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amount",children:"Amount"}),e.jsx("input",{type:"text",name:"amount",value:c.amount,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"price",children:"Price"}),e.jsx("input",{type:"text",name:"price",value:c.price,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"logoName",children:"Logo"}),e.jsxs("div",{className:"custom-select",children:[e.jsxs("div",{className:"selected-option",onClick:()=>document.getElementById("options").classList.toggle("show"),children:[e.jsx("img",{src:c.logoName==="bitcoin.svg"?$:c.logoName==="usdt.svg"?M:c.logoName==="ethereum.svg"?O:c.logoName==="litecoin.svg"?U:"",alt:c.logoName,width:"25",height:"25"}),e.jsx("img",{className:"arr",src:J,alt:"arr",width:"15",height:"10"})]}),e.jsxs("div",{id:"options",className:"options",children:[e.jsx("div",{onClick:()=>{d({target:{name:"logoName",value:"bitcoin.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:$,alt:"Bitcoin",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{d({target:{name:"logoName",value:"usdt.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:M,alt:"Tether",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{d({target:{name:"logoName",value:"ethereum.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:O,alt:"Ethereum",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{d({target:{name:"logoName",value:"litecoin.svg"}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:U,alt:"Litecoin",width:"25",height:"25"})})]})]})]})]}),e.jsx("button",{onClick:u,children:"Save"})]})}):null},jn=t=>{const[n,i]=l.useState(null),o=async()=>{try{const s=localStorage.getItem("accessToken"),a=await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.ok){const r=await a.json();i(r)}else console.error("Error fetching customer data:",a.statusText)}catch(s){console.error("Error fetching customer data:",s)}};return l.useEffect(()=>(t&&(o(),console.log("дані оновлено")),()=>{}),[t]),{customerData:n,fetchData:o}},yn=({isAssetCreateModalOpen:t,setIsAssetCreateModalOpen:n,onCreate:i})=>{const[o,s]=l.useState(null),a="/src/assets/images/cryptoIcon/",c=new URLSearchParams(window.location.search).get("id"),{customerData:h,fetchData:d}=jn(c),u=(h==null?void 0:h.assets)||[],m=async x=>{console.log(x);try{const w=localStorage.getItem("accessToken");(await fetch(`https://highdardata.xyz/office/v1/assets/delete?id=${x}`,{headers:{Authorization:`Bearer ${w}`}})).ok?(console.log("Asset successfully deleted"),await d(),console.log("after fetchData")):s("Error deleting asset")}catch{s("Error deleting asset")}},[j,p]=l.useState(!1),[k,y]=l.useState(null),v=()=>{p(!1)},F=x=>{y(x)},f=x=>{const w=u.find(C=>C.id===x);F(w),p(!0)},N=x=>{d(),n(!1)};return e.jsxs(pn,{children:[e.jsx("div",{className:"table-info",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Logo"}),e.jsx("th",{}),e.jsx("th",{})]})}),e.jsx("tbody",{children:u.map(x=>e.jsxs("tr",{children:[e.jsx("td",{children:x.name}),e.jsx("td",{children:x.amount}),e.jsx("td",{children:x.price}),e.jsx("td",{children:e.jsx("img",{className:"coin-icon",src:`${a}${x.logoName}`,alt:""})}),e.jsx("td",{children:e.jsx("img",{className:"edit",src:W,alt:"icon",onClick:()=>{f(x.id)}})}),e.jsx("td",{children:e.jsx("img",{className:"bin",src:ee,alt:"icon",onClick:()=>m(x.id)})})]},x.id))})]})}),e.jsx("div",{className:"assets_charts-doughnut",children:e.jsx(je,{...h})}),j&&e.jsx(R,{isOpen:p,onClose:()=>p(!1),children:e.jsx(mn,{onSave:d,isOpen:j,onClose:v,onCreate:f,editAssetData:k})}),t&&e.jsx(R,{isOpen:n,onClose:()=>n(!1),children:e.jsx(fn,{isOpen:t,onClose:()=>n(!1),onCreate:N})})]})},bn=g.div`
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;

    th {
      color: #353535;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: left;
      padding: 10px;

      &:last-of-type {
        text-align: center;
      }
    }

    td {
      padding: 10px;
      color: #353535;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &:last-of-type,
      &:nth-last-child(2) {
        text-align: center;
        width: 50px;
      }
    }

    tr {
      padding: 15px 0;
    }

    th, td {
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: #FFF;
    }


    .add {
      border-radius: 10px;
      background: #1E0F6D;
      box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
      width: 19px;
      height: 19px;
      padding: 5px;
      cursor: pointer;
    }

    .edit,
    .bin {
      cursor: pointer;
    }

  }

`,vn=g("div")`
  .edit-all-transaction-modal-fields{
    display: flex;
    row-gap: 30px;

    & > div {
      display: flex;
      flex-direction: column;
      background: #FFF;
      width: 100%;
      &:not(:first-child) {
        label,
        input {
          border-left: none;
        }
      }

      label {
        border: 1px solid rgba(113, 113, 113, 0.20);
        text-align: left;
        padding: 10px;
        border-bottom: none;
        color: #353535;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;


      }

      input {
        width: 100%;
        border: 1px solid rgba(113, 113, 113, 0.20);
        padding: 10px;
        background: #E8E8E8;
        color: #353535;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        height: 40px;
      }
    }

    .custom-select {
      position: relative;
      width: 100%;
    }

    .selected-option {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      height: 40px;
      background: #E8E8E8;
      border-left: none;
      justify-content: center;

      img {
        margin-right: 10px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
      }

      .arr {
        width: 15px;
        height: 10px;
        margin: 0;
      }
    }


    .options {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border: 1px solid rgba(113, 113, 113, 0.20);
      border-top: none;
      border-radius: 0 0 5px 5px;
      overflow: hidden;
      z-index: 1;

      &.show {
        display: block;
        background: #FFF;
      }

      & div {
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: #E8E8E8;
        }
      }

      img {
        height: 25px;
      }
    }
  }
  button {
    border-radius: 10px;
    background: #1E0F6D;
    box-shadow: 0 10px 60px 0 rgba(10, 45, 97, 0.10);
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 177px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;

    &:hover {
      background: #260FA0;
    }
`,ne="/assets/success-0debd005.svg",se="/assets/fail-a89a2289.svg",oe="/assets/inprogress-f8857004.svg",K="/assets/new-ab67c1c6.svg",wn=({onSave:t,onClose:n,onCreate:i,editTransactionData:o})=>{const[s,a]=l.useState({id:o==null?void 0:o.id,numericId:o==null?void 0:o.numericId,name:(o==null?void 0:o.name)||"",status:(o==null?void 0:o.status)||"1",statusFormatted:(o==null?void 0:o.statusFormatted)||"",description:(o==null?void 0:o.description)||"",country:(o==null?void 0:o.country)||"",recoveredAmount:(o==null?void 0:o.recoveredAmount)||"",date:(o==null?void 0:o.date)||""}),r=h=>{const{name:d,value:u}=h.target;a(m=>({...m,[d]:u}))},c=async()=>{try{const h=localStorage.getItem("accessToken"),d=await fetch("https://highdardata.xyz/office/v1/transactions/update",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify(s)});d.ok?(console.log("Asset successfully updated"),t(),n()):console.error("Error updating asset:",d.statusText)}catch(h){console.error("Error updating asset:",h)}};return e.jsx(vn,{children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"edit-all-transaction-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"numericId",children:"Transaction ID"}),e.jsx("input",{type:"text",id:"numericId",name:"numericId",value:s.numericId,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"status",children:"Status"}),e.jsxs("div",{className:"custom-select",children:[e.jsxs("div",{className:"selected-option",onClick:()=>document.getElementById("options").classList.toggle("show"),children:[e.jsx("img",{src:s.status===1?oe:s.status===2?ne:s.status===3?se:(s.status===4,K),alt:s.statusFormatted,width:"25",height:"25"}),e.jsx("img",{className:"arr",src:J,alt:"arr",width:"15",height:"10"})]}),e.jsxs("div",{id:"options",className:"options",children:[e.jsx("div",{onClick:()=>{r({target:{name:"status",value:1}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:oe,alt:"inprogress",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{r({target:{name:"status",value:2}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:ne,alt:"success",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{r({target:{name:"status",value:3}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:se,alt:"fail",width:"25",height:"25"})}),e.jsx("div",{onClick:()=>{r({target:{name:"status",value:4}}),document.getElementById("options").classList.remove("show")},children:e.jsx("img",{src:K,alt:"newst",width:"25",height:"25"})})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("input",{type:"text",id:"description",name:"description",value:s.description,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country",children:"Country"}),e.jsx("input",{type:"text",id:"country",name:"country",value:s.country,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"recoveredAmount",children:"Recovered Amount"}),e.jsx("input",{type:"text",id:"recoveredAmount",name:"recoveredAmount",value:s.recoveredAmount,onChange:r})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"date",children:"Date"}),e.jsx("input",{type:"text",id:"date",name:"date",value:s.date,onChange:r})]})]}),e.jsx("button",{onClick:c,children:"Save"})]})})},Cn=g("div")`
  .create-transactions-modal-fields {
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 20px;

    & > div {
      width: calc(50% - 10px);
      display: flex;
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
      padding: 10px;
      
      input {
        width: 100%;
      }
    }
  }
`,Fn=t=>{const[n,i]=l.useState(null),o=async()=>{try{const s=localStorage.getItem("accessToken"),a=await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.ok){const r=await a.json();i(r)}else console.error("Error fetching customer data:",a.statusText)}catch(s){console.error("Error fetching customer data:",s)}};return l.useEffect(()=>(t&&(o(),console.log("дані оновлено")),()=>{}),[t]),{customerData:n,fetchData:o}},Sn=({isOpen:t,onClose:n,onCreate:i})=>{const s=new URLSearchParams(window.location.search).get("id"),{customerData:a,fetchData:r}=Fn(s),[c,h]=l.useState({customerId:s,numericId:"",name:"",status:"",description:"",country:"",recoveredAmount:"",date:""}),d=m=>{const{name:j,value:p}=m.target;h({...c,[j]:p})},u=async()=>{try{const m=localStorage.getItem("accessToken");(await fetch("https://highdardata.xyz/office/v1/transactions/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify(c)})).ok?(i(c),console.log("Transaction created successfully!"),n(),r(),console.log("fetchData after create Transaction ")):console.error("Помилка при відправці даних на сервер")}catch(m){console.error("Помилка:",m)}};return t?e.jsx(Cn,{children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"create-transactions-modal-fields",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"numericId",children:"Transaction ID"}),e.jsx("input",{type:"text",name:"numericId",value:c.numericId,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:c.name,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",children:"Status"}),e.jsxs("select",{name:"status",id:"status",value:c.status,onChange:d,children:[e.jsx("option",{value:"4",children:"New"}),e.jsx("option",{value:"1",children:" InProgress"}),e.jsx("option",{value:"2",children:"Success"}),e.jsx("option",{value:"3",children:"Fail"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",children:"Description"}),e.jsx("input",{type:"text",name:"description",value:c.description,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country",children:"Country"}),e.jsx("input",{type:"text",name:"country",value:c.country,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"recoveredAmount",children:"Recovered Amount"}),e.jsx("input",{type:"text",name:"recoveredAmount",value:c.recoveredAmount,onChange:d})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"date",children:"Date"}),e.jsx("input",{type:"text",name:"date",value:c.date,onChange:d})]})]}),e.jsx("button",{onClick:u,children:"Save"})]})}):null},kn=t=>{const[n,i]=l.useState(null),o=async()=>{try{const s=localStorage.getItem("accessToken"),a=await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.ok){const r=await a.json();i(r)}else console.error("Error fetching customer data:",a.statusText)}catch(s){console.error("Error fetching customer data:",s)}};return l.useEffect(()=>(t&&(o(),console.log("дані оновлено")),()=>{}),[t]),{customerData:n,fetchData:o}},An=({isTransactionCreateModalOpen:t,setIsTransactionCreateModalOpen:n})=>{const i="/src/assets/images/status/",o=localStorage.getItem("userRole"),a=new URLSearchParams(window.location.search).get("id"),{customerData:r,fetchData:c}=kn(a),h=(r==null?void 0:r.transactions)||[],[d,u]=l.useState(null),m=async x=>{try{const w=localStorage.getItem("accessToken");(await fetch(`https://highdardata.xyz/office/v1/transactions/delete?id=${x}`,{headers:{Authorization:`Bearer ${w}`}})).ok?(console.log("Deleted successfully Transaction"),await c(),console.log("Deleted successfully Transaction")):u("Error deleting Transaction")}catch{u("Error deleting Transaction")}},[j,p]=l.useState(!1),[k,y]=l.useState(null),v=()=>{p(!1)},F=x=>{y(x)},f=x=>{const w=h.find(C=>C.id===x);F(w),p(!0)},N=x=>{c(),n(!1)};return e.jsxs(bn,{children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Transaction ID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Country"}),e.jsx("th",{children:"Recovered Amount"}),e.jsx("th",{children:"Date"}),e.jsx("th",{}),e.jsx("th",{})]})}),e.jsx("tbody",{children:h.map(x=>e.jsxs("tr",{children:[e.jsx("td",{children:x.numericId}),e.jsx("td",{children:x.name}),e.jsx("td",{children:e.jsx("img",{className:"coin-icon",src:`${i}${x.statusFormatted}.svg`,alt:""})}),e.jsx("td",{children:x.description}),e.jsx("td",{children:x.country}),e.jsx("td",{children:x.recoveredAmount}),e.jsx("td",{children:x.date}),o==="Admin"&&e.jsx("td",{children:e.jsx("img",{className:"edit",src:W,alt:"icon",onClick:()=>{f(x.id)}})}),o==="Admin"&&e.jsx("td",{children:e.jsx("img",{className:"bin",src:ee,alt:"icon",onClick:()=>m(x.id)})})]},x.id))})]}),j&&e.jsx(R,{isOpen:p,onClose:()=>p(!1),children:e.jsx(wn,{onSave:c,isOpen:j,onClose:v,onCreate:f,editTransactionData:k})}),t&&e.jsx(R,{isOpen:t,onClose:()=>n(!1),children:e.jsx(Sn,{isOpen:t,onClose:()=>n(!1),onCreate:N})})]})},Nn=({...t})=>{const[n,i]=l.useState({...t}),[o,s]=l.useState(!0),[a,r]=l.useState(!0),[c,h]=l.useState(!0),[d,u]=l.useState(!0),[m,j]=l.useState(!0),p=A=>{const{name:E,value:S}=A.target;i(_=>({..._,[E]:S})),s(!0),h(!0),u(!0),j(!0)},k=async()=>{try{const A=localStorage.getItem("accessToken"),E=await fetch("https://highdardata.xyz/office/v1/customers/setDashboard",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${A}`},body:JSON.stringify(n)});if(E.ok){console.log("Data saved successfully!"),s(!1);const S={mainGraph1:n.mainGraph1,mainGraph2:n.mainGraph2,mainGraph3:n.mainGraph3,mainGraph4:n.mainGraph4,mainGraph5:n.mainGraph5,mainGraph6:n.mainGraph6};v(S);const _={secondaryGraph1:n.secondaryGraph1,secondaryGraph2:n.secondaryGraph2,secondaryGraph3:n.secondaryGraph3,secondaryGraph4:n.secondaryGraph4,secondaryGraph5:n.secondaryGraph5,secondaryGraph6:n.secondaryGraph6,secondaryGraph7:n.secondaryGraph7,secondaryGraph8:n.secondaryGraph8,secondaryGraph9:n.secondaryGraph9,secondaryGraph10:n.secondaryGraph10,secondaryGraph11:n.secondaryGraph11,secondaryGraph13:n.secondaryGraph12,secondaryGraph12:n.secondaryGraph13};f(_)}else console.error("Error saving customer data:",E.statusText)}catch(A){console.error("Error saving customer data:",A)}},[y,v]=l.useState({mainGraph1:t.mainGraph1,mainGraph2:t.mainGraph2,mainGraph3:t.mainGraph3,mainGraph4:t.mainGraph4,mainGraph5:t.mainGraph5,mainGraph6:t.mainGraph6}),[F,f]=l.useState({secondaryGraph1:t.secondaryGraph1,secondaryGraph2:t.secondaryGraph2,secondaryGraph3:t.secondaryGraph3,secondaryGraph4:t.secondaryGraph4,secondaryGraph5:t.secondaryGraph5,secondaryGraph6:t.secondaryGraph6,secondaryGraph7:t.secondaryGraph7,secondaryGraph8:t.secondaryGraph8,secondaryGraph9:t.secondaryGraph9,secondaryGraph10:t.secondaryGraph10,secondaryGraph11:t.secondaryGraph11,secondaryGraph12:t.secondaryGraph12,secondaryGraph13:t.secondaryGraph13}),N=async()=>{try{const A=localStorage.getItem("accessToken"),E=await fetch("https://highdardata.xyz/office/v1/customers/setTransactions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${A}`},body:JSON.stringify(n)});E.ok?(console.log("Data saved successfully!"),h(!1)):console.error("Error saving customer data:",E.statusText)}catch(A){console.error("Error saving customer data:",A)}},x=async()=>{try{const A=localStorage.getItem("accessToken"),E=await fetch("https://highdardata.xyz/office/v1/customers/setCustomers",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${A}`},body:JSON.stringify(n)});E.ok?(console.log("Data saved successfully!"),u(!1)):console.error("Error saving customer data:",E.statusText)}catch(A){console.error("Error saving customer data:",A)}},[w,C]=l.useState(!1),I=()=>{C(!0)},[T,z]=l.useState(!1),L=()=>{z(!0)};return e.jsxs(hn,{children:[e.jsx(B,{title:"Dashboard",buttonText:"Save",onClick:k,showText:o}),e.jsxs("div",{className:"dashboard-info-content",children:[e.jsx("div",{className:"dashboard-info",children:e.jsxs("div",{className:"dashboard-info-group",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"totalWorth",children:" Total Worth:"}),e.jsx("input",{type:"text",name:"totalWorth",value:n.totalWorth,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"differenceAmount",children:"Difference:"}),e.jsx("input",{type:"text",name:"differenceAmount",value:n.differenceAmount,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"differencePercent",children:"Different in percent:"}),e.jsx("input",{type:"text",name:"differencePercent",value:n.differencePercent,onChange:p})]})]})}),e.jsxs("div",{className:"main-graph-group",children:[e.jsxs("div",{className:"main-graph-fields",children:[e.jsx("h3",{children:"Graph 1"}),e.jsxs("div",{className:"items",children:[e.jsx("div",{children:e.jsx("input",{type:"text",name:"mainGraph1",value:n.mainGraph1,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"mainGraph2",value:n.mainGraph2,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"mainGraph3",value:n.mainGraph3,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"mainGraph4",value:n.mainGraph4,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"mainGraph5",value:n.mainGraph5,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"mainGraph6",value:n.mainGraph6,onChange:p})})]})]}),e.jsx("div",{className:"main-graph-chart",children:e.jsx("div",{className:"chart-line",style:{width:"560px"},children:e.jsx(Y,{...y})})})]}),e.jsxs("div",{className:"second-graph-group",children:[e.jsxs("div",{className:"second-graph-fields",children:[e.jsx("h3",{children:"Graph 2"}),e.jsxs("div",{className:"items",children:[e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph1",value:n.secondaryGraph1,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph2",value:n.secondaryGraph2,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph3",value:n.secondaryGraph3,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph4",value:n.secondaryGraph4,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph5",value:n.secondaryGraph5,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph6",value:n.secondaryGraph6,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph7",value:n.secondaryGraph7,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph8",value:n.secondaryGraph8,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph9",value:n.secondaryGraph9,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph10",value:n.secondaryGraph10,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph11",value:n.secondaryGraph11,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph12",value:n.secondaryGraph12,onChange:p})}),e.jsx("div",{children:e.jsx("input",{type:"text",name:"secondaryGraph13",value:n.secondaryGraph13,onChange:p})})]})]}),e.jsx("div",{className:"second-graph-chart",children:e.jsx("div",{className:"chart-line",style:{height:"369px",width:"958px"},children:e.jsx(fe,{...F})})})]})]}),e.jsxs("div",{className:"assets-info-content",children:[e.jsx(B,{title:"Asset",buttonText:"Create",onClick:I,showText:a}),e.jsx("div",{className:"asset-info-group",children:e.jsx(yn,{isAssetCreateModalOpen:w,setIsAssetCreateModalOpen:C,...t})})]}),e.jsxs("div",{className:"transactions-info-content",children:[e.jsx(B,{title:"Transactions",buttonText:"Save",onClick:N,showText:c}),e.jsxs("div",{className:"transactions-info-group",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"totalLoss",children:"Total Loss:"}),e.jsx("input",{type:"text",name:"totalLoss",value:n.totalLoss,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"totalRecovered",children:"Total Recovered:"}),e.jsx("input",{type:"text",name:"totalRecovered",value:n.totalRecovered,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"paymentMethod",children:"Payment Method:"}),e.jsx("input",{type:"text",name:"paymentMethod",value:n.paymentMethod,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"wallet",children:" Wallet:"}),e.jsx("input",{type:"text",name:"wallet",value:n.wallet,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"smartContractId",children:"Smart Contract ID:"}),e.jsx("input",{type:"text",name:"smartContractId",value:n.smartContractId,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"scammedBy",children:"Scammed By:"}),e.jsx("input",{type:"text",name:"scammedBy",value:n.scammedBy,onChange:p})]})]})]}),e.jsxs("div",{className:"customers-info-content",children:[e.jsx(B,{title:"Customers",buttonText:"Save",onClick:x,showText:d}),e.jsxs("div",{className:"customers-info-group",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"totalClients",children:"Total Clients:"}),e.jsx("input",{type:"text",name:"totalClients",value:n.totalClients,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"successfulCases",children:"Successful Cases:"}),e.jsx("input",{type:"text",name:"successfulCases",value:n.successfulCases,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"amountRecovered",children:"Amount recovered:"}),e.jsx("input",{type:"text",name:"amountRecovered",value:n.amountRecovered,onChange:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"personalManager",children:"Personal Manager:"}),e.jsx("input",{type:"text",name:"personalManager",value:n.personalManager,onChange:p})]})]})]}),e.jsxs("div",{className:"customers-table-info-content",children:[e.jsx(B,{title:"All Transactions",buttonText:"Create",onClick:L,showText:m}),e.jsx("div",{className:"transactions-info-group",children:e.jsx(An,{isTransactionCreateModalOpen:T,setIsTransactionCreateModalOpen:z,...t})})]})]})},En=()=>{const n=new URLSearchParams(window.location.search).get("id"),i=on(n),o=G();return l.useEffect(()=>{const s=localStorage.getItem("accessToken"),a=localStorage.getItem("userRole");s||o("/login"),a!=="Admin"&&o("/login")},[o]),e.jsx(dn,{children:i?e.jsxs(e.Fragment,{children:[e.jsx(cn,{...i}),e.jsx(Nn,{...i})]}):e.jsx("p",{children:"Loading customer data..."})})};g.div`
  color: #213547;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 200px;
  }

  h2 {
    font-size: 40px;
  }

  a {
    position: relative;
    color: #FAF9F9;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 7px;
    border: 2px solid #FFF;
    background: #FF646B;
    width: 273px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    outline: none;
    margin: 65px auto 0;
    &:hover {
      background: #FF2731;
    }
  }
`;const Tn=()=>{const[t,n]=l.useState(null);return e.jsx(Be,{children:e.jsxs(q,{children:[e.jsx(P,{path:"/login",element:e.jsx(pt,{children:e.jsx(ht,{setUserRole:n})})}),e.jsx(P,{path:"/customer/*",element:e.jsx(Ct,{setUserRole:n,children:e.jsxs(q,{children:[e.jsx(P,{path:"/dashboard",element:e.jsx(rt,{})}),e.jsx(P,{path:"/transactions",element:e.jsx(_t,{})}),e.jsx(P,{path:"/customers",element:e.jsx(Dt,{})})]})})}),e.jsx(P,{path:"/admin/*",element:e.jsx(At,{children:e.jsxs(q,{children:[e.jsx(P,{path:"/accounts",element:e.jsx(et,{})}),e.jsx(P,{path:"/customers",element:e.jsx(sn,{})}),e.jsx(P,{path:"/customer",element:e.jsx(En,{})})]})})})]})})};const In=()=>e.jsx($e,{children:e.jsx(Tn,{})});ze.createRoot(document.getElementById("root")).render(e.jsx(Ie.StrictMode,{children:e.jsx(In,{})}));
