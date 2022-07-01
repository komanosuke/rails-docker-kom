//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);


//英語
const notyet_element_eng = (
  <div>
    <img className="notyet" src="/assets/eng_coming.PNG" />
  </div>
);


//中学校英語
var english_j_high_1 = document.getElementById("english_j_high_1");
english_j_high_1.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_j_high_2 = document.getElementById("english_j_high_2");
english_j_high_2.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_j_high_3 = document.getElementById("english_j_high_3");
english_j_high_3.addEventListener('click', function() {
  root.render(notyet_element_eng);
});