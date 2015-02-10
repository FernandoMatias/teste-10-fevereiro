Ext.define('realPneus.view.clientesList', {
    extend: 'Ext.dataview.List',
    requires: [
	'Ext.data.Store',
	'Ext.List',
	'Ext.field.Search',
	'Ext.Toolbar',
	'realPneus.store.clientesStore'
    ],
    alias: 'widget.clientesList',
    config: {
	store: 'clientesStore',
	itemTpl: '{nome_cliente}',
	onItemDisclosure: true,
	//filters: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Clientes',
		items: [
		    {
			xtype: 'button',
			text: 'Voltar',
			height: 75,
			action: 'menuIniciar'
		    },
		    {
			xtype: 'searchfield',
			name: 'searchfield',
			placeHolder: 'Search'
		    }

		]
	    }
	]
    }
});
