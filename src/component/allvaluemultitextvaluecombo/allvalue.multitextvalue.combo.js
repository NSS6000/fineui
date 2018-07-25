BI.AllValueMultiTextValueCombo = BI.inherit(BI.Widget, {

    props: {
        baseCls: "bi-all-value-multi-text-value-combo",
        width: 200,
        height: 30,
        items: []
    },

    render: function () {
        var self = this, o = this.options;
        return {
            type: "bi.search_multi_text_value_combo",
            text: o.text,
            height: o.height,
            items: o.items,
            value: o.value,
            valueFormatter: o.valueFormatter,
            listeners: [{
                eventName: BI.SearchMultiTextValueCombo.EVENT_CONFIRM,
                action: function () {
                    self.fireEvent(BI.AllValueMultiTextValueCombo.EVENT_CONFIRM);
                }
            }],
            ref: function () {
                self.combo = this;
            }
        };
    },

    setValue: function (v) {
        this.combo.setValue({
            type: BI.Selection.Multi,
            value: v || []
        });
    },

    getValue: function () {
        var obj = this.combo.getValue() || {};
        obj.value = obj.value || [];
        if(obj.type === BI.Selection.All) {
            var values = [];
            BI.each(this.options.items, function (idx, item) {
                !BI.contains(obj.value, item.value) && values.push(item.value);
            });
            return values;
        }
        return obj.value || [];
    },

    populate: function (items) {
        this.options.items = items;
        this.combo.populate.apply(this, arguments);
    }
});
BI.AllValueMultiTextValueCombo.EVENT_CONFIRM = "AllValueMultiTextValueCombo.EVENT_CONFIRM";
BI.shortcut("bi.all_value_multi_text_value_combo", BI.AllValueMultiTextValueCombo);