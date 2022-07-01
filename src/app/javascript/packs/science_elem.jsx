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

//小学校理科
var science_elem_3 = document.getElementById("science_elem_3");
science_elem_3.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_elem_4 = document.getElementById("science_elem_4");
science_elem_4.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_elem_5 = document.getElementById("science_elem_5");
science_elem_5.addEventListener('click', function() {
  root.render(notyet_element_science);
});

var science_elem_6 = document.getElementById("science_elem_6");
science_elem_6.addEventListener('click', function() {
  root.render(notyet_element_science);
});
