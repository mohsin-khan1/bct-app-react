import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';


function ApiData() {
  const [data, setData] = useState([]);
  
  const url = 'https://api.bluecitytechnology.com/s/smp/'

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
    grouped: true,
    maintainAspectRatio: false,
    // maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    let mounted = true;
    fetch(url).then(res => res.json())
    .then(res => {
      console.log('res', res)
      const plotXlabels = res.plot.x
      const plotYlabels = res.plot.y
      const dataPts = res.data
      
      const bgColors = ['#FF4069', '#059BFF', '#22CFCF', '#5f27cd', '#222f3e']

      // Preparing plotYDatasetObj
      const plotYDataObj = {}
      plotYlabels.forEach((yLabel, i) => {
        plotYDataObj[yLabel] = {
            label: yLabel,
            data: [],
            backgroundColor: bgColors[i]
        }
      })
      console.log("plotYDataObj", plotYDataObj);

      plotXlabels.forEach((date, i) => {
          for(const yLabel of plotYlabels) {
              if(dataPts[date].hasOwnProperty(yLabel)) {
                plotYDataObj[yLabel].data.push(dataPts[date][yLabel])  
              } else {
                plotYDataObj[yLabel].data.push(0)  
              }
          }
      });

      const plotYDataset = Object.values(plotYDataObj)
      console.log('plotYDataset', plotYDataset)

      if(mounted) {
        setData({
            labels: plotXlabels,
            datasets: plotYDataset
        })
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="container-fluid data-container p-lg-5 mt-3">
      <h2>Api Data</h2>

      <Bar data={data} options={options} />
    </div>
  );
}

export default ApiData;
