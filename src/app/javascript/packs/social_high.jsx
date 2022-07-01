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



//高校社会
var social_studies_high_worldhistory = document.getElementById("social_studies_high_worldhistory");
social_studies_high_worldhistory.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_high_japanesehistory = document.getElementById("social_studies_high_japanesehistory");
social_studies_high_japanesehistory.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_high_geography = document.getElementById("social_studies_high_geography");
social_studies_high_geography.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_high_ethics = document.getElementById("social_studies_high_ethics");
social_studies_high_ethics.addEventListener('click', function() {
  root.render(notyet_element_social);
});

var social_studies_high_poleco = document.getElementById("social_studies_high_poleco");
social_studies_high_poleco.addEventListener('click', function() {
  root.render(notyet_element_social);
});