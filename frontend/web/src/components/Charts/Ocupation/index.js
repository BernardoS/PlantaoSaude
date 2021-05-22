//library imports
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

//local imports
import './style.css';

const Ocupation = () =>{

    const data = {
        labels: ['Leitos Ocupados', 'Leitos Livres'],
        datasets: [
          {
            label: '# of Votes',
            data: [80,20],
            backgroundColor: [
              '#5AD192',
              '#96F5D1'
            ],
            borderColor: [
              '#50B881',
              '#72F0AD'
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div  className="ocupationChart">
            <Doughnut data={data}/>
        </div>
    );
}

export default Ocupation;