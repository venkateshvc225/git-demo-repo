"use strict";
exports.__esModule = true;
var like_btn_comp = /** @class */ (function () {
    function like_btn_comp(likeCnt, isSelected) {
        this.likeCnt = likeCnt;
        this.isSelected = isSelected;
    }
    like_btn_comp.prototype.clickLikeBtn = function () {
        //  if(this.isSelected){
        //      this.isSelected = false;
        //      this.likeCnt--;
        //  }else{
        //      this.isSelected = true;
        //      this.likeCnt++;
        //  }
        //can be written as
        this.likeCnt += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    };
    return like_btn_comp;
}());
exports.like_btn_comp = like_btn_comp;
