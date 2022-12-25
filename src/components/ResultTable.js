import React, {useEffect, useState } from 'react'
import { dataFromServer } from '../helpers/helper'

export default function ResultTable() {

    const [data, setData] = useState([])

    useEffect(() => {
      dataFromServer(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {setData(res)})
    
      
    }, [setData])
    
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>

                {!data ?? <div>No result for this case !</div>}

                {
                    data.map((value, index) => (

                        <tr className='table-body' key={index}>
                            <td>{value?.username  || ''}</td>
                            <td>{value?.attempts || 0}</td>
                            <td>{value?.earnPoints || 0}</td>
                            <td>{value?.achieved || 'Hania'}</td>
                        </tr>
                    )) 
                }
            </tbody>
        </table>
    </div>
  )
}
