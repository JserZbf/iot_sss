import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect, routerRedux } from 'dva';

import { withRouter } from 'react-router';
import pathConfig from 'config/pathConfig';
import styles from './index.less';
import sssLogo from '../../assets/sss_logo.png'
import menuImg from '../../assets/mine.png'
import sssName from '../../assets/sss_name.png'
import sssSize from '../../assets/sss.png'
import returnImg from '../../assets/return.png'



@withRouter
@connect(
	({ ums, baseLayout }) => ({
		userInfo: ums.userInfo,
		sideMenus: baseLayout.sideMenus,
	}),
	(dispatch) => ({
		ssoLogout: () => dispatch({ type: 'ums/ssoLogout' }),
		navTo: (payload) => dispatch(routerRedux.push(payload)),
	}),
)
class TopBar extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { ssoLogout ,navTo} = this.props;
		return (
			<div className={styles.headContainer} data-spm-module="topBar">
				<div className={styles.logo}>
					<div className={styles.logoLeft}>
						<img src={sssLogo} alt='' />
						<div className={styles.sizeType}>
							<img src={sssName} alt='' />
							<img src={sssSize} alt='' />
						</div>
					</div>
					<div className={styles.rightLogo}>
						<img src={menuImg} alt="" />
						<img role="button" src={returnImg} alt="" onClick={() => {
							  ssoLogout()
						}} />
					</div>

				</div>
			</div>
		);
	}
}

TopBar.propTypes = {
	ssoLogout: PropTypes.func,
};
export default TopBar;
