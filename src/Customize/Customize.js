import React from 'react';
import Feature from '../Feature/Feature';
import './Customize.css';

function Customize(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
      return(
      <Feature
        updateFeature={(feature, item) => props.updateFeature(feature, item)}
        selected={props.selected}
        features={props.features}
        featureHash={featureHash}
        feature={feature}
        key={idx}
      />
      )
      });
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    )
}

export default Customize;

