import React from 'react';
import { Row, Col } from 'reactstrap';
import  Cricle  from '../../assets/icon/cricle.svg';
import Triangle  from '../../assets/icon/tringle.svg';
import Heart  from '../../assets/icon/heart.svg';
import Square  from '../../assets/icon/square.svg';
import Hexgon  from '../../assets/icon/hexgon.svg';
import Octagon  from '../../assets/icon/octagon.svg';
import Dimand  from '../../assets/icon/dimand.svg';
import Draggable from 'react-draggable';







const shapeGen = () => {

  // const addElement = () =>{

  // }

      return (
     
        <Row>

             <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}
        >
          <Col >
          <img className="handle" src={Triangle} style={{ width: '70%', height: '70%', cursor: 'move', position:'relative' }} />,
          <img src={Cricle} style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          <img src={Heart}style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          
          </Col>
        </Draggable>
          <Col>
          <img src={Square} style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          <img src={Triangle}  style={{ width: '70%', height: '70%', cursor: 'move' }}/>,
          <img src={ Hexgon } style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          </Col>
          <Col>
          <img src={Octagon} style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          <img src={Triangle} style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          <img src={ Dimand } style={{ width: '70%', height: '70%', cursor: 'move' }} />,
          </Col>
        </Row>
     
        );
   
};


export default shapeGen;
