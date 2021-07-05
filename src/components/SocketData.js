import React, { useState, useEffect } from 'react'
import socketClient  from "socket.io-client"
import Loader from "react-loader-spinner";
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';



const SERVER = "http://54.89.37.132:8000";


function SocketData() {
  const [cpuData, setCpuData] = useState({});
  const [memoryData, setMemoryData] = useState({});
  const [sensorData, setSensorData] = useState({});
  const [loading, setLoading] = useState(true)
  const socket = socketClient (SERVER);



  useEffect(() => {
    let mounted = true;
    socket.on('data', (data) => {
        setLoading(false)
        console.log('Socket data', data);
        const memoryLabels = ['Available', 'Total']; 
        const memoryDataset = [
            {
              label: 'Memory',
              data: [data.lidar.memory.available, data.lidar.memory.total],
              backgroundColor: [
                '#4BC0C0',
                '#36A2EB'
              ],
              borderColor: [
                '#10ac84',
                '#0abde3',
              ],
              borderWidth: 1,
            },
          ]
        const cpuLabels = ['1', '2']; 
        const cpuDataset = [
            {
              label: 'CPU',
              data: [data.lidar.cpu['1'], data.lidar.cpu['2']],
              backgroundColor: [
                '#FFCD56',
                '#36A2EB'
              ],
              borderColor: [
                '#feca57',
                '#0abde3',
              ],
              borderWidth: 1,
            },
          ]
          if(mounted) {
            setMemoryData({
                labels: memoryLabels,
                datasets: memoryDataset
            })
            setCpuData({
                labels: cpuLabels,
                datasets: cpuDataset
            })
            setSensorData({
                motorRpm: data.sensor.motor_rpm,
                output: data.sensor.output
            })
          }
    });
    return () => mounted = false;
  }, [])

  return (
    <>
        <div className="container vh-100 p-lg-5 mt-3" >

            <div className="container">
                { loading && 
                <>
                <h2 className="mb-5">Socket Data</h2> 
                <Loader
                type="Oval"
                color="#00BFFF"
                height={300}
                width={300}
                // timeout={3000} //3 secs
                />
                </> }

                { !loading &&
                <>
                <div className="row">
                    <div className="col-md-6">
                        <Doughnut data={cpuData} />
                        <h4 className="text-center mt-2">CPU</h4>
                    </div>
                    <div className="col-md-6 mt-3">
                        <Pie data={memoryData} />
                        <h4 className="text-center mt-2">Memory</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="c-dashboardInfo col-lg-3 col-md-6">
                                <div className="wrap">
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Motor RPM<svg
                                        className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                        </path>
                                    </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{ sensorData.motorRpm }</span>
                                </div>
                    </div>
                    <div className="c-dashboardInfo col-lg-3 col-md-6">
                                <div className="wrap">
                                    <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Output<svg
                                        className="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                        </path>
                                    </svg></h4><span className="hind-font caption-12 c-dashboardInfo__count">{ sensorData.output }</span>
                                </div>
                    </div>
                </div>
                </> }
            </div>
            


        </div>
    </>
  );
}

export default SocketData;
