import './Number.css'



function Number(props){

  function handlingclick(clicke){
    console.log(clicke)
    let x=props.currentvalue;
    x+=clicke.toString();
    console.log(x);
    props.handlerf(x);
  }
const arr = [1,2,3,4,5,6,7,8,9,0]
let xyz=0;
//    return <div id="numbergroup">
//        { 

// {arr.slice(1, 4).map((val) => (
//   <button id={val} onClick={() => handlingclick(val)}>{val}</button>
// ))}
// </div>
// <div className="number-row">
// {arr.slice(4, 7).map((val) => (
//   <button id={val} onClick={() => handlingclick(val)}>{val}</button>
// ))}
// </div>
// <div className="number-row">
// {arr.slice(7, 10).map((val) => (
//   <button id={val} onClick={() => handlingclick(val)}>{val}</button>
// ))}

//            { arr.map((val)=>{
//               console.log(xyz%3);
//                 if(eval(val%3)==1||val==0){
                  
//                   xyz++;
//                 }
//                 return <button id={val} class={xyz} onClick={()=>handlingclick(val)}>{val}</button>
//               })
              
//         }
//     </div>
return (
  <div id="numbergroup">
    <div className="l1">
      {arr.slice(0, 3).map((val) => (
        <button id={'a'+val} onClick={() => handlingclick(val)}>{val}</button>
      ))}
    </div>
    <div className="l2">
      {arr.slice(3, 6).map((val) => (
        <button id={'a'+val} onClick={() => handlingclick(val)}>{val}</button>
      ))}
    </div>
    <div className="l3">
      {arr.slice(6, 9).map((val) => (
        <button id={'a'+val} onClick={() => handlingclick(val)}>{val}</button>
      ))}
    </div>
    <div className="l4">
      <button id={'a'+0} onClick={() => handlingclick(0)}>0</button>
    </div>
  </div>
);
}
  export default Number;
