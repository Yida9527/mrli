BUI.use(['bui/grid','bui/data'],function(Grid,Data){
            var Store = Data.Store,
          columns = [
            {title : '商品编号',dataIndex :'a', width:120},
            {id: '123',title : '商品名称',dataIndex :'b', width:400},
			{title : 'UPC',dataIndex : 'c',width:120},
            {title : '商品分类',dataIndex : 'd',width:100},
			{title : '商品销售价',dataIndex : 'e',width:80},
			{title : '商品成本价',dataIndex : 'f',width:80},
			{title : '商品状态',dataIndex : 'g',width:80},
			{title : '商品图片',dataIndex : 'h',width:100},
			{title : '体积',dataIndex : 'i',width:80},
			{title : '重量（克g）',dataIndex : 'j',width:80},
			{title : '库存',dataIndex : 'k',width:80},
          ],
          data = [
		  		  {a:'032JPH0Bb490001',b:'BROS保乐士 贝壳粉 100g',c:'032JPH0Bb490001',d:'厨房用品',e:'30',f:'20',g:'上架',h:'无',i:'19cm³',j:'400g',k:'200'},
		  		  {a:'4903301186403',b:'LION狮王 White White牙膏 150g',c:'4903301186403',d:'洗漱用品',e:'8',f:'5',g:'上架',h:'无',i:'29cm³',j:'300g',k:'9000'},
		          {a:'032JPB65b030005',b:'贝印 靓丽清新修眉刀 3支装',c:'032JPB65b030005',d:'美妆个护',e:'12',f:'8',g:'上架不展示',h:'无',i:'22cm³',j:'100g',k:'521'},
				  {a:'4560147175291',b:'盛田屋 豆腐面膜 150g',c:'4560147175291',d:'美妆个护',e:'69',f:'40',g:'下架',h:'无',i:'10cm³',j:'300g',k:'90'},
				  {a:'4987244145055',b:'和光堂婴儿敏感肌爽身粉140g附粉扑',c:'4987244145055',d:'婴儿护肤',e:'40',f:'32',g:'上架',h:'无',i:'15cm³',j:'200g',k:'821'},
				  {a:'032JPH0D4610001',b:'VAPE未来驱蚊手环套装 金色携带式 240小时',c:'032JPH0D4610001',d:'健康护理',e:'50',f:'29',g:'上架',h:'无',i:'8cm³',j:'125g',k:'10'},
				  {a:'4560314703227',b:'Reveur 无硅洗发水(染烫发质适用)400ml',c:'4560314703227',d:'洗发护发',e:'39',f:'25',g:'上架',h:'无',i:'20cm³',j:'700g',k:'231'},
				  {a:'032JPC429330003',b:'HAKUBAKU面条 日本进口儿童面条 黄金大地宝宝营养素面条(不含食盐) 300g',c:'032JPC429330003',d:'幼儿食品',e:'18',f:'10',g:'上架',h:'无',i:'10cm³',j:'200g',k:'213'},
				  {a:'032JPH0Bb490001',b:'BROS保乐士 贝壳粉 100g',c:'032JPH0Bb490001',d:'厨房用品',e:'30',f:'20',g:'上架',h:'无',i:'19cm³',j:'400g',k:'200'},
		  		  {a:'4903301186403',b:'LION狮王 White White牙膏 150g',c:'4903301186403',d:'洗漱用品',e:'8',f:'5',g:'上架',h:'无',i:'29cm³',j:'300g',k:'9000'},
				  {a:'032JPH0Bb490001',b:'BROS保乐士 贝壳粉 100g',c:'032JPH0Bb490001',d:'厨房用品',e:'30',f:'20',g:'上架',h:'无',i:'19cm³',j:'400g',k:'200'},
		  		  {a:'4903301186403',b:'LION狮王 White White牙膏 150g',c:'4903301186403',d:'洗漱用品',e:'8',f:'5',g:'上架',h:'无',i:'29cm³',j:'300g',k:'9000'},
		          {a:'032JPB65b030005',b:'贝印 靓丽清新修眉刀 3支装',c:'032JPB65b030005',d:'美妆个护',e:'12',f:'8',g:'上架不展示',h:'无',i:'22cm³',j:'100g',k:'521'},
				  {a:'4560147175291',b:'盛田屋 豆腐面膜 150g',c:'4560147175291',d:'美妆个护',e:'69',f:'40',g:'下架',h:'无',i:'10cm³',j:'300g',k:'90'},
				  {a:'4560314703227',b:'Reveur 无硅洗发水(染烫发质适用)400ml',c:'4560314703227',d:'洗发护发',e:'39',f:'25',g:'上架',h:'无',i:'20cm³',j:'700g',k:'231'},
				  {a:'032JPC429330003',b:'HAKUBAKU面条 日本进口儿童面条 黄金大地宝宝营养素面条(不含食盐) 300g',c:'032JPC429330003',d:'幼儿食品',e:'18',f:'10',g:'上架',h:'无',i:'10cm³',j:'200g',k:'213'},
				  {a:'032JPH0Bb490001',b:'BROS保乐士 贝壳粉 100g',c:'032JPH0Bb490001',d:'厨房用品',e:'30',f:'20',g:'上架',h:'无',i:'19cm³',j:'400g',k:'200'},
		  		  {a:'4903301186403',b:'LION狮王 White White牙膏 150g',c:'4903301186403',d:'洗漱用品',e:'8',f:'5',g:'上架',h:'无',i:'29cm³',j:'300g',k:'9000'},
				  {a:'4987244145055',b:'和光堂婴儿敏感肌爽身粉140g附粉扑',c:'4987244145055',d:'婴儿护肤',e:'40',f:'32',g:'上架',h:'无',i:'15cm³',j:'200g',k:'821'},
				  {a:'032JPH0D4610001',b:'VAPE未来驱蚊手环套装 金色携带式 240小时',c:'032JPH0D4610001',d:'健康护理',e:'50',f:'29',g:'上架',h:'无',i:'8cm³',j:'125g',k:'10'},
				  {a:'4560314703227',b:'Reveur 无硅洗发水(染烫发质适用)400ml',c:'4560314703227',d:'洗发护发',e:'39',f:'25',g:'上架',h:'无',i:'20cm³',j:'700g',k:'231'},
				  {a:'032JPC429330003',b:'HAKUBAKU面条 日本进口儿童面条 黄金大地宝宝营养素面条(不含食盐) 300g',c:'032JPC429330003',d:'幼儿食品',e:'18',f:'10',g:'上架',h:'无',i:'10cm³',j:'200g',k:'213'},
				  {a:'032JPH0Bb490001',b:'BROS保乐士 贝壳粉 100g',c:'032JPH0Bb490001',d:'厨房用品',e:'30',f:'20',g:'上架',h:'无',i:'19cm³',j:'400g',k:'200'},
		  		  {a:'4903301186403',b:'LION狮王 White White牙膏 150g',c:'4903301186403',d:'洗漱用品',e:'8',f:'5',g:'上架',h:'无',i:'29cm³',j:'300g',k:'9000'},
				  {a:'032JPH0Bb490001',b:'BROS保乐士 贝壳粉 100g',c:'032JPH0Bb490001',d:'厨房用品',e:'30',f:'20',g:'上架',h:'无',i:'19cm³',j:'400g',k:'200'},
		  		  {a:'4903301186403',b:'LION狮王 White White牙膏 150g',c:'4903301186403',d:'洗漱用品',e:'8',f:'5',g:'上架',h:'无',i:'29cm³',j:'300g',k:'9000'},
		          {a:'032JPB65b030005',b:'贝印 靓丽清新修眉刀 3支装',c:'032JPB65b030005',d:'美妆个护',e:'12',f:'8',g:'上架不展示',h:'无',i:'22cm³',j:'100g',k:'521'},
				  {a:'4560147175291',b:'盛田屋 豆腐面膜 150g',c:'4560147175291',d:'美妆个护',e:'69',f:'40',g:'下架',h:'无',i:'10cm³',j:'300g',k:'90'},
				  {a:'4987244145055',b:'和光堂婴儿敏感肌爽身粉140g附粉扑',c:'4987244145055',d:'婴儿护肤',e:'40',f:'32',g:'上架',h:'无',i:'15cm³',j:'200g',k:'821'},
				  {a:'032JPH0D4610001',b:'VAPE未来驱蚊手环套装 金色携带式 240小时',c:'032JPH0D4610001',d:'健康护理',e:'50',f:'29',g:'上架',h:'无',i:'8cm³',j:'125g',k:'10'},
		          ];
 
        var store = new Store({
            data : data,
			autoLoad:true,
            remoteSort : true,
			pageSize:10		// 需要在store中 配置pageSize
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