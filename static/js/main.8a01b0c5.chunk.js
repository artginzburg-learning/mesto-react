(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"a":"Art Ginzburg"}')},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(19),n(4)),s=n.n(o),u=n(2),l=n(10),d=n(7),p=n(3),b=n(13);function m(e,t){var n=function(e,t){var n,a;return n={},(a={})[e]=a[e]||{},a[e].get=function(){return localStorage[e]?JSON.parse(localStorage[e]):t},a[e]=a[e]||{},a[e].set=function(t){return localStorage[e]=JSON.stringify(t)},Object(b.a)(n,a),n}(e,t),a=r.a.useState(n[e]),c=Object(p.a)(a,2),i=c[0],o=c[1];return r.a.useEffect((function(){n[e]=i}),[i,n,e]),[i,o]}var h=n(8),j=n(9),f="mesto.nomoreparties.co",_="https://",v="v1",O=new(function(){function e(t){var n=this;Object(h.a)(this,e),this._handleFetch=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this.editProfile=function(e){var t=e.name,a=e.about;return n._customFetch("users/me","PATCH",{name:t,about:a})},this.addCard=function(e,t){return n._customFetch("cards","POST",{name:e,link:t})},this.deleteCard=function(e){return n._customFetch("cards/".concat(e),"DELETE")},this.changeLikeCardStatus=function(e,t){return n._customFetch("cards/likes/".concat(e),t?"PUT":"DELETE")},this.updateAvatar=function(e){var t=e.avatar;return n._customFetch("users/me/avatar","PATCH",{avatar:t})},this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"_customFetch",value:function(e,t,n){var a={headers:this._headers};return t&&"GET"!==t&&(a.method=t,"DELETE"!==t&&(a.headers["Content-Type"]="application/json")),n&&(a.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),a).then(this._handleFetch)}},{key:"getUserInfo",value:function(){return this._customFetch("users/me")}},{key:"getInitialCards",value:function(){return this._customFetch("cards")}}]),e}())({baseUrl:"".concat(_).concat(f,"/").concat(v,"/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}}),x="popup__close-button",g={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},C=n(0),k={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c",avatar:""},y=r.a.createContext(),S=r.a.createContext();function E(e){var t=e.children,n=m("currentUser",k),a=Object(p.a)(n,2),c=a[0],i=a[1];return r.a.useEffect((function(){O.getUserInfo().then(i)}),[i]),Object(C.jsx)(y.Provider,{value:c,children:Object(C.jsx)(S.Provider,{value:i,children:t})})}function N(){var e=r.a.useContext(y);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function L(){var e=r.a.useContext(S);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}function w(e,t,n,a){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(s.a.mark((function e(t,n,a,r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.a)(Object(u.a)({},n),a)),e.prev=1,e.next=4,O[r](a);case 4:c=e.sent,t(c),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),t(n),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var T=n.p+"static/media/logo.6fa47d29.svg";var F=function(){return Object(C.jsx)("header",{className:"header",children:Object(C.jsx)("a",{target:"_self",href:"https://github.com/artginzburg/mesto-react",className:"logo header__logo",children:Object(C.jsx)("img",{className:"logo__img",alt:"Mesto",src:T})})})};var U=function(e){var t,n=e.card;n.likes=null!==(t=n.likes)&&void 0!==t?t:[];var a=N();n.isTemporarilyLocal&&(n.owner=a);var r="element__trash-button"+(n.owner._id===a._id?" element__trash-button_visible":""),c="element__like-button"+(n.likes.some((function(e){return e._id===a._id}))?" element__like-button_active":"");return Object(C.jsxs)("li",{className:"element",children:[Object(C.jsx)("img",{onClick:function(){e.onCardClick(n)},className:"element__image",alt:n.name,src:n.link}),Object(C.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardDelete(n)},type:"reset",className:r}),Object(C.jsxs)("div",{className:"element__container",children:[Object(C.jsx)("h2",{className:"element__title",children:n.name}),Object(C.jsxs)("div",{className:"element__likes",children:[Object(C.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardLike(n)},type:"button",className:c}),Object(C.jsx)("p",{className:"element__like-counter",children:n.likes.length})]})]})]})};function I(e){var t=N();return Object(C.jsxs)("main",{className:"content",children:[Object(C.jsxs)("section",{className:"profile",children:[Object(C.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__avatar-container",children:Object(C.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar})}),Object(C.jsxs)("div",{className:"profile__info",children:[Object(C.jsx)("h1",{className:"profile__name",children:t.name}),Object(C.jsx)("p",{className:"profile__description",children:t.about}),Object(C.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(C.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(C.jsx)("section",{className:"elements",children:Object(C.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){var n;return Object(C.jsx)(U,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},null!==(n=t._id)&&void 0!==n?n:Math.random())}))})})]})}var A=n(14);var D=function(){return Object(C.jsx)("footer",{className:"footer",children:Object(C.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/artginzburg",className:"footer__copyright",children:["\xa9 2021 ",A.a]})})};var q=function(e){var t;return Object(C.jsx)("section",{onClick:e.onClose,className:"popup"+(e.isOpen?" popup_opened":""),id:e.name,children:Object(C.jsxs)("div",{className:"popup__container",children:[Object(C.jsx)("button",{type:"reset",className:x}),Object(C.jsx)("h2",{className:"popup__title",children:e.title}),Object(C.jsxs)("form",{onSubmit:function(t){e.onSubmit&&(t.preventDefault(),e.onSubmit()),e.children&&t.target.reset(),e.onSubmit&&document.activeElement.blur()},className:"popup__form",action:"#",children:[e.children,Object(C.jsx)("button",{type:"submit",className:"popup__button",children:null!==(t=e.buttonTitle)&&void 0!==t?t:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})},B=r.a.forwardRef((function(e,t){var n,a,r,c="text",i=null!==(n=e.type)&&void 0!==n?n:c,o=i===c?2:null,s=null===(a=e.required)||void 0===a||a;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("input",Object(u.a)(Object(u.a)({},e),{},{ref:t,className:"popup__input",type:i,minLength:null!==(r=e.minLength)&&void 0!==r?r:o,required:s})),Object(C.jsx)("p",{className:"popup__error",id:"".concat(e.id,"-error")})]})}));function J(e){var t=r.a.useState(""),n=Object(p.a)(t,2),a=n[0],c=n[1],i=r.a.useState(""),o=Object(p.a)(i,2),s=o[0],l=o[1],d=N(),b=L();return r.a.useEffect((function(){c(d.name),l(d.about)}),[d]),Object(C.jsxs)(q,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(){w(b,d,{name:a,about:s},"editProfile"),e.onUpdateUser()},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-editor",children:[Object(C.jsx)(B,{value:a,onChange:function(e){c(e.target.value)},autoComplete:"name",autoCapitalize:"words",name:"name",id:"profile-name",placeholder:"\u0418\u043c\u044f",maxLength:"40"}),Object(C.jsx)(B,{value:s,onChange:function(e){l(e.target.value)},name:"about",id:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"200"})]}))}function z(e){var t=Object(a.createRef)(),n=N(),r=L();return Object(C.jsx)(q,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(){w(r,n,{avatar:t.current.value},"updateAvatar"),e.onUpdateAvatar()},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-editor",children:Object(C.jsx)(B,{ref:t,type:"url",name:"avatar",id:"profile-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})}))}function H(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),s=o[0],l=o[1];return Object(C.jsxs)(q,Object(u.a)(Object(u.a)({},e),{},{onReset:function(){c(""),l("")},onSubmit:function(){e.onAddPlace(r,s)},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element-editor",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(C.jsx)(B,{value:r,onChange:function(e){c(e.target.value)},name:"title",id:"element-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30"}),Object(C.jsx)(B,{value:s,onChange:function(e){l(e.target.value)},type:"url",name:"link",id:"element-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]}))}function M(e){return Object(C.jsx)(q,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(){e.onCardDelete(e.card)},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirmation",buttonTitle:"\u0414\u0430"}))}var V=function(e){var t=e.card;return Object(C.jsx)("section",{onClick:e.onClose,className:"popup popup_type_image"+(e.isOpen?" popup_opened":""),id:"image-viewer",children:Object(C.jsxs)("figure",{className:"popup__figure",children:[Object(C.jsx)("button",{type:"button",className:"".concat(x," ").concat(x,"_parent-corners_straight")}),Object(C.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(C.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})};function R(){var e=r.a.useState(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(p.a)(c,2),o=i[0],b=i[1],h=r.a.useState(!1),j=Object(p.a)(h,2),f=j[0],_=j[1],v=r.a.useState(!1),g=Object(p.a)(v,2),k=g[0],y=g[1],S=r.a.useState(!1),E=Object(p.a)(S,2),L=E[0],w=E[1],P=r.a.useState({}),T=Object(p.a)(P,2),U=T[0],A=T[1],q=m("cards",[]),B=Object(p.a)(q,2),R=B[0],G=B[1],K=N();function Q(){return(Q=Object(d.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R,a=t.likes.some((function(e){return e._id===K._id})),r=a?t.likes.filter((function(e){return e._id!==K._id})):[].concat(Object(l.a)(t.likes),[K]),c=Object(u.a)(Object(u.a)({},t),{},{likes:r}),G(R.map((function(e){return e._id===t._id?c:e}))),e.prev=5,e.next=8,O.changeLikeCardStatus(t._id,!a);case 8:i=e.sent,G(R.map((function(e){return e._id===t._id?i:e}))),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(5),G(n),e.t0;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function W(){_(!1),a(!1),b(!1),y(!1),w(!1)}function X(e){(e.target===e.currentTarget||e.target.classList.contains(x))&&W()}r.a.useEffect((function(){O.getInitialCards().then(G)}),[G]);var Y=W,Z=W;var $=r.a.useCallback((function(e){"Escape"===e.key&&W()}),[]);return r.a.useEffect((function(){var e,t=["keydown",$,!1];return(e=document).addEventListener.apply(e,t),function(){var e;return(e=document).removeEventListener.apply(e,t)}}),[$]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(F,{}),Object(C.jsx)(I,{onEditProfile:function(){a(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){_(!0)},cards:R,onCardClick:function(e){A(e),w(!0)},onCardLike:function(e){return Q.apply(this,arguments)},onCardDelete:function(e){A(e),y(!0)}}),Object(C.jsx)(D,{}),Object(C.jsx)(J,{onUpdateUser:Y,isOpen:n,onClose:X}),Object(C.jsx)(H,{onAddPlace:function(e,t){var n=R;G([{isTemporarilyLocal:!0,name:e,link:t}].concat(Object(l.a)(R))),O.addCard(e,t).then((function(e){return G([e].concat(Object(l.a)(R)))})).catch((function(){return G(n)})),W()},isOpen:o,onClose:X}),Object(C.jsx)(z,{onUpdateAvatar:Z,isOpen:f,onClose:X}),Object(C.jsx)(M,{card:U,onCardDelete:function(e){var t=R;G(R.filter((function(t){return t._id!==e._id}))),O.deleteCard(e._id).catch((function(e){throw G(t),e})),W()},isOpen:k,onClose:X}),Object(C.jsx)(V,{card:U,isOpen:L,onClose:X})]})}var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},K=function(){function e(t,n){var a=this;Object(h.a)(this,e),this._showInputError=function(e,t){var n=a._element.querySelector("#".concat(e.id,"-error"));e.classList.add(a._data.inputErrorClass),n.textContent=t,n.classList.add(a._data.errorClass)},this._hideInputError=function(e){var t=a._element.querySelector("#".concat(e.id,"-error"));e.classList.remove(a._data.inputErrorClass),t.classList.remove(a._data.errorClass),t.textContent=""},this._resetFormErrors=function(){a._inputList.forEach((function(e){return a._hideInputError(e)})),a._toggleButtonState(1)},this._checkInputValidity=function(e){return e.validity.valid?a._hideInputError(e):a._showInputError(e,e.validationMessage)},this._hasInvalidInput=function(e){return e.some((function(e){return!e.validity.valid}))},this._toggleButtonState=function(e){return a._buttonElement.disabled=e||a._hasInvalidInput(a._inputList)},this._validationHandler=function(e){a._checkInputValidity(e),a._toggleButtonState()},this._setListeners=function(){a._element.addEventListener("reset",a._resetFormErrors),a._inputList.forEach((function(e){return e.addEventListener("input",(function(){return a._validationHandler(e)}))}))},this._data=t,this._element=n,this._inputList=Array.from(this._element.querySelectorAll(this._data.inputSelector)),this._buttonElement=this._element.querySelector(this._data.submitButtonSelector)}return Object(j.a)(e,[{key:"enableValidation",value:function(){this._toggleButtonState(),this._setListeners()}}]),e}(),Q=["#element-editor","#avatar-editor","#profile-editor"];i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(E,{children:Object(C.jsx)(R,{})})}),document.getElementById("root")),Q.forEach((function(e){new K(g,document.querySelector(e).querySelector(g.formSelector)).enableValidation()})),G()}},[[22,1,2]]]);
//# sourceMappingURL=main.8a01b0c5.chunk.js.map