//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

//国語
const notyet_element_jap = (
  <div>
    <img className="notyet" src="/assets/jap_coming.PNG" />
  </div>
);


//高校国語
var japanese_high_modern = document.getElementById("japanese_high_modern");
japanese_high_modern.addEventListener('click', function() {
  root.render(notyet_element_jap);
});

var japanese_high_old = document.getElementById("japanese_high_old");
japanese_high_old.addEventListener('click', function() {
  root.render(notyet_element_jap);
});