(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Visual Studio Projects\naujas\Autosattlerei\ClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [[1, "homepage-container", "container"], [1, "home-intro", "section-1", "row"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".home-intro[_ngcontent-%COMP%] {\n  align-items: center;\n  max-width: 150rem;\n  margin: auto;\n}\n.home-intro[_ngcontent-%COMP%]   .autosattlerei-logo[_ngcontent-%COMP%] {\n  line-height: 2;\n}\n.home-intro[_ngcontent-%COMP%]   .autosattlerei-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 125%;\n  max-width: 27rem;\n  text-align: start;\n  margin: 30px auto;\n}\n.home-intro[_ngcontent-%COMP%]   .autosattlerei-logo[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 3rem;\n}\n.home-intro[_ngcontent-%COMP%]   .figure[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n.home-intro[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   .caption-center[_ngcontent-%COMP%] {\n  color: #000;\n}\n.home-intro[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   .caption-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 50rem;\n  margin: auto;\n  font-size: 350%;\n  text-align: initial;\n}\n.home-intro[_ngcontent-%COMP%]   .figure-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-intro[_ngcontent-%COMP%]   .figure-right[_ngcontent-%COMP%]   .caption-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #ffffff00;\n  font-size: 700%;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: white;\n  -ms-writing-mode: tb-rl;\n      writing-mode: vertical-rl;\n}\n.home-intro[_ngcontent-%COMP%]   .figure-right[_ngcontent-%COMP%]   .caption-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1;\n}\n.service-container[_ngcontent-%COMP%] {\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  text-align: center;\n  margin-top: 10rem;\n  background-image: url('Autosattlerei-Schneider-interior.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 40rem;\n  max-height: 60rem;\n  margin: 10rem auto 3rem;\n  max-width: 150rem;\n}\n.service-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .service-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 125%;\n}\n.service-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #ffffff00;\n  font-size: 700%;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: white;\n}\n.service-container[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-flow: wrap;\n  max-width: 125rem;\n  margin: 0 auto;\n}\n.service-container[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 15px;\n  float: left;\n  flex: 1;\n  padding: 15px;\n}\n.service-container[_ngcontent-%COMP%]   .service-type-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ff6c4b;\n  font-weight: 400;\n  font-size: 125%;\n}\n.service-container[_ngcontent-%COMP%]   .service-type-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff0808;\n  font-weight: 900;\n}\n@media (max-width: 1200px) {\n  .caption-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 80%;\n  }\n}\n@media (max-width: 992px) {\n  .home-intro[_ngcontent-%COMP%]   .figure.figure-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 125%;\n  }\n  .home-intro[_ngcontent-%COMP%]   .figure.figure-left[_ngcontent-%COMP%]   .caption-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .home-intro[_ngcontent-%COMP%]   .figure.figure-left[_ngcontent-%COMP%]   .caption-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 125%;\n  }\n\n  .caption-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 60%;\n  }\n\n  .service-container[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    min-height: 35rem;\n  }\n  .service-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 150%;\n    margin-top: 0.5rem;\n    -webkit-text-stroke-width: 1px;\n    font-weight: 100 !important;\n  }\n}\n@media (max-width: 768px) {\n  div.col-md[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n    line-height: 1;\n    font-size: 100%;\n  }\n  div.col-md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.caption-right   p)[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.caption-right   p)[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n  div.col-md[_ngcontent-%COMP%]   .caption-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .caption-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  div.col-md[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 100%;\n    line-height: 1;\n  }\n  div.col-md[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], div.col-md[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], div.col-md[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .figure-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 125%;\n    font-weight: 600;\n  }\n\n  .service-container[_ngcontent-%COMP%]   .service-type-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n\n  .homepage-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 100%;\n    line-height: 1;\n  }\n  .homepage-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .homepage-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .homepage-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 125%;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ0E7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQy9CRDtBRGlDQztFQUNDLGNBQUE7QUMvQkY7QURnQ0U7RUFDQyxlQWpDUztFQWtDVCxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUM5Qkg7QURpQ0c7RUFDQyxVQUFBO0VBQ0EsWUFBQTtBQy9CSjtBRG9DQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbENGO0FEdUNHO0VBQ0MsV0FBQTtBQ3JDSjtBRHNDSTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3BDTDtBRHlDSTtFQUNRLFlBQUE7QUN2Q1o7QUR5Q1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7TUFBQSx5QkFBQTtBQ3ZDaEI7QUR5Q2dCO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUN2Q3BCO0FEaURBO0VBckZDLHFCQXNGK0I7RUFyRi9CLGtCQXFGK0I7RUFwRi9CLGdCQW9GK0I7RUFuRi9CLGFBbUYrQjtFQUMvQixzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZEQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUMzQ0Q7QUQ0Q0M7RUFDQyxXQUFBO0VBQ0EsZUEzR1U7QUNpRVo7QUQ0Q0M7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUMxQ0Y7QUQ2Q0M7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUMzQ0Y7QUQ2Q0U7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUMzQ0g7QUQrQ0M7RUFDQyxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM3Q0Y7QUQ4Q0U7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUM1Q0g7QURpREE7RUFDSTtJQUNJLGNBQUE7RUM5Q047QUFDRjtBRGlEQTtFQUlHO0lBQ0MsZUFBQTtFQ2xERjtFRHNERTtJQUNDLGVBQUE7RUNwREg7O0VEMEREO0lBQ08sY0FBQTtFQ3ZETjs7RUQyREU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VDeEROO0VEeURNO0lBQ0wsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7SUFDQSwyQkFBQTtFQ3ZERDtBQUNGO0FEbUVBO0VBQ0M7SUFDQyxjQUFBO0lBQ0EsZUFwTVU7RUNtSVY7RURtRUE7SUFDQyxlQXZNUztFQ3NJVjtFRG1FQTtJQUNDLGVBQUE7RUNqRUQ7RUQzSEQ7SUFDQyxlQWZVO0lBZ0JWLGNBQUE7RUM2SEE7RUQxSEQ7SUFDQyxlQWxCVTtJQW1CVixnQkFBQTtFQzRIQTs7RURrRUE7SUFDQyxlQUFBO0VDL0REOztFRHZJRDtJQUNDLGVBZlU7SUFnQlYsY0FBQTtFQzBJQTtFRHZJRDtJQUNDLGVBbEJVO0lBbUJWLGdCQUFBO0VDeUlBO0FBQ0Y7QUFFQSw2Q0FBNkMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "ANMO":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/map.component */ "cNoH");










function ContactFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go back to homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.status);
} }
function ContactFormComponent_div_10_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_div_10_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_div_10_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email format is invalid!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_div_10_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid phone number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_div_10_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_div_10_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(ctx_r7.refForm, ctx_r7.refForm.isValid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactFormComponent_div_10_span_8_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactFormComponent_div_10_span_15_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactFormComponent_div_10_span_16_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tel. no. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContactFormComponent_div_10_span_23_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactFormComponent_div_10_span_30_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "re-captcha", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function ContactFormComponent_div_10_Template_re_captcha_resolved_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.resolved($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-map", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.refForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.refForm.controls.Name.valid || ctx_r1.refForm.controls.Name.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.refForm.controls.Name.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.refForm.controls.Email.valid || ctx_r1.refForm.controls.Email.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.refForm.controls.Email.errors && ctx_r1.refForm.controls.Email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.refForm.controls.Email.errors && ctx_r1.refForm.controls.Email.errors.pattern && !ctx_r1.refForm.controls.Email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.refForm.controls.TelNo.valid || ctx_r1.refForm.controls.TelNo.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.refForm.controls.TelNo.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.refForm.controls.Message.valid || ctx_r1.refForm.controls.Message.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.refForm.controls.Message.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.refForm.valid || !ctx_r1.captchaValidated);
} }
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.submitted = false;
        this.captchaValidated = false;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.refForm = this.fb.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            TelNo: [],
            Message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            recaptchaReactive: []
        });
    };
    ContactFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        return this.http.post('api/Email/Index', value).subscribe(function (success) { return _this.handleSuccess(); }, function (error) { return _this.handleFailure(error); });
    };
    ContactFormComponent.prototype.handleSuccess = function () {
        this.status = "Thanks. Message sent successfully.";
        this.submitted = true;
    };
    ContactFormComponent.prototype.handleFailure = function (error) {
        this.status = "Sorry, there was an error. Try contacting us by phone.";
        this.submitted = true;
        console.log('oops', error);
    };
    ContactFormComponent.prototype.resolved = function (captchaResponse, res) {
        this.captchaValidated = true;
        console.log("Resolved response token: " + captchaResponse);
    };
    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 11, vars: 2, consts: [[1, "container", "contact-form-container"], ["class", "postSubmitContainer", 4, "ngIf"], [1, "contact-form-header"], [1, "header1"], [1, "header-left", "header-item"], [1, "header2"], [1, "header-right", "header-item"], ["class", "contact-form-items-wrapper", 4, "ngIf"], [1, "postSubmitContainer"], ["routerLink", "/"], [1, "contact-form-items-wrapper"], ["novalidate", "", 1, "contact-form-item", "input-section", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "Name", "placeholder", "Name", 1, "form-control"], [1, "alert", "alert-danger", 3, "hidden"], [4, "ngIf"], ["type", "text", "formControlName", "Email", "placeholder", "Email", 1, "form-control"], ["type", "text", "formControlName", "TelNo", "placeholder", "Tel.no.", 1, "form-control"], ["formControlName", "Message", "placeholder", "Message", 1, "form-control"], ["formControlName", "recaptchaReactive", "siteKey", "", 3, "resolved"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "contact-form-item", "map"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_1_Template, 6, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kontaktieren Sie uns!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wir kommen schnellm\u00F6glichst auf Sie zu!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tel. Nr.: +49 1517 0313000 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactFormComponent_div_10_Template, 36, 11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaValueAccessorDirective"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.contact-form-container[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  display: flex;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0;\n  background: url(\"/assets/img/contact-form-images/Schneider-sitze.jpg\") no-repeat center;\n  background-size: cover;\n  position: relative;\n}\n\n.contact-form-container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: url(\"/assets/img/contact-form-images/background-cover.png\") no-repeat center;\n  background-size: cover;\n}\n\n.contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: center;\n  margin: 3rem auto;\n  z-index: 1;\n}\n\n.contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40%;\n  padding-top: 20px;\n}\n\n.contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  font-size: 150%;\n}\n\n.contact-form-container[_ngcontent-%COMP%]   .contact-form-items-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: auto 0;\n  max-width: 140rem;\n  width: 100%;\n  align-self: center;\n  z-index: 1;\n}\n\n.contact-form-container[_ngcontent-%COMP%]   .contact-form-items-wrapper[_ngcontent-%COMP%]   .contact-form-item[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 auto;\n  max-width: 50rem;\n  padding: 1rem;\n  box-shadow: 0px 0px 13px #000;\n  border-radius: 5px;\n  background-color: rgba(224, 224, 224, 0.8);\n}\n\n.contact-form-container[_ngcontent-%COMP%]   .contact-form-items-wrapper[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n@media (max-width: 648px) {\n  .footer[_ngcontent-%COMP%]   .footer-item.divider[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 100%;\n  }\n}\n\n@media (max-width: 992px) {\n  .contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n  .contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 150%;\n    font-weight: bold;\n  }\n  .contact-form-container[_ngcontent-%COMP%]   .contact-form-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n  .contact-form-container[_ngcontent-%COMP%]   .contact-form-items-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin: 40% 0 auto;\n  }\n  .contact-form-container[_ngcontent-%COMP%]   .contact-form-items-wrapper[_ngcontent-%COMP%]   .contact-form-item[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n  }\n}\n/*# sourceMappingURL=contact-form.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQTtFQUNLLFlBQUE7QUNuQkw7O0FEc0JBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFiSCxxQkFja0M7RUFibEMsa0JBYWtDO0VBWmxDLGdCQVlrQztFQVhsQyxhQVdrQztFQUMvQixhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsdUZBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRGlCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3RkFBQTtFQUNBLHNCQUFBO0FDZlI7O0FEa0JJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDaEJSOztBRGtCUTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDaEJaOztBRG1CUTtFQUNJLGVBQUE7QUNqQlo7O0FEcUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ25CUjs7QURxQlE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQ25CWjs7QURzQlE7RUFDSSxZQUFBO0FDcEJaOztBRDBCQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUN4QlY7QUFDRjs7QUQ0QkE7RUFHUTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQzVCVjtFRDZCVTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VDM0JkO0VENkJVO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VDM0JkO0VENkJVO0lBQ0ksZUFBQTtFQzNCZDtFRCtCTTtJQUNJLHNCQUFBO0lBQ0Esa0JBQUE7RUM3QlY7RUQ4QlU7SUFDSSxjQUFBO0VDNUJkO0FBQ0Y7O0FBRUEscURBQXFEIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
    return ContactFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "H6fx":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FetchDataComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FetchDataComponent_table_5_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var forecast_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.dateFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.temperatureC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.temperatureF);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.summary);
} }
function FetchDataComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Temp. (C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Temp. (F)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FetchDataComponent_table_5_tr_12_Template, 9, 4, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.forecasts);
} }
var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http, baseUrl) {
        var _this = this;
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result;
        }, function (error) { return console.error(error); });
    }
    FetchDataComponent.ɵfac = function FetchDataComponent_Factory(t) { return new (t || FetchDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('BASE_URL')); };
    FetchDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FetchDataComponent, selectors: [["app-fetch-data"]], decls: 6, vars: 2, consts: [[4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "table"], [4, "ngFor", "ngForOf"]], template: function FetchDataComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Weather forecast");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This component demonstrates fetching data from the server.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FetchDataComponent_p_4_Template, 3, 0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FetchDataComponent_table_5_Template, 13, 1, "table", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.forecasts);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forecasts);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
    return FetchDataComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fetch-data',
                templateUrl: './fetch-data.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BASE_URL']
            }] }]; }, null); })();


/***/ }),

/***/ "Ksni":
/*!********************************************!*\
  !*** ./app-backend/src/app/app.service.ts ***!
  \********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.sendToken = function (token) {
        return this.http.post("/token_validate", { recaptcha: token });
    };
    AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
    return AppService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QdYh":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
    CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter-component"]], decls: 10, vars: 1, consts: [[3, "click"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Counter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a simple example of an Angular component.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current count: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_8_listener() { return ctx.incrementCounter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Increment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCount);
        } }, encapsulation: 2 });
    return CounterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-component',
                templateUrl: './counter.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sqpg":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
    NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 15, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "#", 1, "navbar-brand"], ["src", "./assets/img/homepage-images/AS-logo3.png", "alt", "Autosattlerei-Schneider"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["href", "#", 1, "nav-item", "nav-link", "active"], [1, "sr-only"], ["routerLink", "/picture-gallery", 1, "nav-item", "nav-link"], ["routerLink", "/contact-form", 1, "nav-item", "nav-link"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Gallerie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kontakt");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 6rem;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: auto;\r\n  height: 100%;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  margin-left: 60%;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  margin: auto;\r\n  font-size: 200%;\r\n  position: relative;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  font-weight: 600;\r\n  color: #252525;\r\n}\r\n@media (max-width: 1200px) {\r\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 150%;\r\n  }\r\n}\r\n@media (max-width: 992px) {\r\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 125%;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=nav-menu.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNwQlI7QURxQlE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNuQlo7QURzQkk7RUFDSSx5QkFBQTtBQ3BCUjtBRHFCUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ25CWjtBRG9CWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbEJoQjtBRG9CZ0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNsQnBCO0FEeUJBO0VBSWdCO0lBQ0ksZUFBQTtFQ3pCbEI7QUFDRjtBRCtCQTtFQUlnQjtJQUNJLGVBQUE7RUNoQ2xCO0FBQ0Y7QURzQ0E7RUFJZ0I7SUFDSSxlQUFBO0VDdkNsQjtBQUNGO0FBQ0EsU0FBUztBQUNULGlEQUFpRCIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
    return NavMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-menu',
                templateUrl: './nav-menu.component.html',
                styleUrls: ['./nav-menu.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ClientApp_app_backend_src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ClientApp/app-backend/src/app/app.service */ "Ksni");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "Sqpg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
    }
    //function to resolve the reCaptcha and retrieve a token
    AppComponent.prototype.resolved = function (captchaResponse, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Resolved response token: " + captchaResponse);
                        return [4 /*yield*/, this.sendTokenToBackend(captchaResponse)];
                    case 1:
                        _a.sent(); //declaring the token send function with a token parameter
                        return [2 /*return*/];
                }
            });
        });
    };
    //function to send the token to the node server
    AppComponent.prototype.sendTokenToBackend = function (tok) {
        //calling the service and passing the token to the service
        this.service.sendToken(tok).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        }, function () { });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ClientApp_app_backend_src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "container-fluid"], [1, "navigation-container"], [1, "navigation"], [1, "line"], [1, "body-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    min-height: 100%;\r\n    display: flex;\r\n    max-height: 100%;\r\n    width: 100%;\r\n    flex-direction: column;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n    border: 1px solid brown;\r\n    margin: 15px auto 30px auto;\r\n    max-width: 200rem;\r\n    width: 90%;\r\n}\r\n\r\n.body-container[_ngcontent-%COMP%] {\r\n     position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.body-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    background-color: #181818;\r\n    color: #7F7F7F;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    letter-spacing: 0;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.footer-inner[_ngcontent-%COMP%] {\r\n    padding: 27px;\r\n    display: flex;\r\n}\r\n\r\n.footer-logo[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 150px;\r\n    display: block;\r\n    order: 1;\r\n}\r\n\r\n.footer-icons[_ngcontent-%COMP%] {\r\n    order: 3;\r\n}\r\n\r\n.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.footer-nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    margin-bottom: 0;\r\n    order: 2;\r\n    justify-content: space-around;\r\n}\r\n\r\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    text-align: left;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .body-content[_ngcontent-%COMP%] {\r\n        height: auto;\r\n    }\r\n\r\n    .footer-inner[_ngcontent-%COMP%] {\r\n        flex-wrap: wrap;\r\n        font-size: 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxzQkFBc0I7O0lBRXRCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUM7S0FDSSxrQkFBa0I7SUFDbkIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYnJvd247XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAzMHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDIwMHJlbTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiAuYm9keS1jb250YWluZXIge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5ib2R5LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XHJcbiAgICBjb2xvcjogIzdGN0Y3RjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItaW5uZXIge1xyXG4gICAgcGFkZGluZzogMjdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb290ZXItbG9nbyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG5cclxuLmZvb3Rlci1pY29ucyB7XHJcbiAgICBvcmRlcjogMztcclxufVxyXG5cclxuLmZvb3Rlci1sb2dvIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG9yZGVyOiAyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5mb290ZXItbmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWlubmVyIHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59Il19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ClientApp_app_backend_src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "Sqpg");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "QdYh");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "H6fx");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "ANMO");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _app_backend_src_app_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../app-backend/src/app/app.service */ "Ksni");
/* harmony import */ var _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./picture-gallery/picture-gallery.component */ "Zw2a");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-image-gallery */ "n21K");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _app_backend_src_app_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"],
                angular2_image_gallery__WEBPACK_IMPORTED_MODULE_15__["Angular2ImageGalleryModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                    { path: 'contact-form', component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactFormComponent"] },
                    { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                    { path: 'picture-gallery', component: _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_14__["PictureGalleryComponent"] },
                    { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                ])
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
        _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactFormComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"],
        _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_14__["PictureGalleryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"],
        angular2_image_gallery__WEBPACK_IMPORTED_MODULE_15__["Angular2ImageGalleryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
                    _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
                    _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactFormComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"],
                    _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_14__["PictureGalleryComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaModule"],
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"],
                    angular2_image_gallery__WEBPACK_IMPORTED_MODULE_15__["Angular2ImageGalleryModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                        { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                        { path: 'contact-form', component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactFormComponent"] },
                        { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                        { path: 'picture-gallery', component: _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_14__["PictureGalleryComponent"] },
                        { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                    ])
                ],
                providers: [
                    _app_backend_src_app_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zw2a":
/*!**************************************************************!*\
  !*** ./src/app/picture-gallery/picture-gallery.component.ts ***!
  \**************************************************************/
/*! exports provided: PictureGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureGalleryComponent", function() { return PictureGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular2_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-image-gallery */ "n21K");



var PictureGalleryComponent = /** @class */ (function () {
    function PictureGalleryComponent() {
    }
    PictureGalleryComponent.ɵfac = function PictureGalleryComponent_Factory(t) { return new (t || PictureGalleryComponent)(); };
    PictureGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureGalleryComponent, selectors: [["app-picture-gallery"]], decls: 7, vars: 0, consts: [[1, "gallery-header"], ["title", "Autosattlerei Schneider Galerie", 1, "header1"], [1, "header2"], [1, "gallery-container"]], template: function PictureGalleryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unsere Galerie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Werfen Sie einen Blick auf von uns erledigten Sitzbez\u00FCgen und lassen Sie sich von der Qualit\u00E4t begeistern. Hier finden Sie den Zustand der Sitze vor und die Neubez\u00FCge nach der Bearbeitung. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "gallery");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [angular2_image_gallery__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], encapsulation: 2 });
    return PictureGalleryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictureGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-picture-gallery',
                templateUrl: './picture-gallery.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map */ "Xu5n");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Feature */ "TN97");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom/Point */ "9ANI");
/* harmony import */ var ol_source_Stamen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/Stamen */ "Jz61");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/View */ "oscj");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer/Vector */ "Pmt0");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style/Style */ "bHcU");
/* harmony import */ var ol_style_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Icon */ "bL/2");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/proj */ "JW8z");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Tile */ "SAzV");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/Vector */ "WDFe");













var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var feature = new ol_Feature__WEBPACK_IMPORTED_MODULE_2__["default"](new ol_geom_Point__WEBPACK_IMPORTED_MODULE_3__["default"](ol_proj__WEBPACK_IMPORTED_MODULE_9__["fromLonLat"]([11.244250, 51.135250])));
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_1__["default"]({
            target: 'autosattlerei_map',
            controls: [],
            layers: [
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                    source: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_4__["default"]({
                        layer: 'watercolor',
                    }),
                }),
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__["default"]({
                    source: new ol_source_Stamen__WEBPACK_IMPORTED_MODULE_4__["default"]({
                        layer: 'terrain-labels',
                    })
                }),
                new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]({
                        features: [feature]
                    }),
                    style: new ol_style_Style__WEBPACK_IMPORTED_MODULE_7__["default"]({
                        image: new ol_style_Icon__WEBPACK_IMPORTED_MODULE_8__["default"](({
                            anchor: [0.5, 46],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            opacity: 0.95,
                            scale: 0.3,
                            src: '../../assets/img/markerIcon.png'
                        })),
                    })
                })
            ],
            view: new ol_View__WEBPACK_IMPORTED_MODULE_5__["default"]({
                center: ol_proj__WEBPACK_IMPORTED_MODULE_9__["fromLonLat"]([11.244250, 51.135250]),
                zoom: 10,
            })
        });
    };
    MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 2, vars: 0, consts: [[1, "row"], ["id", "autosattlerei_map", 1, "autosattlerei_map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["#autosattlerei_map[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 400px;\r\n  margin: 0 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F1dG9zYXR0bGVyZWlfbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbiJdfQ== */"] });
    return MapComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"](providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map