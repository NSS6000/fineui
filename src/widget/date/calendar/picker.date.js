/**
 * Created by GUY on 2015/9/7.
 * @class BI.DatePicker
 * @extends BI.Widget
 */
BI.DatePicker = BI.inherit(BI.Widget, {
    _defaultConfig: function () {
        var conf = BI.DatePicker.superclass._defaultConfig.apply(this, arguments);
        return BI.extend(conf, {
            baseCls: "bi-date-picker",
            height: 40,
            min: "1900-01-01", // 最小日期
            max: "2099-12-31" // 最大日期
        });
    },

    _init: function () {
        BI.DatePicker.superclass._init.apply(this, arguments);
        var self = this, o = this.options;
        this._year = BI.getDate().getFullYear();
        this._month = BI.getDate().getMonth() + 1;
        this.left = BI.createWidget({
            type: "bi.icon_button",
            cls: "pre-page-h-font",
            width: 24,
            height: 24
        });
        this.left.on(BI.IconButton.EVENT_CHANGE, function () {
            if (self._month === 1) {
                self.setValue({
                    year: self.year.getValue() - 1,
                    month: 12
                });
            } else {
                self.setValue({
                    year: self.year.getValue(),
                    month: self.month.getValue() - 1
                });
            }
            self.fireEvent(BI.DatePicker.EVENT_CHANGE);
            self._checkLeftValid();
            self._checkRightValid();
        });

        this.right = BI.createWidget({
            type: "bi.icon_button",
            cls: "next-page-h-font",
            width: 24,
            height: 24
        });

        this.right.on(BI.IconButton.EVENT_CHANGE, function () {
            if (self._month === 12) {
                self.setValue({
                    year: self.year.getValue() + 1,
                    month: 1
                });
            } else {
                self.setValue({
                    year: self.year.getValue(),
                    month: self.month.getValue() + 1
                });
            }
            self.fireEvent(BI.DatePicker.EVENT_CHANGE);
            self._checkLeftValid();
            self._checkRightValid();
        });

        this.year = BI.createWidget({
            type: "bi.year_date_combo",
            behaviors: o.behaviors,
            min: o.min,
            max: o.max
        });
        this.year.on(BI.YearDateCombo.EVENT_CHANGE, function () {
            self.setValue({
                year: self.year.getValue(),
                month: self.month.getValue()
            });
            self.fireEvent(BI.DatePicker.EVENT_CHANGE);
        });
        this.month = BI.createWidget({
            type: "bi.month_date_combo",
            behaviors: o.behaviors
        });
        this.month.on(BI.MonthDateCombo.EVENT_CHANGE, function () {
            self.setValue({
                year: self.year.getValue(),
                month: self.month.getValue()
            });
            self.fireEvent(BI.DatePicker.EVENT_CHANGE);
        });

        BI.createWidget({
            type: "bi.htape",
            element: this,
            items: [{
                el: {
                    type: "bi.center_adapt",
                    items: [this.left]
                },
                width: 24
            }, {
                type: "bi.center_adapt",
                items: [{
                    el: {
                        type: "bi.horizontal",
                        width: 120,
                        rgap: 10,
                        items: [{
                            el: this.year,
                            lgap: 10
                        }, this.month]
                    }
                }]
            }, {
                el: {
                    type: "bi.center_adapt",
                    items: [this.right]
                },
                width: 24
            }]
        });
        this.setValue({
            year: this._year,
            month: this._month
        });
    },

    _checkLeftValid: function () {
        var o = this.options;
        var valid = !(this._month === 1 && this._year === BI.parseDateTime(o.min, "%Y-%X-%d").getFullYear());
        this.left.setEnable(valid);
        return valid;
    },

    _checkRightValid: function () {
        var o = this.options;
        var valid = !(this._month === 12 && this._year === BI.parseDateTime(o.max, "%Y-%X-%d").getFullYear());
        this.right.setEnable(valid);
        return valid;
    },



    setValue: function (ob) {
        this._year = ob.year;
        this._month = ob.month;
        this.year.setValue(ob.year);
        this.month.setValue(ob.month);
        this._checkLeftValid();
        this._checkRightValid();
    },

    getValue: function () {
        return {
            year: this.year.getValue(),
            month: this.month.getValue()
        };
    }
});
BI.DatePicker.EVENT_CHANGE = "EVENT_CHANGE";
BI.shortcut("bi.date_picker", BI.DatePicker);