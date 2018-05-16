import React from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import Footer from './common/Footer.jsx';
import Container from './Index/Container.jsx';

import Sidebar from './common/Sidebar.jsx';
import Search from './Search/Search.jsx';


const routes=[
    {
        path:'/',
        component:Container,
        exact:true,
        headerIsShow:true
    },
    {
        path:'/search',
        component:Search
    }
]
    


const RouteWithSubRoutes = (route) => {
    

   return(
        <Route path={route.path} exact={route.exact} render={props => {

            return  <route.component {...props} routes={route.routes} />
        }
            
        }/>
   ) 
}
    


export default class Index extends React.Component {
        constructor() {
            super();
            this.state = {
               
            };
        }
        
        componentWillMount(){
            
        }

        componentDidMount() {
                         
        }

        render() {
            return (
                <Router pasename="/">
                    <div>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))} 
                        <Sidebar />
                        <Footer />
                    </div>
                </Router>
                
            );
        }
    }