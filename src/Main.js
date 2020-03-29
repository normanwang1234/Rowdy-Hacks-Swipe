import React from 'react';
import {Switch, Route} from 'react-router-dom';

import InstructionScreen from './InstructionScreen';
import DeckScreen from './DeckScreen';
import MatchScreen from './MatchScreen';

const Main = () => (
    <Switch>
        <Route exact path="/" component={InstructionScreen}/>
        <Route path="/deck" component={DeckScreen} />
        <Route path="/match" component={MatchScreen}/>
    </Switch>
)
    
export default Main;