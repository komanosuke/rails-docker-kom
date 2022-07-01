//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);


//社会
const notyet_element_social = (
  <div>
    <img className="notyet" src="/assets/soc_coming.PNG" />
  </div>
);


//中学校社会
var social_studies_j_high_1 = document.getElementById("social_studies_j_high_1");
social_studies_j_high_1.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_j_high_2 = document.getElementById("social_studies_j_high_2");
social_studies_j_high_2.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_j_high_3 = document.getElementById("social_studies_j_high_3");
social_studies_j_high_3.addEventListener('click', function() {
  root.render(notyet_element_social);
});