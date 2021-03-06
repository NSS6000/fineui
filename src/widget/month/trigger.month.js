/**
 * 月份trigger
 *
 * Created by GUY on 2015/8/21.
 * @class BI.MonthTrigger
 * @extends BI.Trigger
 */
BI.MonthTrigger = BI.inherit(BI.Trigger, {
    _const: {
        hgap: 4,
        vgap: 2
    },

    _defaultConfig: function () {
        return BI.extend(BI.MonthTrigger.superclass._defaultConfig.apply(this, arguments), {
            extraCls: "bi-month-trigger bi-border",
            height: 24
        });
    },
    _init: function () {
        BI.MonthTrigger.superclass._init.apply(this, arguments);
        var self = this, o = this.options, c = this._const;
        this.editor = BI.createWidget({
            type: "bi.sign_editor",
            height: o.height,
            validationChecker: function (v) {
                return v === "" || (BI.isPositiveInteger(v) && v >= 1 && v <= 12);
            },
            quitChecker: function (v) {
                return false;
            },
            hgap: c.hgap,
            vgap: c.vgap,
            allowBlank: true,
            errorText: BI.i18nText("BI-Month_Trigger_Error_Text")
        });
        this.editor.on(BI.SignEditor.EVENT_FOCUS, function () {
            self.fireEvent(BI.MonthTrigger.EVENT_FOCUS);
        });
        this.editor.on(BI.SignEditor.EVENT_CHANGE, function () {
            self.fireEvent(BI.MonthTrigger.EVENT_CHANGE);
        });
        this.editor.on(BI.SignEditor.EVENT_CONFIRM, function () {
            var value = self.editor.getValue();
            if (BI.isNotNull(value)) {
                self.editor.setValue(value);
                self.editor.setTitle(value);
            }
            self.fireEvent(BI.MonthTrigger.EVENT_CONFIRM);
        });
        this.editor.on(BI.SignEditor.EVENT_SPACE, function () {
            if (self.editor.isValid()) {
                self.editor.blur();
            }
        });
        this.editor.on(BI.SignEditor.EVENT_START, function () {
            self.fireEvent(BI.MonthTrigger.EVENT_START);
        });
        this.editor.on(BI.SignEditor.EVENT_STOP, function () {
            self.fireEvent(BI.MonthTrigger.EVENT_STOP);
        });
        BI.createWidget({
            element: this,
            type: "bi.htape",
            items: [
                {
                    el: this.editor
                }, {
                    el: {
                        type: "bi.text_button",
                        text: BI.i18nText("BI-Multi_Date_Month"),
                        baseCls: "bi-trigger-month-text",
                        width: o.height
                    },
                    width: o.height
                }, {
                    el: {
                        type: "bi.trigger_icon_button",
                        width: o.height
                    },
                    width: o.height
                }
            ]
        });
        this.setValue(o.value);
    },
    setValue: function (v) {
        if(BI.isNotNull(v)) {
            this.editor.setState(v + 1);
            this.editor.setValue(v + 1);
            this.editor.setTitle(v + 1);
            return;
        }
        this.editor.setState("");
        this.editor.setValue("");
        this.editor.setTitle("");
    },
    getKey: function () {
        return this.editor.getValue() | 0;
    },
    getValue: function () {
        return this.editor.getValue() - 1;
    }
});
BI.MonthTrigger.EVENT_FOCUS = "EVENT_FOCUS";
BI.MonthTrigger.EVENT_CONFIRM = "EVENT_CONFIRM";
BI.MonthTrigger.EVENT_START = "EVENT_START";
BI.MonthTrigger.EVENT_STOP = "EVENT_STOP";
BI.MonthTrigger.EVENT_CHANGE = "EVENT_CHANGE";
BI.shortcut("bi.month_trigger", BI.MonthTrigger);