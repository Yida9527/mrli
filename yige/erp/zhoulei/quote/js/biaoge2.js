        BUI.use(['bui/grid','bui/data'],function(Grid,Data){
            var Grid = Grid,
          Store = Data.Store,
          columns = [{
              title : '订单ID',
              dataIndex :'a',
              width:150
            },{
              title : '订单总额',
              dataIndex :'b',
              width:120
            },{
              title : '运费',
              dataIndex : 'c',
              width:100
          },{
              title : '收件人',
              dataIndex : 'd',
              width:120
          },{
              title : '电话',
              dataIndex : 'e',
              width:150
          },{
              title : '订单所属',
              dataIndex : 'f',
              width:150
          },{
              title : '是否成功',
              dataIndex : 'g',
              width:120
          },{
              title : '商家订单号',
              dataIndex : 'h',
              width:200
          },{
              title : '下单时间',
              dataIndex : 'i',
              width:150
          },{
              title : '发货仓库',
              dataIndex : 'j',
              width:150
          },{
              title : '运单是否打印',
              dataIndex : 'k',
              width:100
          }
		  
		  ],
          data = [
		  {a:'125987458',b:'500',c:'40',d:'周栋梁',e:'186244203698',f:'大连意格',g:'否',h:'125847589',i:'2016-03-25',j:'大连仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号:125987458</p><p>商品金额:￥380</p><p>物流费用:￥40</p><p>税金:￥80</p><p>订单总金额:￥500</p><p>是否支付完成:是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：9535987458</p><p>商品重量:500g</p><p>发货仓库：大连仓</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:周栋梁</p><p>收货人电话：186244203698</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：大连意格</p></div>'},
          {a:'125487965',b:'9000',c:'80',d:'李益达',e:'18536987458',f:'阿里巴巴',g:'是',h:'128547854',i:'2016-03-24',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号:125487965</p><p>商品金额:￥8000</p><p>物流费用:￥80</p><p>税金:￥920</p><p>订单总金额:￥9000</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：9535987458</p><p>商品重量:5000g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李益达</p><p>收货人电话：18536987458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：阿里巴巴</p></div>'},
          {a:'126547854',b:'2000',c:'28',d:'郝博',e:'13988545214',f:'阿布才',g:'否',h:'125487874',i:'2016-03-29',j:'日本仓库',k:'否',detail:'<div style="float:left; margin-left:100px"><p>订单编号：126547854</p><p>商品金额:￥1500</p><p>物流费用:￥28</p><p>税金:￥472</p><p>订单总金额:￥2000</p><p>是否支付完成：否</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：</p><p>商品重量:5000g</p><p>发货仓库：</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李益达</p><p>收货人电话：13988545214</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：阿布才</p></div>'},
          {a:'125487984',b:'200',c:'10',d:'李铁蛋',e:'1389568447',f:'青木寨',g:'是',h:'125487898',i:'2016-03-29',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125487984</p><p>商品金额:￥180</p><p>物流费用:￥10</p><p>税金:￥10</p><p>订单总金额:￥200</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李铁蛋</p><p>收货人电话：1389568447</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：青木寨</p></div>'},
          {a:'125987458',b:'540',c:'25',d:'周先生',e:'1389875485',f:'1688',g:'是',h:'125487945',i:'2016-03-21',j:'大连仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987458</p><p>商品金额:￥500</p><p>物流费用:￥25</p><p>税金:￥15</p><p>订单总金额:￥540</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：大连仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:周先生</p><p>收货人电话：1389568447</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：1688</p></div>'},
          {a:'125487896',b:'480',c:'25',d:'李二毛',e:'1389874587',f:'青木寨',g:'是',h:'125984587',i:'2016-03-20',j:'日本仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号125487896</p><p>商品金额:￥450</p><p>物流费用:￥25</p><p>税金:￥5</p><p>订单总金额:￥450</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：日本仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李二毛</p><p>收货人电话：1389874587</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：青木寨</p></div>'},
          {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987158</p><p>商品金额:￥500</p><p>物流费用:￥30</p><p>税金:￥60</p><p>订单总金额:￥590</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李一毛</p><p>收货人电话：1386587458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：小妈悠悠</p></div>'},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987158</p><p>商品金额:￥500</p><p>物流费用:￥30</p><p>税金:￥60</p><p>订单总金额:￥590</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李一毛</p><p>收货人电话：1386587458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：小妈悠悠</p></div>'},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987158</p><p>商品金额:￥500</p><p>物流费用:￥30</p><p>税金:￥60</p><p>订单总金额:￥590</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李一毛</p><p>收货人电话：1386587458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：小妈悠悠</p></div>'},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987158</p><p>商品金额:￥500</p><p>物流费用:￥30</p><p>税金:￥60</p><p>订单总金额:￥590</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李一毛</p><p>收货人电话：1386587458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：小妈悠悠</p></div>'},
		  {a:'125987458',b:'540',c:'25',d:'周先生',e:'1389875485',f:'1688',g:'是',h:'125487945',i:'2016-03-21',j:'大连仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987458</p><p>商品金额:￥500</p><p>物流费用:￥25</p><p>税金:￥15</p><p>订单总金额:￥540</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：大连仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:周先生</p><p>收货人电话：1389568447</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：1688</p></div>'},
          {a:'125487896',b:'480',c:'25',d:'李二毛',e:'1389874587',f:'青木寨',g:'是',h:'125984587',i:'2016-03-20',j:'日本仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号125487896</p><p>商品金额:￥450</p><p>物流费用:￥25</p><p>税金:￥5</p><p>订单总金额:￥450</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：日本仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李二毛</p><p>收货人电话：1389874587</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：青木寨</p></div>'},
          {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987158</p><p>商品金额:￥500</p><p>物流费用:￥30</p><p>税金:￥60</p><p>订单总金额:￥590</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李一毛</p><p>收货人电话：1386587458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：小妈悠悠</p></div>'},
		  {a:'125987158',b:'590',c:'30',d:'李一毛',e:'1386587458',f:'小妈悠悠',g:'是',h:'12598451',i:'2016-03-19',j:'上海仓库',k:'是',detail:'<div style="float:left; margin-left:100px"><p>订单编号：125987158</p><p>商品金额:￥500</p><p>物流费用:￥30</p><p>税金:￥60</p><p>订单总金额:￥590</p><p>是否支付完成：是</p></div><div style="float:left; margin-left:100px"><p>物流公司:顺丰快递</p><p>物流单号：1258745874</p><p>商品重量:500g</p><p>发货仓库：上海仓库</p></div><div style="float:left; margin-left:100px"><p>下单时间：2016-03-25</p><p>收货人姓名:李一毛</p><p>收货人电话：1386587458</p><p>收货地址：大连市沙河口区数码路北段</p><p>订单所属：小妈悠悠</p></div>'},
		  
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