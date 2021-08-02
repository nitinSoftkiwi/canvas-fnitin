import React, {useState} from 'react';
import {Row, Col, Button,TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText} from 'reactstrap';
import { CloudArrowDown, UiChecksGrid, TextareaT, ChevronLeft, Cpu } from 'react-bootstrap-icons';
import classnames from 'classnames';
import Canvas from './Canvas';
import Shape from './elements/Shape'
import Text from './elements/Text'

const Tab = () => {
  
  const [activeTab, setActiveTab] = useState('1');

  const openTab = (event, tabType) => {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    
    
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabType).style.display = "block";
    event.target.className += " active";
  }
  

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const hidePanel = (tabType) => {
    document.getElementById(tabType).style.display = "none";
  }


  return (
    <React.Fragment>
        <div style={{width: "100%", height: "8vh", backgroundColor:"#fff"}}>
          <Col md={{offset: 9}} className="mt-2">
            <Button outline color="primary">Flip</Button>{' '}
            <Button outline color="secondary">Position</Button>{' '}
            <Button outline color="success">Black</Button>{' '}
            <Button outline color="success">Delete</Button>{' '}

          </Col>
        </div>
      <Row md="12" lg="12" sm="12" style={{position: "relative", marginTop: "-75px"}}>
        <Col sm="3" lg="1" md="1" className="pr">
          <div className="tab">
            <Button className="tablinks pro-btn" onClick={(e) => openTab(e, 'Upload')} >
              <span className=""><CloudArrowDown /></span><br/>
              Upload
            </Button>
            <Button className="tablinks pro-btn" onClick={(e) => openTab(e, 'Element')} >
              <span> <UiChecksGrid /></span> <br/>
              Elements
            </Button>
            <Button className="tablinks pro-btn" onClick={(e) => openTab(e, 'Text')} >
              <span><TextareaT /></span><br/>
              Text
            </Button>
          </div>
        </Col>
        <Col sm="3" lg="4" md="4" className="pl">
          <div id="Upload" className="tabcontent tab-c tab-d">
            <div className="minPanel" style={{display: "flex", alignItems: "center"}} onClick={(e) => hidePanel('Upload')}> <span><ChevronLeft /></span></div>
            <Col className="pt-3" sm="4" md="4" lg={{size: 10}}>
              <Button type="button" className="btn-w" >Upload media</Button>
            </Col>
            <Col className="pt-3">
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { toggle('1'); }}
                    >
                      Images
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggle('2'); }}
                    >
                      Videos
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => { toggle('3'); }}
                    >
                      Audios
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <h4>Tab 1 Contents</h4>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural .</CardText>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural .</CardText>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>

              </Col>
          </div>
          
          <div id="Element" className="tabcontent tab-c tab-d">
            <Shape/>         
             </div>
          
          <div id="Text" className="tabcontent tab-c tab-d">
           <Text/>
          </div>
        </Col>
        <Col sm="6" md="4" lg="3" style={{paddingTop: "130px"}}>
          <Canvas />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Tab