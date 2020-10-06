import React from 'react';
import CustomItem from '../CustomItem/CustomItem';
import './Feature.css';

function Feature(props) {
  const options = props.features[props.feature].map((item, idx) => {
    return(
    <CustomItem
    key={idx}
      feature={props.feature} 
      item={item} 
      selected={props.selected}
      updateFeature={(feature, item) => props.updateFeature(feature, item)}
    />
    )
  });
  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

export default Feature;
