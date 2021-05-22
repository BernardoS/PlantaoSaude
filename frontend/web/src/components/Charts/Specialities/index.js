//library imports
import React from 'react';
import { Bar } from 'react-chartjs-2';

//local imports
import './style.css';

const Specialities = () =>{
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Procura das especialidades',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#72F0AD',
              '#72F0AD',
              '#72F0AD',
              '#72F0AD',
              '#72F0AD',
              '#72F0AD',
            ],
            borderColor: [
              '#50B881',
              '#50B881',
              '#50B881',
              '#50B881',
              '#50B881',
              '#50B881',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
          },
        },
      };      

    return(
        <div className="specialitiesChart">
            <Bar data={data} options={options} />
        </div>
    )
}

export default Specialities;
