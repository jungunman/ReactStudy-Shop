import { useState } from 'react';
const serverData = [{
    id : 0,
    title : "둘이 먹다가 한명이 죽으면 신고해야지",
    content : "올 겨울엔 보일러 대신 간식",
    price : 120000,
    count : 1,
    src : "/img/product1.jpg"
  },

  {
    id : 1,
    title : "깃허브 친환경 맞춤선물 제작해드려요",
    content : "근데 제작자 마음대로 맞춤해드려요",
    price : 110000,
    count : 1,
    src : "/img/product2.jpg"
  },

  {
    id : 2,
    title : "가장 맛있는 트레저 팝콘! 남자아이돌은 누구?",
    content : "이게 팝콘인가? 라면인가?",
    price : 130000,
    count : 1,
    src : "/img/product3.png"
  }]
export default serverData;

//여러개 export
// const b = 100;
// export {serverData,b}
