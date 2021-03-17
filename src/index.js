import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'

//look at example and refactor tomorrow

function Envelope ({ sender, recipient }) {
    return(
        <>
        <AddressBlock className="sender" person={sender} />
        <AddressBlock className="recipient-block" person={recipient} />
        </>
    );
}

function AddressBlock ({ person, className }) {
    const {name, address, cityState} = person;
    return(
        <div className={`mailing-block ${className}`}>
            <div className="name"> {name}</div>
            <div className="address">{address}</div>
            <div classNAme="city-state">{cityState}</div>
        </div>
    );
}
function Stamp(){
    return(
        <div className="stamp">
            Stamp
        </div>
    );
}

const recipient = {
    name: 'Mr. Patrick Dineen',
    address: '3145 Harrison Ave',
    cityState: 'Brookfield Il, 60513'
};

const sender = {
    name: 'Mrs. Felicity Dineen',
    address:'2170 Marina Dr',
    cityState:'Naples Fl, 34102'
};

const patrickCard = {
    name:'Patrick J Dineen',
    cardNumber:'1234 5678 9012 3456',
    exp:'03/21',
    bankName:'Chase Bank'
}
const felicityCard = {
    name:'Felicity C Dineen',
    cardNumber:'1234 5678 9012 3456',
    exp:'03/21',
    bankName:'Chemical Bank'
}

function CreditCard ({cardInfo}){
    const {bankName,cardNumber,exp,name}=cardInfo
    return (
        <div className="credit-card">
            <div className="bank-name">{bankName}</div>
            <div className='card-number'>{cardNumber}</div>
            <div className='expiration-date'>Valid Thru {exp}</div>
            <div className='cardholder'>{name}</div>
        </div>
    );
}

const email1={
    sender:'Patrick Dineen',
    subject:'Hello from Me!',
    date:'3/1/2021',
    message:'Hello Patrick - I wanted to reach out and tell you youre doing great!'
}

function Inbox({ email }){
    const {sender, subject, date, message}= email;
    return(
        <div className="email-line">
            <div className="top-line">
                <span className="sender">{sender}</span>
                <span>{subject}</span>
                <span>{date}</span>
            </div>
            <div className="message">{message}</div>
        </div>
    );
}

ReactDOM.render(
    <>
        {/* <Envelope sender={sender} recipient={recipient} /> */}
        <CreditCard cardInfo={patrickCard} />
        <CreditCard cardInfo={felicityCard} />
        <Inbox email={email1} />
    </>,
    document.querySelector('#root')
);