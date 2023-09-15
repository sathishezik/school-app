import { useState, useEffect } from "react"
import axios from "axios"
import { Container,Row,Col } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/Saraslogo.png'
import dasicon from '../images/Icons/Dashboard.svg'
import Branch from '../images/Icons/Branches.svg'
import user from '../images/Icons/person.svg'
import Card from "./Card";

function Home(){
    const [query, setquery] = useState({})

    const Fetchdata =async () =>{
        try{
        const {data} = await axios.get('https://api-mock.appsaras-dev.sarasapp.com/dashboard/school-admin-main/1')
        console.log(data)
        setquery(data.dashboard)
        }
        catch(e) {
            console.error(e);
        }   
    }

    useEffect(()=>{
        Fetchdata()
    },[])
    {console.log("query", query)}
    return(
        <>

          <div className="dashboard">
                <Container fluid>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col lg={2} md={4}>
        <img src={logo} className="logo img-fluid mt-5 mb-5" alt="logo" />
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
              <li>
                <img src={dasicon} className="icon img-fluid" alt="logo" />
                <span>Dashboard</span>
             </li>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second">
              <li>
                <img src={Branch} className="icon img-fluid" alt="logo" />
                <span>School Branch</span>
             </li>
              </Nav.Link>
            </Nav.Item>

           <Nav.Item>
              <Nav.Link eventKey="third">
              <li>
                <img src={Branch} className="icon img-fluid" alt="logo" />
                <span>School Branch</span>
             </li>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="Fourth">
              <li>
                <img src={Branch} className="icon img-fluid" alt="logo" />
                <span>School Branch</span>
             </li>
              </Nav.Link>
            </Nav.Item>

            
            

          </Nav>
        </Col>
        <Col lg={10} md={8}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <div className="Header ">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <div className="d-flex school-title">
                        <p className="m-0">school</p>
                        <input type="text" placeholder="vadapalani educational society"/>
                    <div className="d-flex logged">
                        <p className="m-0">Logged-in as main admin</p>
                    </div>
                        </div>
                            <div className="d-flex">
                                <img src={user} className = 'user-icon ' alt="icon"/>
                        <p className='mb-0'>varun</p>
                        </div>
                    </div>
                </div>
                {/*  */}

                <div className="main-content mt-5">
                    <Row>
                        <Col lg={3} md={4}><Card title={"Branches"} value={query.totalBranches}/> </Col>
                        <Col lg={3} md={4}><Card title={"Classes"} value={query.totalClasses}/> </Col>
                        <Col lg={3} md={4}><Card title={"Sections"} value={query.totalSections}/> </Col>
                        <Col lg={3} md={4}><Card title={"Students present"} value={query.studentsPresent}/> </Col>
                        <Col lg={3} md={4}><Card title={"Main Admins"} value={query.totalMainAdmins}/> </Col>
                        <Col lg={3} md={4}><Card title={"Branch Admins"} value={query.totalBranchAdmins}/> </Col>
                        <Col lg={3} md={4}><Card title={"Teachers"} value={query.totalTeachers}/> </Col>
                        <Col lg={3} md={4}><Card title={"Other Employees"} value={query.totalEmployees}/> </Col>
                    </Row>

                   
                        <div className="sub-content">

                        </div>

                  

                </div>

            </Tab.Pane>


            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
            <Tab.Pane eventKey="Fourth">Fourth tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

                </Container>
                </div>
        </>
    )
}

export default Home