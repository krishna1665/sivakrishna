import React, { Component, Fragment } from 'react'
import { MDBEdgeHeader, MDBFreeBird, MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBAnimation, MDBNavLink, MDBModalHeader, MDBModalBody, MDBModal, MDBLink } from 'mdbreact'
import { connect } from 'react-redux'
import * as Msal from 'msal'
import { Redirect } from 'react-router-dom'
import "./HomePage.css"

import { msalConfig } from '../adalConfig'

const myMSALObj = new Msal.UserAgentApplication(msalConfig)

class HomePage extends Component {

    state = {
        login: false,
        userData: null
    }

    scrollToTop = () => window.scrollTo(0, 0)

    componentDidMount() {
        if(myMSALObj.getAccount()) {
            this.setState({
              login: true,
              userData: myMSALObj.getAccount()
            })
        } else {
            this.setState({
                login: false,
                userData: null
            })
        }
    }

    componentWillReceiveProps() {
        if(myMSALObj.getAccount()) {
            this.setState({
                login: true,
                admin: this.props.authData.admin,
                userData: myMSALObj.getAccount()
            })
        } else {
            this.setState({
                login: false,
                admin: this.props.authData.admin,
                userData: null
            })
        }
    }

    

    render() {
        
    var uploadSuccess
    if(window.localStorage.uploadLocation) {
      uploadSuccess = true
    } else {
      uploadSuccess = false
    }
        return (
            <Fragment>
                <MDBEdgeHeader color="light" className="sectionPage" style={{ backgroundColor: '#2f3d5e'}} />
                <MDBAnimation type="zoomIn" duration="500ms">
                    <div className="mt-3 mb-5">
                        <MDBFreeBird>
                            <MDBRow>
                                <MDBCol md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
                                    <MDBCardBody className="text-center">
                                        <h2 className="h2-responsive mb-4">
                                            <strong className="font-weight-bold">
                                                Calendar
                                            </strong>
                                        </h2>
                                        <MDBRow />
                                      
                                      
                                            <div>
                                                <Redirect to="/names" />
                                               
                                               
                                        </div>
                                            
                                            <MDBBtn color="blue-grey" type="submit" id="btnColor" style={{ backgroundColor: '#2f3d5e !important'}} onClick={this.signIn}>Login</MDBBtn>
                                    
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBFreeBird>
                    </div>
                </MDBAnimation>
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps) (HomePage)