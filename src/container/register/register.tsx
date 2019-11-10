import React, {useState,useEffect} from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

register(props) {
    console.log(props)
    props.history.push('/register')
}

export default function(){
    
    return (
        <div>
            <Logo></Logo>
            <h2>注册页</h2>
            <WingBlank>
                <Button type='primary'>登录</Button>
                <WhiteSpace/>
                <Button onClick={() => register()} type='primary'>注册</Button> 
            </WingBlank>
        </div>
    )
}