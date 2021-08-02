import React from 'react';
import { Row } from 'reactstrap';
import CommonHeader from './header/CommonHeader';
import Tab from './Tab';

  const MainBoard = () => {

  return (
    <React.Fragment>
      <Row>
        <CommonHeader />
        <Tab />
      </Row>
    </React.Fragment>

  )
}

export default MainBoard