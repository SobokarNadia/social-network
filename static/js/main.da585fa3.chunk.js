(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{10:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1khVF",dialogs_items:"Dialogs_dialogs_items__17Xdj",item:"Dialogs_item__3xW2o",link:"Dialogs_link__wEvCc",userPhoto:"Dialogs_userPhoto__1q4cA",messages:"Dialogs_messages__1JN7S",incoming:"Dialogs_incoming__290FP",outgoing:"Dialogs_outgoing__1QXRv",inputArea:"Dialogs_inputArea__VbT0M",text:"Dialogs_text__11lZ-",sendButton:"Dialogs_sendButton__y8J_5"}},14:function(e,t,s){e.exports={userPage:"Users_userPage__QVCdd",userElement:"Users_userElement__aRz2_",head:"Users_head__1wSLE",img:"Users_img__2McIH",button:"Users_button__2UEY-",description:"Users_description__3SuFn",link:"Users_link__2j_kJ",pages:"Users_pages__33EFP",pageNumber:"Users_pageNumber__3ifV1",selectedPage:"Users_selectedPage__mLZdD"}},15:function(e,t,s){e.exports={post:"Post_post__3ydst",post_header:"Post_post_header__2e2qH",photo:"Post_photo__3_RzZ",info:"Post_info__2aA-n",name:"Post_name__3gP8l",date:"Post_date__3W91H",post_content:"Post_post_content__jTY9p",like:"Post_like__1arCR",likeButton:"Post_likeButton__3SdcO"}},20:function(e,t,s){e.exports={frienedsBlock:"Friends_frienedsBlock__2VccZ",title:"Friends_title__3bcBd",friends:"Friends_friends__GM0LD",friend:"Friends_friend__1Zoji",img:"Friends_img__qpRqO"}},22:function(e,t,s){e.exports={navbar:"Navbar_navbar__2SJ--",nav:"Navbar_nav__zewby",nav_link:"Navbar_nav_link__hVgpF",icon:"Navbar_icon__1tEDf"}},26:function(e,t,s){e.exports={myPosts:"MyPosts_myPosts__qqEEP",header:"MyPosts_header__2p83K",textarea:"MyPosts_textarea__36wY3",error:"MyPosts_error__2j5zs",button:"MyPosts_button__1h0yR"}},27:function(e,t,s){e.exports={header:"Header_header__1TGLg",logo:"Header_logo__2LFSC",logging:"Header_logging__2E-Eg",link:"Header_link__F5xKu"}},3:function(e,t,s){e.exports={content:"Profile_content__2CZi-",profileInfo:"Profile_profileInfo__1OM1A",header:"Profile_header__2hBrw",userImage:"Profile_userImage__rDdwm",editPhotoButton:"Profile_editPhotoButton__2k_ND",userName:"Profile_userName__6NdRq",status:"Profile_status__1mFwo",profileInformation:"Profile_profileInformation__1T4Q7",point:"Profile_point__Q5OaQ",name:"Profile_name__1i7hv",editInformationButton:"Profile_editInformationButton__2gpRa"}},50:function(e,t,s){e.exports={preloader:"Preloader_preloader__3f4h4"}},54:function(e,t,s){},6:function(e,t,s){e.exports={loginPage:"Login_loginPage__25UM_",logo:"Login_logo__FKZie",subhead:"Login_subhead__3Tnbn",loginForm:"Login_loginForm__3xQR5",input:"Login_input__3mVLA",error:"Login_error__27aGv",checkbox:"Login_checkbox__2SWgG",button:"Login_button__1s3FU",test:"Login_test__deNol"}},81:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),r=s.n(a),i=s(16),c=s(17),o=s(19),l=s(18),u=(s(54),s(5)),d=function(){return Object(n.jsx)("div",{children:"News"})},m=function(){return Object(n.jsx)("div",{children:"Music"})},g=function(){return Object(n.jsx)("div",{children:"Settings"})},b=s(4),j=s(25),p=s(2),f="ADD-MESSAGE",h={dialogsData:[{name:"Alisa",id:1,img:null},{name:"Kira",id:2,img:null},{name:"Sasha",id:3,img:null},{name:"Fedia",id:4,img:null},{name:"Nastia",id:5,img:null}],messagesData:[{id:1,message:"Hello",className:"incoming"},{id:2,message:"Hi",className:"outgoing"},{id:3,message:"Yo",className:"incoming"},{id:4,message:"Merhaba",className:"outgoing"},{id:5,message:"Bonjour",className:"incoming"},{id:6,message:"Hola",className:"outgoing"}],messageState:"Enter your text"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:if(t.message){var s={id:e.messagesData.length+1,message:t.message,className:"outgoing"};return Object(p.a)(Object(p.a)({},e),{},{messagesData:[].concat(Object(j.a)(e.messagesData),[s]),messageState:""})}return alert("Cannot send empty message!"),e;default:return e}},x=s(48),A=Object(x.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0===e.followed}))})),v=function(e){return e.usersPage.pageNumberUsers},N=function(e){return e.usersPage.totalNumberUsers},_=function(e){return e.usersPage.currentPage},P=function(e){return e.usersPage.isFetching},w=function(e){return e.usersPage.defaultUserImg},k=function(e){return e.usersPage.isFollowingProgress},S=function(e){return e.dialogsPage.dialogsData},I=function(e){return e.dialogsPage.messagesData},U=s(7),y=s(10),E=s.n(y),C=function(e){return Object(n.jsx)("div",{className:E.a.item,children:Object(n.jsxs)(U.b,{to:"/dialogs/".concat(e.id),className:E.a.link,children:[Object(n.jsx)("img",{className:E.a.userPhoto,src:e.img}),e.name]})})},B=function(e){return Object(n.jsx)("div",{className:E.a[e.className],children:e.text})},D=s(12),F=function(e){var t=e.dialogsData.map((function(t,s){return Object(n.jsx)(C,{name:t.name,id:t.id,img:t.img?t.img:e.defaultImg[s]},t.id)})),s=e.messagesData.map((function(e){return Object(n.jsx)(B,{className:e.className,text:e.message},e.id)}));return Object(n.jsxs)("div",{className:E.a.dialogs,children:[Object(n.jsx)("div",{className:E.a.dialogs_items,children:t}),Object(n.jsx)("div",{className:E.a.messages,children:s}),Object(n.jsx)("div",{className:E.a.inputArea,children:Object(n.jsx)(D.b,{onSubmit:function(t){console.log("dialogsData",t),e.sendMessage(t.messageArea)},render:function(e){var t=e.handleSubmit,s=e.pristine,a=e.submitting;return Object(n.jsxs)("form",{onSubmit:t,children:[Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{name:"messageArea",component:"textarea",className:E.a.text,placeholder:"Enter your message"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",className:E.a.sendButton,disabled:s||a,children:"SEND"})})]})}})})]})},L=function(e){return e.auth.isAuth},G=function(e){return e.auth.login},M=function(e){return e.auth.captchaUrl},T=function(e){return e.auth.errorMeassages},K=function(e){return e.auth.userId},Q=function(e){var t=function(t){Object(o.a)(a,t);var s=Object(l.a)(a);function a(){return Object(i.a)(this,a),s.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(n.jsx)(e,Object(p.a)({},this.props)):Object(n.jsx)(u.a,{to:"/login"})}}]),a}(r.a.Component);return Object(b.b)((function(e){return{isAuth:L(e)}}))(t)},R=s(8),Y=Object(R.d)(Object(b.b)((function(e){return{dialogsData:S(e),messagesData:I(e),defaultImg:w(e)}}),{sendMessage:function(e){return{type:f,message:e}}}),Q)(F),z=s.p+"static/media/userImg.9666fb5d.svg",J=(s.p,s.p,s.p,s.p,s.p,s.p,s(49).create({withCredentials:!0,headers:{"API-KEY":"93854a43-7e28-462a-b18c-260f0872e080"},baseURL:"https://social-network.samuraijs.com/api/1.0/"})),H=function(e,t){return J.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},V=function(e){return J.post("follow/".concat(e)).then((function(e){return e.data}))},W=function(e){return J.delete("follow/".concat(e)).then((function(e){return e.data}))},q=function(e){return J.get("profile/".concat(e)).then((function(e){return e.data}))},Z=function(e){return J.get("profile/status/".concat(e)).then((function(e){return e.data}))},X=function(e){return J.put("profile/status",{status:e})},$=function(){return J.get("auth/me").then((function(e){return e.data}))},ee=function(e,t,s,n){return J.post("auth/login",{email:e,password:t,rememberMe:s,captcha:n}).then((function(e){return e.data}))},te=function(){return J.delete("auth/login").then((function(e){return e.data}))},se=function(){return J.get("/security/get-captcha-url").then((function(e){return e.data}))},ne="FOLLOW-TOGGLE-SUCCES",ae="SET-USERS",re="CURRENT-PAGE",ie="TOTAL-USERS-NUMBER",ce="IS-FETCHING-TOGGLE",oe="IS-FOLLOWING-PROGRESS-TOGGLE",le={users:[],defaultUserImg:z,pageNumberUsers:100,totalNumberUsers:0,currentPage:1,isFetching:!0,isFollowingProgress:[]},ue=function(e){return{type:ne,id:e}},de=function(e){return{type:ie,number:e}},me=function(e){return{type:ce,isFetching:e}},ge=function(e,t){return{type:oe,isFetching:e,id:t}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{followed:!e.followed}):e}))});case ae:return Object(p.a)(Object(p.a)({},e),{},{users:Object(j.a)(t.users)});case re:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.pageNumber});case ie:return Object(p.a)(Object(p.a)({},e),{},{totalNumberUsers:t.number});case ce:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case oe:return Object(p.a)(Object(p.a)({},e),{},{isFollowingProgress:t.isFetching?[].concat(Object(j.a)(e.isFollowingProgress),[t.id]):e.isFollowingProgress.filter((function(e){return e!==t.id}))});default:return e}},je=s(14),pe=s.n(je),fe=function(e){for(var t=Math.ceil(e.totalNumberUsers/e.pageNumberUsers),s=[],a=1;a<=t;a++)s.push(a);return Object(n.jsxs)("div",{className:pe.a.userPage,children:[Object(n.jsx)("div",{className:pe.a.pages,children:s.map((function(t){return Object(n.jsx)("span",{onClick:function(){e.setCurrentPage(t)},className:e.currentPage===t?"".concat(pe.a.selectedPage," ").concat(pe.a.pageNumber):pe.a.pageNumber,children:t},t)}))}),e.users.map((function(t){var s=Math.floor(Math.random()*e.defaultUserImg.length);return Object(n.jsxs)("div",{className:pe.a.userElement,children:[Object(n.jsxs)("div",{className:pe.a.head,children:[Object(n.jsx)(U.b,{to:"/profile/".concat(t.id),children:Object(n.jsx)("img",{src:t.photos.small?t.photos.small:e.defaultUserImg[s],alt:"userIcon",className:pe.a.img})}),Object(n.jsx)("button",{className:pe.a.button,disabled:e.isFollowingProgress.some((function(e){return e===t.id})),onClick:function(){e.followToggle(t.id,t.followed)},children:t.followed?"UNFOLLOW":"FOLLOW"})]}),Object(n.jsxs)("div",{className:pe.a.description,children:[Object(n.jsx)(U.b,{to:"/profile/".concat(t.id),className:pe.a.link,children:t.name}),Object(n.jsx)("div",{children:t.status})]})]},t.id)}))]})},he=s.p+"static/media/preloader.8351813d.svg",Oe=s(50),xe=s.n(Oe),Ae=function(){return Object(n.jsx)("img",{src:he,className:xe.a.preloader})},ve=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).setCurrentPage=function(t){e.props.requestUsers(e.props.pageNumberUsers,t)},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.pageNumberUsers,this.props.currentPage)}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:this.props.isFetching?Object(n.jsx)(Ae,{}):Object(n.jsx)(fe,{totalNumberUsers:this.props.totalNumberUsers,pageNumberUsers:this.props.pageNumberUsers,currentPage:this.props.currentPage,users:this.props.users,defaultUserImg:this.props.defaultUserImg,isFollowingProgress:this.props.isFollowingProgress,followToggle:this.props.followToggle,setCurrentPage:this.setCurrentPage})})}}]),s}(r.a.Component),Ne=Object(R.d)(Object(b.b)((function(e){return{users:A(e),pageNumberUsers:v(e),totalNumberUsers:N(e),currentPage:_(e),isFetching:P(e),defaultUserImg:w(e),isFollowingProgress:k(e)}}),{totalUsersNumber:de,followToggle:function(e,t){return function(s){s(ge(!0,e)),t?(s(ge(!0,e)),W(e).then((function(t){0===t.resultCode&&s(ue(e)),s(ge(!1,e))}))):V(e).then((function(t){0===t.resultCode&&s(ue(e)),s(ge(!1,e))}))}},requestUsers:function(e,t){return function(s){s(me(!0)),s({type:re,pageNumber:t}),H(e,t).then((function(e){var t;s(me(!1)),s((t=e.items,{type:ae,users:t})),s(de(e.totalCount))}))}}}),Q)(ve),_e="ADD-POST",Pe="LIKES-COUNTER",we="SET-USER-PROFILE",ke="SET-PROFILE-STATUS",Se="UPDATE-PROFILE-STATUS",Ie={postData:[{id:1,message:"Hi! How are you?",likes:15},{id:2,message:"Soul is a wonderful cartoon",likes:5},{id:3,message:"Happy Christmas Eve, guys!",likes:20}],profile:null,status:null},Ue=function(e){return{type:ke,status:e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,s=JSON.parse(JSON.stringify(e));switch(t.type){case Pe:return s.postData[t.id-1].likes+=1,s;case _e:if(t.postText){var n={id:e.postData.length+1,message:t.postText,likes:0};return s.postData.push(n),s.postTxtState="",s}return alert("Cannot add empty post, write something ;)"),e;case we:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case ke:case Se:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});default:return e}},Ee=function(e){return e.profilePage.profile},Ce=function(e){return e.profilePage.status},Be=function(e){return e.profilePage.postData},De=s(26),Fe=s.n(De),Le=s(15),Ge=s.n(Le),Me=s.p+"static/media/like.6d75e006.svg",Te=function(e){var t=new Date;return Object(n.jsxs)("div",{className:Ge.a.post,children:[Object(n.jsxs)("div",{className:Ge.a.post_header,children:[Object(n.jsx)("img",{className:Ge.a.photo,src:void 0===e.profile?e.profile.photos.small:e.defaultUserImg}),Object(n.jsxs)("div",{className:Ge.a.info,children:[Object(n.jsx)("div",{className:Ge.a.name,children:void 0===e.profile?e.profile.fullName:"User Name"}),Object(n.jsx)("div",{className:Ge.a.date,children:"".concat(t.getDate(),".").concat(t.getMonth(),".").concat(t.getFullYear())})]})]}),Object(n.jsx)("div",{className:Ge.a.post_content,children:e.message}),Object(n.jsxs)("div",{className:Ge.a.like,children:[Object(n.jsx)("img",{src:Me,className:Ge.a.likeButton,onClick:function(){e.likesCounter(e.id)}}),e.likes]})]})},Ke=Object(b.b)((function(e,t){return{message:e.profilePage.postData[t.id-1].message,id:e.profilePage.postData[t.id-1].id,likes:e.profilePage.postData[t.id-1].likes,defaultUserImg:w(e),profile:Ee(e)}}),{likesCounter:function(e){return{type:Pe,id:e}}})(Te),Qe=function(e){var t=e.postData.map((function(e){return Object(n.jsx)(Ke,{id:e.id},e.id)}));return Object(n.jsxs)("div",{className:Fe.a.myPosts,children:[Object(n.jsx)("div",{className:Fe.a.header,children:"My Posts"}),Object(n.jsx)(D.b,{onSubmit:function(t){e.addPost(t.post)},render:function(e){var t=e.handleSubmit,s=e.pristine,a=e.submitting;return Object(n.jsxs)("form",{onSubmit:t,children:[Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{name:"post",placeholder:"Enter you post",component:"textarea",className:Fe.a.textarea})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",className:Fe.a.button,disabled:s||a,children:"Send"})})]})}}),t]})},Re=Object(b.b)((function(e){return{postData:Be(e)}}),{addPost:function(e){return{type:_e,postText:e}}})(Qe),Ye=s(3),ze=s.n(Ye),Je=s(36),He=function(e){var t=Object(a.useState)(!1),s=Object(Je.a)(t,2),r=s[0],i=s[1],c=Object(a.useState)(e.status),o=Object(Je.a)(c,2),l=o[0],u=o[1];return Object(n.jsx)(n.Fragment,{children:r?Object(n.jsx)("input",{value:l,autoFocus:!0,className:ze.a.status,onBlur:function(){i(!1),e.updateStatus(l)},onChange:function(e){u(e.currentTarget.value)}}):Object(n.jsxs)("div",{className:ze.a.status,onDoubleClick:function(){void 0===e.userId&&i(!0)},children:["Status: ",e.status||"No Satus"]})})},Ve=function(e){if(!e.profile)return Object(n.jsx)(Ae,{});Math.floor(Math.random()*e.defaultUserImg.length);return Object(n.jsxs)("div",{className:ze.a.profileInfo,children:[Object(n.jsxs)("div",{className:ze.a.header,children:[Object(n.jsx)("img",{className:ze.a.userImage,src:e.profile.photos.large||e.defaultUserImg}),Object(n.jsx)("div",{className:ze.a.editPhotoButton,children:"edit photo"}),Object(n.jsx)("div",{className:ze.a.userName,children:e.profile.fullName}),Object(n.jsx)(He,{status:e.status,userId:e.match.params.userId,updateStatus:e.updateProfileStatus})]}),Object(n.jsxs)("div",{className:ze.a.profileInformation,children:[Object(n.jsxs)("div",{className:ze.a.point,children:[Object(n.jsx)("div",{className:ze.a.name,children:"Instagram: "}),Object(n.jsx)("div",{className:ze.a.value,children:"nfkjbdsbdjb"})]}),Object(n.jsxs)("div",{className:ze.a.point,children:[Object(n.jsx)("div",{className:ze.a.name,children:"Facebook: "}),Object(n.jsx)("div",{className:ze.a.value,children:"nfkjbdsbdjb"})]}),Object(n.jsxs)("div",{className:ze.a.point,children:[Object(n.jsx)("div",{className:ze.a.name,children:"Twitter: "}),Object(n.jsx)("div",{className:ze.a.value,children:"nfkjbdsbdjb"})]}),Object(n.jsxs)("div",{className:ze.a.point,children:[Object(n.jsx)("div",{className:ze.a.name,children:"FindingJob: "}),Object(n.jsx)("div",{className:ze.a.value,children:"nfkjbdsbdjb"})]}),Object(n.jsx)("div",{className:ze.a.editInformationButton,children:"edit profile information"})]})]})},We=function(e){return Object(n.jsxs)("div",{className:ze.a.content,children:[Object(n.jsx)(Ve,Object(p.a)({},e)),Object(n.jsx)(Re,{})]})},qe=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.id),this.props.getUserProfile(e),this.props.getProfileStatus(e)}},{key:"render",value:function(){return Object(n.jsx)(We,Object(p.a)({},this.props))}}]),s}(r.a.Component),Ze=Object(R.d)(Object(b.b)((function(e){return{profile:Ee(e),id:K(e),defaultUserImg:w(e),status:Ce(e)}}),{getUserProfile:function(e){return function(t){q(e).then((function(e){return t({type:we,profile:e})}))}},getProfileStatus:function(e){return function(t){Z(e).then((function(e){return t(Ue(e))}))}},updateProfileStatus:function(e){return function(t){X(e).then((function(s){0===s.data.resultCode&&t(Ue(e))}))}}}),u.f,Q)(qe),Xe=s(20),$e=s.n(Xe),et=function(e){return Object(n.jsxs)("div",{className:$e.a.friend,children:[Object(n.jsx)("img",{src:e.img,alt:"",className:$e.a.img}),Object(n.jsx)("div",{children:e.name})]})},tt=function(e){var t=e.friendsData.map((function(e){if(e.id<4)return Object(n.jsx)(et,{name:e.name,img:e.img},e.id)}));return Object(n.jsxs)("div",{className:$e.a.frienedsBlock,children:[Object(n.jsx)("div",{className:$e.a.title,children:"Friends"}),Object(n.jsx)("div",{className:$e.a.friends,children:t})]})},st=function(e){return e.sidebarPage.friendsData},nt=function(e){return e.sidebarPage.sidebarElements},at=(Object(b.b)((function(e){return{friendsData:st(e)}}))(tt),s(22)),rt=s.n(at),it=function(e){var t={color:"#03007D"};return Object(n.jsxs)("div",{className:rt.a.navbar,children:[Object(n.jsx)("nav",{className:rt.a.nav,children:e.navbarElements.map((function(s){return Object(n.jsx)("div",{className:rt.a.nav_li,children:Object(n.jsxs)(U.b,{to:"/".concat(s.name.toLowerCase()),className:rt.a.nav_link,activeStyle:t,children:[Object(n.jsx)("img",{src:e.location.pathname.includes(s.name.toLowerCase())?s.selectedIconPath:s.iconPath,alt:"".concat(s.name,"Icon"),className:rt.a.icon}),s.name]})},s.id)}))}),Object(n.jsx)("img",{src:e.navbarElements[0].path})]})},ct=Object(u.f)(it),ot=Object(b.b)((function(e){return{navbarElements:nt(e)}}))(ct),lt=s(27),ut=s.n(lt),dt=function(e){return Object(n.jsxs)("header",{className:ut.a.header,children:[Object(n.jsx)("img",{className:ut.a.logo,src:"data:image/png;base64,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"}),Object(n.jsx)("div",{className:ut.a.logging,children:e.isAuth?Object(n.jsxs)("div",{children:[e.login," ",Object(n.jsx)("a",{href:"#",onClick:e.logout,children:"Log out"})]}):Object(n.jsx)(U.b,{to:"/login",className:ut.a.link,children:"Login"})})]})},mt="SET-USER-DATA",gt="SET-CAPTCHA",bt="SET-ERROR-MESSAGE",jt={userId:null,login:null,email:null,isAuth:!1,captchaUrl:null,errorMeassage:[]},pt=function(e,t,s,n){return{type:mt,data:{userId:e,login:t,email:s,isAuth:n}}},ft=function(e){return{type:bt,messages:e}},ht=function(){return function(e){return $().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.login,r=s.email;e(pt(n,a,r,!0))}else e(pt(null,null,null,!1))}))}},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case mt:return Object(p.a)(Object(p.a)({},e),t.data);case gt:return Object(p.a)(Object(p.a)({},e),{},{captchaUrl:t.url});case bt:return Object(p.a)(Object(p.a)({},e),{},{errorMeassages:t.messages});default:return e}},xt=Object(b.b)((function(e){return{isAuth:L(e),login:G(e)}}),{logout:function(){return function(e){te().then((function(t){console.log("loginResponse",t),0===t.resultCode?e(ht()):t.messages.map((function(e){return alert(e)}))}))}}})((function(e){return Object(n.jsx)(dt,Object(p.a)({},e))})),At=s.p+"static/media/logo_BIG.335f082e.svg",vt=s(6),Nt=s.n(vt),_t=function(e){return Object(n.jsx)(D.b,{onSubmit:function(t){var s=t.email,n=t.password,a=t.rememberMe,r=t.captcha;e.login(s,n,a,r)},initialValues:{rememberMe:!1},validate:function(e){var t={};return e.email||(t.email="Required"),e.password?(e.password.length<4||e.password.length>9)&&(t.password="Password should contain from 4 to 9 symbols"):t.password="Required",t},render:function(t){var s=t.handleSubmit,a=t.pristine,r=t.submitting;return Object(n.jsxs)("form",{onSubmit:s,className:Nt.a.loginForm,children:[Object(n.jsx)(D.a,{name:"email",children:function(e){var t=e.input,s=e.meta;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",Object(p.a)(Object(p.a)({},t),{},{placeholder:"Email",className:Nt.a.input})),s.error&&s.touched&&Object(n.jsx)("span",{className:Nt.a.error,children:s.error})]})}}),Object(n.jsx)(D.a,{name:"password",render:function(e){var t=e.input,s=e.meta;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",Object(p.a)(Object(p.a)({},t),{},{placeholder:"Password",type:"password",className:Nt.a.input})),s.error&&s.touched&&Object(n.jsx)("span",{className:Nt.a.error,children:s.error})]})}}),Object(n.jsxs)("div",{className:Nt.a.checkbox,children:[Object(n.jsx)(D.a,{name:"rememberMe",type:"checkbox",component:"input",className:Nt.a.checkbox_element}),Object(n.jsx)("label",{className:Nt.a.checkbox_label,children:"Remember me"})]}),e.captchaUrl?Object(n.jsxs)("div",{className:Nt.a.test,children:[Object(n.jsx)("img",{className:Nt.a.captcha,src:e.captchaUrl}),Object(n.jsx)(D.a,{name:"captcha",render:function(e){var t=e.input,s=e.meta;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",Object(p.a)({className:Nt.a.input},t)),s.touched&&s.error&&Object(n.jsx)("div",{className:Nt.a.error,children:s.error})]})}})]}):null,e.errorMeassages?Object(n.jsx)("div",{className:Nt.a.error,children:e.errorMeassages.map((function(e){return Object(n.jsx)("span",{children:e})}))}):null,Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",className:Nt.a.button,disabled:r||a,children:"LOG IN"})})]})}})},Pt=Object(b.b)((function(e){return{isAuth:L(e),captchaUrl:M(e),errorMeassages:T(e)}}),{login:function(e,t,s,n){return function(a){ee(e,t,s,n).then((function(e){console.log("loginResponse",e),0===e.resultCode?a(ht()):1===e.resultCode?a(ft(e.messages)):10===e.resultCode&&(se().then((function(e){var t;a((t=e.url,{type:gt,url:t}))})),a(ft(e.messages)))}))}}})((function(e){return e.isAuth?Object(n.jsx)(u.a,{to:"/profile"}):Object(n.jsxs)("div",{className:Nt.a.loginPage,children:[Object(n.jsx)("img",{src:At,className:Nt.a.logo}),Object(n.jsx)("div",{className:Nt.a.subhead,children:"We are glad to see you!"}),Object(n.jsx)(_t,Object(p.a)({},e))]})})),wt="SET-INITIALISING",kt={initialised:!1},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case wt:return Object(p.a)(Object(p.a)({},e),{},{initialised:!0});default:return e}},It=function(e){return e.app.initialised},Ut=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.props.initialisedApp()}},{key:"render",value:function(){return this.props.initialiseSuccess?Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(xt,{}),Object(n.jsx)(ot,{}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)(u.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(Ze,{})}}),Object(n.jsx)(u.b,{path:"/dialogs",render:function(){return Object(n.jsx)(Y,{})}}),Object(n.jsx)(u.b,{path:"/users",render:function(){return Object(n.jsx)(Ne,{})}}),Object(n.jsx)(u.b,{path:"/news",component:d}),Object(n.jsx)(u.b,{path:"/music",component:m}),Object(n.jsx)(u.b,{path:"/settings",component:g}),Object(n.jsx)(u.b,{path:"/login",component:Pt})]})]}):Object(n.jsx)(Ae,{})}}]),s}(r.a.Component),yt=Object(R.d)(u.f,Object(b.b)((function(e){return{initialiseSuccess:It(e)}}),{initialisedApp:function(){return function(e){e(ht()).then((function(){return e({type:wt})}))}}}))(Ut),Et=(s(81),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,83)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))}),Ct=s.p+"static/media/profileIcon.96e01825.svg",Bt=s.p+"static/media/dialogsIcon.6c4195ab.svg",Dt=s.p+"static/media/usersIcon.95fb99cc.svg",Ft=s.p+"static/media/newsIcon.52816a4b.svg",Lt=s.p+"static/media/musicIcon.ade37987.svg",Gt=s.p+"static/media/settingsIcon.dbb2f72a.svg",Mt={friendsData:[{name:"Alisa",id:1,img:"https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png"},{name:"Kira",id:2,img:"https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart-thumbnail.jpg"},{name:"Sasha",id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"},{name:"Fedia",id:4,img:"https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png"},{name:"Nastia",id:5,img:"https://p1.hiclipart.com/preview/57/433/160/user-profile-circle-user-account-data-login-symbol-blackandwhite-line-art-png-clipart-thumbnail.jpg"},{name:"Samira",id:6,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Font_Awesome_5_solid_user-circle.svg/1200px-Font_Awesome_5_solid_user-circle.svg.png"},{name:"Inna",id:7,img:"https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png"}],sidebarElements:[{id:1,name:"Profile",selectedIconPath:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJUSURBVHgBrVY9WttAEH0jmbQoN1BOAClTYecE3AD7BHE6ChPLmCKdnRMYynS+ASJVujgnwNxARTosbd5q1hCDpKzB7/v2037r2XnztzMWeGFwHEI+cXPIFXFlXAuuqxzjy//dluafT+MQezNu2g1Cyxz3HeDrsk4gQDPBtSUwVATkvRzhW1ou9svznp7DyZ3GdZpqPQlxZj3oGphFgRYtTbLnUkkUoLgWGBvGlAZ0tiApvbi1lhYILcEStUiiEPktNxHJOitcpE8lKsMVoNV1FqTNBCVJRm+/2V2BoF2trwICOdCvuYIHRCsNLmx+JICJsAVyLWmLfW8S5uJOv0UMD/ANxSpvfnuTCIrUXT+BF8yJ3pOFN0mON3NoCNoBzvpoQIAv7ARSvqW611+TE/smTE+tw4SKhnUETPbUyY1Qg8a20sIgMZA1wZIrZdzvAsg+Le9C+5gN02iF86ReTy36Eeve0NLMKYu5umILdVPQvpOltpXq/lXpiQtD4pRbpRkF59aLx4tywPNDUfK1p6OqvMhzguGE1eWSbVIb66pWsQZD2tbQiaswTFcYf64lYSXNpGyK1nLDrnsxhyfYULv8TKDeX9Kj3uNvDwSDIUPQd03xg8H5T2wBgx8Lg4/fadwxDW0LR5DBzc0/nmjXtTvOivcs4QVeiD0khwXyX6pcu3Kg7rRmeiij1xBY3PM+C2Sk3mn5y+bsGL/DTrA5Y4LN2bErlDOmHBN2xgRUfqQkfrPDF8zD3Ok94l7KQbPCn1fl4ilWaK31xTbxbkBNM+wUD3884r9wodTo7uml/gAAAABJRU5ErkJggg==",iconPath:Ct},{id:2,name:"Dialogs",selectedIconPath:s.p+"static/media/dialogsSelectedIcon.f9268724.svg",iconPath:Bt},{id:3,name:"Users",selectedIconPath:s.p+"static/media/usersSelectedIcon.662cc991.svg",iconPath:Dt},{id:4,name:"News",selectedIconPath:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH4SURBVHgBxZXdddNAEIXvSoI3DuoAUQGmAkwFKBWQVGDnjQcnx+AcXkMqsKkApQJUgqkAleC8JtFO7mrlZKU41iq/3znyWtLM3tnZ0awCxnGIN8cAUl4x+lMI1ELjx/e7DFSIgznHXUAyAf6hJwrqE4chr70Ss8VGI4oIrwwPIMDB/21zROZHIMtacC42KgdZBcD+JY5ybOeLEXP9KJ+ZNEaN6WoBBeT1o4R3Q0GZ2CAmKfN/7LicaMx+1b6F41f7yjTAoYra4RhD5nbP3k2GIUWcd4xOCse8cN4VN34WZuaPgoxuiWyjTlnua89tOGNhxJtEYrMC8ydA8KFKxHVkE5a5GjnTnJQ46iyaTSIpU5SuY7EEKzuqWKpcr1EJPGiIaIQ7Ic4HbaMSr3M7Vt/BAj1prWS6LIElHpmGCKthl5uVwJMQOrvAz86gWiuRr8op2S5K695PhJXyGU9AgGcgaioejviFDnydafvbo6c1RejEPgVvEfYxczTkXXatPZnt4Al4sT1JfZ2Z2tN1q+8hot9rqASe2NbfjRFZ8QN8Z25YKWMOY/RGrQQ6vh2EemtG7kl19DJF3xLcG33KCQdRfURYqvlMpebqFaYDjfIv7NKX8ExBi9gGWpHVc6TmoGBn/6js82kS4nKOHn1rG1JtgbCjR/ums18B4kSc0QRnG4AAAAAASUVORK5CYII=",iconPath:Ft},{id:5,name:"Music",selectedIconPath:s.p+"static/media/musicSelectedIcon.398198fd.svg",iconPath:Lt},{id:6,name:"Settings",selectedIconPath:s.p+"static/media/settingsSelectedIcon.ef86fbb3.svg",iconPath:Gt}]},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Kt=s(51),Qt=Object(R.c)({profilePage:ye,dialogsPage:O,sidebarPage:Tt,usersPage:be,auth:Ot,app:St}),Rt=Object(R.e)(Qt,Object(R.a)(Kt.a)),Yt=s(29);s.n(Yt).a.render(Object(n.jsx)(U.a,{children:Object(n.jsx)(b.a,{store:Rt,children:Object(n.jsx)(yt,{})})}),document.getElementById("root")),window.store=Rt,Et()}},[[82,1,2]]]);
//# sourceMappingURL=main.da585fa3.chunk.js.map