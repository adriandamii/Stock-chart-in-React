import React, {useState} from "react";
import './App.css';
import IntroduceSymbol from './IntroduceSymbol.js';
import Graphic from './Graphic';

export default function App() {
  const [stocksTicker, setStocksTicker] = useState("");
  const [showGraphStatus, setShowGraphStatus] = useState(false);

  return (
    <div>
    <h2>STOCK CHART</h2>
      <IntroduceSymbol setStocksTicker={setStocksTicker} setShowGraphStatus={setShowGraphStatus}/>
      {showGraphStatus ? <Graphic stocksTicker={stocksTicker} /> : null}
    </div>
  )
}