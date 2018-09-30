import { like_btn_comp } from './like_btn_comp';

let component = new like_btn_comp(10,true);
component.clickLikeBtn();
console.log("hello");
console.log(`likes count: ${component.likeCnt }, IsSelected ${component.isSelected}`);
