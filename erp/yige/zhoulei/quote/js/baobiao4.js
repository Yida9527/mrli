        BUI.use(['bui/grid','bui/data'],function(Grid,Data){
            var Grid = Grid,
          Store = Data.Store,
          columns = [{
              title : '店铺',
              dataIndex :'a',
              width:150
            },{
              title : '日期',
              dataIndex :'b',
              width:160
            },{
              title : '销售单数',
              dataIndex : 'c',
              width:150
          },{
              title : '销售货品数',
              dataIndex : 'd',
              width:80
          },{
              title : '销售金额',
              dataIndex : 'e',
              width:100
          },{
              title : '售后单数',
              dataIndex : 'f',
              width:100
          },{
              title : '售后货品数',
              dataIndex : 'g',
              width:100
          },{
              title : '退款金额',
              dataIndex : 'h',
              width:100
          },{
              title : '合计金额',
              dataIndex : 'i',
              width:100
          },
		  ],
          data = [
		  {a:'所有店铺',b:'2016-03-20',c:'152',d:'2010',e:'￥52124',f:'0',g:'0',h:'￥0.00',i:'￥52124',},
          {a:'所有店铺',b:'2016-03-19',c:'120',d:'2104',e:'￥52454',f:'1',g:'2',h:'￥50.00',i:'￥52224',},
          {a:'所有店铺',b:'2016-03-18',c:'190',d:'2557',e:'￥82121',f:'0',g:'0',h:'￥0.00',i:'￥54534',},
          {a:'所有店铺',b:'2016-03-17',c:'200',d:'1900',e:'￥12354',f:'0',g:'0',h:'￥0.00',i:'￥26561',},
          {a:'所有店铺',b:'2016-03-16',c:'100',d:'1000',e:'￥52121',f:'0',g:'0',h:'￥0.00',i:'￥15144',},
          {a:'所有店铺',b:'2016-03-15',c:'500',d:'3000',e:'￥94512',f:'0',g:'0',h:'￥0.00',i:'￥12154',},
          {a:'所有店铺',b:'2016-03-14',c:'85',d:'2457',e:'￥12315',f:'0',g:'0',h:'￥0.00',i:'￥54212',},
		  {a:'所有店铺',b:'2016-03-13',c:'121',d:'1010',e:'￥52132',f:'0',g:'0',h:'￥0.00',i:'￥30110',},
          {a:'所有店铺',b:'2016-03-12',c:'152',d:'2010',e:'￥12321',f:'0',g:'0',h:'￥0.00',i:'￥75412',},
          {a:'所有店铺',b:'2016-03-11',c:'152',d:'2010',e:'￥84654',f:'0',g:'0',h:'￥0.00',i:'￥52124',},
          {a:'所有店铺',b:'2016-03-10',c:'152',d:'2010',e:'￥52124',f:'0',g:'0',h:'￥0.00',i:'￥52124',},
          {a:'所有店铺',b:'2016-03-09',c:'152',d:'2010',e:'￥52124',f:'0',g:'0',h:'￥0.00',i:'￥52124',},
          {a:'所有店铺',b:'2016-03-08',c:'152',d:'2010',e:'￥52124',f:'0',g:'0',h:'￥0.00',i:'￥52124',},
          {a:'所有店铺',b:'2016-03-07',c:'152',d:'2010',e:'￥52124',f:'0',g:'0',h:'￥0.00',i:'￥52124',},
		  
		  ];
 
          // 实例化 Grid.Plugins.Cascade 插件
        var cascade = new Grid.Plugins.Cascade({
  		    renderer : function(record){
  			    return '<div style="padding: 10px 20px;"><h2>订单详情</h2><p>' + record.detail + '</p></div>';
  		    }
        });
        var store = new Store({
            data : data,
            autoLoad:true,
			remoteSort : true,
			pageSize:10		
          }),
          grid = new Grid.Grid({
            render:'#grid',
            columns : columns,
            idField : 'a',
            store: store,
	          plugins: [cascade],
			  bbar:{
                // pagingBar:表明包含分页栏
				/*pagingBar: {
					xclass: 'pagingBar'					
				}*/
                pagingBar:true
            },	
			  	// Grid.Plugins.Cascade 插件
          });
 
        grid.render();
		grid.on('cellclick',function  (ev) {
          var record = ev.record, //点击行的记录
            field = ev.field, //点击对应列的dataIndex
            target = $(ev.domTarget); //点击的元素
			<!--分页-->
			 
        });
      });