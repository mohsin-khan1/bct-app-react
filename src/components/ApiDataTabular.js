import React, { useState, useEffect } from 'react'


function ApiDataTabular() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  
  const url = 'https://api.bluecitytechnology.com/s/smp/'

  useEffect(() => {
    let mounted = true;
    fetch(url).then(res => res.json())
    .then(res => {
      console.log('res', res)
      const dataObj = res.data
      let dataArr = []
      for (const prop in dataObj) {
        dataArr.push({...dataObj[prop], date: prop});
      }
      console.log('dataArr', dataArr)
      
      if(mounted) {
        setData(dataArr)
        setColumns(res.plot.y)
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="container-fluid p-lg-5 mt-3">
      <h2>Api Data</h2>

      <div className="table-responsive-sm">
        <table className="table table-bordered mt-4">
        <thead className="thead">
          <tr>
            <th scope="col">
              Date
            </th>
            {
              columns.map((item, index) => 
              <th key={index} scope="col">
                {item}
              </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => 
            <tr key={index}>
              <td>{item.date}</td>
              {
                columns.map((c, index) => 
                <td key={index}>
                  {item.hasOwnProperty(c) ? item[c]: '0'}
                </td>
                )
              }
            </tr>
            )
          }
        </tbody>
        </table>
      </div>

    </div>
  );
}

export default ApiDataTabular;
