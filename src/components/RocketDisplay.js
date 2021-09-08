import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../index.css';
import { bookRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  const booked = () => {
    dispatch(
      bookRocket({
        id,
      }),
    );
  };

  return (
    <div id={id} className="Rocket-Container">
      <img className="Rocket-Img" src={flickrImages} alt={rocketName} />
      <div className="Rocket-Info">
        <h3 className="Rocket-Title">{rocketName}</h3>
        <p className="Rocket-Text">{description}</p>
        <ReserveButton
          reserved={reserved}
          bookRocket={booked}
        />
      </div>
    </div>
  );
};

const ReserveButton = (props) => {
  const { reserved, bookRocket } = props;

  if (reserved) {
    return <button className="Rocket-Button" type="button">Cancel Reservations</button>;
  }
  return <button className="Rocket-Button" type="button" onClick={bookRocket}>Reserve Rocket</button>;
};

Rocket.propTypes = {
  flickrImages: PropTypes.any,
  rocketName: PropTypes.any,
  description: PropTypes.any,
  reserved: PropTypes.any,
}.isRequired;

ReserveButton.propTypes = {
  reserved: PropTypes.any,
  bookRocket: PropTypes.any,
}.isRequired;

export default Rocket;
