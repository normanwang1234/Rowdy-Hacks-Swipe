import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';
import {Grid, Cell} from 'react-mdl'
import './styles/Styles.css'

export default class MatchScreen extends React.Component {
    render(){
        return(
           <div className="background" style={{display:'flex', margin:'auto', width:'100%', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
               <div>
               <h1 style={{fontFamily:'Leckerli One', fontSize: 30}}>It's a Match!</h1>
                    <img src="https://i.imgur.com/2MevT3c.jpg"
                        style={{borderRadius:50, height:195, width: 170,paddingBottom:20}}
                        />
                    <img src="https://i.imgur.com/6Sg2irv.jpg"
                        style={{borderRadius:50, height:195, width: 170,paddingBottom:10}}
                        />
                    <img src="https://i.ya-webdesign.com/images/continue-button-png-10.png"
                        style={{height:55, width: 200}}
                        />
               </div>
               
                 
                
           </div>
        )
    }
}