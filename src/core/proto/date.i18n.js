_global.$ && $(function () {
    // 牵扯到国际化这些常量在页面加载后再生效
    // full day names
    Date._DN = [BI.i18nText("BI-Basic_Sunday"),
        BI.i18nText("BI-Basic_Monday"),
        BI.i18nText("BI-Basic_Tuesday"),
        BI.i18nText("BI-Basic_Wednesday"),
        BI.i18nText("BI-Basic_Thursday"),
        BI.i18nText("BI-Basic_Friday"),
        BI.i18nText("BI-Basic_Saturday"),
        BI.i18nText("BI-Basic_Sunday")];

    // short day names
    Date._SDN = [BI.i18nText("BI-Basic_Simple_Sunday"),
        BI.i18nText("BI-Basic_Simple_Monday"),
        BI.i18nText("BI-Basic_Simple_Tuesday"),
        BI.i18nText("BI-Basic_Simple_Wednesday"),
        BI.i18nText("BI-Basic_Simple_Thursday"),
        BI.i18nText("BI-Basic_Simple_Friday"),
        BI.i18nText("BI-Basic_Simple_Saturday"),
        BI.i18nText("BI-Basic_Simple_Sunday")];

    // Monday first, etc.
    Date._FD = 1;

    // full month namesdat
    Date._MN = [
        BI.i18nText("BI-Basic_January"),
        BI.i18nText("BI-Basic_February"),
        BI.i18nText("BI-Basic_March"),
        BI.i18nText("BI-Basic_April"),
        BI.i18nText("BI-Basic_May"),
        BI.i18nText("BI-Basic_June"),
        BI.i18nText("BI-Basic_July"),
        BI.i18nText("BI-Basic_August"),
        BI.i18nText("BI-Basic_September"),
        BI.i18nText("BI-Basic_October"),
        BI.i18nText("BI-Basic_November"),
        BI.i18nText("BI-Basic_December")];

    // short month names
    Date._SMN = [0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11];

    Date._QN = ["", BI.i18nText("BI-Quarter_1"),
        BI.i18nText("BI-Quarter_2"),
        BI.i18nText("BI-Quarter_3"),
        BI.i18nText("BI-Quarter_4")];

    /** Adds the number of days array to the Date object. */
    Date._MD = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 实际上无论周几作为一周的第一天，周初周末都是在-6-0间做偏移，用一个数组就可以
    Date._OFFSET = [0, -1, -2, -3, -4, -5, -6];
});