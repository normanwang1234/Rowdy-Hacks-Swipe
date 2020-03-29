import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './styles/Styles.css';

export default class InstructionScreen extends React.Component {
    render(){
        return(
           <div style={{display:'flex', margin:'auto', width:'100%', textAlign:'center', justifyContent:'center', alignItems:'center'}}>
                <div>
                    <h1 style={{fontFamily:'Leckerli One', fontSize: 40, color:'black'}}>Swipe Right To Like.</h1>
                    <img
                        src="https://www.onlygfx.com/wp-content/uploads/2016/05/hand-drawn-heart-2.png"
                        style={{width: 100, height: 100}}
                        />
                    <h2 style={{fontFamily:'Leckerli One', fontSize: 40, color:'black', paddingBottom:10}}>Swipe Left To Pass.</h2>
                    <Link to="/deck">
                        <Button
                            onClick={<Link to='/deck'/>}
                            style={{backgroundColor:'#f95c5e', borderRadius:'30px', width: 200}}
                            >
                        
                            <h1 style={{color:'white', fontWeight:'bold', fontSize: 25}}>Click To Begin!</h1>
                        </Button>
                    </Link>
                </div>
           </div>
        )
    }
}