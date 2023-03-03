(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mod-file-file-module"],{

/***/ "3122":
/*!*************************************************************!*\
  !*** ./src/app/mod-file/land-file/file-navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: FileNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNavBarComponent", function() { return FileNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/land-file.service */ "CQE4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/home"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function (a1) { return ["/file/landfile", a1]; };
class FileNavBarComponent {
    constructor(landfileservice) {
        this.landfileservice = landfileservice;
    }
    ngOnInit() { }
}
FileNavBarComponent.ɵfac = function FileNavBarComponent_Factory(t) { return new (t || FileNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"])); };
FileNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileNavBarComponent, selectors: [["file-navbar"]], inputs: { data: "data" }, decls: 51, vars: 10, consts: [[1, "nav"], [1, "navbar"], [1, "navList-left"], [1, "drop-down-toggle"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], ["href", "", "routerLinkActive", "active"], [1, "drop-down"], ["href", ""], [3, "routerLink"], [1, "navList-right"], [1, "user-welcome"]], template: function FileNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Existing Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ground Rent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Close File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "JTimothy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.data.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.file.fileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".nav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: rgb(4, 12, 49);\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n  .navbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    max-height: 50px;\r\n    width: 100%;\r\n  }\r\n\r\n  .navList-left[_ngcontent-%COMP%] {\r\n      float: left;\r\n      margin-top: 0;\r\n    }\r\n\r\n  .navList-right[_ngcontent-%COMP%] {\r\n      float: right;\r\n      padding-right: 30px;\r\n      list-style: none;\r\n      margin: 0;\r\n    }\r\n\r\n  .navList-left[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .navList-right[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n        float: left;\r\n        padding-right: 10px;\r\n        padding-left: 10px;\r\n        padding-top: 20px;\r\n        list-style: none;\r\n        height: 30px;\r\n      }\r\n\r\n  .navList-left[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover, .navList-right[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover {\r\n          background-color: rgb(1, 4, 20);\r\n        }\r\n\r\n  .navList-left[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .navList-right[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n            color: rgb(177, 184, 196);\r\n            text-decoration: none;\r\n            height: 30px;\r\n            position: relative;\r\n            display: block;\r\n          }\r\n\r\n  .navList-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .navList-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n              color: rgb(255, 255, 255);\r\n            }\r\n\r\n  .user-welcome[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n  li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%] {\r\n  color: rgb(231, 25, 94) !important;\r\n}\r\n\r\n  .drop-down[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 5;\r\n  display: none;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  padding-bottom: 5px;\r\n  background-color: rgb(55, 74, 158);\r\n  border: rgb(1, 4, 20) solid 2px;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  transform: translateX(-10px);\r\n}\r\n\r\n  .drop-down-toggle[_ngcontent-%COMP%]:hover   .drop-down[_ngcontent-%COMP%], .drop-down-toggle[_ngcontent-%COMP%]:active   .drop-down[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n      clear: both;\r\n      padding-top: 5px;\r\n      padding-right: 5px;\r\n      padding-left: 5px;\r\n      width: 100%;\r\n      list-style: none;\r\n      transform: translateX(-5px);\r\n      text-align: left;\r\n    }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        background-color: rgb(180, 188, 221);\r\n      }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n          text-decoration: none;\r\n        }\r\n\r\n  .drop-down[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n            color: rgb(3, 18, 85);\r\n          }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kLWZpbGUvbGFuZC1maWxlL2ZpbGUtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFRTtNQUNFLFdBQVc7TUFDWCxhQUFhO0lBQ2Y7O0VBRUE7TUFDRSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixTQUFTO0lBQ1g7O0VBRUU7O1FBRUUsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixZQUFZO01BQ2Q7O0VBRUU7O1VBRUUsK0JBQStCO1FBQ2pDOztFQUVFOztZQUVFLHlCQUF5QjtZQUN6QixxQkFBcUI7WUFDckIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixjQUFjO1VBQ2hCOztFQUVFOztjQUVFLHlCQUF5QjtZQUMzQjs7RUFFWjtFQUNFLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiw0QkFBNEI7QUFDOUI7O0VBRUU7O0lBRUUsY0FBYztFQUNoQjs7RUFFRTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLDJCQUEyQjtNQUMzQixnQkFBZ0I7SUFDbEI7O0VBRUU7UUFDRSxvQ0FBb0M7TUFDdEM7O0VBRUU7VUFDRSxxQkFBcUI7UUFDdkI7O0VBRUU7WUFDRSxxQkFBcUI7VUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tb2QtZmlsZS9sYW5kLWZpbGUvZmlsZS1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgMTIsIDQ5KTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAgIC5uYXZMaXN0LWxlZnQge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2TGlzdC1yaWdodCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICAgLm5hdkxpc3QtbGVmdD5saSxcclxuICAgICAgLm5hdkxpc3QtcmlnaHQ+bGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZMaXN0LWxlZnQ+bGk6aG92ZXIsXHJcbiAgICAgICAgLm5hdkxpc3QtcmlnaHQ+bGk6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDQsIDIwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdkxpc3QtbGVmdD5saT5hLFxyXG4gICAgICAgICAgLm5hdkxpc3QtcmlnaHQ+bGk+YSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTc3LCAxODQsIDE5Nik7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdkxpc3QtbGVmdCBsaTpob3ZlciBhLFxyXG4gICAgICAgICAgICAubmF2TGlzdC1yaWdodCBsaTpob3ZlciBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4udXNlci13ZWxjb21lIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG5saT5hLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigyMzEsIDI1LCA5NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3AtZG93biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDc0LCAxNTgpO1xyXG4gIGJvcmRlcjogcmdiKDEsIDQsIDIwKSBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxufVxyXG5cclxuICAuZHJvcC1kb3duLXRvZ2dsZTpob3ZlciAuZHJvcC1kb3duLFxyXG4gIC5kcm9wLWRvd24tdG9nZ2xlOmFjdGl2ZSAuZHJvcC1kb3duIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAuZHJvcC1kb3duIGxpIHtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgICAuZHJvcC1kb3duIGxpOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODgsIDIyMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgLmRyb3AtZG93biBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRyb3AtZG93biBsaTpob3ZlciBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigzLCAxOCwgODUpO1xyXG4gICAgICAgICAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileNavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'file-navbar',
                templateUrl: './file-navbar.component.html',
                styleUrls: ['./file-navbar.component.css']
            }]
    }], function () { return [{ type: _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EUqt":
/*!********************************************************************!*\
  !*** ./src/app/mod-file/land-file/file-route-activator.service.ts ***!
  \********************************************************************/
/*! exports provided: FileRouteActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRouteActivator", function() { return FileRouteActivator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/land-file.service */ "CQE4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FileRouteActivator {
    constructor(landFileService, router) {
        this.landFileService = landFileService;
        this.router = router;
    }
    canActivate(route) {
        const fileExist = !!this.landFileService.getFileData(+route.params['id']);
        if (!fileExist)
            this.router.navigate(['/404']);
        return fileExist;
    }
}
FileRouteActivator.ɵfac = function FileRouteActivator_Factory(t) { return new (t || FileRouteActivator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FileRouteActivator.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileRouteActivator, factory: FileRouteActivator.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileRouteActivator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "NU0L":
/*!***********************************************************!*\
  !*** ./src/app/mod-file/land-file/land-file.component.ts ***!
  \***********************************************************/
/*! exports provided: LandFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFileComponent", function() { return LandFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/land-file.service */ "CQE4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _file_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-navbar.component */ "3122");
/* harmony import */ var _file_brief_file_brief_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-brief/file-brief.component */ "bjUC");






class LandFileComponent {
    constructor(landfileservice, route) {
        this.landfileservice = landfileservice;
        this.route = route;
    }
    ngOnInit() {
        this.fileData = this.landfileservice.getFileData(+this.route.snapshot.params['id']);
    }
    generateCofO(cofoData) {
        this.landfileservice.generateCofO(cofoData).subscribe();
        console.log(cofoData);
    }
}
LandFileComponent.ɵfac = function LandFileComponent_Factory(t) { return new (t || LandFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LandFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandFileComponent, selectors: [["land-file"]], decls: 9, vars: 2, consts: [[3, "data"], [3, "click"]], template: function LandFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "file-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "file-brief", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " land-file works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandFileComponent_Template_button_click_5_listener() { return ctx.generateCofO(ctx.fileData == null ? null : ctx.fileData.cofoData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Generate CofO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandFileComponent_Template_button_click_7_listener() { return ctx.generateCofO(ctx.fileData == null ? null : ctx.fileData.cofoData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Generate CofO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.fileData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.fileData);
    } }, directives: [_file_navbar_component__WEBPACK_IMPORTED_MODULE_3__["FileNavBarComponent"], _file_brief_file_brief_component__WEBPACK_IMPORTED_MODULE_4__["FileBriefComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZC1maWxlL2xhbmQtZmlsZS9sYW5kLWZpbGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'land-file',
                templateUrl: './land-file.component.html',
                styleUrls: ['./land-file.component.css']
            }]
    }], function () { return [{ type: _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "T+4R":
/*!*****************************************!*\
  !*** ./src/app/mod-file/file.routes.ts ***!
  \*****************************************/
/*! exports provided: fileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileRoutes", function() { return fileRoutes; });
/* harmony import */ var _land_file_land_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./land-file/land-file.component */ "NU0L");
/* harmony import */ var _land_file_file_route_activator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./land-file/file-route-activator.service */ "EUqt");
/* harmony import */ var _land_file_create_land_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./land-file/create-land-file.component */ "bM8y");

// import { Error404Component } from '../mod-shared/errors/404.component';


const fileRoutes = [
    { path: 'landfile/:id', component: _land_file_land_file_component__WEBPACK_IMPORTED_MODULE_0__["LandFileComponent"], canActivate: [_land_file_file_route_activator_service__WEBPACK_IMPORTED_MODULE_1__["FileRouteActivator"]] },
    { path: 'create-land-file', component: _land_file_create_land_file_component__WEBPACK_IMPORTED_MODULE_2__["CreateLandFileComponent"] }
];


/***/ }),

/***/ "bM8y":
/*!******************************************************************!*\
  !*** ./src/app/mod-file/land-file/create-land-file.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateLandFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLandFileComponent", function() { return CreateLandFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreateLandFileComponent {
}
CreateLandFileComponent.ɵfac = function CreateLandFileComponent_Factory(t) { return new (t || CreateLandFileComponent)(); };
CreateLandFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateLandFileComponent, selectors: [["create-land-file"]], decls: 15, vars: 0, consts: [[1, ""], ["createLandFileForm", ""], [1, "form-group"], ["for", "fileNumber"], ["type", "text", "name", "fileNumber", "id", "fileNumber"], ["for", "applicantName"], ["type", "text", "name", "applicantName", "id", "applicantName"], ["for", "date"], ["type", "date", "name", "date", "id", "date"]], template: function CreateLandFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "File Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Applicant Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "File Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZC1maWxlL2xhbmQtZmlsZS9jcmVhdGUtbGFuZC1maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateLandFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "create-land-file",
                templateUrl: "create-land-file.component.html",
                styleUrls: ["create-land-file.component.css"]
            }]
    }], null, null); })();


/***/ }),

/***/ "bjUC":
/*!***********************************************************************!*\
  !*** ./src/app/mod-file/land-file/file-brief/file-brief.component.ts ***!
  \***********************************************************************/
/*! exports provided: FileBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBriefComponent", function() { return FileBriefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Shared/land-file.service */ "CQE4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FileBriefComponent_p_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remark_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](remark_r3);
} }
function FileBriefComponent_p_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remark_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](remark_r4);
} }
function FileBriefComponent_p_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.date);
} }
class FileBriefComponent {
    constructor(landfileservice) {
        this.landfileservice = landfileservice;
    }
    ngOnInit() { }
}
FileBriefComponent.ɵfac = function FileBriefComponent_Factory(t) { return new (t || FileBriefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"])); };
FileBriefComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileBriefComponent, selectors: [["file-brief"]], inputs: { data: "data" }, decls: 73, vars: 10, consts: [[1, "file-overview"], [1, "brief"], [1, "remarks"], [4, "ngFor", "ngForOf"], [1, "history"]], template: function FileBriefComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "File Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "File Brief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "File Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "File Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "File Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "File Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Plot Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Plot Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Owner's Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Land Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "File Remarks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\uD83D\uDCCB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, FileBriefComponent_p_58_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Customer Service Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, FileBriefComponent_p_62_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Modified By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Modified On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, FileBriefComponent_p_72_Template, 5, 2, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.file.fileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.file.createDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.file.fileCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.plotInfo.plotNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.plotInfo.plotLocationDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.file.applicantName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.plotInfo.landUse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.remarks.fileRemarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.remarks.customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".file-overview[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 15px 15px 15px 0;\r\n  padding: 5px;\r\n  border: rgb(3, 18, 85) solid 2px;\r\n  width: 850px;\r\n  height: 80vh;\r\n}\r\n\r\n.remarks[_ngcontent-%COMP%], .brief[_ngcontent-%COMP%], .history[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 15px 15px 15px 0;\r\n  padding: 5px;\r\n  border: rgb(3, 18, 85) solid 2px;\r\n  width: 250px;\r\n  height: 55vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.remarks[_ngcontent-%COMP%]::-webkit-scrollbar, .brief[_ngcontent-%COMP%]::-webkit-scrollbar, .history[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kLWZpbGUvbGFuZC1maWxlL2ZpbGUtYnJpZWYvZmlsZS1icmllZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2QtZmlsZS9sYW5kLWZpbGUvZmlsZS1icmllZi9maWxlLWJyaWVmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1vdmVydmlldyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogcmdiKDMsIDE4LCA4NSkgc29saWQgMnB4O1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5yZW1hcmtzLFxyXG4uYnJpZWYsXHJcbi5oaXN0b3J5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiByZ2IoMywgMTgsIDg1KSBzb2xpZCAycHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNTV2aDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5yZW1hcmtzOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmJyaWVmOjotd2Via2l0LXNjcm9sbGJhcixcclxuLmhpc3Rvcnk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileBriefComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'file-brief',
                templateUrl: './file-brief.component.html',
                styleUrls: ['./file-brief.component.css']
            }]
    }], function () { return [{ type: _Shared_land_file_service__WEBPACK_IMPORTED_MODULE_1__["LandFileService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zT0s":
/*!*****************************************!*\
  !*** ./src/app/mod-file/file.module.ts ***!
  \*****************************************/
/*! exports provided: FileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModule", function() { return FileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mod-shared/shared.module */ "Df1Z");
/* harmony import */ var _file_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file.routes */ "T+4R");
/* harmony import */ var _land_file_file_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./land-file/file-navbar.component */ "3122");
/* harmony import */ var _land_file_land_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./land-file/land-file.component */ "NU0L");
/* harmony import */ var _land_file_file_brief_file_brief_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./land-file/file-brief/file-brief.component */ "bjUC");
/* harmony import */ var _land_file_file_route_activator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./land-file/file-route-activator.service */ "EUqt");
/* harmony import */ var _land_file_create_land_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./land-file/create-land-file.component */ "bM8y");












class FileModule {
}
FileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FileModule });
FileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FileModule_Factory(t) { return new (t || FileModule)(); }, providers: [_land_file_file_route_activator_service__WEBPACK_IMPORTED_MODULE_8__["FileRouteActivator"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_file_routes__WEBPACK_IMPORTED_MODULE_4__["fileRoutes"]),
            _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileModule, { declarations: [_land_file_file_navbar_component__WEBPACK_IMPORTED_MODULE_5__["FileNavBarComponent"],
        _land_file_land_file_component__WEBPACK_IMPORTED_MODULE_6__["LandFileComponent"],
        _land_file_file_brief_file_brief_component__WEBPACK_IMPORTED_MODULE_7__["FileBriefComponent"],
        _land_file_create_land_file_component__WEBPACK_IMPORTED_MODULE_9__["CreateLandFileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_file_routes__WEBPACK_IMPORTED_MODULE_4__["fileRoutes"]),
                    _mod_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"]
                ],
                declarations: [
                    _land_file_file_navbar_component__WEBPACK_IMPORTED_MODULE_5__["FileNavBarComponent"],
                    _land_file_land_file_component__WEBPACK_IMPORTED_MODULE_6__["LandFileComponent"],
                    _land_file_file_brief_file_brief_component__WEBPACK_IMPORTED_MODULE_7__["FileBriefComponent"],
                    _land_file_create_land_file_component__WEBPACK_IMPORTED_MODULE_9__["CreateLandFileComponent"]
                ],
                providers: [_land_file_file_route_activator_service__WEBPACK_IMPORTED_MODULE_8__["FileRouteActivator"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=mod-file-file-module.js.map