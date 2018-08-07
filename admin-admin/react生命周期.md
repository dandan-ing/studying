# React生命周期

## 状态
 * willmount
 * mount
 * unmount

## 生命周期函数
### 初始渲染阶段：
1. construct
2. componentWillMount()
组件渲染前
3. render
4. componentDidMount()
组件渲染完成

### state改变导致的组件更新
1. shouldComponentUpdate()
2. componentWillUpdate()
3. render
4. componentDidUpdate()

### props改变导致的组件更新
1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. render
3. componentWillUpdate()
4. componentDidUpdate()

### 组件销毁
1. componentWillUnmount()


