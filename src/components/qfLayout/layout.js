import React from 'react'
import { Layout } from 'antd';
import Qfasider from './qfasider'
import Qfheader from './qfheader'
import Qfcontent from './qfcontent'
import 'antd/dist/antd.css'
import './style.scss'

const { Header, Sider, Content } = Layout;

export default class QfLayOut extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <Layout>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                ><Qfasider></Qfasider></Sider>
                
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }}><Qfheader></Qfheader></Header>
                    <Content style={{ margin: '24px 16px 0' }}><Qfcontent></Qfcontent></Content>
                </Layout>
            </Layout>
        )
    }
}
