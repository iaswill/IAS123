Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{ html:'My First IAS123 App Version 2!'}, {xtype: 'rallyiterationcombobox'}],
    launch: function() {
        //Write app code here
            console.log('Our First Version Has Arrived! v2');
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
        
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(store, data, success) {
                    console.log('Got Data!', store, data, success);//process data
                }
            },
            fetch: ['Name', 'ScheduleState']
        });

    }
});
