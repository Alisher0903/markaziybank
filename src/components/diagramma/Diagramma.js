import {
    Chart as ChartJS,
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Diagramma() {

    const data = {
        labels: ["may 11", "may 12", "may 13", "may 14", "may 15", "may 16"],
        datasets: [{
            data: [8, 7, 9, 7.5, 5, 6]
        }]
    };

    const options = {};

    return (
        <>
            <h1>diagramma</h1>
            <div style={{width: "700px", marginLeft: "1rem"}}>
                <Line className="img-fluid" data={data} options={options}></Line>
            </div>
        </>
    );
}

export default Diagramma;