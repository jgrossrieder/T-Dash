webpackJsonp([9],{

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(1020);
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(3);
var platform_browser_1 = __webpack_require__(63);
var select_item_1 = __webpack_require__(1028);
var select_pipes_1 = __webpack_require__(1021);
var common_1 = __webpack_require__(1020);
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        _super.call(this, actor);
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        _super.call(this, actor);
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1020));
__export(__webpack_require__(1026));
__export(__webpack_require__(1063));
__export(__webpack_require__(1027));
__export(__webpack_require__(1028));
__export(__webpack_require__(1021));


/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
var select_1 = __webpack_require__(1027);
var select_pipes_1 = __webpack_require__(1021);
var off_click_1 = __webpack_require__(1026);
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return jsonpFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(63);
/**
 * @license Angular v5.1.1
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated use \@angular/common/http instead
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = /**
     * @return {?}
     */
    function () { return /** @type {?} */ ((new XMLHttpRequest())); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
var RequestMethod = {
    Get: 0,
    Post: 1,
    Put: 2,
    Delete: 3,
    Options: 4,
    Head: 5,
    Patch: 6,
};
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
/** @enum {number} */
var ReadyState = {
    Unsent: 0,
    Open: 1,
    HeadersReceived: 2,
    Loading: 3,
    Done: 4,
    Cancelled: 5,
};
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
/** @enum {number} */
var ResponseType = {
    Basic: 0,
    Cors: 1,
    Default: 2,
    Error: 3,
    Opaque: 4,
};
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
/** @enum {number} */
var ContentType = {
    NONE: 0,
    JSON: 1,
    FORM: 2,
    FORM_DATA: 3,
    TEXT: 4,
    BLOB: 5,
    ARRAY_BUFFER: 6,
};
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
/** @enum {number} */
var ResponseContentType = {
    Text: 0,
    Json: 1,
    ArrayBuffer: 2,
    Blob: 3,
};
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var /** @type {?} */ values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name_1 = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = /**
     * Returns the names of the headers
     * @return {?}
     */
    function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = /**
     * Returns values of all headers.
     * @return {?}
     */
    function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    /**
     * Returns string of all headers.
     * @return {?}
     */
    Headers.prototype.toJSON = /**
     * Returns string of all headers.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[/** @type {?} */ ((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = /**
     * This method is not implemented.
     * @return {?}
     */
    function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated use \@angular/common/http instead
 * @abstract
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());
/**
 * Interface for options to construct a RequestOptions, based on
 * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * Required structure when constructing new Request();
 * @record
 */

/**
 * Interface for options to construct a Response, based on
 * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
 *
 * @deprecated use \@angular/common/http instead
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */

/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated use \@angular/common/http instead
 *
 */
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = /**
     * @param {?} k
     * @return {?}
     */
    function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated use \@angular/common/http instead
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = /**
     * @param {?} searchParams
     * @return {?}
     */
    function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) {
                return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
            });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = /**
     * @param {?} param
     * @return {?}
     */
    function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    function () {
        if (this._body instanceof ArrayBuffer) {
            return /** @type {?} */ (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    function () {
        if (this._body instanceof Blob) {
            return /** @type {?} */ (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated use \@angular/common/http instead
 */
var Response = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = /** @type {?} */ ((responseOptions.status));
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = /** @type {?} */ ((responseOptions.type));
        _this.url = /** @type {?} */ ((responseOptions.url));
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = /**
     * @return {?}
     */
    function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = /**
     * @param {?} id
     * @return {?}
     */
    function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = /**
     * @param {?} node
     * @return {?}
     */
    function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    // Remove <script> element from the DOM
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = function () { return []; };
    return BrowserJsonp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var /** @type {?} */ id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var /** @type {?} */ callback = _dom.requestCallback(_this._id);
            var /** @type {?} */ url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var /** @type {?} */ script = _this._script = _dom.build(url);
            var /** @type {?} */ onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var /** @type {?} */ responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var /** @type {?} */ onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated use \@angular/common/http instead
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp, },
        { type: ResponseOptions, },
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * @deprecated use \@angular/common/http instead
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var /** @type {?} */ _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var /** @type {?} */ onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var /** @type {?} */ status = _xhr.status === 1223 ? 204 : _xhr.status;
                var /** @type {?} */ body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var /** @type {?} */ headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var /** @type {?} */ url = getResponseURL(_xhr) || req.url;
                var /** @type {?} */ statusText = _xhr.statusText || 'OK';
                var /** @type {?} */ responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var /** @type {?} */ response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var /** @type {?} */ onError = function (err) {
                var /** @type {?} */ responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(/** @type {?} */ ((name)), values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated use \@angular/common/http instead
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        var /** @type {?} */ xsrfToken = Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated use \@angular/common/http instead
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr, },
        { type: ResponseOptions, },
        { type: XSRFStrategy, },
    ]; };
    return XHRBackend;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = /**
     * @param {?=} objParams
     * @return {?}
     */
    function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Request = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var /** @type {?} */ url = requestOptions.url;
        _this.url = /** @type {?} */ ((requestOptions.url));
        var /** @type {?} */ paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var /** @type {?} */ params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var /** @type {?} */ prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(/** @type {?} */ ((requestOptions.method)));
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = /** @type {?} */ ((requestOptions.withCredentials));
        _this.responseType = /** @type {?} */ ((requestOptions.responseType));
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['ArrayBuffer'] || noop;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return /** @type {?} */ (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return /** @type {?} */ (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated use \@angular/common/http instead
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Http;
}());
/**
 * @deprecated use \@angular/common/http instead
 */
var Jsonp = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["b" /* __extends */])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend, },
        { type: RequestOptions, },
    ]; };
    return Jsonp;
}(Http));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated use \@angular/common/http instead
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                        BrowserXhr,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        XHRBackend,
                        { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated use \@angular/common/http instead
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                        BrowserJsonp,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        JSONPBackend,
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = function () { return []; };
    return JsonpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * @deprecated use \@angular/common/http instead
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('5.1.1');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(1178);
__webpack_require__(84);
var AstroService = (function () {
    function AstroService(_http) {
        this._http = _http;
    }
    AstroService.prototype.get = function () {
        return this._http.get('api/astro/get')
            .map(function (res) {
            return res.json();
        });
    };
    AstroService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AstroService);
    return AstroService;
}());
exports.AstroService = AstroService;


/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var astro_service_1 = __webpack_require__(1179);
var DisplayComponent = (function () {
    function DisplayComponent(astroService) {
        var _this = this;
        this.astroService = astroService;
        this.horoscopes = null;
        this.astroService.get()
            .subscribe(function (data) {
            console.log(data);
            _this.horoscopes = data;
        });
    }
    DisplayComponent = __decorate([
        core_1.Component({
            selector: 'display',
            template: __webpack_require__(1347),
            styles: [__webpack_require__(1348)]
        }),
        __metadata("design:paramtypes", [astro_service_1.AstroService])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;


/***/ }),

/***/ 1347:
/***/ (function(module, exports) {

module.exports = "<!--<div style=\"border: 1px solid red\">display Component</div>\r\n\r\n<ul>\r\n    <li *ngFor=\"let horoscope of horoscopes\">\r\n        {{horoscope?.sign && horoscope?.sign?.name}}\r\n    </li>-->\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"col-lg-4 col-md-6 col-sm-1\" *ngFor=\"let horoscope of horoscopes\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-6 text-center\">\r\n                        <img class=\"img-circle thumb96\" src=\"assets/img/signs/{{horoscope?.sign?.technicalName}}.png\" alt=\"Image\" />\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <h3 class=\"mt0\">{{horoscope?.sign?.name}}</h3>\r\n                        <ul class=\"list-unstyled\">\r\n                            <li class=\"mb-sm\">\r\n                               {{horoscope?.globalText}}\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body bg-inverse\">\r\n                <div class=\"row row-table text-center\">\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row row-table text-center\">\r\n                            \r\n                            <div class=\"col-xs-4\"  *ngFor=\"let topic of horoscope?.topics\">\r\n                                <p>{{topic?.title}}</p>\r\n                                <!--<progressbar [max]=\"topic.totalStars\" [value]=\"topic.stars\"><span style=\"color:white; white-space:nowrap;\">{{topic?.stars}} / {{topic?.totalStars}}</span></progressbar>-->\r\n                                <rating [ngModel]=\"topic.stars\" [max]=\"topic.totalStars\" readonly=\"true\" stateOn=\"fa fa-star text-yellow\" stateOff=\"fa fa-star-o\"></rating>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--<ul>\r\n                        <li *ngFor=\"let topic of horoscope?.topics\">{{topic?.title}}<progressbar [max]=\"topic.totalStars\" [value]=\"topic.stars\"><span style=\"color:white; white-space:nowrap;\">{{topic?.stars}} / {{topic?.totalStars}}</span></progressbar></li>\r\n                    </ul>-->\r\n                    <!--<div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">700</p>\r\n                        <p class=\"m0 text-muted\">Followers</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">1500</p>\r\n                        <p class=\"m0 text-muted\">Following</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <p class=\"m0 h3\">510</p>\r\n                        <p class=\"m0 text-muted\">Loved</p>\r\n                    </div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n"

/***/ }),

/***/ 1348:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(62);
var ng2_select_1 = __webpack_require__(1062);
var http_1 = __webpack_require__(1178);
var shared_module_1 = __webpack_require__(83);
var astro_service_1 = __webpack_require__(1179);
var display_component_1 = __webpack_require__(1346);
//import { ListComponent } from './list/list.component';
//import { PostComponent } from './post/post.component';
//import { ArticlesComponent } from './articles/articles.component';
//import { ArticleviewComponent } from './articleview/articleview.component';
var routes = [
    { path: '', redirectTo: 'display' },
    { path: 'display', component: display_component_1.DisplayComponent },
];
var AstroModule = (function () {
    function AstroModule() {
    }
    AstroModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                http_1.HttpModule,
                ng2_select_1.SelectModule
            ],
            declarations: [
                display_component_1.DisplayComponent,
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [astro_service_1.AstroService]
        })
    ], AstroModule);
    return AstroModule;
}());
exports.AstroModule = AstroModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3QvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QtcGlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3Qvc2VsZWN0L29mZi1jbGljay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9lc201L2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vYXN0cm8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2FzdHJvL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vYXN0cm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usb0JBQW9CO0FBQ3BGLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0NBQXlDO0FBQ3pDLHVDQUF1RDtBQUN2RCw2Q0FBMEM7QUFDMUMsdUNBQTJDO0FBRzNDLDhDQUEwRDtBQUMxRCxnREFBK0M7QUFDL0Msb0RBQStEO0FBRS9ELHdEQUF3RDtBQUN4RCx3REFBd0Q7QUFDeEQsb0VBQW9FO0FBQ3BFLDZFQUE2RTtBQUU3RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtJQUNuQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0NBS25ELENBQUM7QUFvQkY7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWxCdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDRCQUFZO2dCQUNaLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsaUJBQVU7Z0JBQ1YseUJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7YUFJbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUE7QUFBZixrQ0FBVyIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG59XG5leHBvcnRzLmVzY2FwZVJlZ2V4cCA9IGVzY2FwZVJlZ2V4cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3Qvc2VsZWN0L2NvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gMTAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA3IDkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIEhpZ2hsaWdodFBpcGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhpZ2hsaWdodFBpcGUoKSB7XG4gICAgfVxuICAgIEhpZ2hsaWdodFBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSwgcXVlcnkpIHtcbiAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIHZhciB0YWdSRSA9IG5ldyBSZWdFeHAoJzxbXjw+XSo+JywgJ2lnJyk7XG4gICAgICAgICAgICAvLyBnZXQgaXN0IG9mIHRhZ3NcbiAgICAgICAgICAgIHZhciB0YWdMaXN0ID0gdmFsdWUubWF0Y2godGFnUkUpO1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0YWdzIHdpdGggdG9rZW5cbiAgICAgICAgICAgIHZhciB0bXBWYWx1ZSA9IHZhbHVlLnJlcGxhY2UodGFnUkUsICckISQnKTtcbiAgICAgICAgICAgIC8vIFJlcGxhY2Ugc2VhcmNoIHdvcmRzXG4gICAgICAgICAgICB2YWx1ZSA9IHRtcFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChjb21tb25fMS5lc2NhcGVSZWdleHAocXVlcnkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKTtcbiAgICAgICAgICAgIC8vIFJlaW5zZXJ0IEhUTUxcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyB2YWx1ZS5pbmRleE9mKCckISQnKSA+IC0xOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJyQhJCcsIHRhZ0xpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIEhpZ2hsaWdodFBpcGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBjb3JlXzEuUGlwZSwgYXJnczogW3sgbmFtZTogJ2hpZ2hsaWdodCcgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBIaWdobGlnaHRQaXBlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEhpZ2hsaWdodFBpcGU7XG59KCkpO1xuZXhwb3J0cy5IaWdobGlnaHRQaXBlID0gSGlnaGxpZ2h0UGlwZTtcbmZ1bmN0aW9uIHN0cmlwVGFncyhpbnB1dCkge1xuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naTtcbiAgICB2YXIgY29tbWVudHNBbmRQaHBUYWdzID0gLzwhLS1bXFxzXFxTXSo/LS0+fDxcXD8oPzpwaHApP1tcXHNcXFNdKj9cXD8+L2dpO1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpLnJlcGxhY2UodGFncywgJycpO1xufVxuZXhwb3J0cy5zdHJpcFRhZ3MgPSBzdHJpcFRhZ3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QtcGlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgNyA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIE9mZkNsaWNrRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPZmZDbGlja0RpcmVjdGl2ZSgpIHtcbiAgICB9XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIE9mZkNsaWNrRGlyZWN0aXZlLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICBPZmZDbGlja0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5vZmZDbGlja0hhbmRsZXIpO1xuICAgICAgICB9IH0sIDApO1xuICAgIH07XG4gICAgT2ZmQ2xpY2tEaXJlY3RpdmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9mZkNsaWNrSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9mZkNsaWNrRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbb2ZmQ2xpY2tdJ1xuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgT2ZmQ2xpY2tEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICBPZmZDbGlja0RpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgJ29mZkNsaWNrSGFuZGxlcic6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCwgYXJnczogWydvZmZDbGljaycsXSB9LF0sXG4gICAgICAgICdvbkNsaWNrJzogW3sgdHlwZTogY29yZV8xLkhvc3RMaXN0ZW5lciwgYXJnczogWydjbGljaycsIFsnJGV2ZW50J10sXSB9LF0sXG4gICAgfTtcbiAgICByZXR1cm4gT2ZmQ2xpY2tEaXJlY3RpdmU7XG59KCkpO1xuZXhwb3J0cy5PZmZDbGlja0RpcmVjdGl2ZSA9IE9mZkNsaWNrRGlyZWN0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvb2ZmLWNsaWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDcgOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xudmFyIHBsYXRmb3JtX2Jyb3dzZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInKTtcbnZhciBzZWxlY3RfaXRlbV8xID0gcmVxdWlyZSgnLi9zZWxlY3QtaXRlbScpO1xudmFyIHNlbGVjdF9waXBlc18xID0gcmVxdWlyZSgnLi9zZWxlY3QtcGlwZXMnKTtcbnZhciBjb21tb25fMSA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG52YXIgc3R5bGVzID0gXCJcXG4gIC51aS1zZWxlY3QtdG9nZ2xlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLyogRml4IGNhcmV0IGdvaW5nIGludG8gbmV3IGxpbmUgaW4gRmlyZWZveCAqL1xcbiAgLnVpLXNlbGVjdC1wbGFjZWhvbGRlciB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcbiAgXFxuICAvKiBGaXggQm9vdHN0cmFwIGRyb3Bkb3duIHBvc2l0aW9uIHdoZW4gaW5zaWRlIGEgaW5wdXQtZ3JvdXAgKi9cXG4gIC5pbnB1dC1ncm91cCA+IC5kcm9wZG93biB7XFxuICAgIC8qIEluc3RlYWQgb2YgcmVsYXRpdmUgKi9cXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gIH1cXG4gIFxcbiAgLnVpLXNlbGVjdC1tYXRjaCA+IC5idG4ge1xcbiAgICAvKiBJbnN0ZWFkIG9mIGNlbnRlciBiZWNhdXNlIG9mIC5idG4gKi9cXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xcbiAgfVxcbiAgXFxuICAudWktc2VsZWN0LW1hdGNoID4gLmNhcmV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICB9XFxuICBcXG4gIC51aS1kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG4gIFxcbiAgLnVpLXNlbGVjdC1jaG9pY2VzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG4gIFxcbiAgLnVpLXNlbGVjdC1tdWx0aXBsZSAudWktc2VsZWN0LWNob2ljZXMge1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICB9XFxuICAudWktc2VsZWN0LWNob2ljZXMtcm93PmEge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBhZGRpbmc6IDNweCAyMHB4O1xcbiAgICAgIGNsZWFyOiBib3RoO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XFxuICAgICAgY29sb3I6ICMzMzM7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG4gIC51aS1zZWxlY3QtY2hvaWNlcy1yb3cuYWN0aXZlPmEge1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XFxuICB9XFxuICBcXG4gIC51aS1zZWxlY3QtbXVsdGlwbGUge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6M3B4IDNweCAwIDNweDtcXG4gIH1cXG4gIFxcbiAgLnVpLXNlbGVjdC1tdWx0aXBsZSBpbnB1dC51aS1zZWxlY3Qtc2VhcmNoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgLyogVG8gcHJldmVudCBkb3VibGUgYmFja2dyb3VuZCB3aGVuIGRpc2FibGVkICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgaGVpZ2h0OiAxLjY2NjZlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBcXG4gIH1cXG4gIC51aS1zZWxlY3QtbWF0Y2ggLmNsb3NlIHtcXG4gICAgICBmb250LXNpemU6IDEuNmVtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjc1O1xcbiAgfVxcbiAgXFxuICAudWktc2VsZWN0LW11bHRpcGxlIC51aS1zZWxlY3QtbWF0Y2gtaXRlbSB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIG1hcmdpbjogMCAzcHggM3B4IDA7XFxuICB9XFxuICAudWktc2VsZWN0LXRvZ2dsZSA+IC5jYXJldCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICByaWdodDogMTBweDtcXG4gICAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgfVxcblwiO1xudmFyIFNlbGVjdENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VsZWN0Q29tcG9uZW50KGVsZW1lbnQsIHNhbml0aXplcikge1xuICAgICAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgICAgICAgdGhpcy5hbGxvd0NsZWFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgdGhpcy5pZEZpZWxkID0gJ2lkJztcbiAgICAgICAgdGhpcy50ZXh0RmllbGQgPSAndGV4dCc7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5GaWVsZCA9ICdjaGlsZHJlbic7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMudHlwZWQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9wZW5lZCA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1PYmplY3RzID0gW107XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAgICAgICB0aGlzLmlucHV0TW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vcHRpb25zT3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5jbGlja2VkT3V0c2lkZSA9IHRoaXMuY2xpY2tlZE91dHNpZGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUsIFwiaXRlbXNcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuaXRlbU9iamVjdHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB8fCAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgaXRlbVtfdGhpcy50ZXh0RmllbGRdICYmIGl0ZW1bX3RoaXMuaWRGaWVsZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbU9iamVjdHMgPSB0aGlzLl9pdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgPyBuZXcgc2VsZWN0X2l0ZW1fMS5TZWxlY3RJdGVtKGl0ZW0pIDogbmV3IHNlbGVjdF9pdGVtXzEuU2VsZWN0SXRlbSh7IGlkOiBpdGVtW190aGlzLmlkRmllbGRdLCB0ZXh0OiBpdGVtW190aGlzLnRleHRGaWVsZF0sIGNoaWxkcmVuOiBpdGVtW190aGlzLmNoaWxkcmVuRmllbGRdIH0pKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJhY3RpdmVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHNlbGVjdGVkSXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkSXRlbXMgfHwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBhcmVJdGVtc1N0cmluZ3NfMSA9IHR5cGVvZiBzZWxlY3RlZEl0ZW1zWzBdID09PSAnc3RyaW5nJztcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSBzZWxlY3RlZEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGFyZUl0ZW1zU3RyaW5nc18xXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogeyBpZDogaXRlbVtfdGhpcy5pZEZpZWxkXSwgdGV4dDogaXRlbVtfdGhpcy50ZXh0RmllbGRdIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc2VsZWN0X2l0ZW1fMS5TZWxlY3RJdGVtKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJvcHRpb25zT3BlbmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9uc09wZW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNPcGVuZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub3BlbmVkLmVtaXQodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLnNhbml0aXplID0gZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5pbnB1dEV2ZW50ID0gZnVuY3Rpb24gKGUsIGlzVXBNb2RlKSB7XG4gICAgICAgIGlmIChpc1VwTW9kZSA9PT0gdm9pZCAwKSB7IGlzVXBNb2RlID0gZmFsc2U7IH1cbiAgICAgICAgLy8gdGFiXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVcE1vZGUgJiYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM4IHx8XG4gICAgICAgICAgICBlLmtleUNvZGUgPT09IDQwIHx8IGUua2V5Q29kZSA9PT0gMTMpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3NwYWNlXG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYudWktc2VsZWN0LWNvbnRhaW5lciA+IGlucHV0Jyk7XG4gICAgICAgICAgICBpZiAoIWVsLnZhbHVlIHx8IGVsLnZhbHVlLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5hY3RpdmVbdGhpcy5hY3RpdmUubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNjXG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWxcbiAgICAgICAgaWYgKCFpc1VwTW9kZSAmJiBlLmtleUNvZGUgPT09IDQ2KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuYWN0aXZlW3RoaXMuYWN0aXZlLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSAzNyAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmJlaGF2aW9yLmZpcnN0KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgaWYgKCFpc1VwTW9kZSAmJiBlLmtleUNvZGUgPT09IDM5ICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3IubGFzdCgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwXG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvci5wcmV2KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG93blxuICAgICAgICBpZiAoIWlzVXBNb2RlICYmIGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3IubmV4dCgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmluZGV4T2YodGhpcy5hY3RpdmVPcHRpb24pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlaGF2aW9yLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvci5maWx0ZXIobmV3IFJlZ0V4cChjb21tb25fMS5lc2NhcGVSZWdleHAodGhpcy5pbnB1dFZhbHVlKSwgJ2lnJykpO1xuICAgICAgICAgICAgdGhpcy5kb0V2ZW50KCd0eXBlZCcsIHRoaXMuaW5wdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9ICh0aGlzLmZpcnN0SXRlbUhhc0NoaWxkcmVuKSA/XG4gICAgICAgICAgICBuZXcgQ2hpbGRyZW5CZWhhdmlvcih0aGlzKSA6IG5ldyBHZW5lcmljQmVoYXZpb3IodGhpcyk7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlID09PSB0cnVlICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFjdGl2ZS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5uZXh0KHRoaXMuYWN0aXZlKTtcbiAgICAgICAgICAgIHRoaXMuZG9FdmVudCgncmVtb3ZlZCcsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5uZXh0KHRoaXMuYWN0aXZlKTtcbiAgICAgICAgICAgIHRoaXMuZG9FdmVudCgncmVtb3ZlZCcsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLmRvRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXNbdHlwZV0gJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbdHlwZV0ubmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3RlZCcgfHwgdHlwZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5jbGlja2VkT3V0c2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dE1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHRpb25zT3BlbmVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJmaXJzdEl0ZW1IYXNDaGlsZHJlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbU9iamVjdHNbMF0gJiYgdGhpcy5pdGVtT2JqZWN0c1swXS5oYXNDaGlsZHJlbigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdmFsO1xuICAgICAgICB0aGlzLmRhdGEuZW1pdCh0aGlzLmFjdGl2ZSk7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLm1hdGNoQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0TW9kZSA9ICF0aGlzLmlucHV0TW9kZTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNb2RlID09PSB0cnVlICYmICgodGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBlKSB8fCB0aGlzLm11bHRpcGxlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUb0lucHV0KCk7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5tYWluQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNb2RlID09PSB0cnVlIHx8IHRoaXMuX2Rpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudChldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHxcbiAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IChldmVudC5rZXlDb2RlID49IDM3ICYmIGV2ZW50LmtleUNvZGUgPD0gNDApKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHZhbHVlID0gU3RyaW5nXG4gICAgICAgICAgICAuZnJvbUNoYXJDb2RlKDk2IDw9IGV2ZW50LmtleUNvZGUgJiYgZXZlbnQua2V5Q29kZSA8PSAxMDUgPyBldmVudC5rZXlDb2RlIC0gNDggOiBldmVudC5rZXlDb2RlKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuZm9jdXNUb0lucHV0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5wdXRFdmVudChldmVudCk7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdEFjdGl2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbiA9IHZhbHVlO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb24uaWQgPT09IHZhbHVlLmlkO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5yZW1vdmVDbGljayA9IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlKHZhbHVlKTtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuZm9jdXNUb0lucHV0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7IHZhbHVlID0gJyc7IH1cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBfdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnVpLXNlbGVjdC1jb250YWluZXIgPiBpbnB1dCcpO1xuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5pdGVtT2JqZWN0c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiAoX3RoaXMubXVsdGlwbGUgPT09IGZhbHNlIHx8XG4gICAgICAgICAgICBfdGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiAhX3RoaXMuYWN0aXZlLmZpbmQoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG9wdGlvbi50ZXh0ID09PSBvLnRleHQ7IH0pKTsgfSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvci5maXJzdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc09wZW5lZCA9IHRydWU7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLmhpZGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0TW9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbnNPcGVuZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuc2VsZWN0QWN0aXZlTWF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5hY3RpdmVPcHRpb24pO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3RNYXRjaCA9IGZ1bmN0aW9uICh2YWx1ZSwgZSkge1xuICAgICAgICBpZiAoZSA9PT0gdm9pZCAwKSB7IGUgPSB2b2lkIDA7IH1cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5uZXh0KHRoaXMuYWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlWzBdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmRhdGEubmV4dCh0aGlzLmFjdGl2ZVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb0V2ZW50KCdzZWxlY3RlZCcsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5oaWRlT3B0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RvSW5wdXQoJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RvSW5wdXQoc2VsZWN0X3BpcGVzXzEuc3RyaXBUYWdzKHZhbHVlLnRleHQpKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aS1zZWxlY3QtY29udGFpbmVyJykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkNvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IFtzdHlsZXNdLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBmb3Jtc18xLk5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGNvcmVfMS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlbGVjdENvbXBvbmVudDsgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIlxcbiAgPGRpdiB0YWJpbmRleD1cXFwiMFxcXCJcXG4gICAgICpuZ0lmPVxcXCJtdWx0aXBsZSA9PT0gZmFsc2VcXFwiXFxuICAgICAoa2V5dXApPVxcXCJtYWluQ2xpY2soJGV2ZW50KVxcXCJcXG4gICAgIFtvZmZDbGlja109XFxcImNsaWNrZWRPdXRzaWRlXFxcIlxcbiAgICAgY2xhc3M9XFxcInVpLXNlbGVjdC1jb250YWluZXIgZHJvcGRvd24gb3BlblxcXCI+XFxuICAgIDxkaXYgW25nQ2xhc3NdPVxcXCJ7J3VpLWRpc2FibGVkJzogZGlzYWJsZWR9XFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LW1hdGNoXFxcIlxcbiAgICAgICAgICpuZ0lmPVxcXCIhaW5wdXRNb2RlXFxcIj5cXG4gICAgICA8c3BhbiB0YWJpbmRleD1cXFwiLTFcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBmb3JtLWNvbnRyb2wgdWktc2VsZWN0LXRvZ2dsZVxcXCJcXG4gICAgICAgICAgKGNsaWNrKT1cXFwibWF0Y2hDbGljaygkZXZlbnQpXFxcIlxcbiAgICAgICAgICBzdHlsZT1cXFwib3V0bGluZTogMDtcXFwiPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcImFjdGl2ZS5sZW5ndGggPD0gMFxcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1wbGFjZWhvbGRlciB0ZXh0LW11dGVkXFxcIj57e3BsYWNlaG9sZGVyfX08L3NwYW4+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwiYWN0aXZlLmxlbmd0aCA+IDBcXFwiIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2gtdGV4dCBwdWxsLWxlZnRcXFwiXFxuICAgICAgICAgICAgICBbbmdDbGFzc109XFxcInsndWktc2VsZWN0LWFsbG93LWNsZWFyJzogYWxsb3dDbGVhciAmJiBhY3RpdmUubGVuZ3RoID4gMH1cXFwiXFxuICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cXFwic2FuaXRpemUoYWN0aXZlWzBdLnRleHQpXFxcIj48L3NwYW4+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIHB1bGwtcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJjYXJldCBwdWxsLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8YSAqbmdJZj1cXFwiYWxsb3dDbGVhciAmJiBhY3RpdmUubGVuZ3RoPjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXhzIGJ0bi1saW5rIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDEwcHg7IHBhZGRpbmc6IDA7XFxcIiAoY2xpY2spPVxcXCJyZW1vdmVDbGljayhhY3RpdmVbMF0sICRldmVudClcXFwiPlxcbiAgICAgICAgICAgPGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L2k+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGF1dG9jb21wbGV0ZT1cXFwiZmFsc2VcXFwiIHRhYmluZGV4PVxcXCItMVxcXCJcXG4gICAgICAgICAgIChrZXlkb3duKT1cXFwiaW5wdXRFdmVudCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgKGtleXVwKT1cXFwiaW5wdXRFdmVudCgkZXZlbnQsIHRydWUpXFxcIlxcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cXFwiZGlzYWJsZWRcXFwiXFxuICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHVpLXNlbGVjdC1zZWFyY2hcXFwiXFxuICAgICAgICAgICAqbmdJZj1cXFwiaW5wdXRNb2RlXFxcIlxcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7YWN0aXZlLmxlbmd0aCA8PSAwID8gcGxhY2Vob2xkZXIgOiAnJ319XFxcIj5cXG4gICAgIDwhLS0gb3B0aW9ucyB0ZW1wbGF0ZSAtLT5cXG4gICAgIDx1bCAqbmdJZj1cXFwib3B0aW9uc09wZW5lZCAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCAmJiAhZmlyc3RJdGVtSGFzQ2hpbGRyZW5cXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcyBkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG4gICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBvIG9mIG9wdGlvbnNcXFwiIHJvbGU9XFxcIm1lbnVpdGVtXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIlxcbiAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVxcXCJpc0FjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAobW91c2VlbnRlcik9XFxcInNlbGVjdEFjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAoY2xpY2spPVxcXCJzZWxlY3RNYXRjaChvLCAkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgW2lubmVySHRtbF09XFxcInNhbml0aXplKG8udGV4dCB8IGhpZ2hsaWdodDppbnB1dFZhbHVlKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gIFxcbiAgICAgIDx1bCAqbmdJZj1cXFwib3B0aW9uc09wZW5lZCAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCAmJiBmaXJzdEl0ZW1IYXNDaGlsZHJlblxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzIGRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiPlxcbiAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGMgb2Ygb3B0aW9uczsgbGV0IGluZGV4PWluZGV4XFxcIiByb2xlPVxcXCJtZW51aXRlbVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRpdmlkZXIgZHJvcGRvd24tZGl2aWRlclxcXCIgKm5nSWY9XFxcImluZGV4ID4gMFxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWhlYWRlclxcXCI+e3tjLnRleHR9fTwvZGl2PlxcbiAgXFxuICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgbyBvZiBjLmNoaWxkcmVuXFxcIlxcbiAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1yb3dcXFwiXFxuICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XFxcImlzQWN0aXZlKG8pXFxcIlxcbiAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cXFwic2VsZWN0QWN0aXZlKG8pXFxcIlxcbiAgICAgICAgICAgICAgIChjbGljayk9XFxcInNlbGVjdE1hdGNoKG8sICRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IGlzQWN0aXZlKG8pfVxcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckh0bWxdPVxcXCJzYW5pdGl6ZShvLnRleHQgfCBoaWdobGlnaHQ6aW5wdXRWYWx1ZSlcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgdGFiaW5kZXg9XFxcIjBcXFwiXFxuICAgICAqbmdJZj1cXFwibXVsdGlwbGUgPT09IHRydWVcXFwiXFxuICAgICAoa2V5dXApPVxcXCJtYWluQ2xpY2soJGV2ZW50KVxcXCJcXG4gICAgIChmb2N1cyk9XFxcImZvY3VzVG9JbnB1dCgnJylcXFwiXFxuICAgICBbb2ZmQ2xpY2tdPVxcXCJjbGlja2VkT3V0c2lkZVxcXCJcXG4gICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIHVpLXNlbGVjdC1tdWx0aXBsZSBkcm9wZG93biBmb3JtLWNvbnRyb2wgb3BlblxcXCI+XFxuICAgIDxkaXYgW25nQ2xhc3NdPVxcXCJ7J3VpLWRpc2FibGVkJzogZGlzYWJsZWR9XFxcIj48L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCI+XFxuICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBhIG9mIGFjdGl2ZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaC1pdGVtIGJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi14c1xcXCJcXG4gICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiLTFcXFwiXFxuICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cXFwieydidG4tZGVmYXVsdCc6IHRydWV9XFxcIj5cXG4gICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2xvc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiA1cHg7IHBhZGRpbmc6IDA7XFxcIlxcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcInJlbW92ZUNsaWNrKGEsICRldmVudClcXFwiPiZ0aW1lczs8L2E+XFxuICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XFxcInNhbml0aXplKGEudGV4dClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgPC9zcGFuPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgIChrZXlkb3duKT1cXFwiaW5wdXRFdmVudCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgKGtleXVwKT1cXFwiaW5wdXRFdmVudCgkZXZlbnQsIHRydWUpXFxcIlxcbiAgICAgICAgICAgKGNsaWNrKT1cXFwibWF0Y2hDbGljaygkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cXFwiZGlzYWJsZWRcXFwiXFxuICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgYXV0b2NvcnJlY3Q9XFxcIm9mZlxcXCJcXG4gICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVxcXCJvZmZcXFwiXFxuICAgICAgICAgICBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdWktc2VsZWN0LXNlYXJjaFxcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2FjdGl2ZS5sZW5ndGggPD0gMCA/IHBsYWNlaG9sZGVyIDogJyd9fVxcXCJcXG4gICAgICAgICAgIHJvbGU9XFxcImNvbWJvYm94XFxcIj5cXG4gICAgIDwhLS0gb3B0aW9ucyB0ZW1wbGF0ZSAtLT5cXG4gICAgIDx1bCAqbmdJZj1cXFwib3B0aW9uc09wZW5lZCAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCAmJiAhZmlyc3RJdGVtSGFzQ2hpbGRyZW5cXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcyBkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG4gICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBvIG9mIG9wdGlvbnNcXFwiIHJvbGU9XFxcIm1lbnVpdGVtXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIlxcbiAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVxcXCJpc0FjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAobW91c2VlbnRlcik9XFxcInNlbGVjdEFjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAoY2xpY2spPVxcXCJzZWxlY3RNYXRjaChvLCAkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgW2lubmVySHRtbF09XFxcInNhbml0aXplKG8udGV4dCB8IGhpZ2hsaWdodDppbnB1dFZhbHVlKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG4gIFxcbiAgICAgIDx1bCAqbmdJZj1cXFwib3B0aW9uc09wZW5lZCAmJiBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCAmJiBmaXJzdEl0ZW1IYXNDaGlsZHJlblxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzIGRyb3Bkb3duLW1lbnVcXFwiIHJvbGU9XFxcIm1lbnVcXFwiPlxcbiAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGMgb2Ygb3B0aW9uczsgbGV0IGluZGV4PWluZGV4XFxcIiByb2xlPVxcXCJtZW51aXRlbVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRpdmlkZXIgZHJvcGRvd24tZGl2aWRlclxcXCIgKm5nSWY9XFxcImluZGV4ID4gMFxcXCI+PC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWhlYWRlclxcXCI+e3tjLnRleHR9fTwvZGl2PlxcbiAgXFxuICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgbyBvZiBjLmNoaWxkcmVuXFxcIlxcbiAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1yb3dcXFwiXFxuICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XFxcImlzQWN0aXZlKG8pXFxcIlxcbiAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cXFwic2VsZWN0QWN0aXZlKG8pXFxcIlxcbiAgICAgICAgICAgICAgIChjbGljayk9XFxcInNlbGVjdE1hdGNoKG8sICRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IGlzQWN0aXZlKG8pfVxcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckh0bWxdPVxcXCJzYW5pdGl6ZShvLnRleHQgfCBoaWdobGlnaHQ6aW5wdXRWYWx1ZSlcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICA8L2Rpdj5cXG4gIFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBTZWxlY3RDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIHsgdHlwZTogcGxhdGZvcm1fYnJvd3Nlcl8xLkRvbVNhbml0aXplciwgfSxcbiAgICBdOyB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgJ2FsbG93Q2xlYXInOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAncGxhY2Vob2xkZXInOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnaWRGaWVsZCc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICd0ZXh0RmllbGQnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnY2hpbGRyZW5GaWVsZCc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICdtdWx0aXBsZSc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICdpdGVtcyc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICdkaXNhYmxlZCc6IFt7IHR5cGU6IGNvcmVfMS5JbnB1dCB9LF0sXG4gICAgICAgICdhY3RpdmUnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnZGF0YSc6IFt7IHR5cGU6IGNvcmVfMS5PdXRwdXQgfSxdLFxuICAgICAgICAnc2VsZWN0ZWQnOiBbeyB0eXBlOiBjb3JlXzEuT3V0cHV0IH0sXSxcbiAgICAgICAgJ3JlbW92ZWQnOiBbeyB0eXBlOiBjb3JlXzEuT3V0cHV0IH0sXSxcbiAgICAgICAgJ3R5cGVkJzogW3sgdHlwZTogY29yZV8xLk91dHB1dCB9LF0sXG4gICAgICAgICdvcGVuZWQnOiBbeyB0eXBlOiBjb3JlXzEuT3V0cHV0IH0sXSxcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3RDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5TZWxlY3RDb21wb25lbnQgPSBTZWxlY3RDb21wb25lbnQ7XG52YXIgQmVoYXZpb3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJlaGF2aW9yKGFjdG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9uc01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hY3RvciA9IGFjdG9yO1xuICAgIH1cbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZmlsbE9wdGlvbnNNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub3B0aW9uc01hcC5jbGVhcigpO1xuICAgICAgICB2YXIgc3RhcnRQb3MgPSAwO1xuICAgICAgICB0aGlzLmFjdG9yLml0ZW1PYmplY3RzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBzdGFydFBvcyA9IGl0ZW0uZmlsbENoaWxkcmVuSGFzaChfdGhpcy5vcHRpb25zTWFwLCBzdGFydFBvcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUgPSBmdW5jdGlvbiAob3B0aW9uc01hcCkge1xuICAgICAgICBpZiAob3B0aW9uc01hcCA9PT0gdm9pZCAwKSB7IG9wdGlvbnNNYXAgPSB2b2lkIDA7IH1cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuYWN0b3IuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy51aS1zZWxlY3QtY2hvaWNlcy1jb250ZW50Jyk7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNob2ljZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnVpLXNlbGVjdC1jaG9pY2VzLXJvdycpO1xuICAgICAgICBpZiAoY2hvaWNlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleChvcHRpb25zTWFwKTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoaWdobGlnaHRlZCA9IGNob2ljZXNbYWN0aXZlSW5kZXhdO1xuICAgICAgICBpZiAoIWhpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc1kgPSBoaWdobGlnaHRlZC5vZmZzZXRUb3AgKyBoaWdobGlnaHRlZC5jbGllbnRIZWlnaHQgLSBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgaWYgKHBvc1kgPiBoZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgKz0gcG9zWSAtIGhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwb3NZIDwgaGlnaGxpZ2h0ZWQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wIC09IGhpZ2hsaWdodGVkLmNsaWVudEhlaWdodCAtIHBvc1k7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5nZXRBY3RpdmVJbmRleCA9IGZ1bmN0aW9uIChvcHRpb25zTWFwKSB7XG4gICAgICAgIGlmIChvcHRpb25zTWFwID09PSB2b2lkIDApIHsgb3B0aW9uc01hcCA9IHZvaWQgMDsgfVxuICAgICAgICB2YXIgYWkgPSB0aGlzLmFjdG9yLm9wdGlvbnMuaW5kZXhPZih0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbik7XG4gICAgICAgIGlmIChhaSA8IDAgJiYgb3B0aW9uc01hcCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBhaSA9IG9wdGlvbnNNYXAuZ2V0KHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uLmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWk7XG4gICAgfTtcbiAgICByZXR1cm4gQmVoYXZpb3I7XG59KCkpO1xuZXhwb3J0cy5CZWhhdmlvciA9IEJlaGF2aW9yO1xudmFyIEdlbmVyaWNCZWhhdmlvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdlbmVyaWNCZWhhdmlvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHZW5lcmljQmVoYXZpb3IoYWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgYWN0b3IpO1xuICAgIH1cbiAgICBHZW5lcmljQmVoYXZpb3IucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3Iub3B0aW9uc1swXTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBHZW5lcmljQmVoYXZpb3IucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3Rvci5vcHRpb25zW3RoaXMuYWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxXTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBHZW5lcmljQmVoYXZpb3IucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWN0b3Iub3B0aW9ucy5pbmRleE9mKHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uKTtcbiAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yXG4gICAgICAgICAgICAub3B0aW9uc1tpbmRleCAtIDEgPCAwID8gdGhpcy5hY3Rvci5vcHRpb25zLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEdlbmVyaWNCZWhhdmlvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hY3Rvci5vcHRpb25zLmluZGV4T2YodGhpcy5hY3Rvci5hY3RpdmVPcHRpb24pO1xuICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3JcbiAgICAgICAgICAgIC5vcHRpb25zW2luZGV4ICsgMSA+IHRoaXMuYWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMV07XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgR2VuZXJpY0JlaGF2aW9yLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmFjdG9yLml0ZW1PYmplY3RzXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RfcGlwZXNfMS5zdHJpcFRhZ3Mob3B0aW9uLnRleHQpLm1hdGNoKHF1ZXJ5KSAmJlxuICAgICAgICAgICAgICAgIChfdGhpcy5hY3Rvci5tdWx0aXBsZSA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgICAgICAgICAgKF90aGlzLmFjdG9yLm11bHRpcGxlID09PSB0cnVlICYmIF90aGlzLmFjdG9yLmFjdGl2ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQ7IH0pLmluZGV4T2Yob3B0aW9uLmlkKSA8IDApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0b3Iub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLmFjdG9yLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yLm9wdGlvbnNbMF07XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdlbmVyaWNCZWhhdmlvcjtcbn0oQmVoYXZpb3IpKTtcbmV4cG9ydHMuR2VuZXJpY0JlaGF2aW9yID0gR2VuZXJpY0JlaGF2aW9yO1xudmFyIENoaWxkcmVuQmVoYXZpb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGlsZHJlbkJlaGF2aW9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoaWxkcmVuQmVoYXZpb3IoYWN0b3IpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgYWN0b3IpO1xuICAgIH1cbiAgICBDaGlsZHJlbkJlaGF2aW9yLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yLm9wdGlvbnNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgIHRoaXMuZmlsbE9wdGlvbnNNYXAoKTtcbiAgICAgICAgdGhpcy5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKHRoaXMub3B0aW9uc01hcCk7XG4gICAgfTtcbiAgICBDaGlsZHJlbkJlaGF2aW9yLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9XG4gICAgICAgICAgICB0aGlzLmFjdG9yXG4gICAgICAgICAgICAgICAgLm9wdGlvbnNbdGhpcy5hY3Rvci5vcHRpb25zLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuW3RoaXMuYWN0b3Iub3B0aW9uc1t0aGlzLmFjdG9yLm9wdGlvbnMubGVuZ3RoIC0gMV0uY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMuZmlsbE9wdGlvbnNNYXAoKTtcbiAgICAgICAgdGhpcy5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKHRoaXMub3B0aW9uc01hcCk7XG4gICAgfTtcbiAgICBDaGlsZHJlbkJlaGF2aW9yLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5kZXhQYXJlbnQgPSB0aGlzLmFjdG9yLm9wdGlvbnNcbiAgICAgICAgICAgIC5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gX3RoaXMuYWN0b3IuYWN0aXZlT3B0aW9uLnBhcmVudCAmJiBfdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24ucGFyZW50LmlkID09PSBvcHRpb24uaWQ7IH0pO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFjdG9yLm9wdGlvbnNbaW5kZXhQYXJlbnRdLmNoaWxkcmVuXG4gICAgICAgICAgICAuZmluZEluZGV4KGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIF90aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiAmJiBfdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24uaWQgPT09IG9wdGlvbi5pZDsgfSk7XG4gICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50XS5jaGlsZHJlbltpbmRleCAtIDFdO1xuICAgICAgICBpZiAoIXRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50IC0gMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLm9wdGlvbnNbaW5kZXhQYXJlbnQgLSAxXVxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bdGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50IC0gMV0uY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sYXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWxsT3B0aW9uc01hcCgpO1xuICAgICAgICB0aGlzLmVuc3VyZUhpZ2hsaWdodFZpc2libGUodGhpcy5vcHRpb25zTWFwKTtcbiAgICB9O1xuICAgIENoaWxkcmVuQmVoYXZpb3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbmRleFBhcmVudCA9IHRoaXMuYWN0b3Iub3B0aW9uc1xuICAgICAgICAgICAgLmZpbmRJbmRleChmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBfdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24ucGFyZW50ICYmIF90aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbi5wYXJlbnQuaWQgPT09IG9wdGlvbi5pZDsgfSk7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWN0b3Iub3B0aW9uc1tpbmRleFBhcmVudF0uY2hpbGRyZW5cbiAgICAgICAgICAgIC5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gX3RoaXMuYWN0b3IuYWN0aXZlT3B0aW9uICYmIF90aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbi5pZCA9PT0gb3B0aW9uLmlkOyB9KTtcbiAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yLm9wdGlvbnNbaW5kZXhQYXJlbnRdLmNoaWxkcmVuW2luZGV4ICsgMV07XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdG9yLm9wdGlvbnNbaW5kZXhQYXJlbnQgKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50ICsgMV0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5maXJzdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsbE9wdGlvbnNNYXAoKTtcbiAgICAgICAgdGhpcy5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKHRoaXMub3B0aW9uc01hcCk7XG4gICAgfTtcbiAgICBDaGlsZHJlbkJlaGF2aW9yLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIG9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHZhciBzdGFydFBvcyA9IDA7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmFjdG9yLml0ZW1PYmplY3RzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHNpID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gc2kuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIHF1ZXJ5LnRlc3Qob3B0aW9uLnRleHQpOyB9KTtcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gc2kuZmlsbENoaWxkcmVuSGFzaChvcHRpb25zTWFwLCBzdGFydFBvcyk7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdTaSA9IHNpLmdldFNpbWlsYXIoKTtcbiAgICAgICAgICAgICAgICBuZXdTaS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChuZXdTaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rvci5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHRoaXMuYWN0b3Iub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3Iub3B0aW9uc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZS5jYWxsKHRoaXMsIG9wdGlvbnNNYXApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2hpbGRyZW5CZWhhdmlvcjtcbn0oQmVoYXZpb3IpKTtcbmV4cG9ydHMuQ2hpbGRyZW5CZWhhdmlvciA9IENoaWxkcmVuQmVoYXZpb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgNyA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgU2VsZWN0SXRlbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VsZWN0SXRlbShzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy50ZXh0ID0gc291cmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHNvdXJjZS5pZCB8fCBzb3VyY2UudGV4dDtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHNvdXJjZS50ZXh0O1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5jaGlsZHJlbiAmJiBzb3VyY2UudGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBzb3VyY2UuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gbmV3IFNlbGVjdEl0ZW0oYyk7XG4gICAgICAgICAgICAgICAgICAgIHIucGFyZW50ID0gX3RoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IHNvdXJjZS50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFNlbGVjdEl0ZW0ucHJvdG90eXBlLmZpbGxDaGlsZHJlbkhhc2ggPSBmdW5jdGlvbiAob3B0aW9uc01hcCwgc3RhcnRJbmRleCkge1xuICAgICAgICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgb3B0aW9uc01hcC5zZXQoY2hpbGQuaWQsIGkrKyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaTtcbiAgICB9O1xuICAgIFNlbGVjdEl0ZW0ucHJvdG90eXBlLmhhc0NoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICBTZWxlY3RJdGVtLnByb3RvdHlwZS5nZXRTaW1pbGFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IG5ldyBTZWxlY3RJdGVtKGZhbHNlKTtcbiAgICAgICAgci5pZCA9IHRoaXMuaWQ7XG4gICAgICAgIHIudGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgci5wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0SXRlbTtcbn0oKSk7XG5leHBvcnRzLlNlbGVjdEl0ZW0gPSBTZWxlY3RJdGVtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0LWl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDEwMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgNyA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuX19leHBvcnQocmVxdWlyZSgnLi9zZWxlY3QvY29tbW9uJykpO1xuX19leHBvcnQocmVxdWlyZSgnLi9zZWxlY3Qvb2ZmLWNsaWNrJykpO1xuX19leHBvcnQocmVxdWlyZSgnLi9zZWxlY3Qvc2VsZWN0Lm1vZHVsZScpKTtcbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VsZWN0L3NlbGVjdCcpKTtcbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VsZWN0L3NlbGVjdC1pdGVtJykpO1xuX19leHBvcnQocmVxdWlyZSgnLi9zZWxlY3Qvc2VsZWN0LXBpcGVzJykpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA3IDkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21tb24nKTtcbnZhciBzZWxlY3RfMSA9IHJlcXVpcmUoJy4vc2VsZWN0Jyk7XG52YXIgc2VsZWN0X3BpcGVzXzEgPSByZXF1aXJlKCcuL3NlbGVjdC1waXBlcycpO1xudmFyIG9mZl9jbGlja18xID0gcmVxdWlyZSgnLi9vZmYtY2xpY2snKTtcbnZhciBTZWxlY3RNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdE1vZHVsZSgpIHtcbiAgICB9XG4gICAgU2VsZWN0TW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLk5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRzOiBbY29tbW9uXzEuQ29tbW9uTW9kdWxlXSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbc2VsZWN0XzEuU2VsZWN0Q29tcG9uZW50LCBzZWxlY3RfcGlwZXNfMS5IaWdobGlnaHRQaXBlLCBvZmZfY2xpY2tfMS5PZmZDbGlja0RpcmVjdGl2ZV0sXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtzZWxlY3RfMS5TZWxlY3RDb21wb25lbnQsIHNlbGVjdF9waXBlc18xLkhpZ2hsaWdodFBpcGUsIG9mZl9jbGlja18xLk9mZkNsaWNrRGlyZWN0aXZlXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgU2VsZWN0TW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIFNlbGVjdE1vZHVsZTtcbn0oKSk7XG5leHBvcnRzLlNlbGVjdE1vZHVsZSA9IFNlbGVjdE1vZHVsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3Qvc2VsZWN0L3NlbGVjdC5tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgNyA5IiwiLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHY1LjEuMVxuICogKGMpIDIwMTAtMjAxNyBHb29nbGUsIEluYy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUsIE5nTW9kdWxlLCBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IMm1Z2V0RE9NIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQSBiYWNrZW5kIGZvciBodHRwIHRoYXQgdXNlcyB0aGUgYFhNTEh0dHBSZXF1ZXN0YCBicm93c2VyIEFQSS5cbiAqXG4gKiBUYWtlIGNhcmUgbm90IHRvIGV2YWx1YXRlIHRoaXMgaW4gbm9uLWJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgQnJvd3NlclhociA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcm93c2VyWGhyKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJyb3dzZXJYaHIucHJvdG90eXBlLmJ1aWxkID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiAvKiogQHR5cGUgez99ICovICgobmV3IFhNTEh0dHBSZXF1ZXN0KCkpKTsgfTtcbiAgICBCcm93c2VyWGhyLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQnJvd3Nlclhoci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBCcm93c2VyWGhyO1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG52YXIgUmVxdWVzdE1ldGhvZCA9IHtcbiAgICBHZXQ6IDAsXG4gICAgUG9zdDogMSxcbiAgICBQdXQ6IDIsXG4gICAgRGVsZXRlOiAzLFxuICAgIE9wdGlvbnM6IDQsXG4gICAgSGVhZDogNSxcbiAgICBQYXRjaDogNixcbn07XG5SZXF1ZXN0TWV0aG9kW1JlcXVlc3RNZXRob2QuR2V0XSA9IFwiR2V0XCI7XG5SZXF1ZXN0TWV0aG9kW1JlcXVlc3RNZXRob2QuUG9zdF0gPSBcIlBvc3RcIjtcblJlcXVlc3RNZXRob2RbUmVxdWVzdE1ldGhvZC5QdXRdID0gXCJQdXRcIjtcblJlcXVlc3RNZXRob2RbUmVxdWVzdE1ldGhvZC5EZWxldGVdID0gXCJEZWxldGVcIjtcblJlcXVlc3RNZXRob2RbUmVxdWVzdE1ldGhvZC5PcHRpb25zXSA9IFwiT3B0aW9uc1wiO1xuUmVxdWVzdE1ldGhvZFtSZXF1ZXN0TWV0aG9kLkhlYWRdID0gXCJIZWFkXCI7XG5SZXF1ZXN0TWV0aG9kW1JlcXVlc3RNZXRob2QuUGF0Y2hdID0gXCJQYXRjaFwiO1xuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG52YXIgUmVhZHlTdGF0ZSA9IHtcbiAgICBVbnNlbnQ6IDAsXG4gICAgT3BlbjogMSxcbiAgICBIZWFkZXJzUmVjZWl2ZWQ6IDIsXG4gICAgTG9hZGluZzogMyxcbiAgICBEb25lOiA0LFxuICAgIENhbmNlbGxlZDogNSxcbn07XG5SZWFkeVN0YXRlW1JlYWR5U3RhdGUuVW5zZW50XSA9IFwiVW5zZW50XCI7XG5SZWFkeVN0YXRlW1JlYWR5U3RhdGUuT3Blbl0gPSBcIk9wZW5cIjtcblJlYWR5U3RhdGVbUmVhZHlTdGF0ZS5IZWFkZXJzUmVjZWl2ZWRdID0gXCJIZWFkZXJzUmVjZWl2ZWRcIjtcblJlYWR5U3RhdGVbUmVhZHlTdGF0ZS5Mb2FkaW5nXSA9IFwiTG9hZGluZ1wiO1xuUmVhZHlTdGF0ZVtSZWFkeVN0YXRlLkRvbmVdID0gXCJEb25lXCI7XG5SZWFkeVN0YXRlW1JlYWR5U3RhdGUuQ2FuY2VsbGVkXSA9IFwiQ2FuY2VsbGVkXCI7XG4vKiogQGVudW0ge251bWJlcn0gKi9cbnZhciBSZXNwb25zZVR5cGUgPSB7XG4gICAgQmFzaWM6IDAsXG4gICAgQ29yczogMSxcbiAgICBEZWZhdWx0OiAyLFxuICAgIEVycm9yOiAzLFxuICAgIE9wYXF1ZTogNCxcbn07XG5SZXNwb25zZVR5cGVbUmVzcG9uc2VUeXBlLkJhc2ljXSA9IFwiQmFzaWNcIjtcblJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGUuQ29yc10gPSBcIkNvcnNcIjtcblJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGUuRGVmYXVsdF0gPSBcIkRlZmF1bHRcIjtcblJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGUuRXJyb3JdID0gXCJFcnJvclwiO1xuUmVzcG9uc2VUeXBlW1Jlc3BvbnNlVHlwZS5PcGFxdWVdID0gXCJPcGFxdWVcIjtcbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xudmFyIENvbnRlbnRUeXBlID0ge1xuICAgIE5PTkU6IDAsXG4gICAgSlNPTjogMSxcbiAgICBGT1JNOiAyLFxuICAgIEZPUk1fREFUQTogMyxcbiAgICBURVhUOiA0LFxuICAgIEJMT0I6IDUsXG4gICAgQVJSQVlfQlVGRkVSOiA2LFxufTtcbkNvbnRlbnRUeXBlW0NvbnRlbnRUeXBlLk5PTkVdID0gXCJOT05FXCI7XG5Db250ZW50VHlwZVtDb250ZW50VHlwZS5KU09OXSA9IFwiSlNPTlwiO1xuQ29udGVudFR5cGVbQ29udGVudFR5cGUuRk9STV0gPSBcIkZPUk1cIjtcbkNvbnRlbnRUeXBlW0NvbnRlbnRUeXBlLkZPUk1fREFUQV0gPSBcIkZPUk1fREFUQVwiO1xuQ29udGVudFR5cGVbQ29udGVudFR5cGUuVEVYVF0gPSBcIlRFWFRcIjtcbkNvbnRlbnRUeXBlW0NvbnRlbnRUeXBlLkJMT0JdID0gXCJCTE9CXCI7XG5Db250ZW50VHlwZVtDb250ZW50VHlwZS5BUlJBWV9CVUZGRVJdID0gXCJBUlJBWV9CVUZGRVJcIjtcbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xudmFyIFJlc3BvbnNlQ29udGVudFR5cGUgPSB7XG4gICAgVGV4dDogMCxcbiAgICBKc29uOiAxLFxuICAgIEFycmF5QnVmZmVyOiAyLFxuICAgIEJsb2I6IDMsXG59O1xuUmVzcG9uc2VDb250ZW50VHlwZVtSZXNwb25zZUNvbnRlbnRUeXBlLlRleHRdID0gXCJUZXh0XCI7XG5SZXNwb25zZUNvbnRlbnRUeXBlW1Jlc3BvbnNlQ29udGVudFR5cGUuSnNvbl0gPSBcIkpzb25cIjtcblJlc3BvbnNlQ29udGVudFR5cGVbUmVzcG9uc2VDb250ZW50VHlwZS5BcnJheUJ1ZmZlcl0gPSBcIkFycmF5QnVmZmVyXCI7XG5SZXNwb25zZUNvbnRlbnRUeXBlW1Jlc3BvbnNlQ29udGVudFR5cGUuQmxvYl0gPSBcIkJsb2JcIjtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgW0hlYWRlcnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IZWFkZXJzL0hlYWRlcnMpLCBhc1xuICogc3BlY2lmaWVkIGluIHRoZSBbRmV0Y2ggU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2hlYWRlcnMtY2xhc3MpLlxuICpcbiAqIFRoZSBvbmx5IGtub3duIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIGBIZWFkZXJzYCBpbXBsZW1lbnRhdGlvbiBhbmQgdGhlIHNwZWMgaXMgdGhlXG4gKiBsYWNrIG9mIGFuIGBlbnRyaWVzYCBtZXRob2QuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7SGVhZGVyc30gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqXG4gKiB2YXIgZmlyc3RIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAqIGZpcnN0SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdpbWFnZS9qcGVnJyk7XG4gKiBjb25zb2xlLmxvZyhmaXJzdEhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkgLy8naW1hZ2UvanBlZydcbiAqXG4gKiAvLyBDcmVhdGUgaGVhZGVycyBmcm9tIFBsYWluIE9sZCBKYXZhU2NyaXB0IE9iamVjdFxuICogdmFyIHNlY29uZEhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gKiAgICdYLU15LUN1c3RvbS1IZWFkZXInOiAnQW5ndWxhcidcbiAqIH0pO1xuICogY29uc29sZS5sb2coc2Vjb25kSGVhZGVycy5nZXQoJ1gtTXktQ3VzdG9tLUhlYWRlcicpKTsgLy8nQW5ndWxhcidcbiAqXG4gKiB2YXIgdGhpcmRIZWFkZXJzID0gbmV3IEhlYWRlcnMoc2Vjb25kSGVhZGVycyk7XG4gKiBjb25zb2xlLmxvZyh0aGlyZEhlYWRlcnMuZ2V0KCdYLU15LUN1c3RvbS1IZWFkZXInKSk7IC8vJ0FuZ3VsYXInXG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBIZWFkZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE8odmljYik6IGFueSAtPiBzdHJpbmd8c3RyaW5nW11cbiAgICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsIGhlYWRlciBuYW1lcyBhcmUgbG93ZXIgY2FzZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faGVhZGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxcQGludGVybmFsIG1hcCBsb3dlciBjYXNlIG5hbWVzIHRvIGFjdHVhbCBuYW1lc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbm9ybWFsaXplZE5hbWVzID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoIWhlYWRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgICAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWVzLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoaGVhZGVyc1tuYW1lXSkgPyBoZWFkZXJzW25hbWVdIDogW2hlYWRlcnNbbmFtZV1dO1xuICAgICAgICAgICAgX3RoaXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgSGVhZGVycyBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBET01TdHJpbmcgb2YgUmVzcG9uc2UgSGVhZGVyc1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgSGVhZGVycyBpbnN0YW5jZSBmcm9tIHRoZSBnaXZlbiBET01TdHJpbmcgb2YgUmVzcG9uc2UgSGVhZGVyc1xuICAgICAqIEBwYXJhbSB7P30gaGVhZGVyc1N0cmluZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5mcm9tUmVzcG9uc2VIZWFkZXJTdHJpbmcgPSAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEhlYWRlcnMgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gRE9NU3RyaW5nIG9mIFJlc3BvbnNlIEhlYWRlcnNcbiAgICAgKiBAcGFyYW0gez99IGhlYWRlcnNTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChoZWFkZXJzU3RyaW5nKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzU3RyaW5nLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5hbWVfMSA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gbGluZS5zbGljZShpbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnNldChuYW1lXzEsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIGhlYWRlciB0byBleGlzdGluZyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gaGVhZGVyIG5hbWUuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIGhlYWRlciB0byBleGlzdGluZyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gaGVhZGVyIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gLyoqXG4gICAgICogQXBwZW5kcyBhIGhlYWRlciB0byBleGlzdGluZyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gaGVhZGVyIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlcyA9IHRoaXMuZ2V0QWxsKG5hbWUpO1xuICAgICAgICBpZiAodmFsdWVzID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYWxsIGhlYWRlciB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYWxsIGhlYWRlciB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuZGVsZXRlID0gLyoqXG4gICAgICogRGVsZXRlcyBhbGwgaGVhZGVyIHZhbHVlcyBmb3IgdGhlIGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsY05hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZWROYW1lcy5kZWxldGUobGNOYW1lKTtcbiAgICAgICAgdGhpcy5faGVhZGVycy5kZWxldGUobGNOYW1lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5faGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZXMsIGxjTmFtZSkgeyByZXR1cm4gZm4odmFsdWVzLCBfdGhpcy5fbm9ybWFsaXplZE5hbWVzLmdldChsY05hbWUpLCBfdGhpcy5faGVhZGVycyk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBmaXJzdCBoZWFkZXIgdGhhdCBtYXRjaGVzIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBmaXJzdCBoZWFkZXIgdGhhdCBtYXRjaGVzIGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSAvKipcbiAgICAgKiBSZXR1cm5zIGZpcnN0IGhlYWRlciB0aGF0IG1hdGNoZXMgZ2l2ZW4gbmFtZS5cbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlcyA9IHRoaXMuZ2V0QWxsKG5hbWUpO1xuICAgICAgICBpZiAodmFsdWVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzLmxlbmd0aCA+IDAgPyB2YWx1ZXNbMF0gOiBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGZvciBleGlzdGVuY2Ugb2YgaGVhZGVyIGJ5IGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGZvciBleGlzdGVuY2Ugb2YgaGVhZGVyIGJ5IGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSAvKipcbiAgICAgKiBDaGVja3MgZm9yIGV4aXN0ZW5jZSBvZiBoZWFkZXIgYnkgZ2l2ZW4gbmFtZS5cbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiB0aGlzLl9oZWFkZXJzLmhhcyhuYW1lLnRvTG93ZXJDYXNlKCkpOyB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hbWVzIG9mIHRoZSBoZWFkZXJzXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmFtZXMgb2YgdGhlIGhlYWRlcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYW1lcyBvZiB0aGUgaGVhZGVyc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9ub3JtYWxpemVkTmFtZXMudmFsdWVzKCkpOyB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgb3Igb3ZlcnJpZGVzIGhlYWRlciB2YWx1ZSBmb3IgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBTZXRzIG9yIG92ZXJyaWRlcyBoZWFkZXIgdmFsdWUgZm9yIGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gLyoqXG4gICAgICogU2V0cyBvciBvdmVycmlkZXMgaGVhZGVyIHZhbHVlIGZvciBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWFkZXJzLnNldChuYW1lLnRvTG93ZXJDYXNlKCksIFt2YWx1ZS5qb2luKCcsJyldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlcnMuc2V0KG5hbWUudG9Mb3dlckNhc2UoKSwgW3ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXlCZVNldE5vcm1hbGl6ZWROYW1lKG5hbWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB2YWx1ZXMgb2YgYWxsIGhlYWRlcnMuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB2YWx1ZXMgb2YgYWxsIGhlYWRlcnMuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSAvKipcbiAgICAgKiBSZXR1cm5zIHZhbHVlcyBvZiBhbGwgaGVhZGVycy5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faGVhZGVycy52YWx1ZXMoKSk7IH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBzdHJpbmcgb2YgYWxsIGhlYWRlcnMuXG4gICAgICovXG4gICAgLy8gVE9ETyh2aWNiKTogcmV0dXJucyB7W25hbWU6IHN0cmluZ106IHN0cmluZ1tdfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RyaW5nIG9mIGFsbCBoZWFkZXJzLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUudG9KU09OID0gLyoqXG4gICAgICogUmV0dXJucyBzdHJpbmcgb2YgYWxsIGhlYWRlcnMuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHNlcmlhbGl6ZWQgPSB7fTtcbiAgICAgICAgdGhpcy5faGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZXMsIG5hbWUpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHNwbGl0ID0gW107XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gc3BsaXQucHVzaC5hcHBseShzcGxpdCwgdi5zcGxpdCgnLCcpKTsgfSk7XG4gICAgICAgICAgICBzZXJpYWxpemVkWy8qKiBAdHlwZSB7P30gKi8gKChfdGhpcy5fbm9ybWFsaXplZE5hbWVzLmdldChuYW1lKSkpXSA9IHNwbGl0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGxpc3Qgb2YgaGVhZGVyIHZhbHVlcyBmb3IgYSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgbGlzdCBvZiBoZWFkZXIgdmFsdWVzIGZvciBhIGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5nZXRBbGwgPSAvKipcbiAgICAgKiBSZXR1cm5zIGxpc3Qgb2YgaGVhZGVyIHZhbHVlcyBmb3IgYSBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5faGVhZGVycy5nZXQobmFtZS50b0xvd2VyQ2FzZSgpKSB8fCBudWxsIDogbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoJ1wiZW50cmllc1wiIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gSGVhZGVycyBjbGFzcycpOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUubWF5QmVTZXROb3JtYWxpemVkTmFtZSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGNOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIXRoaXMuX25vcm1hbGl6ZWROYW1lcy5oYXMobGNOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fbm9ybWFsaXplZE5hbWVzLnNldChsY05hbWUsIG5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSGVhZGVycztcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBhIHJlc3BvbnNlIG9wdGlvbnMgb2JqZWN0IHRvIGJlIG9wdGlvbmFsbHkgcHJvdmlkZWQgd2hlbiBpbnN0YW50aWF0aW5nIGFcbiAqIHtcXEBsaW5rIFJlc3BvbnNlfS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIGJhc2VkIG9uIHRoZSBgUmVzcG9uc2VJbml0YCBkZXNjcmlwdGlvbiBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVzcG9uc2Vpbml0KS5cbiAqXG4gKiBBbGwgdmFsdWVzIGFyZSBudWxsIGJ5IGRlZmF1bHQuIFR5cGljYWwgZGVmYXVsdHMgY2FuIGJlIGZvdW5kIGluIHRoZVxuICoge1xcQGxpbmsgQmFzZVJlc3BvbnNlT3B0aW9uc30gY2xhc3MsIHdoaWNoIHN1Yi1jbGFzc2VzIGBSZXNwb25zZU9wdGlvbnNgLlxuICpcbiAqIFRoaXMgY2xhc3MgbWF5IGJlIHVzZWQgaW4gdGVzdHMgdG8gYnVpbGQge1xcQGxpbmsgUmVzcG9uc2UgUmVzcG9uc2VzfSBmb3JcbiAqIG1vY2sgcmVzcG9uc2VzIChzZWUge1xcQGxpbmsgTW9ja0JhY2tlbmR9KS5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvUDlKa2s4ZThjejZOVnpiY3hFc0Q/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge1Jlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKlxuICogdmFyIG9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAqICAgYm9keTogJ3tcIm5hbWVcIjpcIkplZmZcIn0nXG4gKiB9KTtcbiAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucyk7XG4gKlxuICogY29uc29sZS5sb2coJ3Jlcy5qc29uKCk6JywgcmVzLmpzb24oKSk7IC8vIE9iamVjdCB7bmFtZTogXCJKZWZmXCJ9XG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBSZXNwb25zZU9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzcG9uc2VPcHRpb25zKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICAgICAgdmFyIGJvZHkgPSBvcHRzLmJvZHksIHN0YXR1cyA9IG9wdHMuc3RhdHVzLCBoZWFkZXJzID0gb3B0cy5oZWFkZXJzLCBzdGF0dXNUZXh0ID0gb3B0cy5zdGF0dXNUZXh0LCB0eXBlID0gb3B0cy50eXBlLCB1cmwgPSBvcHRzLnVybDtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keSAhPSBudWxsID8gYm9keSA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzICE9IG51bGwgPyBzdGF0dXMgOiBudWxsO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzICE9IG51bGwgPyBoZWFkZXJzIDogbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCAhPSBudWxsID8gc3RhdHVzVGV4dCA6IG51bGw7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgIT0gbnVsbCA/IHR5cGUgOiBudWxsO1xuICAgICAgICB0aGlzLnVybCA9IHVybCAhPSBudWxsID8gdXJsIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXNwb25zZU9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvXG4gICAgICogb3ZlcnJpZGVcbiAgICAgKiBleGlzdGluZyB2YWx1ZXMuIFRoaXMgbWV0aG9kIHdpbGwgbm90IGNoYW5nZSB0aGUgdmFsdWVzIG9mIHRoZSBpbnN0YW5jZSBvbiB3aGljaCBpdCBpcyBiZWluZ1xuICAgICAqIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWF5IGJlIHVzZWZ1bCB3aGVuIHNoYXJpbmcgYSBiYXNlIGBSZXNwb25zZU9wdGlvbnNgIG9iamVjdCBpbnNpZGUgdGVzdHMsXG4gICAgICogd2hlcmUgY2VydGFpbiBwcm9wZXJ0aWVzIG1heSBjaGFuZ2UgZnJvbSB0ZXN0IHRvIHRlc3QuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvMWxYcXVxRmZnZHVURkJXak5vUkU/cD1wcmV2aWV3KSlcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpbXBvcnQge1Jlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuICAgICAqXG4gICAgICogdmFyIG9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAgICAgKiAgIGJvZHk6IHtuYW1lOiAnSmVmZid9XG4gICAgICogfSk7XG4gICAgICogdmFyIHJlcyA9IG5ldyBSZXNwb25zZShvcHRpb25zLm1lcmdlKHtcbiAgICAgKiAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgKiB9KSk7XG4gICAgICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICAgICAqIGNvbnNvbGUubG9nKCdyZXMuanNvbigpOicsIHJlcy5qc29uKCkpOyAvLyBPYmplY3Qge25hbWU6IFwiSmVmZlwifVxuICAgICAqIGNvbnNvbGUubG9nKCdyZXMudXJsOicsIHJlcy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgYFJlc3BvbnNlT3B0aW9uc2AgaW5zdGFuY2UsIHVzaW5nIHRoZSBvcHRpb25hbCBpbnB1dCBhcyB2YWx1ZXMgdG9cbiAgICAgKiBvdmVycmlkZVxuICAgICAqIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZXRob2Qgd2lsbCBub3QgY2hhbmdlIHRoZSB2YWx1ZXMgb2YgdGhlIGluc3RhbmNlIG9uIHdoaWNoIGl0IGlzIGJlaW5nXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gc2hhcmluZyBhIGJhc2UgYFJlc3BvbnNlT3B0aW9uc2Agb2JqZWN0IGluc2lkZSB0ZXN0cyxcbiAgICAgKiB3aGVyZSBjZXJ0YWluIHByb3BlcnRpZXMgbWF5IGNoYW5nZSBmcm9tIHRlc3QgdG8gdGVzdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC8xbFhxdXFGZmdkdVRGQldqTm9SRT9wPXByZXZpZXcpKVxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAgICAgKlxuICAgICAqIHZhciBvcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAgICogICBib2R5OiB7bmFtZTogJ0plZmYnfVxuICAgICAqIH0pO1xuICAgICAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucy5tZXJnZSh7XG4gICAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAgICogfSkpO1xuICAgICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICAgKiBjb25zb2xlLmxvZygncmVzLmpzb24oKTonLCByZXMuanNvbigpKTsgLy8gT2JqZWN0IHtuYW1lOiBcIkplZmZcIn1cbiAgICAgKiBjb25zb2xlLmxvZygncmVzLnVybDonLCByZXMudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVzcG9uc2VPcHRpb25zLnByb3RvdHlwZS5tZXJnZSA9IC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBgUmVzcG9uc2VPcHRpb25zYCBpbnN0YW5jZSwgdXNpbmcgdGhlIG9wdGlvbmFsIGlucHV0IGFzIHZhbHVlcyB0b1xuICAgICAqIG92ZXJyaWRlXG4gICAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1heSBiZSB1c2VmdWwgd2hlbiBzaGFyaW5nIGEgYmFzZSBgUmVzcG9uc2VPcHRpb25zYCBvYmplY3QgaW5zaWRlIHRlc3RzLFxuICAgICAqIHdoZXJlIGNlcnRhaW4gcHJvcGVydGllcyBtYXkgY2hhbmdlIGZyb20gdGVzdCB0byB0ZXN0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0LzFsWHF1cUZmZ2R1VEZCV2pOb1JFP3A9cHJldmlldykpXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW1wb3J0IHtSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICAgICAqXG4gICAgICogdmFyIG9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAgICAgKiAgIGJvZHk6IHtuYW1lOiAnSmVmZid9XG4gICAgICogfSk7XG4gICAgICogdmFyIHJlcyA9IG5ldyBSZXNwb25zZShvcHRpb25zLm1lcmdlKHtcbiAgICAgKiAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgKiB9KSk7XG4gICAgICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICAgICAqIGNvbnNvbGUubG9nKCdyZXMuanNvbigpOicsIHJlcy5qc29uKCkpOyAvLyBPYmplY3Qge25hbWU6IFwiSmVmZlwifVxuICAgICAqIGNvbnNvbGUubG9nKCdyZXMudXJsOicsIHJlcy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAgICAgICAgICBib2R5OiBvcHRpb25zICYmIG9wdGlvbnMuYm9keSAhPSBudWxsID8gb3B0aW9ucy5ib2R5IDogdGhpcy5ib2R5LFxuICAgICAgICAgICAgc3RhdHVzOiBvcHRpb25zICYmIG9wdGlvbnMuc3RhdHVzICE9IG51bGwgPyBvcHRpb25zLnN0YXR1cyA6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgaGVhZGVyczogb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgIT0gbnVsbCA/IG9wdGlvbnMuaGVhZGVycyA6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IG9wdGlvbnMgJiYgb3B0aW9ucy5zdGF0dXNUZXh0ICE9IG51bGwgPyBvcHRpb25zLnN0YXR1c1RleHQgOiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICAgICAgICB0eXBlOiBvcHRpb25zICYmIG9wdGlvbnMudHlwZSAhPSBudWxsID8gb3B0aW9ucy50eXBlIDogdGhpcy50eXBlLFxuICAgICAgICAgICAgdXJsOiBvcHRpb25zICYmIG9wdGlvbnMudXJsICE9IG51bGwgPyBvcHRpb25zLnVybCA6IHRoaXMudXJsLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNwb25zZU9wdGlvbnM7XG59KCkpO1xuLyoqXG4gKiBTdWJjbGFzcyBvZiB7XFxAbGluayBSZXNwb25zZU9wdGlvbnN9LCB3aXRoIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIERlZmF1bHQgdmFsdWVzOlxuICogICogc3RhdHVzOiAyMDBcbiAqICAqIGhlYWRlcnM6IGVtcHR5IHtcXEBsaW5rIEhlYWRlcnN9IG9iamVjdFxuICpcbiAqIFRoaXMgY2xhc3MgY291bGQgYmUgZXh0ZW5kZWQgYW5kIGJvdW5kIHRvIHRoZSB7XFxAbGluayBSZXNwb25zZU9wdGlvbnN9IGNsYXNzXG4gKiB3aGVuIGNvbmZpZ3VyaW5nIGFuIHtcXEBsaW5rIEluamVjdG9yfSwgaW4gb3JkZXIgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3B0aW9uc1xuICogdXNlZCBieSB7XFxAbGluayBIdHRwfSB0byBjcmVhdGUge1xcQGxpbmsgUmVzcG9uc2UgUmVzcG9uc2VzfS5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvcXY4RExUP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtwcm92aWRlfSBmcm9tICdcXEBhbmd1bGFyL2NvcmUnO1xuICogaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ1xcQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9icm93c2VyJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEhlYWRlcnMsIEh0dHAsIEJhc2VSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlT3B0aW9uc30gZnJvbVxuICogJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKiBpbXBvcnQge0FwcH0gZnJvbSAnLi9teWFwcCc7XG4gKlxuICogY2xhc3MgTXlPcHRpb25zIGV4dGVuZHMgQmFzZVJlc3BvbnNlT3B0aW9ucyB7XG4gKiAgIGhlYWRlcnM6SGVhZGVycyA9IG5ldyBIZWFkZXJzKHtuZXR3b3JrOiAnZ2l0aHViJ30pO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHAsIFtIVFRQX1BST1ZJREVSUywge3Byb3ZpZGU6IFJlc3BvbnNlT3B0aW9ucywgdXNlQ2xhc3M6IE15T3B0aW9uc31dKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHRpb25zIGNvdWxkIGFsc28gYmUgZXh0ZW5kZWQgd2hlbiBtYW51YWxseSBjcmVhdGluZyBhIHtcXEBsaW5rIFJlc3BvbnNlfVxuICogb2JqZWN0LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9Wbmdvc09XaWFFeEV0YnN0RG9peD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtCYXNlUmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqXG4gKiB2YXIgb3B0aW9ucyA9IG5ldyBCYXNlUmVzcG9uc2VPcHRpb25zKCk7XG4gKiB2YXIgcmVzID0gbmV3IFJlc3BvbnNlKG9wdGlvbnMubWVyZ2Uoe1xuICogICBib2R5OiAnQW5ndWxhcicsXG4gKiAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtmcmFtZXdvcms6ICdhbmd1bGFyJ30pXG4gKiB9KSk7XG4gKiBjb25zb2xlLmxvZygncmVzLmhlYWRlcnMuZ2V0KFwiZnJhbWV3b3JrXCIpOicsIHJlcy5oZWFkZXJzLmdldCgnZnJhbWV3b3JrJykpOyAvLyBhbmd1bGFyXG4gKiBjb25zb2xlLmxvZygncmVzLnRleHQoKTonLCByZXMudGV4dCgpKTsgLy8gQW5ndWxhcjtcbiAqIGBgYFxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIEJhc2VSZXNwb25zZU9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhc2VSZXNwb25zZU9wdGlvbnMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFzZVJlc3BvbnNlT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHsgc3RhdHVzOiAyMDAsIHN0YXR1c1RleHQ6ICdPaycsIHR5cGU6IFJlc3BvbnNlVHlwZS5EZWZhdWx0LCBoZWFkZXJzOiBuZXcgSGVhZGVycygpIH0pIHx8IHRoaXM7XG4gICAgfVxuICAgIEJhc2VSZXNwb25zZU9wdGlvbnMuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBCYXNlUmVzcG9uc2VPcHRpb25zLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEJhc2VSZXNwb25zZU9wdGlvbnM7XG59KFJlc3BvbnNlT3B0aW9ucykpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZyb20gd2hpY2ggcmVhbCBiYWNrZW5kcyBhcmUgZGVyaXZlZC5cbiAqXG4gKiBUaGUgcHJpbWFyeSBwdXJwb3NlIG9mIGEgYENvbm5lY3Rpb25CYWNrZW5kYCBpcyB0byBjcmVhdGUgbmV3IGNvbm5lY3Rpb25zIHRvIGZ1bGZpbGwgYSBnaXZlblxuICoge1xcQGxpbmsgUmVxdWVzdH0uXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICogQGFic3RyYWN0XG4gKi9cbnZhciBDb25uZWN0aW9uQmFja2VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uQmFja2VuZCgpIHtcbiAgICB9XG4gICAgcmV0dXJuIENvbm5lY3Rpb25CYWNrZW5kO1xufSgpKTtcbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgZnJvbSB3aGljaCByZWFsIGNvbm5lY3Rpb25zIGFyZSBkZXJpdmVkLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgQ29ubmVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uKCkge1xuICAgIH1cbiAgICByZXR1cm4gQ29ubmVjdGlvbjtcbn0oKSk7XG4vKipcbiAqIEFuIFhTUkZTdHJhdGVneSBjb25maWd1cmVzIFhTUkYgcHJvdGVjdGlvbiAoZS5nLiB2aWEgaGVhZGVycykgb24gYW4gSFRUUCByZXF1ZXN0LlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgWFNSRlN0cmF0ZWd5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFhTUkZTdHJhdGVneSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIFhTUkZTdHJhdGVneTtcbn0oKSk7XG4vKipcbiAqIEludGVyZmFjZSBmb3Igb3B0aW9ucyB0byBjb25zdHJ1Y3QgYSBSZXF1ZXN0T3B0aW9ucywgYmFzZWQgb25cbiAqIFtSZXF1ZXN0SW5pdF0oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3JlcXVlc3Rpbml0KSBmcm9tIHRoZSBGZXRjaCBzcGVjLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqIEByZWNvcmRcbiAqL1xuXG4vKipcbiAqIFJlcXVpcmVkIHN0cnVjdHVyZSB3aGVuIGNvbnN0cnVjdGluZyBuZXcgUmVxdWVzdCgpO1xuICogQHJlY29yZFxuICovXG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBvcHRpb25zIHRvIGNvbnN0cnVjdCBhIFJlc3BvbnNlLCBiYXNlZCBvblxuICogW1Jlc3BvbnNlSW5pdF0oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlaW5pdCkgZnJvbSB0aGUgRmV0Y2ggc3BlYy5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKiBAcmVjb3JkXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAcGFyYW0gez99IG1ldGhvZFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2QpIHtcbiAgICBpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBtZXRob2Q7XG4gICAgc3dpdGNoIChtZXRob2QudG9VcHBlckNhc2UoKSkge1xuICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2QuR2V0O1xuICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0TWV0aG9kLlBvc3Q7XG4gICAgICAgIGNhc2UgJ1BVVCc6XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZC5QdXQ7XG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZC5EZWxldGU7XG4gICAgICAgIGNhc2UgJ09QVElPTlMnOlxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2QuT3B0aW9ucztcbiAgICAgICAgY2FzZSAnSEVBRCc6XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZC5IZWFkO1xuICAgICAgICBjYXNlICdQQVRDSCc6XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZC5QYXRjaDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZXF1ZXN0IG1ldGhvZC4gVGhlIG1ldGhvZCBcXFwiXCIgKyBtZXRob2QgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZC5cIik7XG59XG52YXIgaXNTdWNjZXNzID0gZnVuY3Rpb24gKHN0YXR1cykgeyByZXR1cm4gKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKTsgfTtcbi8qKlxuICogQHBhcmFtIHs/fSB4aHJcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGdldFJlc3BvbnNlVVJMKHhocikge1xuICAgIGlmICgncmVzcG9uc2VVUkwnIGluIHhocikge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlVVJMO1xuICAgIH1cbiAgICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgICAgICByZXR1cm4geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLVJlcXVlc3QtVVJMJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGlucHV0XG4gKiBAcmV0dXJuIHs/fVxuICovXG5cbi8qKlxuICogQHBhcmFtIHs/fSBpbnB1dFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9BcnJheUJ1ZmZlcihpbnB1dCkge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHZpZXcgPSBuZXcgVWludDE2QXJyYXkoaW5wdXQubGVuZ3RoKTtcbiAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwLCAvKiogQHR5cGUgez99ICovIHN0ckxlbiA9IGlucHV0Lmxlbmd0aDsgaSA8IHN0ckxlbjsgaSsrKSB7XG4gICAgICAgIHZpZXdbaV0gPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gdmlldy5idWZmZXI7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQHBhcmFtIHs/PX0gcmF3UGFyYW1zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBwYXJhbVBhcnNlcihyYXdQYXJhbXMpIHtcbiAgICBpZiAocmF3UGFyYW1zID09PSB2b2lkIDApIHsgcmF3UGFyYW1zID0gJyc7IH1cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBtYXAgPSBuZXcgTWFwKCk7XG4gICAgaWYgKHJhd1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBhcmFtcyA9IHJhd1BhcmFtcy5zcGxpdCgnJicpO1xuICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGVxSWR4ID0gcGFyYW0uaW5kZXhPZignPScpO1xuICAgICAgICAgICAgdmFyIF9hID0gZXFJZHggPT0gLTEgPyBbcGFyYW0sICcnXSA6IFtwYXJhbS5zbGljZSgwLCBlcUlkeCksIHBhcmFtLnNsaWNlKGVxSWR4ICsgMSldLCBrZXkgPSBfYVswXSwgdmFsID0gX2FbMV07XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsaXN0ID0gbWFwLmdldChrZXkpIHx8IFtdO1xuICAgICAgICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgbGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFwO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKlxuICovXG52YXIgUXVlcnlFbmNvZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXJ5RW5jb2RlcigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBrXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBRdWVyeUVuY29kZXIucHJvdG90eXBlLmVuY29kZUtleSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30ga1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGspIHsgcmV0dXJuIHN0YW5kYXJkRW5jb2Rpbmcoayk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBRdWVyeUVuY29kZXIucHJvdG90eXBlLmVuY29kZVZhbHVlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSB2XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RhbmRhcmRFbmNvZGluZyh2KTsgfTtcbiAgICByZXR1cm4gUXVlcnlFbmNvZGVyO1xufSgpKTtcbi8qKlxuICogQHBhcmFtIHs/fSB2XG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBzdGFuZGFyZEVuY29kaW5nKHYpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHYpXG4gICAgICAgIC5yZXBsYWNlKC8lNDAvZ2ksICdAJylcbiAgICAgICAgLnJlcGxhY2UoLyUzQS9naSwgJzonKVxuICAgICAgICAucmVwbGFjZSgvJTI0L2dpLCAnJCcpXG4gICAgICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcbiAgICAgICAgLnJlcGxhY2UoLyUzQi9naSwgJzsnKVxuICAgICAgICAucmVwbGFjZSgvJTJCL2dpLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKC8lM0QvZ2ksICc9JylcbiAgICAgICAgLnJlcGxhY2UoLyUzRi9naSwgJz8nKVxuICAgICAgICAucmVwbGFjZSgvJTJGL2dpLCAnLycpO1xufVxuLyoqXG4gKiBNYXAtbGlrZSByZXByZXNlbnRhdGlvbiBvZiB1cmwgc2VhcmNoIHBhcmFtZXRlcnMsIGJhc2VkIG9uXG4gKiBbVVJMU2VhcmNoUGFyYW1zXShodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHNlYXJjaHBhcmFtcykgaW4gdGhlIHVybCBsaXZpbmcgc3RhbmRhcmQsXG4gKiB3aXRoIHNldmVyYWwgZXh0ZW5zaW9ucyBmb3IgbWVyZ2luZyBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0czpcbiAqICAgLSBzZXRBbGwoKVxuICogICAtIGFwcGVuZEFsbCgpXG4gKiAgIC0gcmVwbGFjZUFsbCgpXG4gKlxuICogVGhpcyBjbGFzcyBhY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIgb2YgJHtcXEBsaW5rIFF1ZXJ5RW5jb2Rlcn0sXG4gKiB3aGljaCBpcyB1c2VkIHRvIHNlcmlhbGl6ZSBwYXJhbWV0ZXJzIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0LiBCeSBkZWZhdWx0LFxuICogYFF1ZXJ5RW5jb2RlcmAgZW5jb2RlcyBrZXlzIGFuZCB2YWx1ZXMgb2YgcGFyYW1ldGVycyB1c2luZyBgZW5jb2RlVVJJQ29tcG9uZW50YCxcbiAqIGFuZCB0aGVuIHVuLWVuY29kZXMgY2VydGFpbiBjaGFyYWN0ZXJzIHRoYXQgYXJlIGFsbG93ZWQgdG8gYmUgcGFydCBvZiB0aGUgcXVlcnlcbiAqIGFjY29yZGluZyB0byBJRVRGIFJGQyAzOTg2OiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4Ni5cbiAqXG4gKiBUaGVzZSBhcmUgdGhlIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGVuY29kZWQ6IGAhICQgXFwnICggKSAqICsgLCA7IEEgOSAtIC4gXyB+ID8gL2BcbiAqXG4gKiBJZiB0aGUgc2V0IG9mIGFsbG93ZWQgcXVlcnkgY2hhcmFjdGVycyBpcyBub3QgYWNjZXB0YWJsZSBmb3IgYSBwYXJ0aWN1bGFyIGJhY2tlbmQsXG4gKiBgUXVlcnlFbmNvZGVyYCBjYW4gYmUgc3ViY2xhc3NlZCBhbmQgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudCB0byBVUkxTZWFyY2hQYXJhbXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge1VSTFNlYXJjaFBhcmFtcywgUXVlcnlFbmNvZGVyfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICogY2xhc3MgTXlRdWVyeUVuY29kZXIgZXh0ZW5kcyBRdWVyeUVuY29kZXIge1xuICogICBlbmNvZGVLZXkoazogc3RyaW5nKTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gbXlFbmNvZGluZ0Z1bmN0aW9uKGspO1xuICogICB9XG4gKlxuICogICBlbmNvZGVWYWx1ZSh2OiBzdHJpbmcpOiBzdHJpbmcge1xuICogICAgIHJldHVybiBteUVuY29kaW5nRnVuY3Rpb24odik7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygnJywgbmV3IE15UXVlcnlFbmNvZGVyKCkpO1xuICogYGBgXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBVUkxTZWFyY2hQYXJhbXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zKHJhd1BhcmFtcywgcXVlcnlFbmNvZGVyKSB7XG4gICAgICAgIGlmIChyYXdQYXJhbXMgPT09IHZvaWQgMCkgeyByYXdQYXJhbXMgPSAnJzsgfVxuICAgICAgICBpZiAocXVlcnlFbmNvZGVyID09PSB2b2lkIDApIHsgcXVlcnlFbmNvZGVyID0gbmV3IFF1ZXJ5RW5jb2RlcigpOyB9XG4gICAgICAgIHRoaXMucmF3UGFyYW1zID0gcmF3UGFyYW1zO1xuICAgICAgICB0aGlzLnF1ZXJ5RW5jb2RlciA9IHF1ZXJ5RW5jb2RlcjtcbiAgICAgICAgdGhpcy5wYXJhbXNNYXAgPSBwYXJhbVBhcnNlcihyYXdQYXJhbXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuY2xvbmUgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY2xvbmUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCcnLCB0aGlzLnF1ZXJ5RW5jb2Rlcik7XG4gICAgICAgIGNsb25lLmFwcGVuZEFsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5oYXMgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW0pIHsgcmV0dXJuIHRoaXMucGFyYW1zTWFwLmhhcyhwYXJhbSk7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5nZXQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RvcmVkUGFyYW0gPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShzdG9yZWRQYXJhbSkgPyBzdG9yZWRQYXJhbVswXSA6IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldEFsbCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChwYXJhbSkgeyByZXR1cm4gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKSB8fCBbXTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHBhcmFtIHs/fSB2YWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuc2V0ID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEBwYXJhbSB7P30gdmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW0sIHZhbCkge1xuICAgICAgICBpZiAodmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShwYXJhbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGlzdCA9IHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSkgfHwgW107XG4gICAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gICAgfTtcbiAgICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAgIC8vIEZvciBlYWNoIG5hbWUtdmFsdWVzIHBhaXIgaW4gYHNlYXJjaFBhcmFtc2AsIHBlcmZvcm0gYHNldChuYW1lLCB2YWx1ZXNbMF0pYFxuICAgIC8vXG4gICAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0XSwgYz1bOF0sIGI9WzddXCJcbiAgICAvL1xuICAgIC8vIFRPRE8oQGNhaXRwKTogZG9jdW1lbnQgdGhpcyBiZXR0ZXJcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHNlYXJjaFBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5zZXRBbGwgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHNlYXJjaFBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHNlYXJjaFBhcmFtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzZWFyY2hQYXJhbXMucGFyYW1zTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBwYXJhbSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGlzdCA9IF90aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pIHx8IFtdO1xuICAgICAgICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgbGlzdC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgIF90aGlzLnBhcmFtc01hcC5zZXQocGFyYW0sIGxpc3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1cbiAgICAgKiBAcGFyYW0gez99IHZhbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5hcHBlbmQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHBhcmFtIHs/fSB2YWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChwYXJhbSwgdmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IHZvaWQgMCB8fCB2YWwgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3QgPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pIHx8IFtdO1xuICAgICAgICBsaXN0LnB1c2godmFsKTtcbiAgICAgICAgdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICB9O1xuICAgIC8vIEEgbWVyZ2Ugb3BlcmF0aW9uXG4gICAgLy8gRm9yIGVhY2ggbmFtZS12YWx1ZXMgcGFpciBpbiBgc2VhcmNoUGFyYW1zYCwgcGVyZm9ybSBgYXBwZW5kKG5hbWUsIHZhbHVlKWBcbiAgICAvLyBmb3IgZWFjaCB2YWx1ZSBpbiBgdmFsdWVzYC5cbiAgICAvL1xuICAgIC8vIEUuZzogXCJhPVsxLDJdLCBjPVs4XVwiICsgXCJhPVszLDRdLCBiPVs3XVwiID0gXCJhPVsxLDIsMyw0XSwgYz1bOF0sIGI9WzddXCJcbiAgICAvL1xuICAgIC8vIFRPRE8oQGNhaXRwKTogZG9jdW1lbnQgdGhpcyBiZXR0ZXJcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHNlYXJjaFBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5hcHBlbmRBbGwgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHNlYXJjaFBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHNlYXJjaFBhcmFtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzZWFyY2hQYXJhbXMucGFyYW1zTWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBwYXJhbSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGlzdCA9IF90aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pIHx8IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHZhbHVlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnBhcmFtc01hcC5zZXQocGFyYW0sIGxpc3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIEEgbWVyZ2Ugb3BlcmF0aW9uXG4gICAgLy8gRm9yIGVhY2ggbmFtZS12YWx1ZXMgcGFpciBpbiBgc2VhcmNoUGFyYW1zYCwgcGVyZm9ybSBgZGVsZXRlKG5hbWUpYCxcbiAgICAvLyBmb2xsb3dlZCBieSBgc2V0KG5hbWUsIHZhbHVlcylgXG4gICAgLy9cbiAgICAvLyBFLmc6IFwiYT1bMSwyLDNdLCBjPVs4XVwiICsgXCJhPVs0LDUsNl0sIGI9WzddXCIgPSBcImE9WzQsNSw2XSwgYz1bOF0sIGI9WzddXCJcbiAgICAvL1xuICAgIC8vIFRPRE8oQGNhaXRwKTogZG9jdW1lbnQgdGhpcyBiZXR0ZXJcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHNlYXJjaFBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBzZWFyY2hQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2VhcmNoUGFyYW1zLnBhcmFtc01hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3QgPSBfdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKSB8fCBbXTtcbiAgICAgICAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh2YWx1ZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUudG9TdHJpbmcgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGFyYW1zTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnBhcmFtc01hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZXMsIGspIHtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtc0xpc3QucHVzaChfdGhpcy5xdWVyeUVuY29kZXIuZW5jb2RlS2V5KGspICsgJz0nICsgX3RoaXMucXVlcnlFbmNvZGVyLmVuY29kZVZhbHVlKHYpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc0xpc3Quam9pbignJicpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5kZWxldGUgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW0pIHsgdGhpcy5wYXJhbXNNYXAuZGVsZXRlKHBhcmFtKTsgfTtcbiAgICByZXR1cm4gVVJMU2VhcmNoUGFyYW1zO1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBIVFRQIHJlcXVlc3QgYm9keSB1c2VkIGJ5IGJvdGgge1xcQGxpbmsgUmVxdWVzdH0gYW5kIHtcXEBsaW5rIFJlc3BvbnNlfVxuICogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2JvZHlcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgQm9keSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byByZXR1cm4gYm9keSBhcyBwYXJzZWQgYEpTT05gIG9iamVjdCwgb3IgcmFpc2VzIGFuIGV4Y2VwdGlvbi5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byByZXR1cm4gYm9keSBhcyBwYXJzZWQgYEpTT05gIG9iamVjdCwgb3IgcmFpc2VzIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJvZHkucHJvdG90eXBlLmpzb24gPSAvKipcbiAgICAgKiBBdHRlbXB0cyB0byByZXR1cm4gYm9keSBhcyBwYXJzZWQgYEpTT05gIG9iamVjdCwgb3IgcmFpc2VzIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5fYm9keSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMudGV4dCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvZHkgYXMgYSBzdHJpbmcsIHByZXN1bWluZyBgdG9TdHJpbmcoKWAgY2FuIGJlIGNhbGxlZCBvbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgKlxuICAgICAqIFdoZW4gZGVjb2RpbmcgYW4gYEFycmF5QnVmZmVyYCwgdGhlIG9wdGlvbmFsIGBlbmNvZGluZ0hpbnRgIHBhcmFtZXRlciBkZXRlcm1pbmVzIGhvdyB0aGVcbiAgICAgKiBieXRlcyBpbiB0aGUgYnVmZmVyIHdpbGwgYmUgaW50ZXJwcmV0ZWQuIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAgICpcbiAgICAgKiAtIGBsZWdhY3lgIC0gaW5jb3JyZWN0bHkgaW50ZXJwcmV0IHRoZSBieXRlcyBhcyBVVEYtMTYgKHRlY2huaWNhbGx5LCBVQ1MtMikuIE9ubHkgY2hhcmFjdGVyc1xuICAgICAqICAgaW4gdGhlIEJhc2ljIE11bHRpbGluZ3VhbCBQbGFuZSBhcmUgc3VwcG9ydGVkLCBzdXJyb2dhdGUgcGFpcnMgYXJlIG5vdCBoYW5kbGVkIGNvcnJlY3RseS5cbiAgICAgKiAgIEluIGFkZGl0aW9uLCB0aGUgZW5kaWFubmVzcyBvZiB0aGUgMTYtYml0IG9jdGV0IHBhaXJzIGluIHRoZSBgQXJyYXlCdWZmZXJgIGlzIG5vdCB0YWtlblxuICAgICAqICAgaW50byBjb25zaWRlcmF0aW9uLiBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIHRvIGF2b2lkIGJyZWFraW5nIGFwcHMsIGJ1dCBzaG91bGQgYmVcbiAgICAgKiAgIGNvbnNpZGVyZWQgZGVwcmVjYXRlZC5cbiAgICAgKlxuICAgICAqIC0gYGlzby04ODU5YCAtIGludGVycHJldCB0aGUgYnl0ZXMgYXMgSVNPLTg4NTkgKHdoaWNoIGNhbiBiZSB1c2VkIGZvciBBU0NJSSBlbmNvZGVkIHRleHQpLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvZHkgYXMgYSBzdHJpbmcsIHByZXN1bWluZyBgdG9TdHJpbmcoKWAgY2FuIGJlIGNhbGxlZCBvbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgKlxuICAgICAqIFdoZW4gZGVjb2RpbmcgYW4gYEFycmF5QnVmZmVyYCwgdGhlIG9wdGlvbmFsIGBlbmNvZGluZ0hpbnRgIHBhcmFtZXRlciBkZXRlcm1pbmVzIGhvdyB0aGVcbiAgICAgKiBieXRlcyBpbiB0aGUgYnVmZmVyIHdpbGwgYmUgaW50ZXJwcmV0ZWQuIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAgICpcbiAgICAgKiAtIGBsZWdhY3lgIC0gaW5jb3JyZWN0bHkgaW50ZXJwcmV0IHRoZSBieXRlcyBhcyBVVEYtMTYgKHRlY2huaWNhbGx5LCBVQ1MtMikuIE9ubHkgY2hhcmFjdGVyc1xuICAgICAqICAgaW4gdGhlIEJhc2ljIE11bHRpbGluZ3VhbCBQbGFuZSBhcmUgc3VwcG9ydGVkLCBzdXJyb2dhdGUgcGFpcnMgYXJlIG5vdCBoYW5kbGVkIGNvcnJlY3RseS5cbiAgICAgKiAgIEluIGFkZGl0aW9uLCB0aGUgZW5kaWFubmVzcyBvZiB0aGUgMTYtYml0IG9jdGV0IHBhaXJzIGluIHRoZSBgQXJyYXlCdWZmZXJgIGlzIG5vdCB0YWtlblxuICAgICAqICAgaW50byBjb25zaWRlcmF0aW9uLiBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIHRvIGF2b2lkIGJyZWFraW5nIGFwcHMsIGJ1dCBzaG91bGQgYmVcbiAgICAgKiAgIGNvbnNpZGVyZWQgZGVwcmVjYXRlZC5cbiAgICAgKlxuICAgICAqIC0gYGlzby04ODU5YCAtIGludGVycHJldCB0aGUgYnl0ZXMgYXMgSVNPLTg4NTkgKHdoaWNoIGNhbiBiZSB1c2VkIGZvciBBU0NJSSBlbmNvZGVkIHRleHQpLlxuICAgICAqIEBwYXJhbSB7Pz19IGVuY29kaW5nSGludFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQm9keS5wcm90b3R5cGUudGV4dCA9IC8qKlxuICAgICAqIFJldHVybnMgdGhlIGJvZHkgYXMgYSBzdHJpbmcsIHByZXN1bWluZyBgdG9TdHJpbmcoKWAgY2FuIGJlIGNhbGxlZCBvbiB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICAgKlxuICAgICAqIFdoZW4gZGVjb2RpbmcgYW4gYEFycmF5QnVmZmVyYCwgdGhlIG9wdGlvbmFsIGBlbmNvZGluZ0hpbnRgIHBhcmFtZXRlciBkZXRlcm1pbmVzIGhvdyB0aGVcbiAgICAgKiBieXRlcyBpbiB0aGUgYnVmZmVyIHdpbGwgYmUgaW50ZXJwcmV0ZWQuIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAgICpcbiAgICAgKiAtIGBsZWdhY3lgIC0gaW5jb3JyZWN0bHkgaW50ZXJwcmV0IHRoZSBieXRlcyBhcyBVVEYtMTYgKHRlY2huaWNhbGx5LCBVQ1MtMikuIE9ubHkgY2hhcmFjdGVyc1xuICAgICAqICAgaW4gdGhlIEJhc2ljIE11bHRpbGluZ3VhbCBQbGFuZSBhcmUgc3VwcG9ydGVkLCBzdXJyb2dhdGUgcGFpcnMgYXJlIG5vdCBoYW5kbGVkIGNvcnJlY3RseS5cbiAgICAgKiAgIEluIGFkZGl0aW9uLCB0aGUgZW5kaWFubmVzcyBvZiB0aGUgMTYtYml0IG9jdGV0IHBhaXJzIGluIHRoZSBgQXJyYXlCdWZmZXJgIGlzIG5vdCB0YWtlblxuICAgICAqICAgaW50byBjb25zaWRlcmF0aW9uLiBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIHRvIGF2b2lkIGJyZWFraW5nIGFwcHMsIGJ1dCBzaG91bGQgYmVcbiAgICAgKiAgIGNvbnNpZGVyZWQgZGVwcmVjYXRlZC5cbiAgICAgKlxuICAgICAqIC0gYGlzby04ODU5YCAtIGludGVycHJldCB0aGUgYnl0ZXMgYXMgSVNPLTg4NTkgKHdoaWNoIGNhbiBiZSB1c2VkIGZvciBBU0NJSSBlbmNvZGVkIHRleHQpLlxuICAgICAqIEBwYXJhbSB7Pz19IGVuY29kaW5nSGludFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGVuY29kaW5nSGludCkge1xuICAgICAgICBpZiAoZW5jb2RpbmdIaW50ID09PSB2b2lkIDApIHsgZW5jb2RpbmdIaW50ID0gJ2xlZ2FjeSc7IH1cbiAgICAgICAgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib2R5LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgc3dpdGNoIChlbmNvZGluZ0hpbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWdhY3knOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDE2QXJyYXkoLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5fYm9keSkpKTtcbiAgICAgICAgICAgICAgICBjYXNlICdpc28tODg1OSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuX2JvZHkpKSk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgZW5jb2RpbmdIaW50OiBcIiArIGVuY29kaW5nSGludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2JvZHkgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYm9keSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9ib2R5LCBudWxsLCAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYm9keS50b1N0cmluZygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBib2R5IGFzIGFuIEFycmF5QnVmZmVyXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBib2R5IGFzIGFuIEFycmF5QnVmZmVyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCb2R5LnByb3RvdHlwZS5hcnJheUJ1ZmZlciA9IC8qKlxuICAgICAqIFJldHVybiB0aGUgYm9keSBhcyBhbiBBcnJheUJ1ZmZlclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvQXJyYXlCdWZmZXIodGhpcy50ZXh0KCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFzIGEgQmxvYiwgYXNzdW1pbmcgdGhhdCBib2R5IGV4aXN0cy5cbiAgICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVxdWVzdCdzIGJvZHkgYXMgYSBCbG9iLCBhc3N1bWluZyB0aGF0IGJvZHkgZXhpc3RzLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQm9keS5wcm90b3R5cGUuYmxvYiA9IC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFzIGEgQmxvYiwgYXNzdW1pbmcgdGhhdCBib2R5IGV4aXN0cy5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgICByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5fYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFt0aGlzLl9ib2R5XSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcmVxdWVzdCBib2R5IGlzblxcJ3QgZWl0aGVyIGEgYmxvYiBvciBhbiBhcnJheSBidWZmZXInKTtcbiAgICB9O1xuICAgIHJldHVybiBCb2R5O1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBDcmVhdGVzIGBSZXNwb25zZWAgaW5zdGFuY2VzIGZyb20gcHJvdmlkZWQgdmFsdWVzLlxuICpcbiAqIFRob3VnaCB0aGlzIG9iamVjdCBpc24ndFxuICogdXN1YWxseSBpbnN0YW50aWF0ZWQgYnkgZW5kLXVzZXJzLCBpdCBpcyB0aGUgcHJpbWFyeSBvYmplY3QgaW50ZXJhY3RlZCB3aXRoIHdoZW4gaXQgY29tZXMgdGltZSB0b1xuICogYWRkIGRhdGEgdG8gYSB2aWV3LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBodHRwLnJlcXVlc3QoJ215LWZyaWVuZHMudHh0Jykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuZnJpZW5kcyA9IHJlc3BvbnNlLnRleHQoKSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgUmVzcG9uc2UncyBpbnRlcmZhY2UgaXMgaW5zcGlyZWQgYnkgdGhlIFJlc3BvbnNlIGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gdGhlIFtGZXRjaFxuICogU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlLWNsYXNzKSwgYnV0IGlzIGNvbnNpZGVyZWQgYSBzdGF0aWMgdmFsdWUgd2hvc2UgYm9keVxuICogY2FuIGJlIGFjY2Vzc2VkIG1hbnkgdGltZXMuIFRoZXJlIGFyZSBvdGhlciBkaWZmZXJlbmNlcyBpbiB0aGUgaW1wbGVtZW50YXRpb24sIGJ1dCB0aGlzIGlzIHRoZVxuICogbW9zdCBzaWduaWZpY2FudC5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBSZXNwb25zZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVzcG9uc2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9ib2R5ID0gcmVzcG9uc2VPcHRpb25zLmJvZHk7XG4gICAgICAgIF90aGlzLnN0YXR1cyA9IC8qKiBAdHlwZSB7P30gKi8gKChyZXNwb25zZU9wdGlvbnMuc3RhdHVzKSk7XG4gICAgICAgIF90aGlzLm9rID0gKF90aGlzLnN0YXR1cyA+PSAyMDAgJiYgX3RoaXMuc3RhdHVzIDw9IDI5OSk7XG4gICAgICAgIF90aGlzLnN0YXR1c1RleHQgPSByZXNwb25zZU9wdGlvbnMuc3RhdHVzVGV4dDtcbiAgICAgICAgX3RoaXMuaGVhZGVycyA9IHJlc3BvbnNlT3B0aW9ucy5oZWFkZXJzO1xuICAgICAgICBfdGhpcy50eXBlID0gLyoqIEB0eXBlIHs/fSAqLyAoKHJlc3BvbnNlT3B0aW9ucy50eXBlKSk7XG4gICAgICAgIF90aGlzLnVybCA9IC8qKiBAdHlwZSB7P30gKi8gKChyZXNwb25zZU9wdGlvbnMudXJsKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXNwb25zZS5wcm90b3R5cGUudG9TdHJpbmcgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiUmVzcG9uc2Ugd2l0aCBzdGF0dXM6IFwiICsgdGhpcy5zdGF0dXMgKyBcIiBcIiArIHRoaXMuc3RhdHVzVGV4dCArIFwiIGZvciBVUkw6IFwiICsgdGhpcy51cmw7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzcG9uc2U7XG59KEJvZHkpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIF9uZXh0UmVxdWVzdElkID0gMDtcbnZhciBKU09OUF9IT01FID0gJ19fbmdfanNvbnBfXyc7XG52YXIgX2pzb25wQ29ubmVjdGlvbnMgPSBudWxsO1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZ2V0SnNvbnBDb25uZWN0aW9ucygpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB3ID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyA/IHdpbmRvdyA6IHt9O1xuICAgIGlmIChfanNvbnBDb25uZWN0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICBfanNvbnBDb25uZWN0aW9ucyA9IHdbSlNPTlBfSE9NRV0gPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIF9qc29ucENvbm5lY3Rpb25zO1xufVxudmFyIEJyb3dzZXJKc29ucCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCcm93c2VySnNvbnAoKSB7XG4gICAgfVxuICAgIC8vIENvbnN0cnVjdCBhIDxzY3JpcHQ+IGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIFVSTFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLmJ1aWxkID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBub2RlLnNyYyA9IHVybDtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJyb3dzZXJKc29ucC5wcm90b3R5cGUubmV4dFJlcXVlc3RJRCA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJfX3JlcVwiICsgX25leHRSZXF1ZXN0SWQrKzsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLnJlcXVlc3RDYWxsYmFjayA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gSlNPTlBfSE9NRSArIFwiLlwiICsgaWQgKyBcIi5maW5pc2hlZFwiOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgKiBAcGFyYW0gez99IGNvbm5lY3Rpb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJyb3dzZXJKc29ucC5wcm90b3R5cGUuZXhwb3NlQ29ubmVjdGlvbiA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgKiBAcGFyYW0gez99IGNvbm5lY3Rpb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChpZCwgY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb25uZWN0aW9ucyA9IF9nZXRKc29ucENvbm5lY3Rpb25zKCk7XG4gICAgICAgIGNvbm5lY3Rpb25zW2lkXSA9IGNvbm5lY3Rpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLnJlbW92ZUNvbm5lY3Rpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29ubmVjdGlvbnMgPSBfZ2V0SnNvbnBDb25uZWN0aW9ucygpO1xuICAgICAgICBjb25uZWN0aW9uc1tpZF0gPSBudWxsO1xuICAgIH07XG4gICAgLy8gQXR0YWNoIHRoZSA8c2NyaXB0PiBlbGVtZW50IHRvIHRoZSBET01cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5vZGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJyb3dzZXJKc29ucC5wcm90b3R5cGUuc2VuZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gbm9kZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG5vZGUpIHsgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgvKiogQHR5cGUgez99ICovICgobm9kZSkpKTsgfTtcbiAgICAvLyBSZW1vdmUgPHNjcmlwdD4gZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5vZGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJyb3dzZXJKc29ucC5wcm90b3R5cGUuY2xlYW51cCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gbm9kZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKC8qKiBAdHlwZSB7P30gKi8gKChub2RlKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCcm93c2VySnNvbnAuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBCcm93c2VySnNvbnAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICByZXR1cm4gQnJvd3Nlckpzb25wO1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIEpTT05QX0VSUl9OT19DQUxMQkFDSyA9ICdKU09OUCBpbmplY3RlZCBzY3JpcHQgZGlkIG5vdCBpbnZva2UgY2FsbGJhY2suJztcbnZhciBKU09OUF9FUlJfV1JPTkdfTUVUSE9EID0gJ0pTT05QIHJlcXVlc3RzIG11c3QgdXNlIEdFVCByZXF1ZXN0IG1ldGhvZC4nO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBhbiBpbi1mbGlnaHQgSlNPTlAgcmVxdWVzdC5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBKU09OUENvbm5lY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGZ1bmN0aW9uIEpTT05QQ29ubmVjdGlvbihyZXEsIF9kb20sIGJhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fZG9tID0gX2RvbTtcbiAgICAgICAgdGhpcy5iYXNlUmVzcG9uc2VPcHRpb25zID0gYmFzZVJlc3BvbnNlT3B0aW9ucztcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgIT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEpTT05QX0VSUl9XUk9OR19NRVRIT0QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdCA9IHJlcTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChyZXNwb25zZU9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWFkeVN0YXRlID0gUmVhZHlTdGF0ZS5Mb2FkaW5nO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWQgPSBfdGhpcy5faWQgPSBfZG9tLm5leHRSZXF1ZXN0SUQoKTtcbiAgICAgICAgICAgIF9kb20uZXhwb3NlQ29ubmVjdGlvbihpZCwgX3RoaXMpO1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBEYXJ0XG4gICAgICAgICAgICAvLyB1cmwgPSB1cmwucmVwbGFjZSgvPUpTT05QX0NBTExCQUNLKCZ8JCkvLCBgZ2VuZXJhdGVkIG1ldGhvZGApO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY2FsbGJhY2sgPSBfZG9tLnJlcXVlc3RDYWxsYmFjayhfdGhpcy5faWQpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdXJsID0gcmVxLnVybDtcbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZignPUpTT05QX0NBTExCQUNLJicpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgnPUpTT05QX0NBTExCQUNLJicsIFwiPVwiICsgY2FsbGJhY2sgKyBcIiZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh1cmwubGFzdEluZGV4T2YoJz1KU09OUF9DQUxMQkFDSycpID09PSB1cmwubGVuZ3RoIC0gJz1KU09OUF9DQUxMQkFDSycubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gJz1KU09OUF9DQUxMQkFDSycubGVuZ3RoKSArIChcIj1cIiArIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHNjcmlwdCA9IF90aGlzLl9zY3JpcHQgPSBfZG9tLmJ1aWxkKHVybCk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvbkxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVhZHlTdGF0ZSA9PT0gUmVhZHlTdGF0ZS5DYW5jZWxsZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWFkeVN0YXRlID0gUmVhZHlTdGF0ZS5Eb25lO1xuICAgICAgICAgICAgICAgIF9kb20uY2xlYW51cChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX2ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc3BvbnNlT3B0aW9uc18xID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7IGJvZHk6IEpTT05QX0VSUl9OT19DQUxMQkFDSywgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yLCB1cmw6IHVybCB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3B0aW9uc18xID0gYmFzZVJlc3BvbnNlT3B0aW9ucy5tZXJnZShyZXNwb25zZU9wdGlvbnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zXzEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHsgYm9keTogX3RoaXMuX3Jlc3BvbnNlRGF0YSwgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmJhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcHRpb25zID0gX3RoaXMuYmFzZVJlc3BvbnNlT3B0aW9ucy5tZXJnZShyZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLm5leHQobmV3IFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlYWR5U3RhdGUgPT09IFJlYWR5U3RhdGUuQ2FuY2VsbGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgX3RoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuRG9uZTtcbiAgICAgICAgICAgICAgICBfZG9tLmNsZWFudXAoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHsgYm9keTogZXJyb3IubWVzc2FnZSwgdHlwZTogUmVzcG9uc2VUeXBlLkVycm9yIH0pO1xuICAgICAgICAgICAgICAgIGlmIChiYXNlUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICBfZG9tLnNlbmQoc2NyaXB0KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuQ2FuY2VsbGVkO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZG9tLmNsZWFudXAoc2NyaXB0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgSlNPTlAgcmVxdWVzdCBjb21wbGV0ZXMsIHRvIG5vdGlmeSB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBvZiB0aGUgbmV3IGRhdGEuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIEpTT05QIHJlcXVlc3QgY29tcGxldGVzLCB0byBub3RpZnkgdGhlIGFwcGxpY2F0aW9uXG4gICAgICogb2YgdGhlIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7Pz19IGRhdGFcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEpTT05QQ29ubmVjdGlvbi5wcm90b3R5cGUuZmluaXNoZWQgPSAvKipcbiAgICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgSlNPTlAgcmVxdWVzdCBjb21wbGV0ZXMsIHRvIG5vdGlmeSB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBvZiB0aGUgbmV3IGRhdGEuXG4gICAgICogQHBhcmFtIHs/PX0gZGF0YVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gRG9uJ3QgbGVhayBjb25uZWN0aW9uc1xuICAgICAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RvbS5yZW1vdmVDb25uZWN0aW9uKHRoaXMuX2lkKTtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gUmVhZHlTdGF0ZS5DYW5jZWxsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlRGF0YSA9IGRhdGE7XG4gICAgfTtcbiAgICByZXR1cm4gSlNPTlBDb25uZWN0aW9uO1xufSgpKTtcbi8qKlxuICogQSB7XFxAbGluayBDb25uZWN0aW9uQmFja2VuZH0gdGhhdCB1c2VzIHRoZSBKU09OUCBzdHJhdGVneSBvZiBtYWtpbmcgcmVxdWVzdHMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgSlNPTlBCYWNrZW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKU09OUEJhY2tlbmQsIF9zdXBlcik7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGZ1bmN0aW9uIEpTT05QQmFja2VuZChfYnJvd3NlckpTT05QLCBfYmFzZVJlc3BvbnNlT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fYnJvd3NlckpTT05QID0gX2Jyb3dzZXJKU09OUDtcbiAgICAgICAgX3RoaXMuX2Jhc2VSZXNwb25zZU9wdGlvbnMgPSBfYmFzZVJlc3BvbnNlT3B0aW9ucztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEpTT05QQmFja2VuZC5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdGlvbiA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcmVxdWVzdFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBKU09OUENvbm5lY3Rpb24ocmVxdWVzdCwgdGhpcy5fYnJvd3NlckpTT05QLCB0aGlzLl9iYXNlUmVzcG9uc2VPcHRpb25zKTtcbiAgICB9O1xuICAgIEpTT05QQmFja2VuZC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEpTT05QQmFja2VuZC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBCcm93c2VySnNvbnAsIH0sXG4gICAgICAgIHsgdHlwZTogUmVzcG9uc2VPcHRpb25zLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIEpTT05QQmFja2VuZDtcbn0oQ29ubmVjdGlvbkJhY2tlbmQpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFhTU0lfUFJFRklYID0gL15cXClcXF1cXH0nLD9cXG4vO1xuLyoqXG4gKiBDcmVhdGVzIGNvbm5lY3Rpb25zIHVzaW5nIGBYTUxIdHRwUmVxdWVzdGAuIEdpdmVuIGEgZnVsbHktcXVhbGlmaWVkXG4gKiByZXF1ZXN0LCBhbiBgWEhSQ29ubmVjdGlvbmAgd2lsbCBpbW1lZGlhdGVseSBjcmVhdGUgYW4gYFhNTEh0dHBSZXF1ZXN0YCBvYmplY3QgYW5kIHNlbmQgdGhlXG4gKiByZXF1ZXN0LlxuICpcbiAqIFRoaXMgY2xhc3Mgd291bGQgdHlwaWNhbGx5IG5vdCBiZSBjcmVhdGVkIG9yIGludGVyYWN0ZWQgd2l0aCBkaXJlY3RseSBpbnNpZGUgYXBwbGljYXRpb25zLCB0aG91Z2hcbiAqIHRoZSB7XFxAbGluayBNb2NrQ29ubmVjdGlvbn0gbWF5IGJlIGludGVyYWN0ZWQgd2l0aCBpbiB0ZXN0cy5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBYSFJDb25uZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFhIUkNvbm5lY3Rpb24ocmVxLCBicm93c2VyWEhSLCBiYXNlUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVxdWVzdCA9IHJlcTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChyZXNwb25zZU9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBfeGhyID0gYnJvd3NlclhIUi5idWlsZCgpO1xuICAgICAgICAgICAgX3hoci5vcGVuKFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0udG9VcHBlckNhc2UoKSwgcmVxLnVybCk7XG4gICAgICAgICAgICBpZiAocmVxLndpdGhDcmVkZW50aWFscyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3hoci53aXRoQ3JlZGVudGlhbHMgPSByZXEud2l0aENyZWRlbnRpYWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbG9hZCBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc3RhdHVzID0gX3hoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiBfeGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBIVFRQIDIwNCBtZWFucyBubyBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBSZXNvdXJjZUxvYWRlciBMZXZlbDIgc3BlY1xuICAgICAgICAgICAgICAgICAgICAvLyAoc3VwcG9ydGVkIGJ5IElFMTApXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSAodHlwZW9mIF94aHIucmVzcG9uc2UgPT09ICd1bmRlZmluZWQnKSA/IF94aHIucmVzcG9uc2VUZXh0IDogX3hoci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1wbGljaXRseSBzdHJpcCBhIHBvdGVudGlhbCBYU1NJIHByZWZpeC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IGJvZHkucmVwbGFjZShYU1NJX1BSRUZJWCwgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZpeCBzdGF0dXMgY29kZSB3aGVuIGl0IGlzIDAgKDAgc3RhdHVzIGlzIHVuZG9jdW1lbnRlZCkuXG4gICAgICAgICAgICAgICAgLy8gT2NjdXJzIHdoZW4gYWNjZXNzaW5nIGZpbGUgcmVzb3VyY2VzIG9yIG9uIEFuZHJvaWQgNC4xIHN0b2NrIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvLyB3aGlsZSByZXRyaWV2aW5nIGZpbGVzIGZyb20gYXBwbGljYXRpb24gY2FjaGUuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBib2R5ID8gMjAwIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaGVhZGVycyA9IEhlYWRlcnMuZnJvbVJlc3BvbnNlSGVhZGVyU3RyaW5nKF94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAgICAgICAgICAgICAgIC8vIElFIDkgZG9lcyBub3QgcHJvdmlkZSB0aGUgd2F5IHRvIGdldCBVUkwgb2YgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB1cmwgPSBnZXRSZXNwb25zZVVSTChfeGhyKSB8fCByZXEudXJsO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0YXR1c1RleHQgPSBfeGhyLnN0YXR1c1RleHQgfHwgJ09LJztcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHsgYm9keTogYm9keSwgc3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsIHVybDogdXJsIH0pO1xuICAgICAgICAgICAgICAgIGlmIChiYXNlUmVzcG9uc2VPcHRpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcHRpb25zID0gYmFzZVJlc3BvbnNlT3B0aW9ucy5tZXJnZShyZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9rID0gaXNTdWNjZXNzKHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8oZ2RpMjI5MCk6IGRlZmVyIGNvbXBsZXRlIGlmIGFycmF5IGJ1ZmZlciB1bnRpbCBkb25lXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBlcnJvciBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc3BvbnNlT3B0aW9ucyA9IG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFJlc3BvbnNlVHlwZS5FcnJvcixcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBfeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogX3hoci5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChiYXNlUmVzcG9uc2VPcHRpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VPcHRpb25zID0gYmFzZVJlc3BvbnNlT3B0aW9ucy5tZXJnZShyZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmVycm9yKG5ldyBSZXNwb25zZShyZXNwb25zZU9wdGlvbnMpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5zZXREZXRlY3RlZENvbnRlbnRUeXBlKHJlcSwgX3hocik7XG4gICAgICAgICAgICBpZiAocmVxLmhlYWRlcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVxLmhlYWRlcnMuaGFzKCdBY2NlcHQnKSkge1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxLmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWVzLCBuYW1lKSB7IHJldHVybiBfeGhyLnNldFJlcXVlc3RIZWFkZXIoLyoqIEB0eXBlIHs/fSAqLyAoKG5hbWUpKSwgdmFsdWVzLmpvaW4oJywnKSk7IH0pO1xuICAgICAgICAgICAgLy8gU2VsZWN0IHRoZSBjb3JyZWN0IGJ1ZmZlciB0eXBlIHRvIHN0b3JlIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBfeGhyLnJlc3BvbnNlVHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXEucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb250ZW50VHlwZS5BcnJheUJ1ZmZlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF94aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29udGVudFR5cGUuSnNvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF94aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb250ZW50VHlwZS5UZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX3hoci5yZXNwb25zZVR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvbnRlbnRUeXBlLkJsb2I6XG4gICAgICAgICAgICAgICAgICAgICAgICBfeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2VsZWN0ZWQgcmVzcG9uc2VUeXBlIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgX3hoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgX3hoci5zZW5kKF90aGlzLnJlcXVlc3QuZ2V0Qm9keSgpKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3hoci5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgICAgICAgICBfeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgX3hoci5hYm9ydCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcmVxXG4gICAgICogQHBhcmFtIHs/fSBfeGhyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBYSFJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXREZXRlY3RlZENvbnRlbnRUeXBlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXFcbiAgICAgKiBAcGFyYW0gez99IF94aHJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChyZXEgLyoqIFRPRE8gUmVxdWVzdCAqLywgX3hociAvKiogWE1MSHR0cFJlcXVlc3QgKi8pIHtcbiAgICAgICAgLy8gU2tpcCBpZiBhIGN1c3RvbSBDb250ZW50LVR5cGUgaGVhZGVyIGlzIHByb3ZpZGVkXG4gICAgICAgIGlmIChyZXEuaGVhZGVycyAhPSBudWxsICYmIHJlcS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCB0aGUgZGV0ZWN0ZWQgY29udGVudCB0eXBlXG4gICAgICAgIHN3aXRjaCAocmVxLmNvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLk5PTkU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLkpTT046XG4gICAgICAgICAgICAgICAgX3hoci5zZXRSZXF1ZXN0SGVhZGVyKCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5GT1JNOlxuICAgICAgICAgICAgICAgIF94aHIuc2V0UmVxdWVzdEhlYWRlcignY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLlRFWFQ6XG4gICAgICAgICAgICAgICAgX3hoci5zZXRSZXF1ZXN0SGVhZGVyKCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5CTE9COlxuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGJsb2IgPSByZXEuYmxvYigpO1xuICAgICAgICAgICAgICAgIGlmIChibG9iLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3hoci5zZXRSZXF1ZXN0SGVhZGVyKCdjb250ZW50LXR5cGUnLCBibG9iLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFhIUkNvbm5lY3Rpb247XG59KCkpO1xuLyoqXG4gKiBgWFNSRkNvbmZpZ3VyYXRpb25gIHNldHMgdXAgQ3Jvc3MgU2l0ZSBSZXF1ZXN0IEZvcmdlcnkgKFhTUkYpIHByb3RlY3Rpb24gZm9yIHRoZSBhcHBsaWNhdGlvblxuICogdXNpbmcgYSBjb29raWUuIFNlZSBodHRwczovL3d3dy5vd2FzcC5vcmcvaW5kZXgucGhwL0Nyb3NzLVNpdGVfUmVxdWVzdF9Gb3JnZXJ5XyhDU1JGKVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gWFNSRi5cbiAqXG4gKiBBcHBsaWNhdGlvbnMgY2FuIGNvbmZpZ3VyZSBjdXN0b20gY29va2llIGFuZCBoZWFkZXIgbmFtZXMgYnkgYmluZGluZyBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzXG4gKiB3aXRoIGRpZmZlcmVudCBgY29va2llTmFtZWAgYW5kIGBoZWFkZXJOYW1lYCB2YWx1ZXMuIFNlZSB0aGUgbWFpbiBIVFRQIGRvY3VtZW50YXRpb24gZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgQ29va2llWFNSRlN0cmF0ZWd5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvb2tpZVhTUkZTdHJhdGVneShfY29va2llTmFtZSwgX2hlYWRlck5hbWUpIHtcbiAgICAgICAgaWYgKF9jb29raWVOYW1lID09PSB2b2lkIDApIHsgX2Nvb2tpZU5hbWUgPSAnWFNSRi1UT0tFTic7IH1cbiAgICAgICAgaWYgKF9oZWFkZXJOYW1lID09PSB2b2lkIDApIHsgX2hlYWRlck5hbWUgPSAnWC1YU1JGLVRPS0VOJzsgfVxuICAgICAgICB0aGlzLl9jb29raWVOYW1lID0gX2Nvb2tpZU5hbWU7XG4gICAgICAgIHRoaXMuX2hlYWRlck5hbWUgPSBfaGVhZGVyTmFtZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXFcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIENvb2tpZVhTUkZTdHJhdGVneS5wcm90b3R5cGUuY29uZmlndXJlUmVxdWVzdCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcmVxXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHhzcmZUb2tlbiA9IMm1Z2V0RE9NKCkuZ2V0Q29va2llKHRoaXMuX2Nvb2tpZU5hbWUpO1xuICAgICAgICBpZiAoeHNyZlRva2VuKSB7XG4gICAgICAgICAgICByZXEuaGVhZGVycy5zZXQodGhpcy5faGVhZGVyTmFtZSwgeHNyZlRva2VuKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvb2tpZVhTUkZTdHJhdGVneTtcbn0oKSk7XG4vKipcbiAqIENyZWF0ZXMge1xcQGxpbmsgWEhSQ29ubmVjdGlvbn0gaW5zdGFuY2VzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd291bGQgdHlwaWNhbGx5IG5vdCBiZSB1c2VkIGJ5IGVuZCB1c2VycywgYnV0IGNvdWxkIGJlXG4gKiBvdmVycmlkZGVuIGlmIGEgZGlmZmVyZW50IGJhY2tlbmQgaW1wbGVtZW50YXRpb24gc2hvdWxkIGJlIHVzZWQsXG4gKiBzdWNoIGFzIGluIGEgbm9kZSBiYWNrZW5kLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0h0dHAsIE15Tm9kZUJhY2tlbmQsIEhUVFBfUFJPVklERVJTLCBCYXNlUmVxdWVzdE9wdGlvbnN9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKiBcXEBDb21wb25lbnQoe1xuICogICB2aWV3UHJvdmlkZXJzOiBbXG4gKiAgICAgSFRUUF9QUk9WSURFUlMsXG4gKiAgICAge3Byb3ZpZGU6IEh0dHAsIHVzZUZhY3Rvcnk6IChiYWNrZW5kLCBvcHRpb25zKSA9PiB7XG4gKiAgICAgICByZXR1cm4gbmV3IEh0dHAoYmFja2VuZCwgb3B0aW9ucyk7XG4gKiAgICAgfSwgZGVwczogW015Tm9kZUJhY2tlbmQsIEJhc2VSZXF1ZXN0T3B0aW9uc119XVxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSB7XG4gKiAgICAgaHR0cC5yZXF1ZXN0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5wZW9wbGUgPSByZXMuanNvbigpKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBYSFJCYWNrZW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFhIUkJhY2tlbmQoX2Jyb3dzZXJYSFIsIF9iYXNlUmVzcG9uc2VPcHRpb25zLCBfeHNyZlN0cmF0ZWd5KSB7XG4gICAgICAgIHRoaXMuX2Jyb3dzZXJYSFIgPSBfYnJvd3NlclhIUjtcbiAgICAgICAgdGhpcy5fYmFzZVJlc3BvbnNlT3B0aW9ucyA9IF9iYXNlUmVzcG9uc2VPcHRpb25zO1xuICAgICAgICB0aGlzLl94c3JmU3RyYXRlZ3kgPSBfeHNyZlN0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFhIUkJhY2tlbmQucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuX3hzcmZTdHJhdGVneS5jb25maWd1cmVSZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgICByZXR1cm4gbmV3IFhIUkNvbm5lY3Rpb24ocmVxdWVzdCwgdGhpcy5fYnJvd3NlclhIUiwgdGhpcy5fYmFzZVJlc3BvbnNlT3B0aW9ucyk7XG4gICAgfTtcbiAgICBYSFJCYWNrZW5kLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgWEhSQmFja2VuZC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBCcm93c2VyWGhyLCB9LFxuICAgICAgICB7IHR5cGU6IFJlc3BvbnNlT3B0aW9ucywgfSxcbiAgICAgICAgeyB0eXBlOiBYU1JGU3RyYXRlZ3ksIH0sXG4gICAgXTsgfTtcbiAgICByZXR1cm4gWEhSQmFja2VuZDtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBhIHJlcXVlc3Qgb3B0aW9ucyBvYmplY3QgdG8gYmUgb3B0aW9uYWxseSBwcm92aWRlZCB3aGVuIGluc3RhbnRpYXRpbmcgYVxuICoge1xcQGxpbmsgUmVxdWVzdH0uXG4gKlxuICogVGhpcyBjbGFzcyBpcyBiYXNlZCBvbiB0aGUgYFJlcXVlc3RJbml0YCBkZXNjcmlwdGlvbiBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdGluaXQpLlxuICpcbiAqIEFsbCB2YWx1ZXMgYXJlIG51bGwgYnkgZGVmYXVsdC4gVHlwaWNhbCBkZWZhdWx0cyBjYW4gYmUgZm91bmQgaW4gdGhlIHtcXEBsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc31cbiAqIGNsYXNzLCB3aGljaCBzdWItY2xhc3NlcyBgUmVxdWVzdE9wdGlvbnNgLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKlxuICogY29uc3Qgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0LFxuICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gKiB9KTtcbiAqIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMpO1xuICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIGh0dHBzOi8vZ29vZ2xlLmNvbVxuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgUmVxdWVzdE9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyhEem1pdHJ5KTogcmVtb3ZlIHNlYXJjaCB3aGVuIHRoaXMuc2VhcmNoIGlzIHJlbW92ZWRcbiAgICBmdW5jdGlvbiBSZXF1ZXN0T3B0aW9ucyhvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHZhciBtZXRob2QgPSBvcHRzLm1ldGhvZCwgaGVhZGVycyA9IG9wdHMuaGVhZGVycywgYm9keSA9IG9wdHMuYm9keSwgdXJsID0gb3B0cy51cmwsIHNlYXJjaCA9IG9wdHMuc2VhcmNoLCBwYXJhbXMgPSBvcHRzLnBhcmFtcywgd2l0aENyZWRlbnRpYWxzID0gb3B0cy53aXRoQ3JlZGVudGlhbHMsIHJlc3BvbnNlVHlwZSA9IG9wdHMucmVzcG9uc2VUeXBlO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZCAhPSBudWxsID8gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2QpIDogbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycyAhPSBudWxsID8gaGVhZGVycyA6IG51bGw7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHkgIT0gbnVsbCA/IGJvZHkgOiBudWxsO1xuICAgICAgICB0aGlzLnVybCA9IHVybCAhPSBudWxsID8gdXJsIDogbnVsbDtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB0aGlzLl9tZXJnZVNlYXJjaFBhcmFtcyhwYXJhbXMgfHwgc2VhcmNoKTtcbiAgICAgICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHMgIT0gbnVsbCA/IHdpdGhDcmVkZW50aWFscyA6IG51bGw7XG4gICAgICAgIHRoaXMucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlICE9IG51bGwgPyByZXNwb25zZVR5cGUgOiBudWxsO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVxdWVzdE9wdGlvbnMucHJvdG90eXBlLCBcInNlYXJjaFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBmcm9tIDQuMC4wLiBVc2UgcGFyYW1zIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBmcm9tIDQuMC4wLiBVc2UgcGFyYW1zIGluc3RlYWQuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnBhcmFtczsgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIGZyb20gNC4wLjAuIFVzZSBwYXJhbXMgaW5zdGVhZC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogLyoqXG4gICAgICAgICAqIEBkZXByZWNhdGVkIGZyb20gNC4wLjAuIFVzZSBwYXJhbXMgaW5zdGVhZC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJhbXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChwYXJhbXMpIHsgdGhpcy5wYXJhbXMgPSBwYXJhbXM7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBgUmVxdWVzdE9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvIG92ZXJyaWRlXG4gICAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgYGhlYWRlcnNgIGFuZCBgc2VhcmNoYCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIHZhbHVlcyBjb21wbGV0ZWx5IGlmIHByZXNlbnQgaW5cbiAgICAgKiB0aGUgYG9wdGlvbnNgIG9iamVjdC4gSWYgdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBtZXJnZWQsIGl0IHNob3VsZCBiZSBkb25lIHByaW9yIHRvIGNhbGxpbmdcbiAgICAgKiBgbWVyZ2VgIG9uIHRoZSBgUmVxdWVzdE9wdGlvbnNgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuICAgICAqXG4gICAgICogY29uc3Qgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICogICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICAgICAqIH0pO1xuICAgICAqIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMubWVyZ2Uoe1xuICAgICAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICAgICAqIH0pKTtcbiAgICAgKiBjb25zb2xlLmxvZygncmVxLm1ldGhvZDonLCBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdKTsgLy8gUG9zdFxuICAgICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICAgKiBjb25zb2xlLmxvZygncmVxLnVybDonLCByZXEudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAgICogYGBgXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXF1ZXN0T3B0aW9uc2AgaW5zdGFuY2UsIHVzaW5nIHRoZSBvcHRpb25hbCBpbnB1dCBhcyB2YWx1ZXMgdG8gb3ZlcnJpZGVcbiAgICAgKiBleGlzdGluZyB2YWx1ZXMuIFRoaXMgbWV0aG9kIHdpbGwgbm90IGNoYW5nZSB0aGUgdmFsdWVzIG9mIHRoZSBpbnN0YW5jZSBvbiB3aGljaCBpdCBpcyBiZWluZ1xuICAgICAqIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCBgaGVhZGVyc2AgYW5kIGBzZWFyY2hgIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgdmFsdWVzIGNvbXBsZXRlbHkgaWYgcHJlc2VudCBpblxuICAgICAqIHRoZSBgb3B0aW9uc2Agb2JqZWN0LiBJZiB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIG1lcmdlZCwgaXQgc2hvdWxkIGJlIGRvbmUgcHJpb3IgdG8gY2FsbGluZ1xuICAgICAqIGBtZXJnZWAgb24gdGhlIGBSZXF1ZXN0T3B0aW9uc2AgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW1wb3J0IHtSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdCwgUmVxdWVzdE1ldGhvZH0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAgICAgKlxuICAgICAqIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAqICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgICAgKiB9KTtcbiAgICAgKiBjb25zdCByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zLm1lcmdlKHtcbiAgICAgKiAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgKiB9KSk7XG4gICAgICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAgICAgKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBudWxsXG4gICAgICogY29uc29sZS5sb2coJ3JlcS51cmw6JywgcmVxLnVybCk7IC8vIGh0dHBzOi8vZ29vZ2xlLmNvbVxuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlcXVlc3RPcHRpb25zLnByb3RvdHlwZS5tZXJnZSA9IC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBgUmVxdWVzdE9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvIG92ZXJyaWRlXG4gICAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgYGhlYWRlcnNgIGFuZCBgc2VhcmNoYCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIHZhbHVlcyBjb21wbGV0ZWx5IGlmIHByZXNlbnQgaW5cbiAgICAgKiB0aGUgYG9wdGlvbnNgIG9iamVjdC4gSWYgdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBtZXJnZWQsIGl0IHNob3VsZCBiZSBkb25lIHByaW9yIHRvIGNhbGxpbmdcbiAgICAgKiBgbWVyZ2VgIG9uIHRoZSBgUmVxdWVzdE9wdGlvbnNgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gICAgICpcbiAgICAgKiBjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gICAgICogfSk7XG4gICAgICogY29uc3QgcmVxID0gbmV3IFJlcXVlc3Qob3B0aW9ucy5tZXJnZSh7XG4gICAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAgICogfSkpO1xuICAgICAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gICAgICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICAgICAqIGNvbnNvbGUubG9nKCdyZXEudXJsOicsIHJlcS51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIG1ldGhvZDogb3B0aW9ucyAmJiBvcHRpb25zLm1ldGhvZCAhPSBudWxsID8gb3B0aW9ucy5tZXRob2QgOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzICE9IG51bGwgPyBvcHRpb25zLmhlYWRlcnMgOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICAgICAgYm9keTogb3B0aW9ucyAmJiBvcHRpb25zLmJvZHkgIT0gbnVsbCA/IG9wdGlvbnMuYm9keSA6IHRoaXMuYm9keSxcbiAgICAgICAgICAgIHVybDogb3B0aW9ucyAmJiBvcHRpb25zLnVybCAhPSBudWxsID8gb3B0aW9ucy51cmwgOiB0aGlzLnVybCxcbiAgICAgICAgICAgIHBhcmFtczogb3B0aW9ucyAmJiB0aGlzLl9tZXJnZVNlYXJjaFBhcmFtcyhvcHRpb25zLnBhcmFtcyB8fCBvcHRpb25zLnNlYXJjaCksXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdGlvbnMgJiYgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgIT0gbnVsbCA/IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzIDpcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogb3B0aW9ucyAmJiBvcHRpb25zLnJlc3BvbnNlVHlwZSAhPSBudWxsID8gb3B0aW9ucy5yZXNwb25zZVR5cGUgOlxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VUeXBlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gcGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXF1ZXN0T3B0aW9ucy5wcm90b3R5cGUuX21lcmdlU2VhcmNoUGFyYW1zID0gLyoqXG4gICAgICogQHBhcmFtIHs/PX0gcGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcGFyYW1zKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgICAgICBpZiAocGFyYW1zIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLmNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/PX0gb2JqUGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXF1ZXN0T3B0aW9ucy5wcm90b3R5cGUuX3BhcnNlUGFyYW1zID0gLyoqXG4gICAgICogQHBhcmFtIHs/PX0gb2JqUGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAob2JqUGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChvYmpQYXJhbXMgPT09IHZvaWQgMCkgeyBvYmpQYXJhbXMgPSB7fTsgfVxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IG9ialBhcmFtc1trZXldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gX3RoaXMuX2FwcGVuZFBhcmFtKGtleSwgaXRlbSwgcGFyYW1zKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fYXBwZW5kUGFyYW0oa2V5LCB2YWx1ZSwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVxdWVzdE9wdGlvbnMucHJvdG90eXBlLl9hcHBlbmRQYXJhbSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30ga2V5XG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgcGFyYW1zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlcXVlc3RPcHRpb25zO1xufSgpKTtcbi8qKlxuICogU3ViY2xhc3Mgb2Yge1xcQGxpbmsgUmVxdWVzdE9wdGlvbnN9LCB3aXRoIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIERlZmF1bHQgdmFsdWVzOlxuICogICogbWV0aG9kOiB7XFxAbGluayBSZXF1ZXN0TWV0aG9kIFJlcXVlc3RNZXRob2QuR2V0fVxuICogICogaGVhZGVyczogZW1wdHkge1xcQGxpbmsgSGVhZGVyc30gb2JqZWN0XG4gKlxuICogVGhpcyBjbGFzcyBjb3VsZCBiZSBleHRlbmRlZCBhbmQgYm91bmQgdG8gdGhlIHtcXEBsaW5rIFJlcXVlc3RPcHRpb25zfSBjbGFzc1xuICogd2hlbiBjb25maWd1cmluZyBhbiB7XFxAbGluayBJbmplY3Rvcn0sIGluIG9yZGVyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIHVzZWQgYnkge1xcQGxpbmsgSHR0cH0gdG8gY3JlYXRlIGFuZCBzZW5kIHtcXEBsaW5rIFJlcXVlc3QgUmVxdWVzdHN9LlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7QmFzZVJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqXG4gKiBjbGFzcyBNeU9wdGlvbnMgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICogICBzZWFyY2g6IHN0cmluZyA9ICdjb3JlVGVhbT10cnVlJztcbiAqIH1cbiAqXG4gKiB7cHJvdmlkZTogUmVxdWVzdE9wdGlvbnMsIHVzZUNsYXNzOiBNeU9wdGlvbnN9O1xuICogYGBgXG4gKlxuICogVGhlIG9wdGlvbnMgY291bGQgYWxzbyBiZSBleHRlbmRlZCB3aGVuIG1hbnVhbGx5IGNyZWF0aW5nIGEge1xcQGxpbmsgUmVxdWVzdH1cbiAqIG9iamVjdC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7QmFzZVJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICpcbiAqIGNvbnN0IG9wdGlvbnMgPSBuZXcgQmFzZVJlcXVlc3RPcHRpb25zKCk7XG4gKiBjb25zdCByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zLm1lcmdlKHtcbiAqICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3QsXG4gKiAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAqIH0pKTtcbiAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBudWxsXG4gKiBjb25zb2xlLmxvZygncmVxLnVybDonLCByZXEudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBCYXNlUmVxdWVzdE9wdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhc2VSZXF1ZXN0T3B0aW9ucywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCYXNlUmVxdWVzdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB7IG1ldGhvZDogUmVxdWVzdE1ldGhvZC5HZXQsIGhlYWRlcnM6IG5ldyBIZWFkZXJzKCkgfSkgfHwgdGhpcztcbiAgICB9XG4gICAgQmFzZVJlcXVlc3RPcHRpb25zLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQmFzZVJlcXVlc3RPcHRpb25zLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEJhc2VSZXF1ZXN0T3B0aW9ucztcbn0oUmVxdWVzdE9wdGlvbnMpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBDcmVhdGVzIGBSZXF1ZXN0YCBpbnN0YW5jZXMgZnJvbSBwcm92aWRlZCB2YWx1ZXMuXG4gKlxuICogVGhlIFJlcXVlc3QncyBpbnRlcmZhY2UgaXMgaW5zcGlyZWQgYnkgdGhlIFJlcXVlc3QgY29uc3RydWN0b3IgZGVmaW5lZCBpbiB0aGUgW0ZldGNoXG4gKiBTcGVjXShodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jcmVxdWVzdC1jbGFzcyksXG4gKiBidXQgaXMgY29uc2lkZXJlZCBhIHN0YXRpYyB2YWx1ZSB3aG9zZSBib2R5IGNhbiBiZSBhY2Nlc3NlZCBtYW55IHRpbWVzLiBUaGVyZSBhcmUgb3RoZXJcbiAqIGRpZmZlcmVuY2VzIGluIHRoZSBpbXBsZW1lbnRhdGlvbiwgYnV0IHRoaXMgaXMgdGhlIG1vc3Qgc2lnbmlmaWNhbnQuXG4gKlxuICogYFJlcXVlc3RgIGluc3RhbmNlcyBhcmUgdHlwaWNhbGx5IGNyZWF0ZWQgYnkgaGlnaGVyLWxldmVsIGNsYXNzZXMsIGxpa2Uge1xcQGxpbmsgSHR0cH0gYW5kXG4gKiB7XFxAbGluayBKc29ucH0sIGJ1dCBpdCBtYXkgb2NjYXNpb25hbGx5IGJlIHVzZWZ1bCB0byBleHBsaWNpdGx5IGNyZWF0ZSBgUmVxdWVzdGAgaW5zdGFuY2VzLlxuICogT25lIHN1Y2ggZXhhbXBsZSBpcyB3aGVuIGNyZWF0aW5nIHNlcnZpY2VzIHRoYXQgd3JhcCBoaWdoZXItbGV2ZWwgc2VydmljZXMsIGxpa2Uge1xcQGxpbmsgSHR0cH0sXG4gKiB3aGVyZSBpdCBtYXkgYmUgdXNlZnVsIHRvIGdlbmVyYXRlIGEgYFJlcXVlc3RgIHdpdGggYXJiaXRyYXJ5IGhlYWRlcnMgYW5kIHNlYXJjaCBwYXJhbXMuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnXFxAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKlxuICogXFxASW5qZWN0YWJsZSgpXG4gKiBjbGFzcyBBdXRvQXV0aGVudGljYXRvciB7XG4gKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHt9XG4gKiAgIHJlcXVlc3QodXJsOnN0cmluZykge1xuICogICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChuZXcgUmVxdWVzdCh7XG4gKiAgICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuR2V0LFxuICogICAgICAgdXJsOiB1cmwsXG4gKiAgICAgICBzZWFyY2g6ICdwYXNzd29yZD0xMjMnXG4gKiAgICAgfSkpO1xuICogICB9XG4gKiB9XG4gKlxuICogdmFyIGluamVjdG9yID0gSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbSFRUUF9QUk9WSURFUlMsIEF1dG9BdXRoZW50aWNhdG9yXSk7XG4gKiB2YXIgYXV0aGVudGljYXRvciA9IGluamVjdG9yLmdldChBdXRvQXV0aGVudGljYXRvcik7XG4gKiBhdXRoZW50aWNhdG9yLnJlcXVlc3QoJ3Blb3BsZS5qc29uJykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gKiAgIC8vVVJMIHNob3VsZCBoYXZlIGluY2x1ZGVkICc/cGFzc3dvcmQ9MTIzJ1xuICogICBjb25zb2xlLmxvZygncGVvcGxlJywgcmVzLmpzb24oKSk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIFJlcXVlc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlcXVlc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVxdWVzdChyZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICAvLyBUT0RPOiBhc3NlcnQgdGhhdCB1cmwgaXMgcHJlc2VudFxuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB1cmwgPSByZXF1ZXN0T3B0aW9ucy51cmw7XG4gICAgICAgIF90aGlzLnVybCA9IC8qKiBAdHlwZSB7P30gKi8gKChyZXF1ZXN0T3B0aW9ucy51cmwpKTtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGFyYW1zQXJnID0gcmVxdWVzdE9wdGlvbnMucGFyYW1zIHx8IHJlcXVlc3RPcHRpb25zLnNlYXJjaDtcbiAgICAgICAgaWYgKHBhcmFtc0FyZykge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGFyYW1zID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNBcmcgPT09ICdvYmplY3QnICYmICEocGFyYW1zQXJnIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVybEVuY29kZVBhcmFtcyhwYXJhbXNBcmcpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXNBcmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHByZWZpeCA9ICc/JztcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMudXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVmaXggPSAoX3RoaXMudXJsW190aGlzLnVybC5sZW5ndGggLSAxXSA9PSAnJicpID8gJycgOiAnJic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGp1c3QgZGVsZXRlIHNlYXJjaC1xdWVyeS1sb29raW5nIHN0cmluZyBpbiB1cmw/XG4gICAgICAgICAgICAgICAgLy8gVE9ETzoganVzdCBkZWxldGUgc2VhcmNoLXF1ZXJ5LWxvb2tpbmcgc3RyaW5nIGluIHVybD9cbiAgICAgICAgICAgICAgICBfdGhpcy51cmwgPSB1cmwgKyBwcmVmaXggKyBwYXJhbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2JvZHkgPSByZXF1ZXN0T3B0aW9ucy5ib2R5O1xuICAgICAgICBfdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2ROYW1lKC8qKiBAdHlwZSB7P30gKi8gKChyZXF1ZXN0T3B0aW9ucy5tZXRob2QpKSk7XG4gICAgICAgIC8vIFRPRE8oamVmZmJjcm9zcyk6IGltcGxlbWVudCBiZWhhdmlvclxuICAgICAgICAvLyBEZWZhdWx0cyB0byAnb21pdCcsIGNvbnNpc3RlbnQgd2l0aCBicm93c2VyXG4gICAgICAgIC8vIFRPRE8oamVmZmJjcm9zcyk6IGltcGxlbWVudCBiZWhhdmlvclxuICAgICAgICAvLyBEZWZhdWx0cyB0byAnb21pdCcsIGNvbnNpc3RlbnQgd2l0aCBicm93c2VyXG4gICAgICAgIF90aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgX3RoaXMuY29udGVudFR5cGUgPSBfdGhpcy5kZXRlY3RDb250ZW50VHlwZSgpO1xuICAgICAgICBfdGhpcy53aXRoQ3JlZGVudGlhbHMgPSAvKiogQHR5cGUgez99ICovICgocmVxdWVzdE9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSk7XG4gICAgICAgIF90aGlzLnJlc3BvbnNlVHlwZSA9IC8qKiBAdHlwZSB7P30gKi8gKChyZXF1ZXN0T3B0aW9ucy5yZXNwb25zZVR5cGUpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IHR5cGUgZW51bSBiYXNlZCBvbiBoZWFkZXIgb3B0aW9ucy5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IHR5cGUgZW51bSBiYXNlZCBvbiBoZWFkZXIgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlcXVlc3QucHJvdG90eXBlLmRldGVjdENvbnRlbnRUeXBlID0gLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udGVudCB0eXBlIGVudW0gYmFzZWQgb24gaGVhZGVyIG9wdGlvbnMuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxuICAgICAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5KU09OO1xuICAgICAgICAgICAgY2FzZSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuRk9STTtcbiAgICAgICAgICAgIGNhc2UgJ211bHRpcGFydC9mb3JtLWRhdGEnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5GT1JNX0RBVEE7XG4gICAgICAgICAgICBjYXNlICd0ZXh0L3BsYWluJzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHQvaHRtbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLlRFWFQ7XG4gICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIkMSA/IENvbnRlbnRUeXBlLkFSUkFZX0JVRkZFUiA6IENvbnRlbnRUeXBlLkJMT0I7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRldGVjdENvbnRlbnRUeXBlRnJvbUJvZHkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udGVudCB0eXBlIG9mIHJlcXVlc3QncyBib2R5IGJhc2VkIG9uIGl0cyB0eXBlLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgdHlwZSBvZiByZXF1ZXN0J3MgYm9keSBiYXNlZCBvbiBpdHMgdHlwZS5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlcXVlc3QucHJvdG90eXBlLmRldGVjdENvbnRlbnRUeXBlRnJvbUJvZHkgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IHR5cGUgb2YgcmVxdWVzdCdzIGJvZHkgYmFzZWQgb24gaXRzIHR5cGUuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5OT05FO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5GT1JNO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLkZPUk1fREFUQTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgQmxvYiQxKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuQkxPQjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIkMSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLkFSUkFZX0JVRkZFUjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ib2R5ICYmIHR5cGVvZiB0aGlzLl9ib2R5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLkpTT047XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuVEVYVDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVxdWVzdCdzIGJvZHkgYWNjb3JkaW5nIHRvIGl0cyB0eXBlLiBJZiBib2R5IGlzIHVuZGVmaW5lZCwgcmV0dXJuXG4gICAgICogbnVsbC5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZXF1ZXN0J3MgYm9keSBhY2NvcmRpbmcgdG8gaXRzIHR5cGUuIElmIGJvZHkgaXMgdW5kZWZpbmVkLCByZXR1cm5cbiAgICAgKiBudWxsLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVxdWVzdC5wcm90b3R5cGUuZ2V0Qm9keSA9IC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFjY29yZGluZyB0byBpdHMgdHlwZS4gSWYgYm9keSBpcyB1bmRlZmluZWQsIHJldHVyblxuICAgICAqIG51bGwuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5jb250ZW50VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5KU09OOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQoKTtcbiAgICAgICAgICAgIGNhc2UgQ29udGVudFR5cGUuRk9STTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCk7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLkZPUk1fREFUQTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgICAgICAgICAgIGNhc2UgQ29udGVudFR5cGUuVEVYVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCk7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLkJMT0I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5BUlJBWV9CVUZGRVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZXF1ZXN0O1xufShCb2R5KSk7XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyYW1zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiB1cmxFbmNvZGVQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gcGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIGVsZW1lbnQudG9TdHJpbmcoKSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xudmFyIHcgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnID8gd2luZG93IDogbm9vcDtcbnZhciBGb3JtRGF0YSA9ICgvKiogQHR5cGUgez99ICovICh3IC8qKiBUT0RPICM5MTAwICovKSAvKiogVE9ETyAjOTEwMCAqLylbJ0Zvcm1EYXRhJ10gfHwgbm9vcDtcbnZhciBCbG9iJDEgPSAoLyoqIEB0eXBlIHs/fSAqLyAodyAvKiogVE9ETyAjOTEwMCAqLykgLyoqIFRPRE8gIzkxMDAgKi8pWydCbG9iJ10gfHwgbm9vcDtcbnZhciBBcnJheUJ1ZmZlciQxID0gKC8qKiBAdHlwZSB7P30gKi8gKHcgLyoqIFRPRE8gIzkxMDAgKi8pIC8qKiBUT0RPICM5MTAwICovKVsnQXJyYXlCdWZmZXInXSB8fCBub29wO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBwYXJhbSB7P30gYmFja2VuZFxuICogQHBhcmFtIHs/fSByZXF1ZXN0XG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBodHRwUmVxdWVzdChiYWNrZW5kLCByZXF1ZXN0KSB7XG4gICAgcmV0dXJuIGJhY2tlbmQuY3JlYXRlQ29ubmVjdGlvbihyZXF1ZXN0KS5yZXNwb25zZTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBkZWZhdWx0T3B0c1xuICogQHBhcmFtIHs/fSBwcm92aWRlZE9wdHNcbiAqIEBwYXJhbSB7P30gbWV0aG9kXG4gKiBAcGFyYW0gez99IHVybFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKGRlZmF1bHRPcHRzLCBwcm92aWRlZE9wdHMsIG1ldGhvZCwgdXJsKSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbmV3T3B0aW9ucyA9IGRlZmF1bHRPcHRzO1xuICAgIGlmIChwcm92aWRlZE9wdHMpIHtcbiAgICAgICAgLy8gSGFjayBzbyBEYXJ0IGNhbiB1c2VkIG5hbWVkIHBhcmFtZXRlcnNcbiAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8gKG5ld09wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgICAgICAgIG1ldGhvZDogcHJvdmlkZWRPcHRzLm1ldGhvZCB8fCBtZXRob2QsXG4gICAgICAgICAgICB1cmw6IHByb3ZpZGVkT3B0cy51cmwgfHwgdXJsLFxuICAgICAgICAgICAgc2VhcmNoOiBwcm92aWRlZE9wdHMuc2VhcmNoLFxuICAgICAgICAgICAgcGFyYW1zOiBwcm92aWRlZE9wdHMucGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczogcHJvdmlkZWRPcHRzLmhlYWRlcnMsXG4gICAgICAgICAgICBib2R5OiBwcm92aWRlZE9wdHMuYm9keSxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogcHJvdmlkZWRPcHRzLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogcHJvdmlkZWRPcHRzLnJlc3BvbnNlVHlwZVxuICAgICAgICB9KSkpO1xuICAgIH1cbiAgICByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLyAobmV3T3B0aW9ucy5tZXJnZShuZXcgUmVxdWVzdE9wdGlvbnMoeyBtZXRob2Q6IG1ldGhvZCwgdXJsOiB1cmwgfSkpKTtcbn1cbi8qKlxuICogUGVyZm9ybXMgaHR0cCByZXF1ZXN0cyB1c2luZyBgWE1MSHR0cFJlcXVlc3RgIGFzIHRoZSBkZWZhdWx0IGJhY2tlbmQuXG4gKlxuICogYEh0dHBgIGlzIGF2YWlsYWJsZSBhcyBhbiBpbmplY3RhYmxlIGNsYXNzLCB3aXRoIG1ldGhvZHMgdG8gcGVyZm9ybSBodHRwIHJlcXVlc3RzLiBDYWxsaW5nXG4gKiBgcmVxdWVzdGAgcmV0dXJucyBhbiBgT2JzZXJ2YWJsZWAgd2hpY2ggd2lsbCBlbWl0IGEgc2luZ2xlIHtcXEBsaW5rIFJlc3BvbnNlfSB3aGVuIGFcbiAqIHJlc3BvbnNlIGlzIHJlY2VpdmVkLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtIdHRwLCBIVFRQX1BST1ZJREVSU30gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuICogXFxAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdodHRwLWFwcCcsXG4gKiAgIHZpZXdQcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSU10sXG4gKiAgIHRlbXBsYXRlVXJsOiAncGVvcGxlLmh0bWwnXG4gKiB9KVxuICogY2xhc3MgUGVvcGxlQ29tcG9uZW50IHtcbiAqICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xuICogICAgIGh0dHAuZ2V0KCdwZW9wbGUuanNvbicpXG4gKiAgICAgICAvLyBDYWxsIG1hcCBvbiB0aGUgcmVzcG9uc2Ugb2JzZXJ2YWJsZSB0byBnZXQgdGhlIHBhcnNlZCBwZW9wbGUgb2JqZWN0XG4gKiAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICogICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSBvYnNlcnZhYmxlIHRvIGdldCB0aGUgcGFyc2VkIHBlb3BsZSBvYmplY3QgYW5kIGF0dGFjaCBpdCB0byB0aGVcbiAqICAgICAgIC8vIGNvbXBvbmVudFxuICogICAgICAgLnN1YnNjcmliZShwZW9wbGUgPT4gdGhpcy5wZW9wbGUgPSBwZW9wbGUpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGh0dHAuZ2V0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZSgocmVzOlJlc3BvbnNlKSA9PiB0aGlzLnBlb3BsZSA9IHJlcy5qc29uKCkpO1xuICogYGBgXG4gKlxuICogVGhlIGRlZmF1bHQgY29uc3RydWN0IHVzZWQgdG8gcGVyZm9ybSByZXF1ZXN0cywgYFhNTEh0dHBSZXF1ZXN0YCwgaXMgYWJzdHJhY3RlZCBhcyBhIFwiQmFja2VuZFwiIChcbiAqIHtcXEBsaW5rIFhIUkJhY2tlbmR9IGluIHRoaXMgY2FzZSksIHdoaWNoIGNvdWxkIGJlIG1vY2tlZCB3aXRoIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGJ5IHJlcGxhY2luZ1xuICogdGhlIHtcXEBsaW5rIFhIUkJhY2tlbmR9IHByb3ZpZGVyLCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge0Jhc2VSZXF1ZXN0T3B0aW9ucywgSHR0cH0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqIGltcG9ydCB7TW9ja0JhY2tlbmR9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJztcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gKiAgIE1vY2tCYWNrZW5kLFxuICogICB7cHJvdmlkZTogSHR0cCwgdXNlRmFjdG9yeTpcbiAqICAgICAgIGZ1bmN0aW9uKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKSB7XG4gKiAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG4gKiAgICAgICB9LFxuICogICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdfVxuICogXSk7XG4gKiB2YXIgaHR0cCA9IGluamVjdG9yLmdldChIdHRwKTtcbiAqIGh0dHAuZ2V0KCdyZXF1ZXN0LWZyb20tbW9jay1iYWNrZW5kLmpzb24nKS5zdWJzY3JpYmUoKHJlczpSZXNwb25zZSkgPT4gZG9Tb21ldGhpbmcocmVzKSk7XG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBIdHRwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHAoX2JhY2tlbmQsIF9kZWZhdWx0T3B0aW9ucykge1xuICAgICAgICB0aGlzLl9iYWNrZW5kID0gX2JhY2tlbmQ7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0gX2RlZmF1bHRPcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgICAqIGEge0BsaW5rIFJlcXVlc3R9IGluc3RhbmNlLiBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSB1cmwsIGFuIG9wdGlvbmFsIHtAbGluayBSZXF1ZXN0T3B0aW9uc31cbiAgICAgKiBvYmplY3QgY2FuIGJlIHByb3ZpZGVkIGFzIHRoZSAybmQgYXJndW1lbnQuIFRoZSBvcHRpb25zIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSB2YWx1ZXNcbiAgICAgKiBvZiB7QGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgICAqIGEge1xcQGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UuIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHVybCwgYW4gb3B0aW9uYWwge1xcQGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAgICogb2JqZWN0IGNhbiBiZSBwcm92aWRlZCBhcyB0aGUgMm5kIGFyZ3VtZW50LiBUaGUgb3B0aW9ucyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgdmFsdWVzXG4gICAgICogb2Yge1xcQGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEh0dHAucHJvdG90eXBlLnJlcXVlc3QgPSAvKipcbiAgICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgICAqIGEge1xcQGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UuIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHVybCwgYW4gb3B0aW9uYWwge1xcQGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAgICogb2JqZWN0IGNhbiBiZSBwcm92aWRlZCBhcyB0aGUgMm5kIGFyZ3VtZW50LiBUaGUgb3B0aW9ucyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgdmFsdWVzXG4gICAgICogb2Yge1xcQGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzcG9uc2VPYnNlcnZhYmxlO1xuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2YWJsZSA9IGh0dHBSZXF1ZXN0KHRoaXMuX2JhY2tlbmQsIG5ldyBSZXF1ZXN0KG1lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgUmVxdWVzdE1ldGhvZC5HZXQsIC8qKiBAdHlwZSB7P30gKi8gKHVybCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXJsIGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZhYmxlID0gaHR0cFJlcXVlc3QodGhpcy5fYmFja2VuZCwgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHVybCBzdHJpbmcgb3IgUmVxdWVzdCBpbnN0YW5jZS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VPYnNlcnZhYmxlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGdldGAgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGdldGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIdHRwLnByb3RvdHlwZS5nZXQgPSAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgZ2V0YCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuR2V0LCB1cmwpKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgcG9zdGAgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHBvc3RgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/fSBib2R5XG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSHR0cC5wcm90b3R5cGUucG9zdCA9IC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwb3N0YCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7P30gYm9keVxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHsgYm9keTogYm9keSB9KSksIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUG9zdCwgdXJsKSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHB1dGAgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHB1dGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez99IGJvZHlcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIdHRwLnByb3RvdHlwZS5wdXQgPSAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgcHV0YCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7P30gYm9keVxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHsgYm9keTogYm9keSB9KSksIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUHV0LCB1cmwpKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgZGVsZXRlYCBodHRwIG1ldGhvZC5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgZGVsZXRlYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEh0dHAucHJvdG90eXBlLmRlbGV0ZSA9IC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBkZWxldGVgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG5ldyBSZXF1ZXN0KG1lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgUmVxdWVzdE1ldGhvZC5EZWxldGUsIHVybCkpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwYXRjaGAgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHBhdGNoYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7P30gYm9keVxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEh0dHAucHJvdG90eXBlLnBhdGNoID0gLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHBhdGNoYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7P30gYm9keVxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHsgYm9keTogYm9keSB9KSksIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuUGF0Y2gsIHVybCkpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBoZWFkYCBodHRwIG1ldGhvZC5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgaGVhZGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIdHRwLnByb3RvdHlwZS5oZWFkID0gLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGhlYWRgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG5ldyBSZXF1ZXN0KG1lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgUmVxdWVzdE1ldGhvZC5IZWFkLCB1cmwpKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgb3B0aW9uc2AgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYG9wdGlvbnNgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSHR0cC5wcm90b3R5cGUub3B0aW9ucyA9IC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBvcHRpb25zYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuT3B0aW9ucywgdXJsKSkpO1xuICAgIH07XG4gICAgSHR0cC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEh0dHAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogQ29ubmVjdGlvbkJhY2tlbmQsIH0sXG4gICAgICAgIHsgdHlwZTogUmVxdWVzdE9wdGlvbnMsIH0sXG4gICAgXTsgfTtcbiAgICByZXR1cm4gSHR0cDtcbn0oKSk7XG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIEpzb25wID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhKc29ucCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKc29ucChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFueSB0eXBlIG9mIGh0dHAgcmVxdWVzdC4gRmlyc3QgYXJndW1lbnQgaXMgcmVxdWlyZWQsIGFuZCBjYW4gZWl0aGVyIGJlIGEgdXJsIG9yXG4gICAgICogYSB7QGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UuIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHVybCwgYW4gb3B0aW9uYWwge0BsaW5rIFJlcXVlc3RPcHRpb25zfVxuICAgICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgICAqIG9mIHtAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9IGJlZm9yZSBwZXJmb3JtaW5nIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHNlY3VyaXR5IFJlZ3VsYXIgWEhSIGlzIHRoZSBzYWZlc3QgYWx0ZXJuYXRpdmUgdG8gSlNPTlAgZm9yIG1vc3QgYXBwbGljYXRpb25zLCBhbmQgaXNcbiAgICAgKiBzdXBwb3J0ZWQgYnkgYWxsIGN1cnJlbnQgYnJvd3NlcnMuIEJlY2F1c2UgSlNPTlAgY3JlYXRlcyBhIGA8c2NyaXB0PmAgZWxlbWVudCB3aXRoXG4gICAgICogY29udGVudHMgcmV0cmlldmVkIGZyb20gYSByZW1vdGUgc291cmNlLCBhdHRhY2tlci1jb250cm9sbGVkIGRhdGEgaW50cm9kdWNlZCBieSBhbiB1bnRydXN0ZWRcbiAgICAgKiBzb3VyY2UgY291bGQgZXhwb3NlIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTIHJpc2tzLiBEYXRhIGV4cG9zZWQgYnkgSlNPTlAgbWF5IGFsc28gYmVcbiAgICAgKiByZWFkYWJsZSBieSBtYWxpY2lvdXMgdGhpcmQtcGFydHkgd2Vic2l0ZXMuIEluIGFkZGl0aW9uLCBKU09OUCBpbnRyb2R1Y2VzIHBvdGVudGlhbCByaXNrIGZvclxuICAgICAqIGZ1dHVyZSBzZWN1cml0eSBpc3N1ZXMgKGUuZy4gY29udGVudCBzbmlmZmluZykuICBGb3IgbW9yZSBkZXRhaWwsIHNlZSB0aGVcbiAgICAgKiBbU2VjdXJpdHkgR3VpZGVdKGh0dHA6Ly9nLmNvL25nL3NlY3VyaXR5KS5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgICAqIGEge1xcQGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UuIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIHVybCwgYW4gb3B0aW9uYWwge1xcQGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAgICogb2JqZWN0IGNhbiBiZSBwcm92aWRlZCBhcyB0aGUgMm5kIGFyZ3VtZW50LiBUaGUgb3B0aW9ucyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgdmFsdWVzXG4gICAgICogb2Yge1xcQGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFxcQHNlY3VyaXR5IFJlZ3VsYXIgWEhSIGlzIHRoZSBzYWZlc3QgYWx0ZXJuYXRpdmUgdG8gSlNPTlAgZm9yIG1vc3QgYXBwbGljYXRpb25zLCBhbmQgaXNcbiAgICAgKiBzdXBwb3J0ZWQgYnkgYWxsIGN1cnJlbnQgYnJvd3NlcnMuIEJlY2F1c2UgSlNPTlAgY3JlYXRlcyBhIGA8c2NyaXB0PmAgZWxlbWVudCB3aXRoXG4gICAgICogY29udGVudHMgcmV0cmlldmVkIGZyb20gYSByZW1vdGUgc291cmNlLCBhdHRhY2tlci1jb250cm9sbGVkIGRhdGEgaW50cm9kdWNlZCBieSBhbiB1bnRydXN0ZWRcbiAgICAgKiBzb3VyY2UgY291bGQgZXhwb3NlIHlvdXIgYXBwbGljYXRpb24gdG8gWFNTIHJpc2tzLiBEYXRhIGV4cG9zZWQgYnkgSlNPTlAgbWF5IGFsc28gYmVcbiAgICAgKiByZWFkYWJsZSBieSBtYWxpY2lvdXMgdGhpcmQtcGFydHkgd2Vic2l0ZXMuIEluIGFkZGl0aW9uLCBKU09OUCBpbnRyb2R1Y2VzIHBvdGVudGlhbCByaXNrIGZvclxuICAgICAqIGZ1dHVyZSBzZWN1cml0eSBpc3N1ZXMgKGUuZy4gY29udGVudCBzbmlmZmluZykuICBGb3IgbW9yZSBkZXRhaWwsIHNlZSB0aGVcbiAgICAgKiBbU2VjdXJpdHkgR3VpZGVdKGh0dHA6Ly9nLmNvL25nL3NlY3VyaXR5KS5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEpzb25wLnByb3RvdHlwZS5yZXF1ZXN0ID0gLyoqXG4gICAgICogUGVyZm9ybXMgYW55IHR5cGUgb2YgaHR0cCByZXF1ZXN0LiBGaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCwgYW5kIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3JcbiAgICAgKiBhIHtcXEBsaW5rIFJlcXVlc3R9IGluc3RhbmNlLiBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSB1cmwsIGFuIG9wdGlvbmFsIHtcXEBsaW5rIFJlcXVlc3RPcHRpb25zfVxuICAgICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgICAqIG9mIHtcXEBsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc30gYmVmb3JlIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBcXEBzZWN1cml0eSBSZWd1bGFyIFhIUiBpcyB0aGUgc2FmZXN0IGFsdGVybmF0aXZlIHRvIEpTT05QIGZvciBtb3N0IGFwcGxpY2F0aW9ucywgYW5kIGlzXG4gICAgICogc3VwcG9ydGVkIGJ5IGFsbCBjdXJyZW50IGJyb3dzZXJzLiBCZWNhdXNlIEpTT05QIGNyZWF0ZXMgYSBgPHNjcmlwdD5gIGVsZW1lbnQgd2l0aFxuICAgICAqIGNvbnRlbnRzIHJldHJpZXZlZCBmcm9tIGEgcmVtb3RlIHNvdXJjZSwgYXR0YWNrZXItY29udHJvbGxlZCBkYXRhIGludHJvZHVjZWQgYnkgYW4gdW50cnVzdGVkXG4gICAgICogc291cmNlIGNvdWxkIGV4cG9zZSB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTUyByaXNrcy4gRGF0YSBleHBvc2VkIGJ5IEpTT05QIG1heSBhbHNvIGJlXG4gICAgICogcmVhZGFibGUgYnkgbWFsaWNpb3VzIHRoaXJkLXBhcnR5IHdlYnNpdGVzLiBJbiBhZGRpdGlvbiwgSlNPTlAgaW50cm9kdWNlcyBwb3RlbnRpYWwgcmlzayBmb3JcbiAgICAgKiBmdXR1cmUgc2VjdXJpdHkgaXNzdWVzIChlLmcuIGNvbnRlbnQgc25pZmZpbmcpLiAgRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlXG4gICAgICogW1NlY3VyaXR5IEd1aWRlXShodHRwOi8vZy5jby9uZy9zZWN1cml0eSkuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc3BvbnNlT2JzZXJ2YWJsZTtcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1cmwgPVxuICAgICAgICAgICAgICAgIG5ldyBSZXF1ZXN0KG1lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucywgUmVxdWVzdE1ldGhvZC5HZXQsIC8qKiBAdHlwZSB7P30gKi8gKHVybCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXJsIGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICAgICAgaWYgKHVybC5tZXRob2QgIT09IFJlcXVlc3RNZXRob2QuR2V0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OUCByZXF1ZXN0cyBtdXN0IHVzZSBHRVQgcmVxdWVzdCBtZXRob2QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwb25zZU9ic2VydmFibGUgPSBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgdXJsIHN0cmluZyBvciBSZXF1ZXN0IGluc3RhbmNlLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZU9ic2VydmFibGU7XG4gICAgfTtcbiAgICBKc29ucC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEpzb25wLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IENvbm5lY3Rpb25CYWNrZW5kLCB9LFxuICAgICAgICB7IHR5cGU6IFJlcXVlc3RPcHRpb25zLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIEpzb25wO1xufShIdHRwKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgaHR0cCBtb2R1bGUgcHJvdmlkZXMgc2VydmljZXMgdG8gcGVyZm9ybSBodHRwIHJlcXVlc3RzLiBUbyBnZXQgc3RhcnRlZCwgc2VlIHRoZSB7QGxpbmsgSHR0cH1cbiAqIGNsYXNzLlxuICovXG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9jcmVhdGVEZWZhdWx0Q29va2llWFNSRlN0cmF0ZWd5KCkge1xuICAgIHJldHVybiBuZXcgQ29va2llWFNSRlN0cmF0ZWd5KCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30geGhyQmFja2VuZFxuICogQHBhcmFtIHs/fSByZXF1ZXN0T3B0aW9uc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaHR0cEZhY3RvcnkoeGhyQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEh0dHAoeGhyQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGpzb25wQmFja2VuZFxuICogQHBhcmFtIHs/fSByZXF1ZXN0T3B0aW9uc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24ganNvbnBGYWN0b3J5KGpzb25wQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEpzb25wKGpzb25wQmFja2VuZCwgcmVxdWVzdE9wdGlvbnMpO1xufVxuLyoqXG4gKiBUaGUgbW9kdWxlIHRoYXQgaW5jbHVkZXMgaHR0cCdzIHByb3ZpZGVyc1xuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIEh0dHBNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSHR0cE1vZHVsZSgpIHtcbiAgICB9XG4gICAgSHR0cE1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGFzY2FsKTogdXNlIGZhY3RvcnkgdHlwZSBhbm5vdGF0aW9ucyBvbmNlIHN1cHBvcnRlZCBpbiBESVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMxODNcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cCwgdXNlRmFjdG9yeTogaHR0cEZhY3RvcnksIGRlcHM6IFtYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9uc10gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZXJYaHIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFJlcXVlc3RPcHRpb25zLCB1c2VDbGFzczogQmFzZVJlcXVlc3RPcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFJlc3BvbnNlT3B0aW9ucywgdXNlQ2xhc3M6IEJhc2VSZXNwb25zZU9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhTUkZTdHJhdGVneSwgdXNlRmFjdG9yeTogX2NyZWF0ZURlZmF1bHRDb29raWVYU1JGU3RyYXRlZ3kgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEh0dHBNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICByZXR1cm4gSHR0cE1vZHVsZTtcbn0oKSk7XG4vKipcbiAqIFRoZSBtb2R1bGUgdGhhdCBpbmNsdWRlcyBqc29ucCdzIHByb3ZpZGVyc1xuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIEpzb25wTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpzb25wTW9kdWxlKCkge1xuICAgIH1cbiAgICBKc29ucE1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGFzY2FsKTogdXNlIGZhY3RvcnkgdHlwZSBhbm5vdGF0aW9ucyBvbmNlIHN1cHBvcnRlZCBpbiBESVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzMxODNcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSnNvbnAsIHVzZUZhY3Rvcnk6IGpzb25wRmFjdG9yeSwgZGVwczogW0pTT05QQmFja2VuZCwgUmVxdWVzdE9wdGlvbnNdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBCcm93c2VySnNvbnAsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFJlcXVlc3RPcHRpb25zLCB1c2VDbGFzczogQmFzZVJlcXVlc3RPcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFJlc3BvbnNlT3B0aW9ucywgdXNlQ2xhc3M6IEJhc2VSZXNwb25zZU9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT05QQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEpzb25wTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEpzb25wTW9kdWxlO1xufSgpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhlIGNvbW1vbiBwYWNrYWdlLlxuICovXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIFZFUlNJT04gPSBuZXcgVmVyc2lvbignNS4xLjEnKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGlzIHBhY2thZ2UuXG4gKi9cblxuLy8gVGhpcyBmaWxlIG9ubHkgcmVleHBvcnRzIGNvbnRlbnQgb2YgdGhlIGBzcmNgIGZvbGRlci4gS2VlcCBpdCB0aGF0IHdheS5cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBCcm93c2VyWGhyLCBKU09OUEJhY2tlbmQsIEpTT05QQ29ubmVjdGlvbiwgQ29va2llWFNSRlN0cmF0ZWd5LCBYSFJCYWNrZW5kLCBYSFJDb25uZWN0aW9uLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zLCBCYXNlUmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZU9wdGlvbnMsIFJlYWR5U3RhdGUsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlQ29udGVudFR5cGUsIFJlc3BvbnNlVHlwZSwgSGVhZGVycywgSHR0cCwgSnNvbnAsIEh0dHBNb2R1bGUsIEpzb25wTW9kdWxlLCBDb25uZWN0aW9uLCBDb25uZWN0aW9uQmFja2VuZCwgWFNSRlN0cmF0ZWd5LCBSZXF1ZXN0LCBSZXNwb25zZSwgUXVlcnlFbmNvZGVyLCBVUkxTZWFyY2hQYXJhbXMsIFZFUlNJT04sIEJyb3dzZXJKc29ucCBhcyDJtWUsIEJvZHkgYXMgybVmLCBfY3JlYXRlRGVmYXVsdENvb2tpZVhTUkZTdHJhdGVneSBhcyDJtWEsIGh0dHBGYWN0b3J5IGFzIMm1YiwganNvbnBGYWN0b3J5IGFzIMm1YyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvZXNtNS9odHRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xyXG5pbXBvcnQgSG9yb3Njb3BlID0gcmVxdWlyZShcIi4vaG9yb3Njb3BlXCIpO1xyXG5pbXBvcnQgSUhvcm9zY29wZSA9IEhvcm9zY29wZS5Ib3Jvc2NvcGU7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBc3Ryb1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdhcGkvYXN0cm8vZ2V0JylcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9hc3Ryby5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXN0cm9TZXJ2aWNlfSBmcm9tICcuLi9hc3Ryby5zZXJ2aWNlJ1xyXG5pbXBvcnQgSG9yb3Njb3BlID0gcmVxdWlyZShcIi4uL2hvcm9zY29wZVwiKTtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCBJSG9yb3Njb3BlID0gSG9yb3Njb3BlLkhvcm9zY29wZTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkaXNwbGF5JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Rpc3BsYXkuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZGlzcGxheS5jb21wb25lbnQuc2NzcycpXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwbGF5Q29tcG9uZW50IHtcclxuICAgIGhvcm9zY29wZXM6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhc3Ryb1NlcnZpY2U6QXN0cm9TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hc3Ryb1NlcnZpY2UuZ2V0KClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jvc2NvcGVzID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08ZGl2IHN0eWxlPVxcXCJib3JkZXI6IDFweCBzb2xpZCByZWRcXFwiPmRpc3BsYXkgQ29tcG9uZW50PC9kaXY+XFxyXFxuXFxyXFxuPHVsPlxcclxcbiAgICA8bGkgKm5nRm9yPVxcXCJsZXQgaG9yb3Njb3BlIG9mIGhvcm9zY29wZXNcXFwiPlxcclxcbiAgICAgICAge3tob3Jvc2NvcGU/LnNpZ24gJiYgaG9yb3Njb3BlPy5zaWduPy5uYW1lfX1cXHJcXG4gICAgPC9saT4tLT5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTFcXFwiICpuZ0Zvcj1cXFwibGV0IGhvcm9zY29wZSBvZiBob3Jvc2NvcGVzXFxcIj5cXHJcXG4gICAgICAgIDwhLS0gU1RBUlQgd2lkZ2V0LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCB3aWRnZXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgcm93LXRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWctY2lyY2xlIHRodW1iOTZcXFwiIHNyYz1cXFwiYXNzZXRzL2ltZy9zaWducy97e2hvcm9zY29wZT8uc2lnbj8udGVjaG5pY2FsTmFtZX19LnBuZ1xcXCIgYWx0PVxcXCJJbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwibXQwXFxcIj57e2hvcm9zY29wZT8uc2lnbj8ubmFtZX19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImxpc3QtdW5zdHlsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm1iLXNtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tob3Jvc2NvcGU/Lmdsb2JhbFRleHR9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keSBiZy1pbnZlcnNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHJvdy10YWJsZSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgcm93LXRhYmxlIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIiAgKm5nRm9yPVxcXCJsZXQgdG9waWMgb2YgaG9yb3Njb3BlPy50b3BpY3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3t0b3BpYz8udGl0bGV9fTwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08cHJvZ3Jlc3NiYXIgW21heF09XFxcInRvcGljLnRvdGFsU3RhcnNcXFwiIFt2YWx1ZV09XFxcInRvcGljLnN0YXJzXFxcIj48c3BhbiBzdHlsZT1cXFwiY29sb3I6d2hpdGU7IHdoaXRlLXNwYWNlOm5vd3JhcDtcXFwiPnt7dG9waWM/LnN0YXJzfX0gLyB7e3RvcGljPy50b3RhbFN0YXJzfX08L3NwYW4+PC9wcm9ncmVzc2Jhcj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyYXRpbmcgW25nTW9kZWxdPVxcXCJ0b3BpYy5zdGFyc1xcXCIgW21heF09XFxcInRvcGljLnRvdGFsU3RhcnNcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBzdGF0ZU9uPVxcXCJmYSBmYS1zdGFyIHRleHQteWVsbG93XFxcIiBzdGF0ZU9mZj1cXFwiZmEgZmEtc3Rhci1vXFxcIj48L3JhdGluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08dWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHRvcGljIG9mIGhvcm9zY29wZT8udG9waWNzXFxcIj57e3RvcGljPy50aXRsZX19PHByb2dyZXNzYmFyIFttYXhdPVxcXCJ0b3BpYy50b3RhbFN0YXJzXFxcIiBbdmFsdWVdPVxcXCJ0b3BpYy5zdGFyc1xcXCI+PHNwYW4gc3R5bGU9XFxcImNvbG9yOndoaXRlOyB3aGl0ZS1zcGFjZTpub3dyYXA7XFxcIj57e3RvcGljPy5zdGFyc319IC8ge3t0b3BpYz8udG90YWxTdGFyc319PC9zcGFuPjwvcHJvZ3Jlc3NiYXI+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtMCBoM1xcXCI+NzAwPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtMCB0ZXh0LW11dGVkXFxcIj5Gb2xsb3dlcnM8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibTAgaDNcXFwiPjE1MDA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm0wIHRleHQtbXV0ZWRcXFwiPkZvbGxvd2luZzwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtMCBoM1xcXCI+NTEwPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtMCB0ZXh0LW11dGVkXFxcIj5Mb3ZlZDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSBFTkQgd2lkZ2V0LS0+XFxyXFxuICAgIDwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEzNDdcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzNDhcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWxlY3RNb2R1bGUgfSBmcm9tICduZzItc2VsZWN0JztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQXN0cm9TZXJ2aWNlIH0gZnJvbSAnLi9hc3Ryby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlzcGxheUNvbXBvbmVudCB9IGZyb20gJy4vZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudCc7XHJcblxyXG4vL2ltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IFBvc3RDb21wb25lbnQgfSBmcm9tICcuL3Bvc3QvcG9zdC5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IEFydGljbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IEFydGljbGV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9hcnRpY2xldmlldy9hcnRpY2xldmlldy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnZGlzcGxheScgfSxcclxuICAgIHsgcGF0aDogJ2Rpc3BsYXknLCBjb21wb25lbnQ6IERpc3BsYXlDb21wb25lbnQgfSxcclxuICAgIC8veyBwYXRoOiAnbGlzdCcsIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9LFxyXG4gICAgLy97IHBhdGg6ICdwb3N0JywgY29tcG9uZW50OiBQb3N0Q29tcG9uZW50IH0sXHJcbiAgICAvL3sgcGF0aDogJ2FydGljbGVzJywgY29tcG9uZW50OiBBcnRpY2xlc0NvbXBvbmVudCB9LFxyXG4gICAgLy97IHBhdGg6ICdhcnRpY2xldmlldycsIGNvbXBvbmVudDogQXJ0aWNsZXZpZXdDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBTZWxlY3RNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBEaXNwbGF5Q29tcG9uZW50LFxyXG4gICAgICAgIC8vUG9zdENvbXBvbmVudCxcclxuICAgICAgICAvL0FydGljbGVzQ29tcG9uZW50LFxyXG4gICAgICAgIC8vQXJ0aWNsZXZpZXdDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUm91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQXN0cm9TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXN0cm9Nb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vYXN0cm8ubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==