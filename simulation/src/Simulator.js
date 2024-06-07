import CanvasJSReact from '@canvasjs/react-charts';
import './Simulator.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Simulator=(data)=>{
    const {Data} =data;
    const options ={
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title:{
            text: "Verilog Simulator"
        }
    }
    return(
        <>
        {options?(
            <div className='chart-conatainer'>
                <CanvasJSChart options={options}/>
            </div>
        ):null}

        </>
    )
}

export default Simulator;