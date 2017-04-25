        BUI.use(['bui/grid','bui/data'],function(Grid,Data){
            var Grid = Grid,
          Store = Data.Store,
          columns = [{
              title : '店铺',
              dataIndex :'a',
              width:150
            },{
              title : '订单号',
              dataIndex :'b',
              width:160
            },{
              title : '销售号',
              dataIndex : 'c',
              width:150
          },{
              title : '货品总数',
              dataIndex : 'd',
              width:80
          },{
              title : '商品总额',
              dataIndex : 'e',
              width:100
          },{
              title : '商品销售额',
              dataIndex : 'f',
              width:100
          },{
              title : '优惠额',
              dataIndex : 'g',
              width:100
          },{
              title : '物流费用',
              dataIndex : 'h',
              width:100
          },{
              title : '销售价',
              dataIndex : 'i',
              width:100
          },{
              title : '商品成本',
              dataIndex : 'j',
              width:100
          },{
              title : '毛利',
              dataIndex : 'l',
              width:100
          },{
              title : '毛利率',
              dataIndex : 'm',
              width:100
          },{
              title : '订单创建时间',
              dataIndex : 'n',
              width:150
          },{
              title : '订单付款时间',
              dataIndex : 'o',
              width:150
          },{
              title : '订单发货时间',
              dataIndex : 'p',
              width:150          },{
              title : '仓库',
              dataIndex : 'q',
              width:130
          },{
              title : '附加费',
              dataIndex : 'r',
              width:100
          },{
              title : '物流单号',
              dataIndex : 's',
              width:150
          },
		  ],
          data = [
		  {a:'青木寨',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥580.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'小妈悠悠',b:'201602021454878',c:'S2016040520125474',d:'5',e:'16',f:'￥599.47',g:'0.00',h:'0.00',i:'￥600.47',j:'￥577.70',l:'￥16.23',m:'8%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'唐家代购',b:'20160202140587',c:'587421558787',d:'9',e:'2',f:'￥900',g:'0.00',h:'0.00',i:'￥900',j:'￥800',l:'￥100',m:'10%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'大连仓库',r:'￥0.00',s:'04050918',},
          {a:'阿布才',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥560.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'李家铺子',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥560.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'POISON优选',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥560.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'天津仓库',r:'￥0.00',s:'04050918',},
          {a:'益达之家',b:'20160202140098',c:'S201604052009875',d:'8',e:'98',f:'￥52.15',g:'0.00',h:'0.00',i:'￥52.00',j:'￥58.00',l:'￥6.00',m:'10%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'日本仓库',r:'￥0.00',s:'04050918',},
		  {a:'青木寨',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥580.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'小妈悠悠',b:'201602021454878',c:'S2016040520125474',d:'5',e:'16',f:'￥599.47',g:'0.00',h:'0.00',i:'￥600.47',j:'￥577.70',l:'￥16.23',m:'8%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'唐家代购',b:'20160202140587',c:'587421558787',d:'9',e:'2',f:'￥900',g:'0.00',h:'0.00',i:'￥900',j:'￥800',l:'￥100',m:'10%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'大连仓库',r:'￥0.00',s:'04050918',},
          {a:'阿布才',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥560.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'李家铺子',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥560.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'上海仓库',r:'￥0.00',s:'04050918',},
          {a:'POISON优选',b:'20160202140016',c:'S201604052000001',d:'4',e:'12',f:'￥560.47',g:'0.00',h:'0.00',i:'￥590.47',j:'￥577.70',l:'￥17.23',m:'3%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'天津仓库',r:'￥0.00',s:'04050918',},
          {a:'益达之家',b:'20160202140098',c:'S201604052009875',d:'8',e:'98',f:'￥52.15',g:'0.00',h:'0.00',i:'￥52.00',j:'￥58.00',l:'￥6.00',m:'10%',n:'2016-02-29 11:57:00',o:'2016-03-10 13:53:42',p:'2016-04-05 09:21:19',q:'日本仓库',r:'￥0.00',s:'04050918',},
		  
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