import React, {useState,useEffect} from 'react'
import logoImg from './job.png'
import './logo.css'
export default function(){
    return (
        <div className="logo-container">
            <img src={logoImg} alt=""/>
        </div>
    )
}