import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Popconfirm, Switch, Modal } from 'antd';
import AutoScale from 'components/AutoScale';
import Iconfont from 'components/Iconfont';
import { useSelector, useDispatch } from 'dva';

import styles from './index.less';

const Home = function ({ windowInnerHeight }) {
  const dispatch = useDispatch();
  const saveModelsState = (payload) => dispatch({ type: 'ruleDetailsModel/save', payload });

  const { params } = useSelector((models) => models.ruleDetailsModel);

  useEffect(() => {}, [params]);
  return <div className={styles.container}>home</div>;
};

export default AutoScale(Home);
