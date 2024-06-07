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
        },
        data:[{
            type: "line",
            dataPoints: [
                {x:1, y:1},
                {x:2, y:4},
                {x:3, y:9},
                {x:4, y:16},
                {x:5, y:25}
            ]
        }]
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