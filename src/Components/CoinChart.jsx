/* eslint-disable react/prop-types */
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function CoinChart({arrlist}) {
  const hunto = arrlist?.map((item) => Number(item)) || [1,2,3]
  return (
    <div>
      {arrlist && <SparkLineChart showHighlight showTooltip colors={['#5E5B78', 'green', 'blue', 'yellow', 'orange']} 
      curve={'natural'} data={hunto} height={250} area/>}
    </div>
    
  );
}