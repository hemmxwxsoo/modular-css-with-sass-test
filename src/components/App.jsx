import React from 'react';
import style from './app.scss';
import Child from './Child';

class App extends React.PureComponent {
	render() {
		return <div className={style.app}><Child/></div>;
	}
}

export default App;
