import { useState, useEffect } from "react";
import './App.css';
import { Layout, Menu, Table } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Form from './components/form';
import Medical from './components/medical';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  let navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === '9') {
      navigate('/form')
    }
    if (e.key === '5') {
      navigate('/')
    }
  };


  function getItem(
    label,
    key,
    icon,
    children,
    type,
  ) {
    return {
      key,
      children,
      label,
      type,
    };
  }


  const items = [


    getItem('IP12928', 'sub2', <AppstoreOutlined />, [
      getItem('Summary', '5'),
      getItem('Medical Summary', '5'),
      getItem('History & Physical ', '5'),
      getItem('Progress Notes', '5'),
      getItem('Doctor Orders', '5'),
      getItem('Concultant Notes', '5'),
      getItem('Problem List', '5'),
      getItem('MAR Sheet', '5'),
      getItem('Nurse Notes', '5'),
      getItem('Discharge Summary', '5'),
      getItem('Surgery Notes', '6'),
      getItem('Surgery Items', '6'),
      getItem('Medication Reconcilation', '6'),
      getItem('Narcotics Orders', '6'),
      getItem('Rehabilitation', '6'),
    ]),

    getItem('IP12426', 'sub1', <SettingOutlined />, [
      getItem('Nurse Notes', '9'),

    ]),
    getItem('IP12270', 'sub3', <SettingOutlined />, [
      

    ]),
  ];

  


  return (
    <Layout>
      <Header className="header">
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu onClick={onClick} mode="vertical" items={items} />
          </Sider>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Routes>
              <Route path="/" element={< Medical />}></Route>
              <Route path="/form" element={< Form />}></Route>
            </Routes>

          </Content>
        </Layout>

      </Content>
      <Footer ></Footer>
    </Layout>


  );
}

export default App;
