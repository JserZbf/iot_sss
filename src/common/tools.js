const changeChildren = (children) => {
  return children.filter((item) => (item.type !== 2&&item.type !== 3));
};
export const changeMenuTree = (tree) => {
  return tree.map((item) => {
    return {
      ...item,
      apiConfig: item.children && item.children.filter((itemT) => (itemT.type === 2||itemT.type === 3)),
      children:
        item.children && item.children.length && changeChildren(item.children).length
          ? changeMenuTree(changeChildren(item.children))
          : null,
    };
  });
};
export const changeMenuArr = (tree = []) => {
  const arr = [];
  function arrFunction(arrList) {
    arrList.forEach((item) => {
      arr.push(item.id);
      if (item.children) {
        arrFunction(item.children);
      }
    });
  }
  arrFunction(changeMenuTree(tree));
  return arr;
};


export const random = (number) => Math.random().toString().slice(-number)

export const changeRole = (data) => {
  const arr = [];
  data.forEach((item) => {
    arr.push({
      permissionId: item.id,
      roleType: item.roleType,
    });
  });
  return arr;
};

// 判断是否为json字符串
export const isJsonStr = (str) => {
  if (typeof str === 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
};


export const toTree = (arr, parentId) => {
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
}

//查找数据字典

export const treeRule = (data, type) => {
  const parentId = (data.find((item) => item.code === type) || {}).id;

  const mainData = data.filter((item) => {
    return item.parentId === parentId;
  });
  return mainData || [];
};
