import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//demo_01
//import CounterPanel from './Counter/CounterPanel';

//demo_02
//import CounterPanel from './demo02_flux/view/CounterPanel';

//demo_03
import CounterPanel from './demo3_redux/view/CounterPanel'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterPanel />, document.getElementById('root'));
registerServiceWorker();
