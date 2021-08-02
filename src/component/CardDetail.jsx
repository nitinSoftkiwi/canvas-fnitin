import React from 'react';
import {Card, CardBody, CardText,Input} from 'reactstrap';

const CardDetail = (props) => {
  return (
    <Card>
      <CardBody>
        <Input type="radio" name="radio" className="p-r" /> <br/>
        <div className="p-c">
          <img src={process.env.PUBLIC_URL + '/images/' + props.img} alt="Card image cap" />
        </div > <br/>
        <CardText className="p-c">
          <span className="txt-c">
            {props.title}
          </span><br/>
          <span>{props.rate}"</span>
        </CardText>
        <CardText className="p-r">
          <del>${props.amount}</del> { }
          <span className="amount-c">${props.amount1}</span>
        </CardText>
      </CardBody>
    </Card>
  )
} 

export default CardDetail;