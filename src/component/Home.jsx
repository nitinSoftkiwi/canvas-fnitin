import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import { CartFill, Truck } from 'react-bootstrap-icons';
import CardDesign from './CardDetail';
import {getcustomiseElement} from '../component/services/customiseElement';

const Header  = React.lazy(() => import('./header/Header'));

const Home = (props) => {
  const [modal, setModal] = useState(false);
  const [customModal, setCustomModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const openModel = () => setModal(!modal); 
  const openCustomModel = () => setCustomModal(!customModal); 

  const history = useHistory();

  const proceedNext = () => {
    let path = `mainBoard`;
    history.push(path);
  }

  // const getAllData = async (props) => {
  //   setIsLoading(true);
  //   try{
  //       const {data} = await axios.get(`http://localhost:5000/api/coustomise-element/getAllCustomiseValue`);
  //       console.log(data);
  //       setTableData(data.res);

  //       setIsLoading(false)
  //   }catch(error){
  //     setIsLoading(false)
  //   }

  // }
  useEffect(() => {
    console.log('data')
    getcustomiseElement().then((res) => {
      setTableData(res.data.data)
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  
  return (
    <main>
      <Header />
        <Container>
          <br/><br/>
          <div>
            <Row><br/><br/><br/><br/><br/><br/>
              <Col sm="12" md={{ size: 6, offset: 3 }} lg={{size: 6, offset: 4}}>
                <h1>Create your own design</h1>
                <p className="ml-5">Please choose a size, listed below to get started</p>
              </Col>
           
              
              <Col sm="12" md={{size: 3}} lg={{size: 3}}>
                <CardDesign img="smlayer.png" title={tableData.title} rate={tableData.height} amount="260" amount1={tableData.price} />
              </Col>
             
              <Col sm="12" md={{size: 3}} lg={{size: 3}}>
                <CardDesign img="lglayer.png" title="Premium birch plywood" rate="29.5 x 44.25" amount="320" amount1="257" />
              </Col>
              <Col sm="12" md={{size: 3}} lg={{size: 3}}>
                <CardDesign img="lglayer.png" title="Premium birch plywood" rate="29.5 x 595" amount="480" amount1="337" />
              </Col>
              <Col sm="12" md={{size: 3}} lg={{size: 3}} onClick={openCustomModel} >
                <CardDesign img="custome.png" title="Standard Harboard" rate="24 sq ft and up" amount="" amount1="24.97" />
              </Col>

              <Col className="pt-4" sm="12" md={{ size: 6, offset: 5 }} lg={{size: 6, offset: 5}}>
                <Button type="button" className="btn1" onClick={openModel}> Continue to Design Builder</Button> 
              </Col>

              <Col sm="12" md={{ size: 6}} lg={{size: 6 }}>
                <p><Truck /> Free shipping across most states</p>
                <p><CartFill /> Buy 1 and get additional panel shipped to the same address with 25% off</p>
              </Col>
            </Row>
          </div>

          <Modal size="lg" isOpen={modal} toggle={openModel} >
            <ModalHeader className="p-c">Would you like to leave on 8x8 square without holes?</ModalHeader>
            <ModalBody>
            if you select the second image, we wont drill holes in an 8'x8' surface in the top middle. Recommended if you want to insert a logo or detailed image that should stay 100% visible at all times.
            <Row>
              <Col className="pt-4" sm="12" md={{ size: 5, offset: 1 }} lg={{size: 5, offset: 1}}>
                <img src={process.env.PUBLIC_URL + '/images/model_right2.svg'} alt="" />
              </Col>
              <Col className="pt-4" sm="12" md={{ size: 6}} lg={{size: 6}}>
                <img src={process.env.PUBLIC_URL + '/images/modelRight.svg'} alt="" />
              </Col>
            </Row>

            </ModalBody>
            <ModalFooter>
              <span className="pro-btn">
                <Button type="button" className="btn1" onClick={proceedNext}>Proceed</Button>
              </span>
            </ModalFooter>
          </Modal>

          <Modal centered size="lg" isOpen={customModal} toggle={openCustomModel} >
            <ModalHeader style={{borderBottom: '0px'}} className="p-c">Enter Size for Custom</ModalHeader>
            <ModalBody>
            <Row>
              <Col className="pt-4" sm="12" md={{ size: 5, offset: 1 }} lg={{size: 5, offset: 1}}>
                <Input placeholder="Width" type="text" />
              </Col>
              <Col className="pt-4" sm="12" md={{ size: 6}} lg={{size: 6}}>
                <Input placeholder="Height" type="text" />
              </Col>
            </Row>

            </ModalBody>
            <ModalFooter style={{borderTop: "0px"}}>
              <span className="pro-btn">
                <Button type="button" className="btn1" onClick={proceedNext}>Proceed</Button>
              </span>
            </ModalFooter>
          </Modal>
        </Container>
    </main>
  )
} 

export default Home;