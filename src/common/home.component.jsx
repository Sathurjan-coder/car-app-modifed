import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <div>
           <div className="container">
               <div className="card">
                   <div className="col-lg-12">
                       <img src="https://www.dailynews.lk/sites/default/files/news/2019/05/14/z_FIN-pvi-Airtel.jpg" height="60%"></img>
                       <br/><br/>
                   </div>
               </div>
               <div >
                   <center>
                   <form method="POST">
                      
                     User ID <input type="text" value="user id" placehoder="Enter Your ID"></input>
                     <br/>
                     <br/>
                     Password <input type="Password" placeholder="Enter Your Password"></input>
                   </form>
                   </center>
               </div>
               </div>
</div>
 
              
    

            



        );
    }
}

export default Home