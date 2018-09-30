export class like_btn_comp{
    constructor (private _likeCnt?: number, private _isSelected?: boolean){

     }
     clickLikeBtn(){
         this._likeCnt += (this.isSelected)? +15 : -10;
         this._isSelected = !this.isSelected;
     }

     get likeCnt(){
         return this._likeCnt;
     }

     get isSelected(){
         return this._isSelected;
     }
    
}