import { Tabs, Input, DatePicker, TimePicker , Button} from 'antd';
import moment from 'moment'
import { useState, useEffect } from 'react';
const { TextArea } = Input;
const Form = () => {
  const [date, setDate] = useState(new Date());
  const [textValue, setTextValue] = useState("");
  const dateFormat = 'DD-MM-YYYY';


  useEffect(() => {
    var MyDate = new Date();
    var MyDateString;

    var MyDate = new Date();
    var MyDateString;

    MyDate.setDate(MyDate.getDate() + 20);

    MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
      + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '/'
      + MyDate.getFullYear();

    setDate(MyDateString)
  }, []);

  const dateChange =(e,y)=>{
    setDate(y)
  }

  const textAreaChange =(e)=>{
   setTextValue(e.target.value)
  }

  const renderItem = (dateResult) => {
    return <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>

        <div style={{ padding: "10px", height: "180px" }}>
          REMARKS <span style={{color: "red"}}>*</span>
        </div>

        <div style={{  padding: "10px" }}>

          DATE & TIME
        </div>
      </div>

      <div style={{ display: "flex", width: "70%", flexDirection: "column" }}>

        <div style={{ padding: "10px", height: "180px" }}>

          <TextArea onChange={(e)=> textAreaChange(e)} rows={6} value={textValue} />
        </div>

        <div style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
          <div style={{width: "50%"}}>
            <DatePicker style={{width :"300px"}} width={100} onChange={(e,y)=> dateChange(e,y)} defaultValue={moment(dateResult ? dateResult : "", dateFormat)} format={dateFormat} />
          </div>

          <div>
             <TimePicker style={{width :"300px"}} defaultValue="" size="large" />
          </div>
        </div>

        <div style={{padding: "10px"}}>

        <Button  type="primary">Save</Button>
        <Button style={{marginLeft: "5px"}} type="primary">Save & Sign</Button>
        <Button  style={{marginLeft: "5px", background :"red", color :"white"}} danger type='default'>Cancel</Button>
        <Button style={{marginLeft: "5px"}} type="primary">Template</Button>
        </div>

      </div>




    </div>
  }

  const items = [
    {
      key: '1',
      label: 'Nurse Note',
      children: renderItem(date),
    }
  ];

  return (
    <div>
      

        <div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>

    
    </div>


  )

}
export default Form;