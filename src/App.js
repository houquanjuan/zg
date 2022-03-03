import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Button } from 'antd';
import { DesktopOutlined } from '@ant-design/icons'

const {Header, Footer, Sider, Content} = Layout;

function App() {
  return (
   <Layout>
     <Header>header</Header>
     <Layout>
       <Sider>Sider</Sider>
        <Content><h1>he </h1>content</Content>
     </Layout>
   </Layout>
  );
}

export default App;
