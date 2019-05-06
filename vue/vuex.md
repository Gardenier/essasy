####vuex
######state
* vuex使用单一状态树，即每个实例只包含一个store实例。存放的数据状态，不可以直接修改里面的数据
######mutations
* 定义的方法动态的修改store中的状态或数据
######getter
* 过滤一些数据
######action
* 通过将mutations中处理数据的方法变成可异步处理数据的方法，即异步操作数据。view层通过store.dispath来分发action
######modules
* 项目复杂的时候，可以每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理