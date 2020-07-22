import * as loadData from "./Store/data";
import store from "./Store/store";
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        this.getMainData();
    },

    // called every frame
    update: function (dt) {

    },

    getMainData () {
        loadData.getMainData(store).then(res => {
            console.log(res);
            console.log(store.getState());
        })  
    }
});
