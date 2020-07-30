import React, { Component, Fragment } from 'react'
import { MDBNavbar,MDBHamburgerToggler ,MDBContainer, MDBNavbarBrand,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,MDBDropdown, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBBtn } from 'mdbreact'


import { connect } from 'react-redux'
import * as Msal from 'msal'
import { msalConfig } from '../adalConfig'
import { BrowserRouter as Router } from 'react-router-dom';


const myMSALObj = new Msal.UserAgentApplication(msalConfig)

class Navbar extends Component {

    state = {
        collapseID: '',
        login: false,
        userData: null,
        admin:false,
        collapse1:false
      }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }))
    }

    closeCollapse = collID => () => {
        const { collapseID } = this.state
        window.scrollTo(0,0)
        collapseID === collID && this.setState({ collapseID: '' })
    }
   
    
    componentDidMount() {
      
      }
    
      componentWillReceiveProps = (props) => {
        
      }

    render() {
        
        const overlay = (
            <div
              id="sidenav-overlay"
              style={{ backgroundColor: 'white' }}
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
          )
          const { collapseID } = this.state
          console.log("STATRE", this.props)
       
        return (
            <MDBNavbar style={{backgroundColor:"#2f3d5e"}} color="#2f3d5e" dark expand="md" fixed="top" scrolling>
                {/* <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
                    <img src={Logo} style={{width: '90px'}} alt="Logo" />
                </MDBNavbarBrand> */}
                <MDBNavbarToggler style={{color:"white"}} onClick={this.toggleCollapse("mainNavbarCollapse")} />
                <MDBCollapse style={{backgroundColor:"#2f3d5e"}} id="mainNavbarCollapse"  isOpen={collapseID} navbar>
                <MDBNavItem style={{marginTop:"1.4%"}} onClick={this.closeCollapse("mainNavbarCollapse")}>
                        <MDBNavLink className="fa fa-list"  style={{color:'#ECF0F1 ',backgroundColor:""}} to='/names'><i>&nbsp;&nbsp;&nbsp;&nbsp;</i>names</MDBNavLink>
                        </MDBNavItem>
                
                </MDBCollapse>
            </MDBNavbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar)