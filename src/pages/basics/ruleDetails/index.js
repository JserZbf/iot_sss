import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Popconfirm, Switch, Modal } from 'antd';
import MultipleSel from 'components/MultipleSel';
import AutoScale from 'components/AutoScale';
import Iconfont from 'components/Iconfont';
import { useSelector, useDispatch } from 'dva';
import BreadcrumbStyle from 'components/breadcrumbStyle';
import {
  FormOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  SearchOutlined,
  HeatMapOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import ModalFrom from './components/ModalFrom';

const Home = function ({ windowInnerHeight }) {
  const dispatch = useDispatch();
  const saveModelsState = (payload) => dispatch({ type: 'ruleDetailsModel/save', payload });
  // const dictPage = (payload) => dispatch({ type: 'ruleDetailsModel/dictPage', payload });
  // const dictAdd = (payload) => dispatch({ type: 'ruleDetailsModel/dictAdd', payload });
  // const dictUpdate = (payload) => dispatch({ type: 'ruleDetailsModel/dictUpdate', payload });
  // const dictDel = (payload) => dispatch({ type: 'ruleDetailsModel/dictDel', payload });

  const { isAdd, storeData, visible, params, ruleData } = useSelector(
    (models) => models.ruleDetailsModel,
  );

  const [selectKeys, setSelectKeys] = useState([]);
  const { confirm } = Modal;
  const [selForm] = Form.useForm();
  useEffect(() => {
    // dictPage();
  }, [params]);

  const toTree = (arr, parentId) => {
    function loop(parentIds) {
      const res = [];
      for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        if (item.parentId === parentIds) {
          item.children = loop(item.id);
          res.push(item);
        }
      }
      return res.length === 0 ? undefined : res;
    }
    return loop(parentId);
  };
  const tree = toTree(ruleData, '0')?.filter((item) => {
    return item.layer === 0;
  });
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectKeys(selectedRowKeys);
    },
  };

  const showConfirm = () => {
    confirm({
      title: '是否删除？',
      icon: <ExclamationCircleOutlined />,
      onOk() {},
    });
  };
  const columns = [
    {
      title: '编码',
      dataIndex: 'code',
      key: 'code',
      flag: true,
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      flag: true,
    },

    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '操作',
      dataIndex: 'address',
      align: 'center',
      width: 250,
      render: (tex, rec) => {
        return (
          <div className="operate">
            <Button
              icon={<HeatMapOutlined />}
              size="small"
              className="issuedButton"
              onClick={() => {
                saveModelsState({
                  // isAdd: true,
                  visible: true,
                  // storeData: {
                  //   id: undefined,
                  //   code: undefined,
                  //   name: undefined,
                  //   description: undefined,
                  //   layer: rec.layer + 1,
                  //   parentId: rec.id,
                  // },
                });
              }}
            >
              添加下级
            </Button>
            <Button
              icon={<FormOutlined />}
              size="small"
              className="editButton"
              onClick={() => {
                saveModelsState({
                  // isAdd: false,
                  visible: true,
                  // storeData: {
                  //   ...rec,
                  // },
                });
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="是否删除？"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                // dictDel({ ids: [rec.id] });
              }}
            >
              <Button icon={<DeleteOutlined />} size="small" className="delButton">
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const onFinishSel = () => {
    selForm.validateFields().then((values) => {
      const valueForm = {};
      for (const [key, value] of Object.entries(values)) {
        if (value !== '') {
          valueForm[key] = value;
        }
      }
      saveModelsState({
        params: { ...valueForm },
      });
    });
  };

  return (
    <div className={styles.container}>
      <BreadcrumbStyle aheadTitle={[{ title: '基础数据' }]} currentTitle="数据字典表" />
      <div className={styles.middleBox}>
        <div className={styles.middleBoxButton}>
          <div className={styles.listIcon}>
            <Iconfont iconMode="unicode" type="icon-gold" className="prefixIcon" />
            数据字典列表
          </div>
          <div className={styles.buttonFlex}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="addButton"
              onClick={() => {
                saveModelsState({
                  visible: true,
                });
              }}
            >
              新增
            </Button>
          </div>
        </div>
        <p className={styles.splitLine} />
        <div className={styles.tableBox}>
          <div className={styles.searchForm}>
            {/* ↓该组件自行实现，现有组件有bug */}
            <MultipleSel
              selForm={selForm}
              columns={columns}
              selButton={
                <>
                  <Button
                    className="buttonStyle"
                    type="primary"
                    onClick={() => {
                      onFinishSel();
                    }}
                    icon={<SearchOutlined />}
                  >
                    搜索
                  </Button>
                </>
              }
            />
          </div>
          <div className={styles.tableStyles}>
            <Table
              columns={columns}
              dataSource={tree || []}
              scroll={{ y: windowInnerHeight - 380 }}
              rowSelection={{ ...rowSelection }}
              rowKey={(record) => record.id}
            />
            <Button
              type="primary"
              className={styles.paginationStyle}
              icon={<DeleteOutlined />}
              onClick={showConfirm}
              disabled={!selectKeys?.length}
            >
              批量删除
            </Button>
          </div>
        </div>
      </div>
      <ModalFrom
        saveModelsState={saveModelsState}
        visible={visible}
        isAdd={isAdd}
        storeData={storeData}
      />
    </div>
  );
};

export default AutoScale(Home);
