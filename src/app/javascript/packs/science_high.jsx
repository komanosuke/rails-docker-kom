//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);



//理科
const notyet_element_science = (
  <div>
    <img className="notyet" src="/assets/sci_coming.PNG" />
  </div>
);


//高校理科
var science_high_physics = document.getElementById("science_high_physics");
science_high_physics.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_high_chemistry = document.getElementById("science_high_chemistry");
science_high_chemistry.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_high_biology = document.getElementById("science_high_biology");
science_high_biology.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_high_geology = document.getElementById("science_high_geology");
science_high_geology.addEventListener('click', function() {
  root.render(notyet_element_science);
});