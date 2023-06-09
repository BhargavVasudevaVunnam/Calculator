import './Operator.css'
function Operator(props){
    function computeout(x){
        let result;
     try {
            result = eval(x);
            console.log('test this'+result);
        } catch (e) {
         result = 'Error';
         }
        return result;
        }
        
    
    function handlingclear(){           
        props.handlerf('');
    }
    function handlingadd(event){
        let x=props.currentvalue;
        console.log(event.target.textContent.toString());
        x+=event.target.textContent.toString();
        console.log( "value as of now "+x);
        props.handlerf(x);
    }
    function handlingsub(event){
        let x=props.currentvalue;
        x+=event.target.textContent;
        console.log("value as of now"+x);
        props.handlerf(x);
    }
    function handlingmulti(event){
        let x=props.currentvalue;
        x+=event.target.textContent;
        console.log("value as of now"+x);
        props.handlerf(x);
    }
    function handlingdivi(event){
        let x=props.currentvalue;
        x+=event.target.textContent;
        console.log("value as of now"+x);
        props.handlerf(x);
    }
    function handlingequals(){
        let x=props.currentvalue;
        props.handlerf(computeout);
    }
    return <div id="OperationContainers">
            <button class="Operators" id="AC" onClick={()=>handlingclear()}>AC</button>
            <button class="Operators" id="add" onClick={(event)=>handlingadd(event)}>+</button>
            <button class="Operators" id="sub" onClick={(event)=>handlingsub(event)}>-</button>
            <button class="Operators" id="multi" onClick={(event)=>handlingmulti(event)}>*</button>
            <button class="Operators" id="divide" onClick={(event)=>handlingdivi(event)}>/</button>
            <button class="Operators" id="equals" onClick={()=>handlingequals()}>=</button>
           </div>
}
export default Operator;