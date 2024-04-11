import { useState, useEffect } from "react";
import { Table } from 'antd';
import axios from 'axios';

const Medical = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://bc7472eb-25b8-469a-893c-89442394685d.mock.pstmn.io/activeMedicationList')
            .then(function (response) {
                if(response && response.data){
                    response.data.activeMedicationList.forEach(function(row, index) {
                        row.row_number = index + 1;
                      });
                    setList(response.data.activeMedicationList);
                }
            })
    }, []);


    const columns = [
        {
            title: 'S.No',
            dataIndex: 'row_number',
        },
        {
            title: 'Medication',
            dataIndex: 'medication',
        },
        {
            title: 'Schedule Time',
            colSpan: 2,
            dataIndex: 'scheduleTime',
            render: (value, row, index) => {
                const obj = {
                  children: value[0],
                  props: {},
                };
                if (index === 2) {
                  obj.props.rowSpan = 2;
                }
                
                if (index === 3) {
                  obj.props.rowSpan = 0;
                }
                if (index === 4) {
                  obj.props.colSpan = 0;
                }
                return obj;
              },
        },
        
        {
            colSpan: 0,
            title: '',
            dataIndex: 'scheduleTime',
            render: (value, row, index) => {
                const obj = {
                  children: value[1],
                  props: {},
                };
                if (index === 2) {
                  obj.props.rowSpan = 2;
                }
                // These two are merged into above cell
                if (index === 3) {
                  obj.props.rowSpan = 0;
                }
                if (index === 4) {
                  obj.props.colSpan = 0;
                }
                return obj;
              },
        },
        
        {
            colSpan: 1,
            title: 'Dose',
            dataIndex: 'dose',
        },
    ]
    return (

        <>
            <div style={{padding:'15px'}}>
               MAR Sheet 
            </div>
            <div style={{padding:'15px'}}>
               Active Medication
            </div>
            <div style={{padding:'0px',marginLeft:'20px'}}>
                <Table dataSource={list} columns={columns} bordered />
            </div>
        </>
    )

}
export default Medical;