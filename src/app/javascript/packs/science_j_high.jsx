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


//中学校理科
var science_j_high_1 = document.getElementById("science_j_high_1");
science_j_high_1.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_j_high_2 = document.getElementById("science_j_high_2");
science_j_high_2.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_j_high_3 = document.getElementById("science_j_high_3");
science_j_high_3.addEventListener('click', function() {
  root.render(notyet_element_science);
});