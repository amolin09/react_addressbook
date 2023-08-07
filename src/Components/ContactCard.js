import {useState} from 'react';

import '../styles/ContactCard.css';

function ContactCard(props){
  const {contactInfo} = props;

  const [detailsShown, setDetailsShown] = useState(false);

  const toggleDetails = () =>{
    setDetailsShown((currentVal)=>{
      return !currentVal;
    })
  }

  return(
    <div className="contact-card">
      <span>{`${contactInfo.name.first} ${contactInfo.name.last}`}</span>
            
            <img src={contactInfo.picture.thumbnail}/>

            <button onClick={toggleDetails}>
                {
                detailsShown ? 'Hide Details' : 'Show Details'
                }
            </button>

            {
           
            detailsShown &&
            <div className="additional-details">
                <ul>
                    <li>Phone: {contactInfo.phone}</li>
                    <li>Email: {contactInfo.email}</li>
                    <li>Address: {contactInfo.location.street.number} {contactInfo.location.street.name} {contactInfo.location.city}, {contactInfo.location.state} {contactInfo.location.postcode}
                    </li>
                </ul>
            </div>
            }
    </div>
  )
}

export default ContactCard;