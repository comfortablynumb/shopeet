Backend.Viewport = Ext.extend(Ext.Viewport, {
    initComponent:  function()
                    {
                        Ext.apply(this, {
                            layout:     'border',
                            itemId:     'main',
                            items: [{
                            region:         'west',
                            width:          200,
                            layout:         {
                                type:           'vbox',
                                align:          'stretch',
                                padding:        5
                            },
                            title:          'Módulos',
                            split:          true,
                            collapsible:    true,
                            defaults:       { 
                                margins:        '0 0 5 0'
                            },
                            margins:        '5 0 5 5',
                            items:          [{
                                xtype:          'button',
                                text:           'Productos',
                                iconCls:        'backend-icon-bricks',
                                iconAlign:      'top'
                            }, {
                                xtype:          'button',
                                text:           'Servicios',
                                iconCls:        'backend-icon-star',
                                iconAlign:      'top'
                            }, {
                                xtype:          'button',
                                text:           'Clientes',
                                iconCls:        'backend-icon-group',
                                iconAlign:      'top'
                            }, {
                                xtype:          'button',
                                text:           'Páginas',
                                iconCls:        'backend-icon-page-white-text',
                                iconAlign:      'top'
                            }, {
                                xtype:          'button',
                                text:           'Informes',
                                iconCls:        'backend-icon-chart-pie',
                                iconAlign:      'top'
                            }, {
                                xtype:          'button',
                                text:           'Usuarios',
                                iconCls:        'backend-icon-user',
                                iconAlign:      'top'
                            }]
                        }, {
                            region:         'north',
                            margins:        '5 5 0 5',
                            height:         80,
                            bbar:           ['->',{
                                text:           'Vista Previa del Sitio',
                                iconCls:        'backend-icon-zoom',
                            }, {
                                text:           'Ayuda',
                                iconCls:        'backend-icon-information'
                            }, {
                                text:           'Cerrar Sesión',
                                iconCls:        'backend-icon-user-go'
                            }]
                        }, {
                            region:         'center',
                            xtype:          'tabpanel',
                            activeItem:     0,
                            defaults:       {
                                padding:        5
                            },
                            items:          [{
                                title:          'Bienvenida',
                                html:           '[TODO] Bienvenida'
                            }],
                            margins:        '5 5 5 0',
                        }, {
                            region:         'south',
                            height:         30,
                            margins:        '0 5 5 5',
                            html:           '<p id="backend-powered-by">Powered by <strong>ShopeetGroup</strong></p>'
                        }]
                    });

                    Backend.Viewport.superclass.initComponent.apply(this, arguments);
                }
});

