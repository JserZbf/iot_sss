import { notification } from 'antd';

const models = [
  { value: '定时任务服务', code: '10' },
  { value: '清洗服务', code: '11' },
  { value: '会员服务', code: '15' },
  { value: '主系统服务', code: '20' },
  { value: '网关', code: '24' },
  { value: '后台管理服务/Auth服务', code: '25' },
];

const errorCode = [
  { value: '参数数据类型异常', code: '01' },
  { value: '数据重复类', code: '02' },
  { value: '数据不存在', code: '03' },
  { value: '数据保存异常', code: '04' },
  { value: '响应超时', code: '05' },
  { value: '权限不足', code: '06' },
  { value: '操作无效', code: '07' },
  { value: '参数不能为空', code: '08' },
  { value: '业务异常', code: '09' },
  { value: '用户名或密码错误', code: '10' },
  { value: '密码错误', code: '11' },
  { value: '调用xxx服务{}方法失败!', code: '12' },
  { value: '数据校验失败', code: '13' },
  { value: '代码运行异常', code: '98' },
  { value: '其他未知异常', code: '99' },
];

export const HttpCodeCheckout = (data, msg, contextMsg = '') => {
  if (data.length !== 4) return;
  if (data.includes('03')) return;
  const serverMsg = models.find((itemT) => itemT.code === data.slice(0, 2)) || {};
  const errorMsg = errorCode.find((itemT) => itemT.code === data.slice(2, 4)) || {};
  const errorcodes = {
    msg: `${`${serverMsg.value}:${contextMsg}${errorMsg.value}`}`,
  };
  notification.warning({
    description: msg,
  });
};
