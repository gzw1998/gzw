let mixin = {
  methods: {
    /* 搜索方法 */
    search() {
      /* 获取所有面试题 */
      /* 判断关键字是否包含逗号 */
      let flag = this.keywords.match(/,|，/g);
      /* 如果关键字包含逗号(双关键字查找) */
      if (flag) {
        /* 获取符号 */
        let sym = flag[0];
        /* 如果不是逗号,直接return */
        if (sym != ',' && sym != '，') return;
        /* 获取关键字数组 */
        let words = this.keywords.split(sym);
        /* 定义结果数组 */
        let resAry = [];
        resAry = this.list.filter(item1 => {
          /* 保留出现了两个关键字的面试题 */
          return words.every(item => {
            /* 不区分大小写 */
            let a = item1.question.toLowerCase()
            return a.includes(item.toLowerCase())
          })
        });
        return resAry;
      }
      /* 如果关键字不包含逗号(单关键字查找) */
      else {
        return this.list.filter(item => {
          /* 不区分大小写 */
          let a = item.question.toLowerCase()
          return a.includes(this.keywords.toLowerCase())
        })
      }
    },

    /* 帮助 */
    showHelp() {
      alert(`
            软件说明:
              疫情原因,前端面试多改为线上,为了帮助同学们在线
              上面试可以快速找到原题,遂做此app.
              1.支持单关键字查询
              2.支持多关键字查询,多个关键字之间要以逗号隔开,
              如:数据,原理 会将题库中包含数据和原理的题目筛选
              出来

              作者:扫地小孩
              时间:2022.5.14
            `)
    },

    /* 点击类型按钮方法 */
    change(index) {
      this.selectindex = index;
      switch (index) {
        case 0:
          this.list = [...jsList, ...cssList, ...vueList];
          break;
        case 1:
          this.list = jsList;
          break;
        case 2:
          this.list = cssList;
          break;
        case 3:
          this.list = vueList;
          break;
        default:
          break;
      }
    },

  }
}