//library imports
import React from 'react';
import { Line } from 'react-chartjs-2';

//local imports
import './style.css';

const OcupationHistory = () =>{
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Ocupação dos leitos',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: '#50B881',
            borderColor: '#50B881',
          },
        ],
      };
      const options = {
        scales:{
          yAxes: [{
            ticks: {
              fontColor:'#50B881'
            },
            gridLines:{
              color:'#72F0AD',
            },
          }],
          xAxes: [{
            ticks: {
              fontColor:'#50B881'
            },
            gridLines:{
              color:'#72F0AD',
            },
          }]
      }}

    return(
        <div className="ocupationHistoryChart">
            <Line data={data} options={options} />
        </div>
    );
}

export default OcupationHistory;