import React from 'react';
import DisplayTotal from '../DisplayTotal/DisplayTotal';
import DisplayItem from '../DisplayItem/DisplayItem';
import './Display.css';

function Display(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];
      return(
        <DisplayItem
        key={idx} 
        featureHash={featureHash}
        selectedOption = {selectedOption}
        feature= {feature}
        />
      );
    });
    return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <DisplayTotal selected={props.selected} />
          </section>
        )   
}

export default Display;


