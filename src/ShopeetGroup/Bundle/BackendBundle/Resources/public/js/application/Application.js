Backend.Application = Ext.extend(Ext.util.Observable, {
    viewport:               null,
    
    init:                   function()
                            {
                                this.viewport = new Backend.Viewport();
                            }
});
