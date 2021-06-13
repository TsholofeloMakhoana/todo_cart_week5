import React from 'react';
import { Redirect } from 'react-router';
import Footer from './navbar/Footer';
import SideBar from './navbar/SideBar';

function ToDoCart({auth}) {

     if(!auth){
        return <Redirect to="/Login"/>
     }
        return ( 
                <div>
                    <div class="content-wrapper">
                        <SideBar/>
            <div class="container-fluid">
                   <ol class="breadcrumb">
        `               <li class="breadcrumb-item">
                         <a href="./dashboard">Dashboard</a>
                         </li>
                           <li class="breadcrumb-item active">Todo</li>
                   </ol>
                 
		<div class="row">
			<div class="col-md-4">
				<div class="box_general padding_bottom">
					<div class="header_box version_2">
						<h2>Add To List</h2>
					</div>
					<div class="form-group">
						<label>Description</label>
						<input class="form-control" type="password"/>
					</div>
					<div class="form-group">
						<label>Due date</label>
						<input class="form-control" type="password"/>
					</div>
					<div class="form-group">
						<label>In Progress</label>
						<input class="form-control" type="password"/>
					</div>
                    <div class="form-group">
						<label>Priority</label>
						<input class="form-control" type="password"/>
					</div>
				</div>
			</div>
			<div class="col-md-8">
				<div class="box_general padding_bottom">
				
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Completed</th>
                </tr>
              </thead>            
              <tbody>
                <tr>
               
                  <td>System Architect</td>
                  <td>2011/04/25</td>                  
                  <td>Done</td>
                   <td>High</td>
                </tr>   
                <tr>
               
               <td>System Architect</td>
               <td>2011/04/25</td>                  
               <td>Done</td>
                <td>High</td>
             </tr>               
              </tbody>
            </table>
          </div>
      
				</div>
			</div>
		</div>
       
        
         <button class="btn_1 medium">Add Item</button>
         <Footer />
         </div>
         </div>
         </div>
         );
}

 
export default ToDoCart;
