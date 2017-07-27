/**
 * Created by Urthur on 2017/7/18.
 */
Demo.CustomDateTime = BI.inherit(BI.Widget, {
    props: {},
    render: function () {
        var self = this;
        return {
            type: "bi.absolute",
            items: [{
                el: {
                    type: "bi.custom_date_time_combo",
                    ref: function (_ref) {
                        self.customDateTime = _ref;
                        self.customDateTime.on(BI.CustomDateTimeCombo.EVENT_CONFIRM, function () {
                            BI.Msg.alert("日期", this.getValue().text);
                        });
                        self.customDateTime.on(BI.CustomDateTimeCombo.EVENT_CANCEL, function () {
                            BI.Msg.alert("日期", this.getValue().text);
                        });
                    }
                },
                top: 200,
                left: 200
            }]
        };
    }
});
BI.shortcut("demo.custom_date_time", Demo.CustomDateTime);