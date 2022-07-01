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

//小学校社会
var social_studies_elem_3 = document.getElementById("social_studies_elem_3");
social_studies_elem_3.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_elem_4 = document.getElementById("social_studies_elem_4");
social_studies_elem_4.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_elem_5 = document.getElementById("social_studies_elem_5");
social_studies_elem_5.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_elem_6 = document.getElementById("social_studies_elem_6");
social_studies_elem_6.addEventListener('click', function() {
  root.render(notyet_element_social);
});