"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[560],{6560:(D,d,l)=>{l.r(d),l.d(d,{RegisterComponent:()=>M});var c=l(6814),i=l(95),e=l(4769),f=l(9410),v=l(1120);function h(r,s){if(1&r&&(e.TgZ(0,"div",28),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.hij(" ",o.msgError," ")}}function Z(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Name is required "),e.qZA())}function b(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Min length 3 "),e.qZA())}function T(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Max length 20 "),e.qZA())}function w(r,s){if(1&r&&(e.TgZ(0,"div",29),e.YNc(1,Z,2,0,"p",30),e.YNc(2,b,2,0,"p",30),e.YNc(3,T,2,0,"p",30),e.qZA()),2&r){const o=e.oxw();let n,t,a;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("name"))?null:t.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(a=o.registerForm.get("name"))?null:a.getError("maxlength"))}}function x(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Email is required "),e.qZA())}function A(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Email is invalid "),e.qZA())}function q(r,s){if(1&r&&(e.TgZ(0,"div",29),e.YNc(1,x,2,0,"p",30),e.YNc(2,A,2,0,"p",30),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("email"))?null:t.getError("email"))}}function E(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Password is required "),e.qZA())}function C(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Start with capital letter then from 5 to 8 numbers or small letters "),e.qZA())}function I(r,s){if(1&r&&(e.TgZ(0,"div",29),e.YNc(1,E,2,0,"p",30),e.YNc(2,C,2,0,"p",30),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("password"))?null:t.getError("pattern"))}}function R(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Re-password is required "),e.qZA())}function F(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Start with capital letter then from 5 to 8 numbers or small letters "),e.qZA())}function P(r,s){if(1&r&&(e.TgZ(0,"div",29),e.YNc(1,R,2,0,"p",30),e.YNc(2,F,2,0,"p",30),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("rePassword"))?null:t.getError("mismatch"))}}function U(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Phone is required "),e.qZA())}function N(r,s){1&r&&(e.TgZ(0,"p",31),e._uU(1," Enter valid egyptian phone number "),e.qZA())}function J(r,s){if(1&r&&(e.TgZ(0,"div",29),e.YNc(1,U,2,0,"p",30),e.YNc(2,N,2,0,"p",30),e.qZA()),2&r){const o=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=o.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=o.registerForm.get("phone"))?null:t.getError("pattern"))}}function Y(r,s){1&r&&(e.TgZ(0,"span"),e._UZ(1,"i",32),e.qZA())}let M=(()=>{class r{constructor(o,n,t){this._AuthService=o,this._Router=n,this._FormBuilder=t,this.msgError="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(20)]],email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[A-Z][a-z0-9]{5,8}$/)]],rePassword:[""],phone:["",[i.kI.required,i.kI.pattern(/^01[0125][0-9]{8}$/)]]},{validators:[this.confirmPassword]})}confirmPassword(o){const n=o.get("password"),t=o.get("rePassword");""==t?.value?t?.setErrors({required:!0}):n?.value!=t?.value&&t?.setErrors({mismatch:!0})}handleForm(){this.isLoading=!0,!0===this.registerForm.valid&&this._AuthService.register(this.registerForm.value).subscribe({next:n=>{console.log(n),"success"==n.message&&(this._Router.navigate(["/login"]),this.isLoading=!1)},error:n=>{console.log(n),this.isLoading=!1,this.msgError=n.error.message}})}goLogin(){this._Router.navigate(["/login"])}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(f.e),e.Y36(v.F0),e.Y36(i.qu))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:40,vars:8,consts:[[1,"container"],[1,"my-4","shadow","rounded-4","bg-main-light","p-4"],[1,"fw-normal","fs-3"],[3,"formGroup","ngSubmit"],["class","text-center alert alert-danger fw-bolder pt-2",4,"ngIf"],[1,"input-name","mb-2"],["for","name"],["formControlName","name","type","text","id","name",1,"form-control"],["inputName",""],["class","alert alert-danger small mt-2 py-2",4,"ngIf"],[1,"input-email","mb-2"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["inputEmail",""],[1,"input-password","mb-2"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["inputPassword",""],[1,"input-rePassword","mb-2"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword",1,"form-control"],["inputRePassword",""],[1,"input-phone","mb-2"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control"],["inputPhone",""],[1,"main-btn","my-2","ms-auto","d-block","py-2","fw-bolder"],[4,"ngIf"],[1,"text-center","alert","alert-danger","fw-bolder","pt-2"],[1,"alert","alert-danger","small","mt-2","py-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(n,t){if(1&n&&(e.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h2",2),e._uU(4,"Register Now"),e.qZA(),e.TgZ(5,"form",3),e.NdJ("ngSubmit",function(){return t.handleForm()}),e.YNc(6,h,2,1,"div",4),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"name :"),e.qZA(),e._UZ(10,"input",7,8),e.YNc(12,w,4,3,"div",9),e.qZA(),e.TgZ(13,"div",10)(14,"label",11),e._uU(15,"Email :"),e.qZA(),e._UZ(16,"input",12,13),e.YNc(18,q,3,2,"div",9),e.qZA(),e.TgZ(19,"div",14)(20,"label",15),e._uU(21,"Password :"),e.qZA(),e._UZ(22,"input",16,17),e.YNc(24,I,3,2,"div",9),e.qZA(),e.TgZ(25,"div",18)(26,"label",19),e._uU(27,"Re-password :"),e.qZA(),e._UZ(28,"input",20,21),e.YNc(30,P,3,2,"div",9),e.qZA(),e.TgZ(31,"div",22)(32,"label",23),e._uU(33,"Phone :"),e.qZA(),e._UZ(34,"input",24,25),e.YNc(36,J,3,2,"div",9),e.qZA(),e.TgZ(37,"button",26),e.YNc(38,Y,2,0,"span",27),e._uU(39," Register Now "),e.qZA()()()()()),2&n){const a=e.MAs(11),Q=e.MAs(17),y=e.MAs(23),L=e.MAs(29),O=e.MAs(35);let m,g,p,_,u;e.xp6(5),e.Q6J("formGroup",t.registerForm),e.xp6(1),e.Q6J("ngIf",t.msgError),e.xp6(6),e.Q6J("ngIf",(null==(m=t.registerForm.get("name"))?null:m.errors)&&((null==(m=t.registerForm.get("name"))?null:m.touched)||a.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(g=t.registerForm.get("email"))?null:g.errors)&&((null==(g=t.registerForm.get("email"))?null:g.touched)||Q.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(p=t.registerForm.get("password"))?null:p.errors)&&((null==(p=t.registerForm.get("password"))?null:p.touched)||y.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(_=t.registerForm.get("rePassword"))?null:_.errors)&&((null==(_=t.registerForm.get("rePassword"))?null:_.touched)||L.value.length>0)),e.xp6(6),e.Q6J("ngIf",(null==(u=t.registerForm.get("phone"))?null:u.errors)&&((null==(u=t.registerForm.get("phone"))?null:u.touched)||O.value.length>0)),e.xp6(2),e.Q6J("ngIf",t.isLoading)}},dependencies:[c.ez,c.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".alert[_ngcontent-%COMP%]{--bs-alert-padding-x: 1rem;--bs-alert-padding-y: .15rem !important;--bs-alert-margin-bottom: 1rem;--bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius: var(--bs-border-radius);--bs-alert-link-color: inherit;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}"]})}return r})()}}]);