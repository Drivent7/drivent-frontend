import React from 'react';
import useForm from './useForm';
import { Form, Alert, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardComponent.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Buttons from '../../ticket/Button';
import useTicket from '../../../hooks/api/useTicket';
import usePostPayment from '../../../hooks/api/usePayment';

import { useContext } from 'react';
import { useContextPayment } from '../useContextPayment';

const CardComponent = () => {
  const { handleChange, handleFocus, handleSubmit, handleCallback, values, errors } = useForm();
  const { setFinalPayment, setTicketId } = useContext(useContextPayment);
  const { ticket } = useTicket();
  const { paymentLoading, paymentAct } = usePostPayment();
  async function handlePayment() {
    if (values?.cardExpiration !== '' && values?.cardName !== '' && values?.cardNumber !== '' && values?.cardSecurityCode !== '' && values?.issuer !== '') {
      const body = {
        ticketId: ticket?.id,
        cardData: {
          issuer: values.issuer,
          number: values.cardNumber,
          name: values.cardName,
          expirationDate: values.cardExpiration,
          cvv: values.cardSecurityCode
        }
      };
      try {
        await paymentAct(body);
        setFinalPayment(true);
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
                callback={handleCallback}
              />
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Valid Thru"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Security Code"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Buttons onClick={handlePayment} size={'block'} data-testid="validateButton" id="validateButton" type="submit" disable={paymentLoading}>
                Finalizar Pagamento
              </Buttons>
            </Form>
          </div>
          <Alert
            id="alertMessage"
            style={{ marginTop: '-10px', marginLeft: '20px' }}
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{' '}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
