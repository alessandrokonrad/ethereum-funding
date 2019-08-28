(window["webpackJsonpreact-app"]=window["webpackJsonpreact-app"]||[]).push([[0],{137:function(t,e,n){t.exports={Button:"UniqeButton_Button__1soDM"}},138:function(t,e,n){t.exports={Input:"UniqeInput_Input__1qZr6"}},141:function(t,e,n){t.exports=n(334)},146:function(t,e,n){},159:function(t,e){},180:function(t,e){},182:function(t,e){},23:function(t,e,n){t.exports={bg:"App_bg__WEWg5",card:"App_card__IS6Ed",container:"App_container__24Zvo",back:"App_back__1wT8u",front:"App_front__ibrIy"}},247:function(t,e){},294:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=294},334:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n.n(a),o=n(133),u=n.n(o),c=(n(146),n(11)),i=n.n(c),s=n(22),l=n(134),p=n(135),d=n(139),m=n(136),f=n(140),h=n(23),w=n.n(h),b=n(137),y=n.n(b),g=function(t){return r.a.createElement("button",{className:y.a.Button,onClick:t.onClick},t.children)},v=n(138),x=n.n(v),E=function(t){return r.a.createElement("form",null,r.a.createElement("input",{style:{width:t.width,height:t.height},className:x.a.Input,type:"text",value:t.value,onChange:t.onChange,placeholder:t.placeholder,onFocus:function(t){return t.target.placeholder=""},onBlur:function(e){return e.target.placeholder="".concat(t.placeholder)}}))},k=[{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"changeTotalAmount",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"fund",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"getFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[],name:"currentAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],A=n(44),_=n.n(A),M=new _.a(window.web3.currentProvider),N=new M.eth.Contract(k,"0x218a7f73492434039e0b17fd0927a7b8c0875f3c"),O={total:function(){var t=Object(s.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.methods.totalAmount().call(function(t,e){return e});case 2:return e=t.sent,t.abrupt("return",M.utils.fromWei(e,"ether"));case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),fund:function(t){var e=M.utils.toWei(t.toString(),"ether");N.methods.fund(e).send({from:window.ethereum.selectedAddress,value:e,gas:3e6}).then(function(){return console.log("Successfully funded!")})},current:function(){var t=Object(s.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.methods.currentAmount().call(function(t,e){return e});case 2:return e=t.sent,t.abrupt("return",M.utils.fromWei(e,"ether"));case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),changeTotal:function(t){var e=M.utils.toWei(t.toString(),"ether");N.methods.changeTotalAmount(e).send({from:window.ethereum.selectedAddress,gas:3e6}).then(function(){return console.log("Successfully changed total amount!")})},selfDestruct:function(){N.methods.getFunds().send({from:window.ethereum.selectedAddress,gas:3e6}).then(function(){return console.log("Successfully destructed contract!")})},checkMetaMask:function(){window.addEventListener("load",Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=11;break}return window.web3=new _.a(window.ethereum),t.prev=2,t.next=5,window.ethereum.enable();case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:t.next=12;break;case 11:window.web3?window.web3=new _.a(M.currentProvider):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");case 12:case"end":return t.stop()}},t,null,[[2,7]])})))}},C=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(m.a)(e).call(this,t))).state={ratio:0,amount:"",name:"",currentAmount:0,totalAmount:1},n}return Object(f.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:w.a.bg},r.a.createElement("div",{className:w.a.card,style:{width:"50%",height:"50%"}},r.a.createElement("h1",null,"Crowd funding"),r.a.createElement("div",{className:w.a.container},r.a.createElement("div",{style:{width:"60%",flex:3,marginLeft:"20px"}},r.a.createElement("h3",null,this.state.currentAmount.toLocaleString("de-DE")," ETH raised of"," ",this.state.totalAmount.toLocaleString("de-DE")," ETH"),r.a.createElement("div",{className:w.a.back},r.a.createElement("div",{className:w.a.front,style:{width:"".concat(this.state.ratio,"%")}}))),r.a.createElement("div",{style:{flex:1}}),r.a.createElement("div",{style:{marginTop:"40px",flex:2}},r.a.createElement(E,{onChange:function(e){return t.setState({amount:e.target.value})},value:this.state.amount,placeholder:"Amount",height:"30px",width:"150px"}),r.a.createElement("div",{style:{marginTop:"15px"}}),r.a.createElement(E,{onChange:function(e){return t.setState({name:e.target.value})},value:this.state.name,placeholder:"Name (optional)",height:"30px",width:"150px"}),r.a.createElement("div",{style:{marginTop:"20px"}}),r.a.createElement(g,{onClick:function(){isNaN(Number(t.state.amount))||""===t.state.amount||O.fund(t.state.amount)}},"Fund")))))}},{key:"getAmount",value:function(){var t=Object(s.a)(i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.current();case 2:return e=t.sent,t.next=5,O.total();case 5:n=t.sent,console.log(e),console.log(n),this.setState({ratio:e/n*100,currentAmount:e,totalAmount:n}),console.log(this.state.ratio);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){O.checkMetaMask(),this.getAmount()}}]),e}(r.a.Component);u.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.22a51a16.chunk.js.map