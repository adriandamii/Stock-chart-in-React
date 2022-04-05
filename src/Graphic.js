import React, {useState, useEffect} from "react";
import CanvasJSReact from './canvasjs.stock.react';
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

export default function Graphic(props) {
    const [dataPoints, setDataPoints] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const apiKey = "_tj053QV6pdmJfZch515d1lYwqK94ml7";
    let stockTicker = "https://api.polygon.io/v2/aggs/ticker/" + props.stocksTicker + "/range/1/day/2022-01-01/2022-04-01?apiKey=" + apiKey;
    
    useEffect(() => {
        fetch(stockTicker)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            data = data.results;
            let dps = [];
            for (let i = 0; i < data.length; ++i) {
                dps.push({
                    x: new Date(data[i].t),
                    y: Number(data[i].c)
                });
            }
            setIsLoaded(true);
            setDataPoints(dps); 
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`));
    }, [stockTicker])
    
    const options = {
        charts: [{
            toolTip: {
                shared: true
            },
            data: [{
                name: "Price (in USD)",
                type: "splineArea",
                color: "#3576a8",
                xValueFormatString: "MMM DD YYYY",
                yValueFormatString: "$#,###.###",
                dataPoints : dataPoints
            }]
        }],
    };
    const container = {
        width: "100%",
        height: "450px",
        margin: "auto"
    }

    return (
        <div> 
            {isLoaded && <CanvasJSStockChart containerProps={container} options = {options}/>}
        </div>
  );
}