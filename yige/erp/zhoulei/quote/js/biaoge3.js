        BUI.use(['bui/grid','bui/data'],function(Grid,Data){
            var Grid = Grid,
          Store = Data.Store,
          columns = [{
              title : '商品类型',
              dataIndex :'a',
              width:150
            },{
              title : '品牌',
              dataIndex :'b',
              width:120
            },{
              title : '商品ID',
              dataIndex : 'c',
              width:100
          },{
              title : 'UPC',
              dataIndex : 'd',
              width:120
          },{
              title : '货品名称',
              dataIndex : 'e',
              width:450
          },{
              title : '商品规格',
              dataIndex : 'f',
              width:150
          },{
              title : '销售单价',
              dataIndex : 'g',
              width:120
          },{
              title : '销售量',
              dataIndex : 'h',
              width:200
          },{
              title : '销售额',
              dataIndex : 'i',
              width:150
          },{
              title : '日均销售额',
              dataIndex : 'j',
              width:150
          },{
              title : '日均销售量',
              dataIndex : 'l',
              width:100
          },{
              title : '退货量',
              dataIndex : 'm',
              width:100
          },{
              title : '退货率',
              dataIndex : 'n',
              width:100
          },{
              title : '退货总额',
              dataIndex : 'o',
              width:100
          },{
              title : '平均成本',
              dataIndex : 'p',
              width:100
          },{
              title : '销售成本',
              dataIndex : 'q',
              width:100
          },{
              title : '销售平均毛利',
              dataIndex : 'r',
              width:100
          },{
              title : '销售毛利',
              dataIndex : 's',
              width:100
          },{
              title : '销售毛利率',
              dataIndex : 't',
              width:100
          },
		  ],
          data = [
		  {a:'护理用品/儿童 HL',b:'小林制药',c:'HL078501',d:'HL078501',e:'小林制药 退热贴 敏感肌肤 2岁以上粉色 12+4枚装',f:'',g:'￥26.00',h:'72',i:'￥1,872.00',j:'￥267.43',l:'10.29',m:'0',n:'0%',o:'￥0.00',p:'￥24.47',q:'￥1,761.84',r:'￥1.53',s:'￥110.16',t:'6%',},
          {a:'125487965',b:'9000',c:'80',d:'李益达',e:'18536987458',f:'阿里巴巴',g:'是',h:'128547854',i:'2016-03-24',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'126547854',b:'2000',c:'28',d:'郝博',e:'13988545214',f:'阿布才',g:'否',h:'125487874',i:'2016-03-29',j:'日本仓库',k:'否',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'125487984',b:'200',c:'10',d:'李铁蛋',e:'1389568447',f:'青木寨',g:'是',h:'125487898',i:'2016-03-29',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'125987458',b:'540',c:'25',d:'周先生',e:'1389875485',f:'1688',g:'是',h:'125487945',i:'2016-03-21',j:'大连仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'125487896',b:'480',c:'25',d:'李二毛',e:'1389874587',f:'青木寨',g:'是',h:'125984587',i:'2016-03-20',j:'日本仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
		  {a:'125987458',b:'540',c:'25',d:'周先生',e:'1389875485',f:'1688',g:'是',h:'125487945',i:'2016-03-21',j:'大连仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'125487896',b:'480',c:'25',d:'李二毛',e:'1389874587',f:'青木寨',g:'是',h:'125984587',i:'2016-03-20',j:'日本仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
          {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',l:'',m:'',n:'',o:'',p:'',q:'',r:'',s:'',t:'',u:''},
		  
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