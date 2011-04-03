Ext.define('Backend.Application', {
    extend:             'Ext.Application',
    
    autoInitViewport:   false,
    name:               'Shopeet',
    useLoadMask:        true,

    listeners:          {
        launch:             function(app)
                            {
                                new Backend.Viewport();
                            }
    }
});
