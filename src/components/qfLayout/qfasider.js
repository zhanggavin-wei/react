import React from 'react'
import {
    NavLink,
} from 'react-router-dom'
import routes from '@/views'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
export default class Qfasider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    createNavLink() {
        return routes.map(ele => (
                <Menu.Item key={ele.id} icon={<UserOutlined />}>
                    <NavLink to={ele.path} exact activeClassName='on'>
                        {ele.title}
                    </NavLink>
                </Menu.Item>
        ))
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <div className='logo-img'>
                        忍
                    </div>
                </div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {this.createNavLink()}
                </Menu>

            </div>

        )
    }
}