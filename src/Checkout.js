import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import AppContext from './context'
import axios from 'axios'
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe(...)

function Checkout(props) {
    // we'll add Stripe's Elements component here later
    return (
        <CheckoutController />
    )
}
export default Checkout


const CheckoutController = props => {
    const context = React.useContext(AppContext)
    const total = context.getCartTotal()
    const items = {}
    let iCount = 0

    Object.entries(context.cart).map(i => {
        const prod = Object.values(context.products).find(x => x.id === parseInt(i[0]))
        items[iCount] = {'pid': i[0], 'price': prod.price, 'qty': i[1]}
        // .pid = i[0]
        // items[iCount].price = prod.price
        // items[iCount].qty = i[1]
        iCount++
        return (items)
    })
    //console.log(items)
    //console.log(total)

    return (
        <Formik
            initialValues={{  //good to have values just for testing
                name: 'Conrad Fox',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                state: 'UT',
                zipcode: '84602',
                total: total,
                items: items,                
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                //console.log('validating', values)
                if (values.name === null || values.name === "") 
                {
                    errors.name = 'Name is a required field'
                }
                if (values.address1 === null || values.address1 === "") 
                {
                    errors.address1 = 'Address1 is a required field'
                }
                if (values.city === null || values.city === "") 
                {
                    errors.city = 'City is a required field'
                }
                if (values.state === null || values.state === "") 
                {
                    errors.state = 'State is a required field'
                }
                if (values.zipcode === null || values.zipcode === "") 
                {
                    errors.zipcode = 'Zip is a required field'
                }
 
                return errors
            }}
            onSubmit={async (values, actions) => {
                console.log('submit', values)
                const resp = await axios.post('http://localhost:8000/api/sale/', {
                    //values go here
                     values
                })
                console.log(resp.data)
                setTimeout(() => {  // wait 2 seconds, then set the form as "not submitting"
                    actions.setSubmitting(false)
                }, 2000)
            }}
        >{form => (
            <PaymentForm form={form} total={total}/>
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => (
    <bs.Container>
        <Form>
        <h1 className="text-secondary float-left pt-1">Checkout</h1>
        <br/><br/><br/>
        <bs.Row>
            <bs.Col>
                <div className='text-left bg-light border border-dark rounded p-2'>
                    <h5 className='text-decoration-underline'>Shipping</h5>
                    <Input title="Name:" name="name" type="text" disabled/>
                    <Input title="Address1:" name="address1" type="text" />
                    <Input title="Address2:" name="address2" type="text"/>
                    <Input title="City:" name="city" type="text" />
                    <Input title="State:" name="state" type="text" />
                    <Input title="Zip:" name="zipcode" type="number" />
                </div>
            </bs.Col>
            <bs.Col>
                <div className='text-left bg-light border border-dark rounded p-2'>
                    <h5 className='text-decoration-underline'>Payment</h5>
                    <Input title="Card Number:" name="creditcard" type="text" />
                    <div className='text-center'>
                        Your card will be charged ${props.total}. <br/><br/>
                        <bs.Button type='submit' className="btn-warning" disabled>
                            {/* <bs.Spinner animation='border' size='sm'></bs.Spinner> <span>&nbsp;</span>*/}
                             Purchase</bs.Button>
                    </div>
                </div>
            </bs.Col>
        </bs.Row>
        </Form>
        <br/>
    </bs.Container>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)