####MVVM模型
* model
   * model是数据模型，可以在model中定义数据修改和操作的业务逻辑
* view
   * view是ui视图层，负责将数据模型通过ui展示出来
* view-model
   * 监听数据变化和控制视图改变、处理用户交互，同步一个view和model对象，Model和View
* MVVM框架下，view和model没有直接的联系，通过viewmodel进行交互