import React from 'react';
import { Tooltip, Divider } from 'antd';
import Iconfont from 'components/Iconfont';
import styles from './NodeElement.less';

export const FlowProcessTechnologyElement = (props) => {
  const { node } = props;
  const data = node.getProp();
  const nodeData = node.getData();
  const { params = {} } = data;
  return (
    <div className={styles.flowProcessTechnologyElement}>
      <div className={`${styles.icon}`}>
        <Iconfont type={data.icon || ''} />
        <span className={styles.title}> {data.label || ''}</span>
      </div>
      <div className={styles.content} title={data.label || ''}>
        <Tooltip title={params?.message || ''} placement="left">
          <div className={styles.contentTitle}> {params.message}</div>
        </Tooltip>
        {/* <span>首：{params.firStinspection ?'是' :'否'}</span>
        <span>末：{params.endStinspection ?'是' :'否'}</span> */}
        {/* <span>
          频检：{params.frequencyStinspection ? `是 ${params.frequencyCount}` : '否'}{' '}
        </span> */}
      </div>
    </div>
  );
};

export const FlowAuxiliaryProcessElement = (props) => {
  const { node } = props;
  const data = node.getProp();
  const nodeData = node.getData();
  const { params = {} } = data;
  return (
    <div className={styles.flowAuxiliaryProcessElement}>
      <div className={`${styles.icon}`}>
        <Iconfont type={data.icon || ''} />
        <span className={styles.title}> {data.label || ''}</span>
      </div>
      <div className={styles.content} title={data.label || ''}>
        <Tooltip title={params.message || ''} placement="left">
          <div className={styles.contentTitle}> {params.message}</div>
        </Tooltip>
      </div>
    </div>
  );
};
export const FlowSizeMeasurementElement = (props) => {
  const { node } = props;
  const data = node.getProp();
  const nodeData = node.getData();
  const { params = {} } = data;
  return (
    <div className={styles.flowSizeMeasurementElement}>
      <div className={`${styles.icon}`}>
        <Iconfont type={data.icon || ''} />
        <span className={styles.title}> {data.label || ''}</span>
      </div>
      <div className={styles.content} title={data.label || ''}>
        <Tooltip title={params.message || ''} placement="left">
          <div className={styles.contentTitle}> {params.message}</div>
        </Tooltip>
      </div>
    </div>
  );
};

export const FlowStartElement = (props) => {
  const { node } = props;
  const data = node.getProp();
  return <div className={styles.flowStartElement}>{data.label}</div>;
};

export const FlowEndElement = (props) => {
  const { node } = props;
  const data = node.getProp();
  return <div className={styles.flowStartElement}>{data.label}</div>;
};

export const FlowOEE = (props) => {
  const { node } = props;
  const { params = {}, label } = node.getProp();
  return (
    <div className={`${styles.flowOEE}`} style={{borderColor:params.OEE<85?'red':''}}>
      <div className={styles.left}>{label}</div>
      <div className={styles.right}>
        <div className={styles.item}>OEE:{params.OEE}%</div>
        <div className={styles.item}>排产:{params.pc}%</div>
        <div className={styles.item}>开动率:{params.kdl}%</div>
        <div className={styles.item}>良率:{params.lv}%</div>
      </div>
    </div>
  );
};

export const FlowInfoMessag = (props) => {
  const { node } = props;
  const data = node.getProp();
  const nodeData = node.getData();
  const { params = {}, info } = data;
  return (
    <div className={styles.flowInfoMessag}>
      <div className={`${info.success ? styles.success : styles.err}`}>
        <span className={styles.title}> {data.label || ''}</span>
      </div>
      <div className={styles.content} title={data.label || ''}>
        <Tooltip title={params.message || ''} placement="left">
          <div className={styles.contentTitle}>
            {info.success ? '成功' : '失败'}： {info.message}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
