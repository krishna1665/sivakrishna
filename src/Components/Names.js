import React, { Component } from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective,
  Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop, DragEventArgs
} from '@syncfusion/ej2-react-schedule';
import { connect } from 'react-redux';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import  * as DATA from './data.json'
import $ from 'jquery';
import { MDBContainer, MDBRow, MDBDatePickerV5, MDBCol, MDBInputGroup, MDBInput, MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody, MDBBtn, MDBDropdownItem } from 'mdbreact'

import {Button ,Modal} from 'react-bootstrap';
const FilterableTable = require('react-filterable-table')

class Names extends Component {
  constructor(props) {
    super(props);
    
this.state = {
       data:[],
       userdata:[],
       show:false,
       umodal:false,
       timings:'',
       name:'',
       res1:null
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleClose4 = this.handleClose4.bind(this)

  }
componentDidMount() {
  
  fetch('https://efe4a2a5-febd-4fcf-8b1b-36ab51e466a6.mock.pstmn.io/v1/home')
        .then(response => response.json())
        .then(res => console.log(res))
        .then(res1 => this.setState({res1}))

  var data = DATA.members
  console.log("data",data)
        //this.props.getData()
this.setState({
        data:data
 
});
var s=this
$(document).on("click", ".Disable", function(){

var value1=$(this).data('value')


s.myfunction1(value1)

 });
}
myfunction1(value){
  const{data}=this.state
  var timings='',location='',name=''



 
  for(var i=0;i<data.length;i++){

    if(data[i].id===value){
      location=data[i].tz
      name = data[i].real_name
      for(var j=0;j<data[i].activity_periods.length;j++){
      
      
         timings += " Start_time : " + data[i].activity_periods[j].start_time 

      
         timings += "  End_time : " + data[i].activity_periods[j].end_time +" "
        
   
      }
    }
  }
 
  
  this.setState({
    timings:timings,
    name:name,
    location:location,
show:true
  })
}
componentWillUpdate() {
  var x = document.getElementsByClassName("clear-filter");
  x[0].style.marginTop = "-33px";
  x[0].style.marginRight = "10px";

}
utoggle(){
  this.setState({
    umodal: !this.state.umodal,
    })
}


componentWillReceiveProps(props){
  const {data}=this.state 
var userdata=[]
for (var  i=0;i<data.length;i++){
          userdata.push({
            action:data[i].id
          })
}
console.log("user data",userdata)
this.setState({
  userdata:userdata
})
}
componentWillUnmount(){
    
}


handleChange = (event) => {
    
    this.setState({
        [event.target.name] : event.target.value
    })
  
}
handleClose4(){
  this.setState({
    show:false
  })
}


    myfunction(i){
      const{data}=this.state
      var b= <i>
    
      <a className="Disable" title={data[i].real_name} data-toggle="tooltip" data-value={data[i].id}><i className="fa fa-user  "><i>&nbsp;&nbsp;&nbsp;</i>{data[i].real_name}<i></i></i></a>  

    </i>
      return b;
    }
render(){
  const {data,res1}=this.state
  console.log("response",res1)
  var userdata=[]
for (var  i=0;i<data.length;i++){
          userdata.push({
            action:this.myfunction(i),
            name:data[i].real_name
          })
}
console.log("user data",userdata)


  let fields = [
 
    { name: 'action', displayName: "names", },
  ];
  
  return(
    <div style={{backgroundColor:"gree",marginTop:"3%"}}>
     
        <div id="admin" style={{textAlign:"cente"}}  className=" col-md-12 col-sm-12 col-xs-12 ">
            <FilterableTable
                   id="table1"
                   namespace="Trainings"
                   initialSort="name"
                   data={userdata}
                   fields={fields}
                   noRecordsMessage="There are no trainers to display"
                   noFilteredRecordsMessage="No trainer match your filters!"
                   autofocusFilter={true}
                   recordCountName="TRAINER"
                   recordCountNamePlural="TOTAL "
                   topPagerVisible={false}
                   bottomPagerVisible={false}
                   emptyDisplay="Not Set"
                   headerVisible={true}
                   iconSort={true}
                //    iconSortedDesc={<span className='fa fa-sort-amount-desc '></span>}
                //    iconSortedAsc={<span className="fa fa-sort-amount-asc "></span>}
                //    iconSort={<span  className="fa fa-unsorted right"></span>}
                   pagerTitles={{ 
                    first: <span className="fa fa-fast-backward" style={{marginRight:"5px"}}></span>,
                    prev: <span className="fa fa-step-backward" style={{marginRight:"5px"}}></span>,
                    next: <span className="fa fa-step-forward" style={{marginLeft:"5px"}}></span>,
                    last: <span className="fa fa-fast-forward" style={{marginLeft:"5px"}}></span>
                }}
                pagerTopClassName = "pagination-sm paginationChange pull-right"
                pagerBottomClassName = "pagination-sm paginationChange pull-right"
                pageSize = "5"
                pageSizes={[5,10,20,30,40,50,60,70,80,90,100]}
              />
              <Modal className="" show={this.state.show} centered onHide={this.handleClose4}>   
         <Modal.Header closeButton>
         <Modal.Title>
           {this.state.name}
         </Modal.Title>
         </Modal.Header>
         <Modal.Body className="pull-center" style={{textAlign:"center"}}>
         &nbsp;&nbsp;<p style={{textAlign:"center"}}>Location:   &nbsp;{this.state.location}</p>
         &nbsp;&nbsp;<span style={{textAlign:"center"}}>{this.state.timings}</span>
         <MDBCol md="6">
                                <label htmlFor='startDate' className="mb-0">Calendar</label>
                                <DateTimePickerComponent  renderDayCell={this.disabledDate}  value={this.state.calendar} format='dd/MM/yy hh:mm a' id="StartTime" name="calendar" data-name="StartTime" className="e-field" onChange={this.changeHandler} required></DateTimePickerComponent>
                            </MDBCol>


         </Modal.Body>
         <Modal.Footer>
             <Button variant="" className="btn-blu btn" style={{color:"white",backgroundColor:"blue"}} onClick={this.handleClose4}>Ok</Button>
         </Modal.Footer>
         </Modal>
      
</div>

 
</div>

  )
}
}
// const mapStateToProps = state => {
//   console.log("STATE", state)
//   return {
//       apiData: state.forms
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{

//       getData: () => dispatch(getData()),
     
//   }
// }
// export default connect(mapDispatchToProps, mapStateToProps)(Names);
export default Names;
