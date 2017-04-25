
BUI.use(['bui/grid','bui/data'],function(Grid,Data){
            var Grid = Grid,
				Store = Data.Store,
          columns = [
            {title : '商品编号',dataIndex :'goodid', width:120},
            {id: '123',title : '商品名称',dataIndex :'goodname', width:80},
			{title : 'UPC',dataIndex : 'goodcode',width:80},
            {title : '商品分类',dataIndex : 'thirdtype',width:80},
			{title : '商品销售价',dataIndex : 'price',width:80},
			{title : '商品成本价',dataIndex : 'cost',width:100},
			{title : '商品状态',dataIndex : 'state',width:100},
			{title : '商品图片',dataIndex : 'photo',width:100},
			{title : '体积',dataIndex : 'volume',width:100},
			{title : '重量（克g）',dataIndex : 'weight',width:120},
			{title : '库存',dataIndex : 'inventory',width:120},
          ];
        var store = new Store({
			url : 'searchall.php',
					proxy : {//设置请求相关的参数
						method : 'post',
						dataType : 'json', //返回数据的类型
						limitParam : 'pageSize', //一页多少条记录
						pageIndexParam : 'pageNum', //页码
						startParam : 'startNum' //起始记录

					},
			autoLoad:true, //自动加载数据
			pageSize:20	// 配置分页数目
          }),
          grid = new Grid.Grid({
            render:'#grid',
            forceFit : true,
            columns : columns,
            store : store,
			 // 底部工具栏
            bbar:{
                // pagingBar:表明包含分页栏
				/*pagingBar: {
					xclass: 'pagingBar'					
				}*/
                pagingBar:true
            },	
          });
 
        grid.render();
 
        grid.on('cellclick',function  (ev) {
          var record = ev.record, //点击行的记录
            field = ev.field, //点击对应列的dataIndex
            target = $(ev.domTarget); //点击的元素
			<!--分页-->
			 
        });
      });// JavaScript Document