import { Layout,Menu, Divider, Switch } from "antd";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const {Sider} = Layout;

const menuData = [
  {key:'system',label:'System',icon:<AppstoreOutlined/>,children:[
    {key:'systemtest1',label:'Test1',link:'/system/test1',icon:<CalendarOutlined/>},
    {key:'systemtest2',label:'Test2',link:'/system/test2',icon:<LinkOutlined/>}
  ]},
  {key:'page',label:'Page',icon:<MailOutlined/>,children:[
    {key:'pagetest1',label:'Test1',link:'/page/test1',icon:<SettingOutlined/>}
  ]}
]
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState([]);
  const dispatch = useDispatch();
  const isValidUrl = (urlString) => {
    try {
      return new URL(urlString);
    } catch (e) {
      return false;
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width='25vw'>
      <br />
      <Menu
        mode='inline'
        theme='dark'
        items={menuData}
        onClick={(item)=> {
          console.log('item===>',item)
          if(!item?.item?.props?.link)return
          if(isValidUrl(item?.item?.props?.link)){
            window.open(item?.item?.props?.link);
          }else if(item?.item?.props?.link?.indexOf("/page") !== -1){
            window.open(item?.item?.props?.link, '_self');
          }else{
            dispatch(push(item.item.props.link))
          }
          setSelectedKey([item?.keyPath])
        }}
        selectedKeys={[selectedKey]}
      />
    </Sider>
  )};
export default React.memo(Sidebar);