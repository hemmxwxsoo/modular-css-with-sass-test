import React from 'react';
import style from './child.scss';

class Child extends React.PureComponent {
	render() {
		return <div className={style.child}>Child</div>;
	}
}

export default Child;
