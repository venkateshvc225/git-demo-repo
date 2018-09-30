"use strict";
exports.__esModule = true;
var like_btn_comp_1 = require("./like_btn_comp");
var component = new like_btn_comp_1.like_btn_comp(0, true);
component.clickLikeBtn();
console.log("likes count: " + component.likeCnt + " IsSelected " + component.isSelected);
