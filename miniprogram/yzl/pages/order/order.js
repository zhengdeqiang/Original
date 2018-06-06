Page({
  data: {
    noOrder: true,
    tabs: [
      {title: '已完成', content: '内容一'},
      {title: '未完成', content: '内容二'},
    ]
  },
  handleTabChange(selectedId) {
    console.log(selectedId);
  },
  onClick: function(e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
  }
})
