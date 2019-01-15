import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React,{Component} from 'react';
import index from '../Index/Index';
import PlayList from '../PlayList/PlayList';

class Main extends Component{
    render(){
        return(
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component ={index}/>
                        <Route path='/playlist' component ={PlayList}/>
                    </Switch>
                </BrowserRouter>
            </main>

        );
    }
}

export default Main;