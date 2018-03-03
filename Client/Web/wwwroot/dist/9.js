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

module.exports = ".bs-rating-star {\n  font-size: 50px; }\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3QvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QtcGlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3Qvc2VsZWN0L29mZi1jbGljay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9lc201L2h0dHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vYXN0cm8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2FzdHJvL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vYXN0cm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usb0JBQW9CO0FBQ3BGLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFtQyxvQkFBb0IsRUFBRSxHOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXpELG9DQUF5QztBQUN6Qyx1Q0FBdUQ7QUFDdkQsNkNBQTBDO0FBQzFDLHVDQUEyQztBQUczQyw4Q0FBMEQ7QUFDMUQsZ0RBQStDO0FBQy9DLG9EQUErRDtBQUUvRCx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBQ3hELG9FQUFvRTtBQUNwRSw2RUFBNkU7QUFFN0UsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7SUFDbkMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtDQUtuRCxDQUFDO0FBb0JGO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFsQnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzdCLGlCQUFVO2dCQUNWLHlCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2FBSW5CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBO0FBQWYsa0NBQVciLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xufVxuZXhwb3J0cy5lc2NhcGVSZWdleHAgPSBlc2NhcGVSZWdleHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgNyA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvbW1vbl8xID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBIaWdobGlnaHRQaXBlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIaWdobGlnaHRQaXBlKCkge1xuICAgIH1cbiAgICBIaWdobGlnaHRQaXBlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodmFsdWUsIHF1ZXJ5KSB7XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgdGFnUkUgPSBuZXcgUmVnRXhwKCc8W148Pl0qPicsICdpZycpO1xuICAgICAgICAgICAgLy8gZ2V0IGlzdCBvZiB0YWdzXG4gICAgICAgICAgICB2YXIgdGFnTGlzdCA9IHZhbHVlLm1hdGNoKHRhZ1JFKTtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGFncyB3aXRoIHRva2VuXG4gICAgICAgICAgICB2YXIgdG1wVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHRhZ1JFLCAnJCEkJyk7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHNlYXJjaCB3b3Jkc1xuICAgICAgICAgICAgdmFsdWUgPSB0bXBWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoY29tbW9uXzEuZXNjYXBlUmVnZXhwKHF1ZXJ5KSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+Jyk7XG4gICAgICAgICAgICAvLyBSZWluc2VydCBIVE1MXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgdmFsdWUuaW5kZXhPZignJCEkJykgPiAtMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCckISQnLCB0YWdMaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBIaWdobGlnaHRQaXBlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogY29yZV8xLlBpcGUsIGFyZ3M6IFt7IG5hbWU6ICdoaWdobGlnaHQnIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgSGlnaGxpZ2h0UGlwZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBIaWdobGlnaHRQaXBlO1xufSgpKTtcbmV4cG9ydHMuSGlnaGxpZ2h0UGlwZSA9IEhpZ2hsaWdodFBpcGU7XG5mdW5jdGlvbiBzdHJpcFRhZ3MoaW5wdXQpIHtcbiAgICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2k7XG4gICAgdmFyIGNvbW1lbnRzQW5kUGhwVGFncyA9IC88IS0tW1xcc1xcU10qPy0tPnw8XFw/KD86cGhwKT9bXFxzXFxTXSo/XFw/Pi9naTtcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKS5yZXBsYWNlKHRhZ3MsICcnKTtcbn1cbmV4cG9ydHMuc3RyaXBUYWdzID0gc3RyaXBUYWdzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0LXBpcGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDcgOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBPZmZDbGlja0RpcmVjdGl2ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2ZmQ2xpY2tEaXJlY3RpdmUoKSB7XG4gICAgfVxuICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICBPZmZDbGlja0RpcmVjdGl2ZS5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgT2ZmQ2xpY2tEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMub2ZmQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSB9LCAwKTtcbiAgICB9O1xuICAgIE9mZkNsaWNrRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vZmZDbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPZmZDbGlja0RpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW29mZkNsaWNrXSdcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIE9mZkNsaWNrRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgT2ZmQ2xpY2tEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICdvZmZDbGlja0hhbmRsZXInOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQsIGFyZ3M6IFsnb2ZmQ2xpY2snLF0gfSxdLFxuICAgICAgICAnb25DbGljayc6IFt7IHR5cGU6IGNvcmVfMS5Ib3N0TGlzdGVuZXIsIGFyZ3M6IFsnY2xpY2snLCBbJyRldmVudCddLF0gfSxdLFxuICAgIH07XG4gICAgcmV0dXJuIE9mZkNsaWNrRGlyZWN0aXZlO1xufSgpKTtcbmV4cG9ydHMuT2ZmQ2xpY2tEaXJlY3RpdmUgPSBPZmZDbGlja0RpcmVjdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3Qvc2VsZWN0L29mZi1jbGljay5qc1xuLy8gbW9kdWxlIGlkID0gMTAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA3IDkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBmb3Jtc18xID0gcmVxdWlyZSgnQGFuZ3VsYXIvZm9ybXMnKTtcbnZhciBwbGF0Zm9ybV9icm93c2VyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJyk7XG52YXIgc2VsZWN0X2l0ZW1fMSA9IHJlcXVpcmUoJy4vc2VsZWN0LWl0ZW0nKTtcbnZhciBzZWxlY3RfcGlwZXNfMSA9IHJlcXVpcmUoJy4vc2VsZWN0LXBpcGVzJyk7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIHN0eWxlcyA9IFwiXFxuICAudWktc2VsZWN0LXRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC8qIEZpeCBjYXJldCBnb2luZyBpbnRvIG5ldyBsaW5lIGluIEZpcmVmb3ggKi9cXG4gIC51aS1zZWxlY3QtcGxhY2Vob2xkZXIge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG4gIFxcbiAgLyogRml4IEJvb3RzdHJhcCBkcm9wZG93biBwb3NpdGlvbiB3aGVuIGluc2lkZSBhIGlucHV0LWdyb3VwICovXFxuICAuaW5wdXQtZ3JvdXAgPiAuZHJvcGRvd24ge1xcbiAgICAvKiBJbnN0ZWFkIG9mIHJlbGF0aXZlICovXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuICBcXG4gIC51aS1zZWxlY3QtbWF0Y2ggPiAuYnRuIHtcXG4gICAgLyogSW5zdGVhZCBvZiBjZW50ZXIgYmVjYXVzZSBvZiAuYnRuICovXFxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG4gIH1cXG4gIFxcbiAgLnVpLXNlbGVjdC1tYXRjaCA+IC5jYXJldCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIHJpZ2h0OiAxNXB4O1xcbiAgfVxcbiAgXFxuICAudWktZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuICBcXG4gIC51aS1zZWxlY3QtY2hvaWNlcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuICBcXG4gIC51aS1zZWxlY3QtbXVsdGlwbGUgLnVpLXNlbGVjdC1jaG9pY2VzIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbiAgfVxcbiAgLnVpLXNlbGVjdC1jaG9pY2VzLXJvdz5hIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nOiAzcHggMjBweDtcXG4gICAgICBjbGVhcjogYm90aDtcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcbiAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuICAudWktc2VsZWN0LWNob2ljZXMtcm93LmFjdGl2ZT5hIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xcbiAgfVxcbiAgXFxuICAudWktc2VsZWN0LW11bHRpcGxlIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOjNweCAzcHggMCAzcHg7XFxuICB9XFxuICBcXG4gIC51aS1zZWxlY3QtbXVsdGlwbGUgaW5wdXQudWktc2VsZWN0LXNlYXJjaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IC8qIFRvIHByZXZlbnQgZG91YmxlIGJhY2tncm91bmQgd2hlbiBkaXNhYmxlZCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGhlaWdodDogMS42NjY2ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG4gICAgXFxuICB9XFxuICAudWktc2VsZWN0LW1hdGNoIC5jbG9zZSB7XFxuICAgICAgZm9udC1zaXplOiAxLjZlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMC43NTtcXG4gIH1cXG4gIFxcbiAgLnVpLXNlbGVjdC1tdWx0aXBsZSAudWktc2VsZWN0LW1hdGNoLWl0ZW0ge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBtYXJnaW46IDAgM3B4IDNweCAwO1xcbiAgfVxcbiAgLnVpLXNlbGVjdC10b2dnbGUgPiAuY2FyZXQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogLTJweDtcXG4gIH1cXG5cIjtcbnZhciBTZWxlY3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdENvbXBvbmVudChlbGVtZW50LCBzYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhpcy5zYW5pdGl6ZXIgPSBzYW5pdGl6ZXI7XG4gICAgICAgIHRoaXMuYWxsb3dDbGVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIHRoaXMuaWRGaWVsZCA9ICdpZCc7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkID0gJ3RleHQnO1xuICAgICAgICB0aGlzLmNoaWxkcmVuRmllbGQgPSAnY2hpbGRyZW4nO1xuICAgICAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBjb3JlXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnJlbW92ZWQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLnR5cGVkID0gbmV3IGNvcmVfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vcGVuZWQgPSBuZXcgY29yZV8xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtT2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgICAgICAgdGhpcy5pbnB1dE1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb3B0aW9uc09wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2xpY2tlZE91dHNpZGUgPSB0aGlzLmNsaWNrZWRPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLCBcIml0ZW1zXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLml0ZW1PYmplY3RzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykgfHwgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIGl0ZW1bX3RoaXMudGV4dEZpZWxkXSAmJiBpdGVtW190aGlzLmlkRmllbGRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1PYmplY3RzID0gdGhpcy5faXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gbmV3IHNlbGVjdF9pdGVtXzEuU2VsZWN0SXRlbShpdGVtKSA6IG5ldyBzZWxlY3RfaXRlbV8xLlNlbGVjdEl0ZW0oeyBpZDogaXRlbVtfdGhpcy5pZEZpZWxkXSwgdGV4dDogaXRlbVtfdGhpcy50ZXh0RmllbGRdLCBjaGlsZHJlbjogaXRlbVtfdGhpcy5jaGlsZHJlbkZpZWxkXSB9KSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUsIFwiYWN0aXZlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZEl0ZW1zIHx8IHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJlSXRlbXNTdHJpbmdzXzEgPSB0eXBlb2Ygc2VsZWN0ZWRJdGVtc1swXSA9PT0gJ3N0cmluZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gc2VsZWN0ZWRJdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhcmVJdGVtc1N0cmluZ3NfMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgaWQ6IGl0ZW1bX3RoaXMuaWRGaWVsZF0sIHRleHQ6IGl0ZW1bX3RoaXMudGV4dEZpZWxkXSB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHNlbGVjdF9pdGVtXzEuU2VsZWN0SXRlbShkYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUsIFwib3B0aW9uc09wZW5lZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnNPcGVuZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zT3BlbmVkID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm9wZW5lZC5lbWl0KHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuaW5wdXRFdmVudCA9IGZ1bmN0aW9uIChlLCBpc1VwTW9kZSkge1xuICAgICAgICBpZiAoaXNVcE1vZGUgPT09IHZvaWQgMCkgeyBpc1VwTW9kZSA9IGZhbHNlOyB9XG4gICAgICAgIC8vIHRhYlxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVXBNb2RlICYmIChlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzOCB8fFxuICAgICAgICAgICAgZS5rZXlDb2RlID09PSA0MCB8fCBlLmtleUNvZGUgPT09IDEzKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzcGFjZVxuICAgICAgICBpZiAoIWlzVXBNb2RlICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LnVpLXNlbGVjdC1jb250YWluZXIgPiBpbnB1dCcpO1xuICAgICAgICAgICAgaWYgKCFlbC52YWx1ZSB8fCBlbC52YWx1ZS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuYWN0aXZlW3RoaXMuYWN0aXZlLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzY1xuICAgICAgICBpZiAoIWlzVXBNb2RlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVsXG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmFjdGl2ZVt0aGlzLmFjdGl2ZS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGVmdFxuICAgICAgICBpZiAoIWlzVXBNb2RlICYmIGUua2V5Q29kZSA9PT0gMzcgJiYgdGhpcy5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5iZWhhdmlvci5maXJzdCgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJpZ2h0XG4gICAgICAgIGlmICghaXNVcE1vZGUgJiYgZS5rZXlDb2RlID09PSAzOSAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmJlaGF2aW9yLmxhc3QoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cFxuICAgICAgICBpZiAoIWlzVXBNb2RlICYmIGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3IucHJldigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvd25cbiAgICAgICAgaWYgKCFpc1VwTW9kZSAmJiBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICB0aGlzLmJlaGF2aW9yLm5leHQoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbnRlclxuICAgICAgICBpZiAoIWlzVXBNb2RlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZS5pbmRleE9mKHRoaXMuYWN0aXZlT3B0aW9uKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWhhdmlvci5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3IuZmlsdGVyKG5ldyBSZWdFeHAoY29tbW9uXzEuZXNjYXBlUmVnZXhwKHRoaXMuaW5wdXRWYWx1ZSksICdpZycpKTtcbiAgICAgICAgICAgIHRoaXMuZG9FdmVudCgndHlwZWQnLCB0aGlzLmlucHV0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYmVoYXZpb3IgPSAodGhpcy5maXJzdEl0ZW1IYXNDaGlsZHJlbikgP1xuICAgICAgICAgICAgbmV3IENoaWxkcmVuQmVoYXZpb3IodGhpcykgOiBuZXcgR2VuZXJpY0JlaGF2aW9yKHRoaXMpO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hY3RpdmUuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubmV4dCh0aGlzLmFjdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLmRvRXZlbnQoJ3JlbW92ZWQnLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gW107XG4gICAgICAgICAgICB0aGlzLmRhdGEubmV4dCh0aGlzLmFjdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLmRvRXZlbnQoJ3JlbW92ZWQnLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5kb0V2ZW50ID0gZnVuY3Rpb24gKHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzW3R5cGVdICYmIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW3R5cGVdLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc2VsZWN0ZWQnIHx8IHR5cGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuY2xpY2tlZE91dHNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3B0aW9uc09wZW5lZCA9IGZhbHNlO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUsIFwiZmlyc3RJdGVtSGFzQ2hpbGRyZW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1PYmplY3RzWzBdICYmIHRoaXMuaXRlbU9iamVjdHNbMF0uaGFzQ2hpbGRyZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5kYXRhLmVtaXQodGhpcy5hY3RpdmUpO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5tYXRjaENsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dE1vZGUgPSAhdGhpcy5pbnB1dE1vZGU7XG4gICAgICAgIGlmICh0aGlzLmlucHV0TW9kZSA9PT0gdHJ1ZSAmJiAoKHRoaXMubXVsdGlwbGUgPT09IHRydWUgJiYgZSkgfHwgdGhpcy5tdWx0aXBsZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVG9JbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUubWFpbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0TW9kZSA9PT0gdHJ1ZSB8fCB0aGlzLl9kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFdmVudChldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmlucHV0RXZlbnQoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleUNvZGUgPT09IDEzIHx8XG4gICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSAyNyB8fCAoZXZlbnQua2V5Q29kZSA+PSAzNyAmJiBldmVudC5rZXlDb2RlIDw9IDQwKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0TW9kZSA9IHRydWU7XG4gICAgICAgIHZhciB2YWx1ZSA9IFN0cmluZ1xuICAgICAgICAgICAgLmZyb21DaGFyQ29kZSg5NiA8PSBldmVudC5rZXlDb2RlICYmIGV2ZW50LmtleUNvZGUgPD0gMTA1ID8gZXZlbnQua2V5Q29kZSAtIDQ4IDogZXZlbnQua2V5Q29kZSlcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmZvY3VzVG9JbnB1dCh2YWx1ZSk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgICAgIHRhcmdldC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmlucHV0RXZlbnQoZXZlbnQpO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZWxlY3RBY3RpdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24gPSB2YWx1ZTtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT3B0aW9uLmlkID09PSB2YWx1ZS5pZDtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUucmVtb3ZlQ2xpY2sgPSBmdW5jdGlvbiAodmFsdWUsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnJlbW92ZSh2YWx1ZSk7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLmZvY3VzVG9JbnB1dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9ICcnOyB9XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gX3RoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi51aS1zZWxlY3QtY29udGFpbmVyID4gaW5wdXQnKTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuaXRlbU9iamVjdHNcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gKF90aGlzLm11bHRpcGxlID09PSBmYWxzZSB8fFxuICAgICAgICAgICAgX3RoaXMubXVsdGlwbGUgPT09IHRydWUgJiYgIV90aGlzLmFjdGl2ZS5maW5kKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvcHRpb24udGV4dCA9PT0gby50ZXh0OyB9KSk7IH0pO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYmVoYXZpb3IuZmlyc3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnNPcGVuZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5oaWRlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dE1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcHRpb25zT3BlbmVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvdG90eXBlLnNlbGVjdEFjdGl2ZU1hdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuYWN0aXZlT3B0aW9uKTtcbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuc2VsZWN0TWF0Y2ggPSBmdW5jdGlvbiAodmFsdWUsIGUpIHtcbiAgICAgICAgaWYgKGUgPT09IHZvaWQgMCkgeyBlID0gdm9pZCAwOyB9XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubmV4dCh0aGlzLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVswXSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kYXRhLm5leHQodGhpcy5hY3RpdmVbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9FdmVudCgnc2VsZWN0ZWQnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuaGlkZU9wdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUb0lucHV0KCcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUb0lucHV0KHNlbGVjdF9waXBlc18xLnN0cmlwVGFncyh2YWx1ZS50ZXh0KSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWktc2VsZWN0LWNvbnRhaW5lcicpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNlbGVjdENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5Db21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBbc3R5bGVzXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogZm9ybXNfMS5OR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBjb3JlXzEuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBTZWxlY3RDb21wb25lbnQ7IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gIDxkaXYgdGFiaW5kZXg9XFxcIjBcXFwiXFxuICAgICAqbmdJZj1cXFwibXVsdGlwbGUgPT09IGZhbHNlXFxcIlxcbiAgICAgKGtleXVwKT1cXFwibWFpbkNsaWNrKCRldmVudClcXFwiXFxuICAgICBbb2ZmQ2xpY2tdPVxcXCJjbGlja2VkT3V0c2lkZVxcXCJcXG4gICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIGRyb3Bkb3duIG9wZW5cXFwiPlxcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cXFwieyd1aS1kaXNhYmxlZCc6IGRpc2FibGVkfVxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCJcXG4gICAgICAgICAqbmdJZj1cXFwiIWlucHV0TW9kZVxcXCI+XFxuICAgICAgPHNwYW4gdGFiaW5kZXg9XFxcIi0xXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgZm9ybS1jb250cm9sIHVpLXNlbGVjdC10b2dnbGVcXFwiXFxuICAgICAgICAgIChjbGljayk9XFxcIm1hdGNoQ2xpY2soJGV2ZW50KVxcXCJcXG4gICAgICAgICAgc3R5bGU9XFxcIm91dGxpbmU6IDA7XFxcIj5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJhY3RpdmUubGVuZ3RoIDw9IDBcXFwiIGNsYXNzPVxcXCJ1aS1zZWxlY3QtcGxhY2Vob2xkZXIgdGV4dC1tdXRlZFxcXCI+e3twbGFjZWhvbGRlcn19PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcImFjdGl2ZS5sZW5ndGggPiAwXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LW1hdGNoLXRleHQgcHVsbC1sZWZ0XFxcIlxcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJ7J3VpLXNlbGVjdC1hbGxvdy1jbGVhcic6IGFsbG93Q2xlYXIgJiYgYWN0aXZlLmxlbmd0aCA+IDB9XFxcIlxcbiAgICAgICAgICAgICAgW2lubmVySFRNTF09XFxcInNhbml0aXplKGFjdGl2ZVswXS50ZXh0KVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZSBwdWxsLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiY2FyZXQgcHVsbC1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPGEgKm5nSWY9XFxcImFsbG93Q2xlYXIgJiYgYWN0aXZlLmxlbmd0aD4wXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14cyBidG4tbGluayBwdWxsLXJpZ2h0XFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiAxMHB4OyBwYWRkaW5nOiAwO1xcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQ2xpY2soYWN0aXZlWzBdLCAkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgIDxpIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9pPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBhdXRvY29tcGxldGU9XFxcImZhbHNlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiXFxuICAgICAgICAgICAoa2V5ZG93bik9XFxcImlucHV0RXZlbnQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgIChrZXl1cCk9XFxcImlucHV0RXZlbnQoJGV2ZW50LCB0cnVlKVxcXCJcXG4gICAgICAgICAgIFtkaXNhYmxlZF09XFxcImRpc2FibGVkXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbCB1aS1zZWxlY3Qtc2VhcmNoXFxcIlxcbiAgICAgICAgICAgKm5nSWY9XFxcImlucHV0TW9kZVxcXCJcXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2FjdGl2ZS5sZW5ndGggPD0gMCA/IHBsYWNlaG9sZGVyIDogJyd9fVxcXCI+XFxuICAgICA8IS0tIG9wdGlvbnMgdGVtcGxhdGUgLS0+XFxuICAgICA8dWwgKm5nSWY9XFxcIm9wdGlvbnNPcGVuZWQgJiYgb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDAgJiYgIWZpcnN0SXRlbUhhc0NoaWxkcmVuXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMgZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgbyBvZiBvcHRpb25zXFxcIiByb2xlPVxcXCJtZW51aXRlbVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzLXJvd1xcXCJcXG4gICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cXFwiaXNBY3RpdmUobylcXFwiXFxuICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVxcXCJzZWxlY3RBY3RpdmUobylcXFwiXFxuICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwic2VsZWN0TWF0Y2gobywgJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckh0bWxdPVxcXCJzYW5pdGl6ZShvLnRleHQgfCBoaWdobGlnaHQ6aW5wdXRWYWx1ZSlcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICBcXG4gICAgICA8dWwgKm5nSWY9XFxcIm9wdGlvbnNPcGVuZWQgJiYgb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDAgJiYgZmlyc3RJdGVtSGFzQ2hpbGRyZW5cXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcyBkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG4gICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBjIG9mIG9wdGlvbnM7IGxldCBpbmRleD1pbmRleFxcXCIgcm9sZT1cXFwibWVudWl0ZW1cXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXZpZGVyIGRyb3Bkb3duLWRpdmlkZXJcXFwiICpuZ0lmPVxcXCJpbmRleCA+IDBcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPnt7Yy50ZXh0fX08L2Rpdj5cXG4gIFxcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IG8gb2YgYy5jaGlsZHJlblxcXCJcXG4gICAgICAgICAgICAgICBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIlxcbiAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVxcXCJpc0FjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAobW91c2VlbnRlcik9XFxcInNlbGVjdEFjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAoY2xpY2spPVxcXCJzZWxlY3RNYXRjaChvLCAkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBpc0FjdGl2ZShvKX1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cXFwic2FuaXRpemUoby50ZXh0IHwgaGlnaGxpZ2h0OmlucHV0VmFsdWUpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICA8L3VsPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IHRhYmluZGV4PVxcXCIwXFxcIlxcbiAgICAgKm5nSWY9XFxcIm11bHRpcGxlID09PSB0cnVlXFxcIlxcbiAgICAgKGtleXVwKT1cXFwibWFpbkNsaWNrKCRldmVudClcXFwiXFxuICAgICAoZm9jdXMpPVxcXCJmb2N1c1RvSW5wdXQoJycpXFxcIlxcbiAgICAgW29mZkNsaWNrXT1cXFwiY2xpY2tlZE91dHNpZGVcXFwiXFxuICAgICBjbGFzcz1cXFwidWktc2VsZWN0LWNvbnRhaW5lciB1aS1zZWxlY3QtbXVsdGlwbGUgZHJvcGRvd24gZm9ybS1jb250cm9sIG9wZW5cXFwiPlxcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cXFwieyd1aS1kaXNhYmxlZCc6IGRpc2FibGVkfVxcXCI+PC9kaXY+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2hcXFwiPlxcbiAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgYSBvZiBhY3RpdmVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2gtaXRlbSBidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4teHNcXFwiXFxuICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIlxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XFxcInsnYnRuLWRlZmF1bHQnOiB0cnVlfVxcXCI+XFxuICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNsb3NlXFxcIlxcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogNXB4OyBwYWRkaW5nOiAwO1xcXCJcXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJyZW1vdmVDbGljayhhLCAkZXZlbnQpXFxcIj4mdGltZXM7PC9hPlxcbiAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVxcXCJzYW5pdGl6ZShhLnRleHQpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvc3Bhbj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAoa2V5ZG93bik9XFxcImlucHV0RXZlbnQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgIChrZXl1cCk9XFxcImlucHV0RXZlbnQoJGV2ZW50LCB0cnVlKVxcXCJcXG4gICAgICAgICAgIChjbGljayk9XFxcIm1hdGNoQ2xpY2soJGV2ZW50KVxcXCJcXG4gICAgICAgICAgIFtkaXNhYmxlZF09XFxcImRpc2FibGVkXFxcIlxcbiAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgIGF1dG9jb3JyZWN0PVxcXCJvZmZcXFwiXFxuICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHVpLXNlbGVjdC1zZWFyY2hcXFwiXFxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3thY3RpdmUubGVuZ3RoIDw9IDAgPyBwbGFjZWhvbGRlciA6ICcnfX1cXFwiXFxuICAgICAgICAgICByb2xlPVxcXCJjb21ib2JveFxcXCI+XFxuICAgICA8IS0tIG9wdGlvbnMgdGVtcGxhdGUgLS0+XFxuICAgICA8dWwgKm5nSWY9XFxcIm9wdGlvbnNPcGVuZWQgJiYgb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDAgJiYgIWZpcnN0SXRlbUhhc0NoaWxkcmVuXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMgZHJvcGRvd24tbWVudVxcXCIgcm9sZT1cXFwibWVudVxcXCI+XFxuICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgbyBvZiBvcHRpb25zXFxcIiByb2xlPVxcXCJtZW51aXRlbVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzLXJvd1xcXCJcXG4gICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cXFwiaXNBY3RpdmUobylcXFwiXFxuICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVxcXCJzZWxlY3RBY3RpdmUobylcXFwiXFxuICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwic2VsZWN0TWF0Y2gobywgJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IFtpbm5lckh0bWxdPVxcXCJzYW5pdGl6ZShvLnRleHQgfCBoaWdobGlnaHQ6aW5wdXRWYWx1ZSlcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2xpPlxcbiAgICAgIDwvdWw+XFxuICBcXG4gICAgICA8dWwgKm5nSWY9XFxcIm9wdGlvbnNPcGVuZWQgJiYgb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDAgJiYgZmlyc3RJdGVtSGFzQ2hpbGRyZW5cXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcyBkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG4gICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBjIG9mIG9wdGlvbnM7IGxldCBpbmRleD1pbmRleFxcXCIgcm9sZT1cXFwibWVudWl0ZW1cXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaXZpZGVyIGRyb3Bkb3duLWRpdmlkZXJcXFwiICpuZ0lmPVxcXCJpbmRleCA+IDBcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1oZWFkZXJcXFwiPnt7Yy50ZXh0fX08L2Rpdj5cXG4gIFxcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IG8gb2YgYy5jaGlsZHJlblxcXCJcXG4gICAgICAgICAgICAgICBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIlxcbiAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVxcXCJpc0FjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAobW91c2VlbnRlcik9XFxcInNlbGVjdEFjdGl2ZShvKVxcXCJcXG4gICAgICAgICAgICAgICAoY2xpY2spPVxcXCJzZWxlY3RNYXRjaChvLCAkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBpc0FjdGl2ZShvKX1cXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKVxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cXFwic2FuaXRpemUoby50ZXh0IHwgaGlnaGxpZ2h0OmlucHV0VmFsdWUpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9saT5cXG4gICAgICA8L3VsPlxcbiAgPC9kaXY+XFxuICBcIlxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgU2VsZWN0Q29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5FbGVtZW50UmVmLCB9LFxuICAgICAgICB7IHR5cGU6IHBsYXRmb3JtX2Jyb3dzZXJfMS5Eb21TYW5pdGl6ZXIsIH0sXG4gICAgXTsgfTtcbiAgICBTZWxlY3RDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICdhbGxvd0NsZWFyJzogW3sgdHlwZTogY29yZV8xLklucHV0IH0sXSxcbiAgICAgICAgJ3BsYWNlaG9sZGVyJzogW3sgdHlwZTogY29yZV8xLklucHV0IH0sXSxcbiAgICAgICAgJ2lkRmllbGQnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAndGV4dEZpZWxkJzogW3sgdHlwZTogY29yZV8xLklucHV0IH0sXSxcbiAgICAgICAgJ2NoaWxkcmVuRmllbGQnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnbXVsdGlwbGUnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnaXRlbXMnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnZGlzYWJsZWQnOiBbeyB0eXBlOiBjb3JlXzEuSW5wdXQgfSxdLFxuICAgICAgICAnYWN0aXZlJzogW3sgdHlwZTogY29yZV8xLklucHV0IH0sXSxcbiAgICAgICAgJ2RhdGEnOiBbeyB0eXBlOiBjb3JlXzEuT3V0cHV0IH0sXSxcbiAgICAgICAgJ3NlbGVjdGVkJzogW3sgdHlwZTogY29yZV8xLk91dHB1dCB9LF0sXG4gICAgICAgICdyZW1vdmVkJzogW3sgdHlwZTogY29yZV8xLk91dHB1dCB9LF0sXG4gICAgICAgICd0eXBlZCc6IFt7IHR5cGU6IGNvcmVfMS5PdXRwdXQgfSxdLFxuICAgICAgICAnb3BlbmVkJzogW3sgdHlwZTogY29yZV8xLk91dHB1dCB9LF0sXG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0Q29tcG9uZW50O1xufSgpKTtcbmV4cG9ydHMuU2VsZWN0Q29tcG9uZW50ID0gU2VsZWN0Q29tcG9uZW50O1xudmFyIEJlaGF2aW9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZWhhdmlvcihhY3Rvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnNNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcbiAgICB9XG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmZpbGxPcHRpb25zTWFwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm9wdGlvbnNNYXAuY2xlYXIoKTtcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gMDtcbiAgICAgICAgdGhpcy5hY3Rvci5pdGVtT2JqZWN0c1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgc3RhcnRQb3MgPSBpdGVtLmZpbGxDaGlsZHJlbkhhc2goX3RoaXMub3B0aW9uc01hcCwgc3RhcnRQb3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlID0gZnVuY3Rpb24gKG9wdGlvbnNNYXApIHtcbiAgICAgICAgaWYgKG9wdGlvbnNNYXAgPT09IHZvaWQgMCkgeyBvcHRpb25zTWFwID0gdm9pZCAwOyB9XG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmFjdG9yLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudWktc2VsZWN0LWNob2ljZXMtY29udGVudCcpO1xuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaG9pY2VzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtY2hvaWNlcy1yb3cnKTtcbiAgICAgICAgaWYgKGNob2ljZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgob3B0aW9uc01hcCk7XG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGlnaGxpZ2h0ZWQgPSBjaG9pY2VzW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgaWYgKCFoaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NZID0gaGlnaGxpZ2h0ZWQub2Zmc2V0VG9wICsgaGlnaGxpZ2h0ZWQuY2xpZW50SGVpZ2h0IC0gY29udGFpbmVyLnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGlmIChwb3NZID4gaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wICs9IHBvc1kgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocG9zWSA8IGhpZ2hsaWdodGVkLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCAtPSBoaWdobGlnaHRlZC5jbGllbnRIZWlnaHQgLSBwb3NZO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZ2V0QWN0aXZlSW5kZXggPSBmdW5jdGlvbiAob3B0aW9uc01hcCkge1xuICAgICAgICBpZiAob3B0aW9uc01hcCA9PT0gdm9pZCAwKSB7IG9wdGlvbnNNYXAgPSB2b2lkIDA7IH1cbiAgICAgICAgdmFyIGFpID0gdGhpcy5hY3Rvci5vcHRpb25zLmluZGV4T2YodGhpcy5hY3Rvci5hY3RpdmVPcHRpb24pO1xuICAgICAgICBpZiAoYWkgPCAwICYmIG9wdGlvbnNNYXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgYWkgPSBvcHRpb25zTWFwLmdldCh0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbi5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFpO1xuICAgIH07XG4gICAgcmV0dXJuIEJlaGF2aW9yO1xufSgpKTtcbmV4cG9ydHMuQmVoYXZpb3IgPSBCZWhhdmlvcjtcbnZhciBHZW5lcmljQmVoYXZpb3IgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHZW5lcmljQmVoYXZpb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2VuZXJpY0JlaGF2aW9yKGFjdG9yKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGFjdG9yKTtcbiAgICB9XG4gICAgR2VuZXJpY0JlaGF2aW9yLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yLm9wdGlvbnNbMF07XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgR2VuZXJpY0JlaGF2aW9yLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3Iub3B0aW9uc1t0aGlzLmFjdG9yLm9wdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgR2VuZXJpY0JlaGF2aW9yLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFjdG9yLm9wdGlvbnMuaW5kZXhPZih0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbik7XG4gICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3RvclxuICAgICAgICAgICAgLm9wdGlvbnNbaW5kZXggLSAxIDwgMCA/IHRoaXMuYWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxIDogaW5kZXggLSAxXTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBHZW5lcmljQmVoYXZpb3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWN0b3Iub3B0aW9ucy5pbmRleE9mKHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uKTtcbiAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yXG4gICAgICAgICAgICAub3B0aW9uc1tpbmRleCArIDEgPiB0aGlzLmFjdG9yLm9wdGlvbnMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFdO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEdlbmVyaWNCZWhhdmlvci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5hY3Rvci5pdGVtT2JqZWN0c1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0X3BpcGVzXzEuc3RyaXBUYWdzKG9wdGlvbi50ZXh0KS5tYXRjaChxdWVyeSkgJiZcbiAgICAgICAgICAgICAgICAoX3RoaXMuYWN0b3IubXVsdGlwbGUgPT09IGZhbHNlIHx8XG4gICAgICAgICAgICAgICAgICAgIChfdGhpcy5hY3Rvci5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBfdGhpcy5hY3Rvci5hY3RpdmUubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkOyB9KS5pbmRleE9mKG9wdGlvbi5pZCkgPCAwKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdG9yLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5hY3Rvci5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3Rvci5vcHRpb25zWzBdO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBHZW5lcmljQmVoYXZpb3I7XG59KEJlaGF2aW9yKSk7XG5leHBvcnRzLkdlbmVyaWNCZWhhdmlvciA9IEdlbmVyaWNCZWhhdmlvcjtcbnZhciBDaGlsZHJlbkJlaGF2aW9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hpbGRyZW5CZWhhdmlvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGlsZHJlbkJlaGF2aW9yKGFjdG9yKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGFjdG9yKTtcbiAgICB9XG4gICAgQ2hpbGRyZW5CZWhhdmlvci5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3Rvci5vcHRpb25zWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICB0aGlzLmZpbGxPcHRpb25zTWFwKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSh0aGlzLm9wdGlvbnNNYXApO1xuICAgIH07XG4gICAgQ2hpbGRyZW5CZWhhdmlvci5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPVxuICAgICAgICAgICAgdGhpcy5hY3RvclxuICAgICAgICAgICAgICAgIC5vcHRpb25zW3RoaXMuYWN0b3Iub3B0aW9ucy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIC5jaGlsZHJlblt0aGlzLmFjdG9yLm9wdGlvbnNbdGhpcy5hY3Rvci5vcHRpb25zLmxlbmd0aCAtIDFdLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLmZpbGxPcHRpb25zTWFwKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSh0aGlzLm9wdGlvbnNNYXApO1xuICAgIH07XG4gICAgQ2hpbGRyZW5CZWhhdmlvci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGluZGV4UGFyZW50ID0gdGhpcy5hY3Rvci5vcHRpb25zXG4gICAgICAgICAgICAuZmluZEluZGV4KGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIF90aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbi5wYXJlbnQgJiYgX3RoaXMuYWN0b3IuYWN0aXZlT3B0aW9uLnBhcmVudC5pZCA9PT0gb3B0aW9uLmlkOyB9KTtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50XS5jaGlsZHJlblxuICAgICAgICAgICAgLmZpbmRJbmRleChmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBfdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gJiYgX3RoaXMuYWN0b3IuYWN0aXZlT3B0aW9uLmlkID09PSBvcHRpb24uaWQ7IH0pO1xuICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3Iub3B0aW9uc1tpbmRleFBhcmVudF0uY2hpbGRyZW5baW5kZXggLSAxXTtcbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0b3Iub3B0aW9uc1tpbmRleFBhcmVudCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yXG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb25zW2luZGV4UGFyZW50IC0gMV1cbiAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuW3RoaXMuYWN0b3Iub3B0aW9uc1tpbmRleFBhcmVudCAtIDFdLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGFzdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsbE9wdGlvbnNNYXAoKTtcbiAgICAgICAgdGhpcy5lbnN1cmVIaWdobGlnaHRWaXNpYmxlKHRoaXMub3B0aW9uc01hcCk7XG4gICAgfTtcbiAgICBDaGlsZHJlbkJlaGF2aW9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5kZXhQYXJlbnQgPSB0aGlzLmFjdG9yLm9wdGlvbnNcbiAgICAgICAgICAgIC5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4gX3RoaXMuYWN0b3IuYWN0aXZlT3B0aW9uLnBhcmVudCAmJiBfdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24ucGFyZW50LmlkID09PSBvcHRpb24uaWQ7IH0pO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFjdG9yLm9wdGlvbnNbaW5kZXhQYXJlbnRdLmNoaWxkcmVuXG4gICAgICAgICAgICAuZmluZEluZGV4KGZ1bmN0aW9uIChvcHRpb24pIHsgcmV0dXJuIF90aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiAmJiBfdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24uaWQgPT09IG9wdGlvbi5pZDsgfSk7XG4gICAgICAgIHRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50XS5jaGlsZHJlbltpbmRleCArIDFdO1xuICAgICAgICBpZiAoIXRoaXMuYWN0b3IuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rvci5vcHRpb25zW2luZGV4UGFyZW50ICsgMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdG9yLmFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0b3Iub3B0aW9uc1tpbmRleFBhcmVudCArIDFdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGxPcHRpb25zTWFwKCk7XG4gICAgICAgIHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSh0aGlzLm9wdGlvbnNNYXApO1xuICAgIH07XG4gICAgQ2hpbGRyZW5CZWhhdmlvci5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gW107XG4gICAgICAgIHZhciBvcHRpb25zTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB2YXIgc3RhcnRQb3MgPSAwO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5hY3Rvci5pdGVtT2JqZWN0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzaSA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHNpLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7IHJldHVybiBxdWVyeS50ZXN0KG9wdGlvbi50ZXh0KTsgfSk7XG4gICAgICAgICAgICBzdGFydFBvcyA9IHNpLmZpbGxDaGlsZHJlbkhhc2gob3B0aW9uc01hcCwgc3RhcnRQb3MpO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U2kgPSBzaS5nZXRTaW1pbGFyKCk7XG4gICAgICAgICAgICAgICAgbmV3U2kuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2gobmV3U2kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0b3Iub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLmFjdG9yLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rvci5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdG9yLm9wdGlvbnNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGUuY2FsbCh0aGlzLCBvcHRpb25zTWFwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENoaWxkcmVuQmVoYXZpb3I7XG59KEJlaGF2aW9yKSk7XG5leHBvcnRzLkNoaWxkcmVuQmVoYXZpb3IgPSBDaGlsZHJlbkJlaGF2aW9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbmcyLXNlbGVjdC9zZWxlY3Qvc2VsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDcgOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIFNlbGVjdEl0ZW0gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdEl0ZW0oc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dCA9IHNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBzb3VyY2UuaWQgfHwgc291cmNlLnRleHQ7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSBzb3VyY2UudGV4dDtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuY2hpbGRyZW4gJiYgc291cmNlLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gc291cmNlLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG5ldyBTZWxlY3RJdGVtKGMpO1xuICAgICAgICAgICAgICAgICAgICByLnBhcmVudCA9IF90aGlzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSBzb3VyY2UudGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBTZWxlY3RJdGVtLnByb3RvdHlwZS5maWxsQ2hpbGRyZW5IYXNoID0gZnVuY3Rpb24gKG9wdGlvbnNNYXAsIHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgdmFyIGkgPSBzdGFydEluZGV4O1xuICAgICAgICB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNNYXAuc2V0KGNoaWxkLmlkLCBpKyspO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfTtcbiAgICBTZWxlY3RJdGVtLnByb3RvdHlwZS5oYXNDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgU2VsZWN0SXRlbS5wcm90b3R5cGUuZ2V0U2ltaWxhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBuZXcgU2VsZWN0SXRlbShmYWxzZSk7XG4gICAgICAgIHIuaWQgPSB0aGlzLmlkO1xuICAgICAgICByLnRleHQgPSB0aGlzLnRleHQ7XG4gICAgICAgIHIucGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdEl0ZW07XG59KCkpO1xuZXhwb3J0cy5TZWxlY3RJdGVtID0gU2VsZWN0SXRlbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3Qvc2VsZWN0L3NlbGVjdC1pdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDcgOSIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VsZWN0L2NvbW1vbicpKTtcbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VsZWN0L29mZi1jbGljaycpKTtcbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VsZWN0L3NlbGVjdC5tb2R1bGUnKSk7XG5fX2V4cG9ydChyZXF1aXJlKCcuL3NlbGVjdC9zZWxlY3QnKSk7XG5fX2V4cG9ydChyZXF1aXJlKCcuL3NlbGVjdC9zZWxlY3QtaXRlbScpKTtcbl9fZXhwb3J0KHJlcXVpcmUoJy4vc2VsZWN0L3NlbGVjdC1waXBlcycpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25nMi1zZWxlY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgNyA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGNvbW1vbl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tbW9uJyk7XG52YXIgc2VsZWN0XzEgPSByZXF1aXJlKCcuL3NlbGVjdCcpO1xudmFyIHNlbGVjdF9waXBlc18xID0gcmVxdWlyZSgnLi9zZWxlY3QtcGlwZXMnKTtcbnZhciBvZmZfY2xpY2tfMSA9IHJlcXVpcmUoJy4vb2ZmLWNsaWNrJyk7XG52YXIgU2VsZWN0TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWxlY3RNb2R1bGUoKSB7XG4gICAgfVxuICAgIFNlbGVjdE1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IGNvcmVfMS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0czogW2NvbW1vbl8xLkNvbW1vbk1vZHVsZV0sXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW3NlbGVjdF8xLlNlbGVjdENvbXBvbmVudCwgc2VsZWN0X3BpcGVzXzEuSGlnaGxpZ2h0UGlwZSwgb2ZmX2NsaWNrXzEuT2ZmQ2xpY2tEaXJlY3RpdmVdLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbc2VsZWN0XzEuU2VsZWN0Q29tcG9uZW50LCBzZWxlY3RfcGlwZXNfMS5IaWdobGlnaHRQaXBlLCBvZmZfY2xpY2tfMS5PZmZDbGlja0RpcmVjdGl2ZV1cbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFNlbGVjdE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBTZWxlY3RNb2R1bGU7XG59KCkpO1xuZXhwb3J0cy5TZWxlY3RNb2R1bGUgPSBTZWxlY3RNb2R1bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9uZzItc2VsZWN0L3NlbGVjdC9zZWxlY3QubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDcgOSIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2NS4xLjFcbiAqIChjKSAyMDEwLTIwMTcgR29vZ2xlLCBJbmMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ01vZHVsZSwgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyDJtWdldERPTSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEEgYmFja2VuZCBmb3IgaHR0cCB0aGF0IHVzZXMgdGhlIGBYTUxIdHRwUmVxdWVzdGAgYnJvd3NlciBBUEkuXG4gKlxuICogVGFrZSBjYXJlIG5vdCB0byBldmFsdWF0ZSB0aGlzIGluIG5vbi1icm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIEJyb3dzZXJYaHIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlclhocigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VyWGhyLnByb3RvdHlwZS5idWlsZCA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLyAoKG5ldyBYTUxIdHRwUmVxdWVzdCgpKSk7IH07XG4gICAgQnJvd3Nlclhoci5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEJyb3dzZXJYaHIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICByZXR1cm4gQnJvd3Nlclhocjtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xudmFyIFJlcXVlc3RNZXRob2QgPSB7XG4gICAgR2V0OiAwLFxuICAgIFBvc3Q6IDEsXG4gICAgUHV0OiAyLFxuICAgIERlbGV0ZTogMyxcbiAgICBPcHRpb25zOiA0LFxuICAgIEhlYWQ6IDUsXG4gICAgUGF0Y2g6IDYsXG59O1xuUmVxdWVzdE1ldGhvZFtSZXF1ZXN0TWV0aG9kLkdldF0gPSBcIkdldFwiO1xuUmVxdWVzdE1ldGhvZFtSZXF1ZXN0TWV0aG9kLlBvc3RdID0gXCJQb3N0XCI7XG5SZXF1ZXN0TWV0aG9kW1JlcXVlc3RNZXRob2QuUHV0XSA9IFwiUHV0XCI7XG5SZXF1ZXN0TWV0aG9kW1JlcXVlc3RNZXRob2QuRGVsZXRlXSA9IFwiRGVsZXRlXCI7XG5SZXF1ZXN0TWV0aG9kW1JlcXVlc3RNZXRob2QuT3B0aW9uc10gPSBcIk9wdGlvbnNcIjtcblJlcXVlc3RNZXRob2RbUmVxdWVzdE1ldGhvZC5IZWFkXSA9IFwiSGVhZFwiO1xuUmVxdWVzdE1ldGhvZFtSZXF1ZXN0TWV0aG9kLlBhdGNoXSA9IFwiUGF0Y2hcIjtcbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xudmFyIFJlYWR5U3RhdGUgPSB7XG4gICAgVW5zZW50OiAwLFxuICAgIE9wZW46IDEsXG4gICAgSGVhZGVyc1JlY2VpdmVkOiAyLFxuICAgIExvYWRpbmc6IDMsXG4gICAgRG9uZTogNCxcbiAgICBDYW5jZWxsZWQ6IDUsXG59O1xuUmVhZHlTdGF0ZVtSZWFkeVN0YXRlLlVuc2VudF0gPSBcIlVuc2VudFwiO1xuUmVhZHlTdGF0ZVtSZWFkeVN0YXRlLk9wZW5dID0gXCJPcGVuXCI7XG5SZWFkeVN0YXRlW1JlYWR5U3RhdGUuSGVhZGVyc1JlY2VpdmVkXSA9IFwiSGVhZGVyc1JlY2VpdmVkXCI7XG5SZWFkeVN0YXRlW1JlYWR5U3RhdGUuTG9hZGluZ10gPSBcIkxvYWRpbmdcIjtcblJlYWR5U3RhdGVbUmVhZHlTdGF0ZS5Eb25lXSA9IFwiRG9uZVwiO1xuUmVhZHlTdGF0ZVtSZWFkeVN0YXRlLkNhbmNlbGxlZF0gPSBcIkNhbmNlbGxlZFwiO1xuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG52YXIgUmVzcG9uc2VUeXBlID0ge1xuICAgIEJhc2ljOiAwLFxuICAgIENvcnM6IDEsXG4gICAgRGVmYXVsdDogMixcbiAgICBFcnJvcjogMyxcbiAgICBPcGFxdWU6IDQsXG59O1xuUmVzcG9uc2VUeXBlW1Jlc3BvbnNlVHlwZS5CYXNpY10gPSBcIkJhc2ljXCI7XG5SZXNwb25zZVR5cGVbUmVzcG9uc2VUeXBlLkNvcnNdID0gXCJDb3JzXCI7XG5SZXNwb25zZVR5cGVbUmVzcG9uc2VUeXBlLkRlZmF1bHRdID0gXCJEZWZhdWx0XCI7XG5SZXNwb25zZVR5cGVbUmVzcG9uc2VUeXBlLkVycm9yXSA9IFwiRXJyb3JcIjtcblJlc3BvbnNlVHlwZVtSZXNwb25zZVR5cGUuT3BhcXVlXSA9IFwiT3BhcXVlXCI7XG4vKiogQGVudW0ge251bWJlcn0gKi9cbnZhciBDb250ZW50VHlwZSA9IHtcbiAgICBOT05FOiAwLFxuICAgIEpTT046IDEsXG4gICAgRk9STTogMixcbiAgICBGT1JNX0RBVEE6IDMsXG4gICAgVEVYVDogNCxcbiAgICBCTE9COiA1LFxuICAgIEFSUkFZX0JVRkZFUjogNixcbn07XG5Db250ZW50VHlwZVtDb250ZW50VHlwZS5OT05FXSA9IFwiTk9ORVwiO1xuQ29udGVudFR5cGVbQ29udGVudFR5cGUuSlNPTl0gPSBcIkpTT05cIjtcbkNvbnRlbnRUeXBlW0NvbnRlbnRUeXBlLkZPUk1dID0gXCJGT1JNXCI7XG5Db250ZW50VHlwZVtDb250ZW50VHlwZS5GT1JNX0RBVEFdID0gXCJGT1JNX0RBVEFcIjtcbkNvbnRlbnRUeXBlW0NvbnRlbnRUeXBlLlRFWFRdID0gXCJURVhUXCI7XG5Db250ZW50VHlwZVtDb250ZW50VHlwZS5CTE9CXSA9IFwiQkxPQlwiO1xuQ29udGVudFR5cGVbQ29udGVudFR5cGUuQVJSQVlfQlVGRkVSXSA9IFwiQVJSQVlfQlVGRkVSXCI7XG4vKiogQGVudW0ge251bWJlcn0gKi9cbnZhciBSZXNwb25zZUNvbnRlbnRUeXBlID0ge1xuICAgIFRleHQ6IDAsXG4gICAgSnNvbjogMSxcbiAgICBBcnJheUJ1ZmZlcjogMixcbiAgICBCbG9iOiAzLFxufTtcblJlc3BvbnNlQ29udGVudFR5cGVbUmVzcG9uc2VDb250ZW50VHlwZS5UZXh0XSA9IFwiVGV4dFwiO1xuUmVzcG9uc2VDb250ZW50VHlwZVtSZXNwb25zZUNvbnRlbnRUeXBlLkpzb25dID0gXCJKc29uXCI7XG5SZXNwb25zZUNvbnRlbnRUeXBlW1Jlc3BvbnNlQ29udGVudFR5cGUuQXJyYXlCdWZmZXJdID0gXCJBcnJheUJ1ZmZlclwiO1xuUmVzcG9uc2VDb250ZW50VHlwZVtSZXNwb25zZUNvbnRlbnRUeXBlLkJsb2JdID0gXCJCbG9iXCI7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogUG9seWZpbGwgZm9yIFtIZWFkZXJzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGVhZGVycy9IZWFkZXJzKSwgYXNcbiAqIHNwZWNpZmllZCBpbiB0aGUgW0ZldGNoIFNwZWNdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNoZWFkZXJzLWNsYXNzKS5cbiAqXG4gKiBUaGUgb25seSBrbm93biBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBgSGVhZGVyc2AgaW1wbGVtZW50YXRpb24gYW5kIHRoZSBzcGVjIGlzIHRoZVxuICogbGFjayBvZiBhbiBgZW50cmllc2AgbWV0aG9kLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0hlYWRlcnN9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKlxuICogdmFyIGZpcnN0SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gKiBmaXJzdEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnaW1hZ2UvanBlZycpO1xuICogY29uc29sZS5sb2coZmlyc3RIZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykpIC8vJ2ltYWdlL2pwZWcnXG4gKlxuICogLy8gQ3JlYXRlIGhlYWRlcnMgZnJvbSBQbGFpbiBPbGQgSmF2YVNjcmlwdCBPYmplY3RcbiAqIHZhciBzZWNvbmRIZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICogICAnWC1NeS1DdXN0b20tSGVhZGVyJzogJ0FuZ3VsYXInXG4gKiB9KTtcbiAqIGNvbnNvbGUubG9nKHNlY29uZEhlYWRlcnMuZ2V0KCdYLU15LUN1c3RvbS1IZWFkZXInKSk7IC8vJ0FuZ3VsYXInXG4gKlxuICogdmFyIHRoaXJkSGVhZGVycyA9IG5ldyBIZWFkZXJzKHNlY29uZEhlYWRlcnMpO1xuICogY29uc29sZS5sb2codGhpcmRIZWFkZXJzLmdldCgnWC1NeS1DdXN0b20tSGVhZGVyJykpOyAvLydBbmd1bGFyJ1xuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgSGVhZGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPKHZpY2IpOiBhbnkgLT4gc3RyaW5nfHN0cmluZ1tdXG4gICAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbCBoZWFkZXIgbmFtZXMgYXJlIGxvd2VyIGNhc2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2hlYWRlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcXEBpbnRlcm5hbCBtYXAgbG93ZXIgY2FzZSBuYW1lcyB0byBhY3R1YWwgbmFtZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZWROYW1lcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKCFoZWFkZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICAgICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlcywgbmFtZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gX3RoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KGhlYWRlcnNbbmFtZV0pID8gaGVhZGVyc1tuYW1lXSA6IFtoZWFkZXJzW25hbWVdXTtcbiAgICAgICAgICAgIF90aGlzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gX3RoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEhlYWRlcnMgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gRE9NU3RyaW5nIG9mIFJlc3BvbnNlIEhlYWRlcnNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IEhlYWRlcnMgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gRE9NU3RyaW5nIG9mIFJlc3BvbnNlIEhlYWRlcnNcbiAgICAgKiBAcGFyYW0gez99IGhlYWRlcnNTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMuZnJvbVJlc3BvbnNlSGVhZGVyU3RyaW5nID0gLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyBIZWFkZXJzIGluc3RhbmNlIGZyb20gdGhlIGdpdmVuIERPTVN0cmluZyBvZiBSZXNwb25zZSBIZWFkZXJzXG4gICAgICogQHBhcmFtIHs/fSBoZWFkZXJzU3RyaW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoaGVhZGVyc1N0cmluZykge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVyc1N0cmluZy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBuYW1lXzEgPSBsaW5lLnNsaWNlKDAsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IGxpbmUuc2xpY2UoaW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgICAgICAgICAgaGVhZGVycy5zZXQobmFtZV8xLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBoZWFkZXIgdG8gZXhpc3RpbmcgbGlzdCBvZiBoZWFkZXIgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlciBuYW1lLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBoZWFkZXIgdG8gZXhpc3RpbmcgbGlzdCBvZiBoZWFkZXIgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlciBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IC8qKlxuICAgICAqIEFwcGVuZHMgYSBoZWFkZXIgdG8gZXhpc3RpbmcgbGlzdCBvZiBoZWFkZXIgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlciBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZXMgPSB0aGlzLmdldEFsbChuYW1lKTtcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFsbCBoZWFkZXIgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFsbCBoZWFkZXIgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLmRlbGV0ZSA9IC8qKlxuICAgICAqIERlbGV0ZXMgYWxsIGhlYWRlciB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGNOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLl9ub3JtYWxpemVkTmFtZXMuZGVsZXRlKGxjTmFtZSk7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMuZGVsZXRlKGxjTmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBmblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2hlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWVzLCBsY05hbWUpIHsgcmV0dXJuIGZuKHZhbHVlcywgX3RoaXMuX25vcm1hbGl6ZWROYW1lcy5nZXQobGNOYW1lKSwgX3RoaXMuX2hlYWRlcnMpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZmlyc3QgaGVhZGVyIHRoYXQgbWF0Y2hlcyBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZmlyc3QgaGVhZGVyIHRoYXQgbWF0Y2hlcyBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gLyoqXG4gICAgICogUmV0dXJucyBmaXJzdCBoZWFkZXIgdGhhdCBtYXRjaGVzIGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZXMgPSB0aGlzLmdldEFsbChuYW1lKTtcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcy5sZW5ndGggPiAwID8gdmFsdWVzWzBdIDogbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBmb3IgZXhpc3RlbmNlIG9mIGhlYWRlciBieSBnaXZlbiBuYW1lLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBmb3IgZXhpc3RlbmNlIG9mIGhlYWRlciBieSBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gLyoqXG4gICAgICogQ2hlY2tzIGZvciBleGlzdGVuY2Ugb2YgaGVhZGVyIGJ5IGdpdmVuIG5hbWUuXG4gICAgICogQHBhcmFtIHs/fSBuYW1lXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gdGhpcy5faGVhZGVycy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKTsgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuYW1lcyBvZiB0aGUgaGVhZGVyc1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hbWVzIG9mIHRoZSBoZWFkZXJzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmFtZXMgb2YgdGhlIGhlYWRlcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fbm9ybWFsaXplZE5hbWVzLnZhbHVlcygpKTsgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIG9yIG92ZXJyaWRlcyBoZWFkZXIgdmFsdWUgZm9yIGdpdmVuIG5hbWUuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogU2V0cyBvciBvdmVycmlkZXMgaGVhZGVyIHZhbHVlIGZvciBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IC8qKlxuICAgICAqIFNldHMgb3Igb3ZlcnJpZGVzIGhlYWRlciB2YWx1ZSBmb3IgZ2l2ZW4gbmFtZS5cbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhZGVycy5zZXQobmFtZS50b0xvd2VyQ2FzZSgpLCBbdmFsdWUuam9pbignLCcpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9oZWFkZXJzLnNldChuYW1lLnRvTG93ZXJDYXNlKCksIFt2YWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF5QmVTZXROb3JtYWxpemVkTmFtZShuYW1lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdmFsdWVzIG9mIGFsbCBoZWFkZXJzLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdmFsdWVzIG9mIGFsbCBoZWFkZXJzLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gLyoqXG4gICAgICogUmV0dXJucyB2YWx1ZXMgb2YgYWxsIGhlYWRlcnMuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2hlYWRlcnMudmFsdWVzKCkpOyB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RyaW5nIG9mIGFsbCBoZWFkZXJzLlxuICAgICAqL1xuICAgIC8vIFRPRE8odmljYik6IHJldHVybnMge1tuYW1lOiBzdHJpbmddOiBzdHJpbmdbXX1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHN0cmluZyBvZiBhbGwgaGVhZGVycy5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLnRvSlNPTiA9IC8qKlxuICAgICAqIFJldHVybnMgc3RyaW5nIG9mIGFsbCBoZWFkZXJzLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzZXJpYWxpemVkID0ge307XG4gICAgICAgIHRoaXMuX2hlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWVzLCBuYW1lKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzcGxpdCA9IFtdO1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHNwbGl0LnB1c2guYXBwbHkoc3BsaXQsIHYuc3BsaXQoJywnKSk7IH0pO1xuICAgICAgICAgICAgc2VyaWFsaXplZFsvKiogQHR5cGUgez99ICovICgoX3RoaXMuX25vcm1hbGl6ZWROYW1lcy5nZXQobmFtZSkpKV0gPSBzcGxpdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gbmFtZS5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGxpc3Qgb2YgaGVhZGVyIHZhbHVlcyBmb3IgYSBnaXZlbiBuYW1lLlxuICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuZ2V0QWxsID0gLyoqXG4gICAgICogUmV0dXJucyBsaXN0IG9mIGhlYWRlciB2YWx1ZXMgZm9yIGEgZ2l2ZW4gbmFtZS5cbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUudG9Mb3dlckNhc2UoKSkgfHwgbnVsbCA6IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCdcImVudHJpZXNcIiBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9uIEhlYWRlcnMgY2xhc3MnKTsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEhlYWRlcnMucHJvdG90eXBlLm1heUJlU2V0Tm9ybWFsaXplZE5hbWUgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxjTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9ub3JtYWxpemVkTmFtZXMuaGFzKGxjTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbGl6ZWROYW1lcy5zZXQobGNOYW1lLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEhlYWRlcnM7XG59KCkpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIENyZWF0ZXMgYSByZXNwb25zZSBvcHRpb25zIG9iamVjdCB0byBiZSBvcHRpb25hbGx5IHByb3ZpZGVkIHdoZW4gaW5zdGFudGlhdGluZyBhXG4gKiB7XFxAbGluayBSZXNwb25zZX0uXG4gKlxuICogVGhpcyBjbGFzcyBpcyBiYXNlZCBvbiB0aGUgYFJlc3BvbnNlSW5pdGAgZGVzY3JpcHRpb24gaW4gdGhlIFtGZXRjaFxuICogU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3Jlc3BvbnNlaW5pdCkuXG4gKlxuICogQWxsIHZhbHVlcyBhcmUgbnVsbCBieSBkZWZhdWx0LiBUeXBpY2FsIGRlZmF1bHRzIGNhbiBiZSBmb3VuZCBpbiB0aGVcbiAqIHtcXEBsaW5rIEJhc2VSZXNwb25zZU9wdGlvbnN9IGNsYXNzLCB3aGljaCBzdWItY2xhc3NlcyBgUmVzcG9uc2VPcHRpb25zYC5cbiAqXG4gKiBUaGlzIGNsYXNzIG1heSBiZSB1c2VkIGluIHRlc3RzIHRvIGJ1aWxkIHtcXEBsaW5rIFJlc3BvbnNlIFJlc3BvbnNlc30gZm9yXG4gKiBtb2NrIHJlc3BvbnNlcyAoc2VlIHtcXEBsaW5rIE1vY2tCYWNrZW5kfSkuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L1A5SmtrOGU4Y3o2TlZ6YmN4RXNEP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICpcbiAqIHZhciBvcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gKiAgIGJvZHk6ICd7XCJuYW1lXCI6XCJKZWZmXCJ9J1xuICogfSk7XG4gKiB2YXIgcmVzID0gbmV3IFJlc3BvbnNlKG9wdGlvbnMpO1xuICpcbiAqIGNvbnNvbGUubG9nKCdyZXMuanNvbigpOicsIHJlcy5qc29uKCkpOyAvLyBPYmplY3Qge25hbWU6IFwiSmVmZlwifVxuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgUmVzcG9uc2VPcHRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc3BvbnNlT3B0aW9ucyhvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHZhciBib2R5ID0gb3B0cy5ib2R5LCBzdGF0dXMgPSBvcHRzLnN0YXR1cywgaGVhZGVycyA9IG9wdHMuaGVhZGVycywgc3RhdHVzVGV4dCA9IG9wdHMuc3RhdHVzVGV4dCwgdHlwZSA9IG9wdHMudHlwZSwgdXJsID0gb3B0cy51cmw7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHkgIT0gbnVsbCA/IGJvZHkgOiBudWxsO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cyAhPSBudWxsID8gc3RhdHVzIDogbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycyAhPSBudWxsID8gaGVhZGVycyA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQgIT0gbnVsbCA/IHN0YXR1c1RleHQgOiBudWxsO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlICE9IG51bGwgPyB0eXBlIDogbnVsbDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmwgIT0gbnVsbCA/IHVybCA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBgUmVzcG9uc2VPcHRpb25zYCBpbnN0YW5jZSwgdXNpbmcgdGhlIG9wdGlvbmFsIGlucHV0IGFzIHZhbHVlcyB0b1xuICAgICAqIG92ZXJyaWRlXG4gICAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1heSBiZSB1c2VmdWwgd2hlbiBzaGFyaW5nIGEgYmFzZSBgUmVzcG9uc2VPcHRpb25zYCBvYmplY3QgaW5zaWRlIHRlc3RzLFxuICAgICAqIHdoZXJlIGNlcnRhaW4gcHJvcGVydGllcyBtYXkgY2hhbmdlIGZyb20gdGVzdCB0byB0ZXN0LlxuICAgICAqXG4gICAgICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0LzFsWHF1cUZmZ2R1VEZCV2pOb1JFP3A9cHJldmlldykpXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogaW1wb3J0IHtSZXNwb25zZU9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbiAgICAgKlxuICAgICAqIHZhciBvcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAgICogICBib2R5OiB7bmFtZTogJ0plZmYnfVxuICAgICAqIH0pO1xuICAgICAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucy5tZXJnZSh7XG4gICAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAgICogfSkpO1xuICAgICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICAgKiBjb25zb2xlLmxvZygncmVzLmpzb24oKTonLCByZXMuanNvbigpKTsgLy8gT2JqZWN0IHtuYW1lOiBcIkplZmZcIn1cbiAgICAgKiBjb25zb2xlLmxvZygncmVzLnVybDonLCByZXMudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAgICogYGBgXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIGBSZXNwb25zZU9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvXG4gICAgICogb3ZlcnJpZGVcbiAgICAgKiBleGlzdGluZyB2YWx1ZXMuIFRoaXMgbWV0aG9kIHdpbGwgbm90IGNoYW5nZSB0aGUgdmFsdWVzIG9mIHRoZSBpbnN0YW5jZSBvbiB3aGljaCBpdCBpcyBiZWluZ1xuICAgICAqIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWF5IGJlIHVzZWZ1bCB3aGVuIHNoYXJpbmcgYSBiYXNlIGBSZXNwb25zZU9wdGlvbnNgIG9iamVjdCBpbnNpZGUgdGVzdHMsXG4gICAgICogd2hlcmUgY2VydGFpbiBwcm9wZXJ0aWVzIG1heSBjaGFuZ2UgZnJvbSB0ZXN0IHRvIHRlc3QuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvMWxYcXVxRmZnZHVURkJXak5vUkU/cD1wcmV2aWV3KSlcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpbXBvcnQge1Jlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gICAgICpcbiAgICAgKiB2YXIgb3B0aW9ucyA9IG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAqICAgYm9keToge25hbWU6ICdKZWZmJ31cbiAgICAgKiB9KTtcbiAgICAgKiB2YXIgcmVzID0gbmV3IFJlc3BvbnNlKG9wdGlvbnMubWVyZ2Uoe1xuICAgICAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICAgICAqIH0pKTtcbiAgICAgKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBudWxsXG4gICAgICogY29uc29sZS5sb2coJ3Jlcy5qc29uKCk6JywgcmVzLmpzb24oKSk7IC8vIE9iamVjdCB7bmFtZTogXCJKZWZmXCJ9XG4gICAgICogY29uc29sZS5sb2coJ3Jlcy51cmw6JywgcmVzLnVybCk7IC8vIGh0dHBzOi8vZ29vZ2xlLmNvbVxuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlc3BvbnNlT3B0aW9ucy5wcm90b3R5cGUubWVyZ2UgPSAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgYFJlc3BvbnNlT3B0aW9uc2AgaW5zdGFuY2UsIHVzaW5nIHRoZSBvcHRpb25hbCBpbnB1dCBhcyB2YWx1ZXMgdG9cbiAgICAgKiBvdmVycmlkZVxuICAgICAqIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZXRob2Qgd2lsbCBub3QgY2hhbmdlIHRoZSB2YWx1ZXMgb2YgdGhlIGluc3RhbmNlIG9uIHdoaWNoIGl0IGlzIGJlaW5nXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gc2hhcmluZyBhIGJhc2UgYFJlc3BvbnNlT3B0aW9uc2Agb2JqZWN0IGluc2lkZSB0ZXN0cyxcbiAgICAgKiB3aGVyZSBjZXJ0YWluIHByb3BlcnRpZXMgbWF5IGNoYW5nZSBmcm9tIHRlc3QgdG8gdGVzdC5cbiAgICAgKlxuICAgICAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC8xbFhxdXFGZmdkdVRGQldqTm9SRT9wPXByZXZpZXcpKVxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7UmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAgICAgKlxuICAgICAqIHZhciBvcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7XG4gICAgICogICBib2R5OiB7bmFtZTogJ0plZmYnfVxuICAgICAqIH0pO1xuICAgICAqIHZhciByZXMgPSBuZXcgUmVzcG9uc2Uob3B0aW9ucy5tZXJnZSh7XG4gICAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAgICogfSkpO1xuICAgICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICAgKiBjb25zb2xlLmxvZygncmVzLmpzb24oKTonLCByZXMuanNvbigpKTsgLy8gT2JqZWN0IHtuYW1lOiBcIkplZmZcIn1cbiAgICAgKiBjb25zb2xlLmxvZygncmVzLnVybDonLCByZXMudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZU9wdGlvbnMoe1xuICAgICAgICAgICAgYm9keTogb3B0aW9ucyAmJiBvcHRpb25zLmJvZHkgIT0gbnVsbCA/IG9wdGlvbnMuYm9keSA6IHRoaXMuYm9keSxcbiAgICAgICAgICAgIHN0YXR1czogb3B0aW9ucyAmJiBvcHRpb25zLnN0YXR1cyAhPSBudWxsID8gb3B0aW9ucy5zdGF0dXMgOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIGhlYWRlcnM6IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzICE9IG51bGwgPyBvcHRpb25zLmhlYWRlcnMgOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBvcHRpb25zICYmIG9wdGlvbnMuc3RhdHVzVGV4dCAhPSBudWxsID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgdHlwZTogb3B0aW9ucyAmJiBvcHRpb25zLnR5cGUgIT0gbnVsbCA/IG9wdGlvbnMudHlwZSA6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIHVybDogb3B0aW9ucyAmJiBvcHRpb25zLnVybCAhPSBudWxsID8gb3B0aW9ucy51cmwgOiB0aGlzLnVybCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzcG9uc2VPcHRpb25zO1xufSgpKTtcbi8qKlxuICogU3ViY2xhc3Mgb2Yge1xcQGxpbmsgUmVzcG9uc2VPcHRpb25zfSwgd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBEZWZhdWx0IHZhbHVlczpcbiAqICAqIHN0YXR1czogMjAwXG4gKiAgKiBoZWFkZXJzOiBlbXB0eSB7XFxAbGluayBIZWFkZXJzfSBvYmplY3RcbiAqXG4gKiBUaGlzIGNsYXNzIGNvdWxkIGJlIGV4dGVuZGVkIGFuZCBib3VuZCB0byB0aGUge1xcQGxpbmsgUmVzcG9uc2VPcHRpb25zfSBjbGFzc1xuICogd2hlbiBjb25maWd1cmluZyBhbiB7XFxAbGluayBJbmplY3Rvcn0sIGluIG9yZGVyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIHVzZWQgYnkge1xcQGxpbmsgSHR0cH0gdG8gY3JlYXRlIHtcXEBsaW5rIFJlc3BvbnNlIFJlc3BvbnNlc30uXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L3F2OERMVD9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7cHJvdmlkZX0gZnJvbSAnXFxAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdcXEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnJvd3Nlcic7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIZWFkZXJzLCBIdHRwLCBCYXNlUmVzcG9uc2VPcHRpb25zLCBSZXNwb25zZU9wdGlvbnN9IGZyb21cbiAqICdcXEBhbmd1bGFyL2h0dHAnO1xuICogaW1wb3J0IHtBcHB9IGZyb20gJy4vbXlhcHAnO1xuICpcbiAqIGNsYXNzIE15T3B0aW9ucyBleHRlbmRzIEJhc2VSZXNwb25zZU9wdGlvbnMge1xuICogICBoZWFkZXJzOkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7bmV0d29yazogJ2dpdGh1Yid9KTtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwLCBbSFRUUF9QUk9WSURFUlMsIHtwcm92aWRlOiBSZXNwb25zZU9wdGlvbnMsIHVzZUNsYXNzOiBNeU9wdGlvbnN9XSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgb3B0aW9ucyBjb3VsZCBhbHNvIGJlIGV4dGVuZGVkIHdoZW4gbWFudWFsbHkgY3JlYXRpbmcgYSB7XFxAbGluayBSZXNwb25zZX1cbiAqIG9iamVjdC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvVm5nb3NPV2lhRXhFdGJzdERvaXg/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7QmFzZVJlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKlxuICogdmFyIG9wdGlvbnMgPSBuZXcgQmFzZVJlc3BvbnNlT3B0aW9ucygpO1xuICogdmFyIHJlcyA9IG5ldyBSZXNwb25zZShvcHRpb25zLm1lcmdlKHtcbiAqICAgYm9keTogJ0FuZ3VsYXInLFxuICogICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ZnJhbWV3b3JrOiAnYW5ndWxhcid9KVxuICogfSkpO1xuICogY29uc29sZS5sb2coJ3Jlcy5oZWFkZXJzLmdldChcImZyYW1ld29ya1wiKTonLCByZXMuaGVhZGVycy5nZXQoJ2ZyYW1ld29yaycpKTsgLy8gYW5ndWxhclxuICogY29uc29sZS5sb2coJ3Jlcy50ZXh0KCk6JywgcmVzLnRleHQoKSk7IC8vIEFuZ3VsYXI7XG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBCYXNlUmVzcG9uc2VPcHRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYXNlUmVzcG9uc2VPcHRpb25zLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJhc2VSZXNwb25zZU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB7IHN0YXR1czogMjAwLCBzdGF0dXNUZXh0OiAnT2snLCB0eXBlOiBSZXNwb25zZVR5cGUuRGVmYXVsdCwgaGVhZGVyczogbmV3IEhlYWRlcnMoKSB9KSB8fCB0aGlzO1xuICAgIH1cbiAgICBCYXNlUmVzcG9uc2VPcHRpb25zLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQmFzZVJlc3BvbnNlT3B0aW9ucy5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBCYXNlUmVzcG9uc2VPcHRpb25zO1xufShSZXNwb25zZU9wdGlvbnMpKTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmcm9tIHdoaWNoIHJlYWwgYmFja2VuZHMgYXJlIGRlcml2ZWQuXG4gKlxuICogVGhlIHByaW1hcnkgcHVycG9zZSBvZiBhIGBDb25uZWN0aW9uQmFja2VuZGAgaXMgdG8gY3JlYXRlIG5ldyBjb25uZWN0aW9ucyB0byBmdWxmaWxsIGEgZ2l2ZW5cbiAqIHtcXEBsaW5rIFJlcXVlc3R9LlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqIEBhYnN0cmFjdFxuICovXG52YXIgQ29ubmVjdGlvbkJhY2tlbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbkJhY2tlbmQoKSB7XG4gICAgfVxuICAgIHJldHVybiBDb25uZWN0aW9uQmFja2VuZDtcbn0oKSk7XG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZyb20gd2hpY2ggcmVhbCBjb25uZWN0aW9ucyBhcmUgZGVyaXZlZC5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyIENvbm5lY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbigpIHtcbiAgICB9XG4gICAgcmV0dXJuIENvbm5lY3Rpb247XG59KCkpO1xuLyoqXG4gKiBBbiBYU1JGU3RyYXRlZ3kgY29uZmlndXJlcyBYU1JGIHByb3RlY3Rpb24gKGUuZy4gdmlhIGhlYWRlcnMpIG9uIGFuIEhUVFAgcmVxdWVzdC5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyIFhTUkZTdHJhdGVneSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBYU1JGU3RyYXRlZ3koKSB7XG4gICAgfVxuICAgIHJldHVybiBYU1JGU3RyYXRlZ3k7XG59KCkpO1xuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIG9wdGlvbnMgdG8gY29uc3RydWN0IGEgUmVxdWVzdE9wdGlvbnMsIGJhc2VkIG9uXG4gKiBbUmVxdWVzdEluaXRdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXF1ZXN0aW5pdCkgZnJvbSB0aGUgRmV0Y2ggc3BlYy5cbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKiBAcmVjb3JkXG4gKi9cblxuLyoqXG4gKiBSZXF1aXJlZCBzdHJ1Y3R1cmUgd2hlbiBjb25zdHJ1Y3RpbmcgbmV3IFJlcXVlc3QoKTtcbiAqIEByZWNvcmRcbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3Igb3B0aW9ucyB0byBjb25zdHJ1Y3QgYSBSZXNwb25zZSwgYmFzZWQgb25cbiAqIFtSZXNwb25zZUluaXRdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZWluaXQpIGZyb20gdGhlIEZldGNoIHNwZWMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICogQHJlY29yZFxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQHBhcmFtIHs/fSBtZXRob2RcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZE5hbWUobWV0aG9kKSB7XG4gICAgaWYgKHR5cGVvZiBtZXRob2QgIT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgIHN3aXRjaCAobWV0aG9kLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0TWV0aG9kLkdldDtcbiAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZC5Qb3N0O1xuICAgICAgICBjYXNlICdQVVQnOlxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2QuUHV0O1xuICAgICAgICBjYXNlICdERUxFVEUnOlxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2QuRGVsZXRlO1xuICAgICAgICBjYXNlICdPUFRJT05TJzpcbiAgICAgICAgICAgIHJldHVybiBSZXF1ZXN0TWV0aG9kLk9wdGlvbnM7XG4gICAgICAgIGNhc2UgJ0hFQUQnOlxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2QuSGVhZDtcbiAgICAgICAgY2FzZSAnUEFUQ0gnOlxuICAgICAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2QuUGF0Y2g7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVxdWVzdCBtZXRob2QuIFRoZSBtZXRob2QgXFxcIlwiICsgbWV0aG9kICsgXCJcXFwiIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xufVxudmFyIGlzU3VjY2VzcyA9IGZ1bmN0aW9uIChzdGF0dXMpIHsgcmV0dXJuIChzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCk7IH07XG4vKipcbiAqIEBwYXJhbSB7P30geGhyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBnZXRSZXNwb25zZVVSTCh4aHIpIHtcbiAgICBpZiAoJ3Jlc3BvbnNlVVJMJyBpbiB4aHIpIHtcbiAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTDtcbiAgICB9XG4gICAgaWYgKC9eWC1SZXF1ZXN0LVVSTDovbS50ZXN0KHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpIHtcbiAgICAgICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1SZXF1ZXN0LVVSTCcpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBpbnB1dFxuICogQHJldHVybiB7P31cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7P30gaW5wdXRcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXlCdWZmZXIoaW5wdXQpIHtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2aWV3ID0gbmV3IFVpbnQxNkFycmF5KGlucHV0Lmxlbmd0aCk7XG4gICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMCwgLyoqIEB0eXBlIHs/fSAqLyBzdHJMZW4gPSBpbnB1dC5sZW5ndGg7IGkgPCBzdHJMZW47IGkrKykge1xuICAgICAgICB2aWV3W2ldID0gaW5wdXQuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZpZXcuYnVmZmVyO1xufVxuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBwYXJhbSB7Pz19IHJhd1BhcmFtc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gcGFyYW1QYXJzZXIocmF3UGFyYW1zKSB7XG4gICAgaWYgKHJhd1BhcmFtcyA9PT0gdm9pZCAwKSB7IHJhd1BhcmFtcyA9ICcnOyB9XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbWFwID0gbmV3IE1hcCgpO1xuICAgIGlmIChyYXdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwYXJhbXMgPSByYXdQYXJhbXMuc3BsaXQoJyYnKTtcbiAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBlcUlkeCA9IHBhcmFtLmluZGV4T2YoJz0nKTtcbiAgICAgICAgICAgIHZhciBfYSA9IGVxSWR4ID09IC0xID8gW3BhcmFtLCAnJ10gOiBbcGFyYW0uc2xpY2UoMCwgZXFJZHgpLCBwYXJhbS5zbGljZShlcUlkeCArIDEpXSwga2V5ID0gX2FbMF0sIHZhbCA9IF9hWzFdO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGlzdCA9IG1hcC5nZXQoa2V5KSB8fCBbXTtcbiAgICAgICAgICAgIGxpc3QucHVzaCh2YWwpO1xuICAgICAgICAgICAgbWFwLnNldChrZXksIGxpc3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbn1cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICpcbiAqL1xudmFyIFF1ZXJ5RW5jb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWVyeUVuY29kZXIoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30ga1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUXVlcnlFbmNvZGVyLnByb3RvdHlwZS5lbmNvZGVLZXkgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGtcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChrKSB7IHJldHVybiBzdGFuZGFyZEVuY29kaW5nKGspOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUXVlcnlFbmNvZGVyLnByb3RvdHlwZS5lbmNvZGVWYWx1ZSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gdlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0YW5kYXJkRW5jb2Rpbmcodik7IH07XG4gICAgcmV0dXJuIFF1ZXJ5RW5jb2Rlcjtcbn0oKSk7XG4vKipcbiAqIEBwYXJhbSB7P30gdlxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gc3RhbmRhcmRFbmNvZGluZyh2KSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2KVxuICAgICAgICAucmVwbGFjZSgvJTQwL2dpLCAnQCcpXG4gICAgICAgIC5yZXBsYWNlKC8lM0EvZ2ksICc6JylcbiAgICAgICAgLnJlcGxhY2UoLyUyNC9naSwgJyQnKVxuICAgICAgICAucmVwbGFjZSgvJTJDL2dpLCAnLCcpXG4gICAgICAgIC5yZXBsYWNlKC8lM0IvZ2ksICc7JylcbiAgICAgICAgLnJlcGxhY2UoLyUyQi9naSwgJysnKVxuICAgICAgICAucmVwbGFjZSgvJTNEL2dpLCAnPScpXG4gICAgICAgIC5yZXBsYWNlKC8lM0YvZ2ksICc/JylcbiAgICAgICAgLnJlcGxhY2UoLyUyRi9naSwgJy8nKTtcbn1cbi8qKlxuICogTWFwLWxpa2UgcmVwcmVzZW50YXRpb24gb2YgdXJsIHNlYXJjaCBwYXJhbWV0ZXJzLCBiYXNlZCBvblxuICogW1VSTFNlYXJjaFBhcmFtc10oaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmxzZWFyY2hwYXJhbXMpIGluIHRoZSB1cmwgbGl2aW5nIHN0YW5kYXJkLFxuICogd2l0aCBzZXZlcmFsIGV4dGVuc2lvbnMgZm9yIG1lcmdpbmcgVVJMU2VhcmNoUGFyYW1zIG9iamVjdHM6XG4gKiAgIC0gc2V0QWxsKClcbiAqICAgLSBhcHBlbmRBbGwoKVxuICogICAtIHJlcGxhY2VBbGwoKVxuICpcbiAqIFRoaXMgY2xhc3MgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgcGFyYW1ldGVyIG9mICR7XFxAbGluayBRdWVyeUVuY29kZXJ9LFxuICogd2hpY2ggaXMgdXNlZCB0byBzZXJpYWxpemUgcGFyYW1ldGVycyBiZWZvcmUgbWFraW5nIGEgcmVxdWVzdC4gQnkgZGVmYXVsdCxcbiAqIGBRdWVyeUVuY29kZXJgIGVuY29kZXMga2V5cyBhbmQgdmFsdWVzIG9mIHBhcmFtZXRlcnMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudGAsXG4gKiBhbmQgdGhlbiB1bi1lbmNvZGVzIGNlcnRhaW4gY2hhcmFjdGVycyB0aGF0IGFyZSBhbGxvd2VkIHRvIGJlIHBhcnQgb2YgdGhlIHF1ZXJ5XG4gKiBhY2NvcmRpbmcgdG8gSUVURiBSRkMgMzk4NjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBlbmNvZGVkOiBgISAkIFxcJyAoICkgKiArICwgOyBBIDkgLSAuIF8gfiA/IC9gXG4gKlxuICogSWYgdGhlIHNldCBvZiBhbGxvd2VkIHF1ZXJ5IGNoYXJhY3RlcnMgaXMgbm90IGFjY2VwdGFibGUgZm9yIGEgcGFydGljdWxhciBiYWNrZW5kLFxuICogYFF1ZXJ5RW5jb2RlcmAgY2FuIGJlIHN1YmNsYXNzZWQgYW5kIHByb3ZpZGVkIGFzIHRoZSAybmQgYXJndW1lbnQgdG8gVVJMU2VhcmNoUGFyYW1zLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtVUkxTZWFyY2hQYXJhbXMsIFF1ZXJ5RW5jb2Rlcn0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqIGNsYXNzIE15UXVlcnlFbmNvZGVyIGV4dGVuZHMgUXVlcnlFbmNvZGVyIHtcbiAqICAgZW5jb2RlS2V5KGs6IHN0cmluZyk6IHN0cmluZyB7XG4gKiAgICAgcmV0dXJuIG15RW5jb2RpbmdGdW5jdGlvbihrKTtcbiAqICAgfVxuICpcbiAqICAgZW5jb2RlVmFsdWUodjogc3RyaW5nKTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gbXlFbmNvZGluZ0Z1bmN0aW9uKHYpO1xuICogICB9XG4gKiB9XG4gKlxuICogbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoJycsIG5ldyBNeVF1ZXJ5RW5jb2RlcigpKTtcbiAqIGBgYFxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgVVJMU2VhcmNoUGFyYW1zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVSTFNlYXJjaFBhcmFtcyhyYXdQYXJhbXMsIHF1ZXJ5RW5jb2Rlcikge1xuICAgICAgICBpZiAocmF3UGFyYW1zID09PSB2b2lkIDApIHsgcmF3UGFyYW1zID0gJyc7IH1cbiAgICAgICAgaWYgKHF1ZXJ5RW5jb2RlciA9PT0gdm9pZCAwKSB7IHF1ZXJ5RW5jb2RlciA9IG5ldyBRdWVyeUVuY29kZXIoKTsgfVxuICAgICAgICB0aGlzLnJhd1BhcmFtcyA9IHJhd1BhcmFtcztcbiAgICAgICAgdGhpcy5xdWVyeUVuY29kZXIgPSBxdWVyeUVuY29kZXI7XG4gICAgICAgIHRoaXMucGFyYW1zTWFwID0gcGFyYW1QYXJzZXIocmF3UGFyYW1zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmNsb25lID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNsb25lID0gbmV3IFVSTFNlYXJjaFBhcmFtcygnJywgdGhpcy5xdWVyeUVuY29kZXIpO1xuICAgICAgICBjbG9uZS5hcHBlbmRBbGwodGhpcyk7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaGFzID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmFtKSB7IHJldHVybiB0aGlzLnBhcmFtc01hcC5oYXMocGFyYW0pOyB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuZ2V0ID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0b3JlZFBhcmFtID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc3RvcmVkUGFyYW0pID8gc3RvcmVkUGFyYW1bMF0gOiBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5nZXRBbGwgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW0pIHsgcmV0dXJuIHRoaXMucGFyYW1zTWFwLmdldChwYXJhbSkgfHwgW107IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEBwYXJhbSB7P30gdmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnNldCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1cbiAgICAgKiBAcGFyYW0gez99IHZhbFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmFtLCB2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gdm9pZCAwIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUocGFyYW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3QgPSB0aGlzLnBhcmFtc01hcC5nZXQocGFyYW0pIHx8IFtdO1xuICAgICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIGxpc3QucHVzaCh2YWwpO1xuICAgICAgICB0aGlzLnBhcmFtc01hcC5zZXQocGFyYW0sIGxpc3QpO1xuICAgIH07XG4gICAgLy8gQSBtZXJnZSBvcGVyYXRpb25cbiAgICAvLyBGb3IgZWFjaCBuYW1lLXZhbHVlcyBwYWlyIGluIGBzZWFyY2hQYXJhbXNgLCBwZXJmb3JtIGBzZXQobmFtZSwgdmFsdWVzWzBdKWBcbiAgICAvL1xuICAgIC8vIEUuZzogXCJhPVsxLDIsM10sIGM9WzhdXCIgKyBcImE9WzQsNSw2XSwgYj1bN11cIiA9IFwiYT1bNF0sIGM9WzhdLCBiPVs3XVwiXG4gICAgLy9cbiAgICAvLyBUT0RPKEBjYWl0cCk6IGRvY3VtZW50IHRoaXMgYmV0dGVyXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBzZWFyY2hQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuc2V0QWxsID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBzZWFyY2hQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2VhcmNoUGFyYW1zLnBhcmFtc01hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3QgPSBfdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKSB8fCBbXTtcbiAgICAgICAgICAgIGxpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGxpc3QucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICBfdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtXG4gICAgICogQHBhcmFtIHs/fSB2YWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuYXBwZW5kID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEBwYXJhbSB7P30gdmFsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocGFyYW0sIHZhbCkge1xuICAgICAgICBpZiAodmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsaXN0ID0gdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKSB8fCBbXTtcbiAgICAgICAgbGlzdC5wdXNoKHZhbCk7XG4gICAgICAgIHRoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gICAgfTtcbiAgICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAgIC8vIEZvciBlYWNoIG5hbWUtdmFsdWVzIHBhaXIgaW4gYHNlYXJjaFBhcmFtc2AsIHBlcmZvcm0gYGFwcGVuZChuYW1lLCB2YWx1ZSlgXG4gICAgLy8gZm9yIGVhY2ggdmFsdWUgaW4gYHZhbHVlc2AuXG4gICAgLy9cbiAgICAvLyBFLmc6IFwiYT1bMSwyXSwgYz1bOF1cIiArIFwiYT1bMyw0XSwgYj1bN11cIiA9IFwiYT1bMSwyLDMsNF0sIGM9WzhdLCBiPVs3XVwiXG4gICAgLy9cbiAgICAvLyBUT0RPKEBjYWl0cCk6IGRvY3VtZW50IHRoaXMgYmV0dGVyXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBzZWFyY2hQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuYXBwZW5kQWxsID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBzZWFyY2hQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2VhcmNoUGFyYW1zLnBhcmFtc01hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxpc3QgPSBfdGhpcy5wYXJhbXNNYXAuZ2V0KHBhcmFtKSB8fCBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh2YWx1ZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5wYXJhbXNNYXAuc2V0KHBhcmFtLCBsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBBIG1lcmdlIG9wZXJhdGlvblxuICAgIC8vIEZvciBlYWNoIG5hbWUtdmFsdWVzIHBhaXIgaW4gYHNlYXJjaFBhcmFtc2AsIHBlcmZvcm0gYGRlbGV0ZShuYW1lKWAsXG4gICAgLy8gZm9sbG93ZWQgYnkgYHNldChuYW1lLCB2YWx1ZXMpYFxuICAgIC8vXG4gICAgLy8gRS5nOiBcImE9WzEsMiwzXSwgYz1bOF1cIiArIFwiYT1bNCw1LDZdLCBiPVs3XVwiID0gXCJhPVs0LDUsNl0sIGM9WzhdLCBiPVs3XVwiXG4gICAgLy9cbiAgICAvLyBUT0RPKEBjYWl0cCk6IGRvY3VtZW50IHRoaXMgYmV0dGVyXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBzZWFyY2hQYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gc2VhcmNoUGFyYW1zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoc2VhcmNoUGFyYW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHNlYXJjaFBhcmFtcy5wYXJhbXNNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIHBhcmFtKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBsaXN0ID0gX3RoaXMucGFyYW1zTWFwLmdldChwYXJhbSkgfHwgW107XG4gICAgICAgICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciAvKiogQHR5cGUgez99ICovIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godmFsdWVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMucGFyYW1zTWFwLnNldChwYXJhbSwgbGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnRvU3RyaW5nID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBhcmFtc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJhbXNNYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWVzLCBrKSB7XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXNMaXN0LnB1c2goX3RoaXMucXVlcnlFbmNvZGVyLmVuY29kZUtleShrKSArICc9JyArIF90aGlzLnF1ZXJ5RW5jb2Rlci5lbmNvZGVWYWx1ZSh2KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXNMaXN0LmpvaW4oJyYnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyYW1cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuZGVsZXRlID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmFtKSB7IHRoaXMucGFyYW1zTWFwLmRlbGV0ZShwYXJhbSk7IH07XG4gICAgcmV0dXJuIFVSTFNlYXJjaFBhcmFtcztcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogSFRUUCByZXF1ZXN0IGJvZHkgdXNlZCBieSBib3RoIHtcXEBsaW5rIFJlcXVlc3R9IGFuZCB7XFxAbGluayBSZXNwb25zZX1cbiAqIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNib2R5XG4gKiBAYWJzdHJhY3RcbiAqL1xudmFyIEJvZHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gcmV0dXJuIGJvZHkgYXMgcGFyc2VkIGBKU09OYCBvYmplY3QsIG9yIHJhaXNlcyBhbiBleGNlcHRpb24uXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gcmV0dXJuIGJvZHkgYXMgcGFyc2VkIGBKU09OYCBvYmplY3QsIG9yIHJhaXNlcyBhbiBleGNlcHRpb24uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCb2R5LnByb3RvdHlwZS5qc29uID0gLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gcmV0dXJuIGJvZHkgYXMgcGFyc2VkIGBKU09OYCBvYmplY3QsIG9yIHJhaXNlcyBhbiBleGNlcHRpb24uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuX2JvZHkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYm9keSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib2R5IGFzIGEgc3RyaW5nLCBwcmVzdW1pbmcgYHRvU3RyaW5nKClgIGNhbiBiZSBjYWxsZWQgb24gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICpcbiAgICAgKiBXaGVuIGRlY29kaW5nIGFuIGBBcnJheUJ1ZmZlcmAsIHRoZSBvcHRpb25hbCBgZW5jb2RpbmdIaW50YCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyBob3cgdGhlXG4gICAgICogYnl0ZXMgaW4gdGhlIGJ1ZmZlciB3aWxsIGJlIGludGVycHJldGVkLiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgICAqXG4gICAgICogLSBgbGVnYWN5YCAtIGluY29ycmVjdGx5IGludGVycHJldCB0aGUgYnl0ZXMgYXMgVVRGLTE2ICh0ZWNobmljYWxseSwgVUNTLTIpLiBPbmx5IGNoYXJhY3RlcnNcbiAgICAgKiAgIGluIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgYXJlIHN1cHBvcnRlZCwgc3Vycm9nYXRlIHBhaXJzIGFyZSBub3QgaGFuZGxlZCBjb3JyZWN0bHkuXG4gICAgICogICBJbiBhZGRpdGlvbiwgdGhlIGVuZGlhbm5lc3Mgb2YgdGhlIDE2LWJpdCBvY3RldCBwYWlycyBpbiB0aGUgYEFycmF5QnVmZmVyYCBpcyBub3QgdGFrZW5cbiAgICAgKiAgIGludG8gY29uc2lkZXJhdGlvbi4gVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciB0byBhdm9pZCBicmVha2luZyBhcHBzLCBidXQgc2hvdWxkIGJlXG4gICAgICogICBjb25zaWRlcmVkIGRlcHJlY2F0ZWQuXG4gICAgICpcbiAgICAgKiAtIGBpc28tODg1OWAgLSBpbnRlcnByZXQgdGhlIGJ5dGVzIGFzIElTTy04ODU5ICh3aGljaCBjYW4gYmUgdXNlZCBmb3IgQVNDSUkgZW5jb2RlZCB0ZXh0KS5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib2R5IGFzIGEgc3RyaW5nLCBwcmVzdW1pbmcgYHRvU3RyaW5nKClgIGNhbiBiZSBjYWxsZWQgb24gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICpcbiAgICAgKiBXaGVuIGRlY29kaW5nIGFuIGBBcnJheUJ1ZmZlcmAsIHRoZSBvcHRpb25hbCBgZW5jb2RpbmdIaW50YCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyBob3cgdGhlXG4gICAgICogYnl0ZXMgaW4gdGhlIGJ1ZmZlciB3aWxsIGJlIGludGVycHJldGVkLiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgICAqXG4gICAgICogLSBgbGVnYWN5YCAtIGluY29ycmVjdGx5IGludGVycHJldCB0aGUgYnl0ZXMgYXMgVVRGLTE2ICh0ZWNobmljYWxseSwgVUNTLTIpLiBPbmx5IGNoYXJhY3RlcnNcbiAgICAgKiAgIGluIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgYXJlIHN1cHBvcnRlZCwgc3Vycm9nYXRlIHBhaXJzIGFyZSBub3QgaGFuZGxlZCBjb3JyZWN0bHkuXG4gICAgICogICBJbiBhZGRpdGlvbiwgdGhlIGVuZGlhbm5lc3Mgb2YgdGhlIDE2LWJpdCBvY3RldCBwYWlycyBpbiB0aGUgYEFycmF5QnVmZmVyYCBpcyBub3QgdGFrZW5cbiAgICAgKiAgIGludG8gY29uc2lkZXJhdGlvbi4gVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciB0byBhdm9pZCBicmVha2luZyBhcHBzLCBidXQgc2hvdWxkIGJlXG4gICAgICogICBjb25zaWRlcmVkIGRlcHJlY2F0ZWQuXG4gICAgICpcbiAgICAgKiAtIGBpc28tODg1OWAgLSBpbnRlcnByZXQgdGhlIGJ5dGVzIGFzIElTTy04ODU5ICh3aGljaCBjYW4gYmUgdXNlZCBmb3IgQVNDSUkgZW5jb2RlZCB0ZXh0KS5cbiAgICAgKiBAcGFyYW0gez89fSBlbmNvZGluZ0hpbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJvZHkucHJvdG90eXBlLnRleHQgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib2R5IGFzIGEgc3RyaW5nLCBwcmVzdW1pbmcgYHRvU3RyaW5nKClgIGNhbiBiZSBjYWxsZWQgb24gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICpcbiAgICAgKiBXaGVuIGRlY29kaW5nIGFuIGBBcnJheUJ1ZmZlcmAsIHRoZSBvcHRpb25hbCBgZW5jb2RpbmdIaW50YCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyBob3cgdGhlXG4gICAgICogYnl0ZXMgaW4gdGhlIGJ1ZmZlciB3aWxsIGJlIGludGVycHJldGVkLiBWYWxpZCB2YWx1ZXMgYXJlOlxuICAgICAqXG4gICAgICogLSBgbGVnYWN5YCAtIGluY29ycmVjdGx5IGludGVycHJldCB0aGUgYnl0ZXMgYXMgVVRGLTE2ICh0ZWNobmljYWxseSwgVUNTLTIpLiBPbmx5IGNoYXJhY3RlcnNcbiAgICAgKiAgIGluIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgYXJlIHN1cHBvcnRlZCwgc3Vycm9nYXRlIHBhaXJzIGFyZSBub3QgaGFuZGxlZCBjb3JyZWN0bHkuXG4gICAgICogICBJbiBhZGRpdGlvbiwgdGhlIGVuZGlhbm5lc3Mgb2YgdGhlIDE2LWJpdCBvY3RldCBwYWlycyBpbiB0aGUgYEFycmF5QnVmZmVyYCBpcyBub3QgdGFrZW5cbiAgICAgKiAgIGludG8gY29uc2lkZXJhdGlvbi4gVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciB0byBhdm9pZCBicmVha2luZyBhcHBzLCBidXQgc2hvdWxkIGJlXG4gICAgICogICBjb25zaWRlcmVkIGRlcHJlY2F0ZWQuXG4gICAgICpcbiAgICAgKiAtIGBpc28tODg1OWAgLSBpbnRlcnByZXQgdGhlIGJ5dGVzIGFzIElTTy04ODU5ICh3aGljaCBjYW4gYmUgdXNlZCBmb3IgQVNDSUkgZW5jb2RlZCB0ZXh0KS5cbiAgICAgKiBAcGFyYW0gez89fSBlbmNvZGluZ0hpbnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChlbmNvZGluZ0hpbnQpIHtcbiAgICAgICAgaWYgKGVuY29kaW5nSGludCA9PT0gdm9pZCAwKSB7IGVuY29kaW5nSGludCA9ICdsZWdhY3knOyB9XG4gICAgICAgIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYm9keS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZW5jb2RpbmdIaW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVnYWN5JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQxNkFycmF5KC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuX2JvZHkpKSk7XG4gICAgICAgICAgICAgICAgY2FzZSAnaXNvLTg4NTknOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheSgvKiogQHR5cGUgez99ICovICh0aGlzLl9ib2R5KSkpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIGVuY29kaW5nSGludDogXCIgKyBlbmNvZGluZ0hpbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ib2R5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2JvZHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fYm9keSwgbnVsbCwgMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHkudG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgYm9keSBhcyBhbiBBcnJheUJ1ZmZlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgYm9keSBhcyBhbiBBcnJheUJ1ZmZlclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQm9keS5wcm90b3R5cGUuYXJyYXlCdWZmZXIgPSAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGJvZHkgYXMgYW4gQXJyYXlCdWZmZXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0FycmF5QnVmZmVyKHRoaXMudGV4dCgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAgKiBSZXR1cm5zIHRoZSByZXF1ZXN0J3MgYm9keSBhcyBhIEJsb2IsIGFzc3VtaW5nIHRoYXQgYm9keSBleGlzdHMuXG4gICAgICAqL1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFzIGEgQmxvYiwgYXNzdW1pbmcgdGhhdCBib2R5IGV4aXN0cy5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEJvZHkucHJvdG90eXBlLmJsb2IgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZXF1ZXN0J3MgYm9keSBhcyBhIEJsb2IsIGFzc3VtaW5nIHRoYXQgYm9keSBleGlzdHMuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuX2JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbdGhpcy5fYm9keV0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJlcXVlc3QgYm9keSBpc25cXCd0IGVpdGhlciBhIGJsb2Igb3IgYW4gYXJyYXkgYnVmZmVyJyk7XG4gICAgfTtcbiAgICByZXR1cm4gQm9keTtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBgUmVzcG9uc2VgIGluc3RhbmNlcyBmcm9tIHByb3ZpZGVkIHZhbHVlcy5cbiAqXG4gKiBUaG91Z2ggdGhpcyBvYmplY3QgaXNuJ3RcbiAqIHVzdWFsbHkgaW5zdGFudGlhdGVkIGJ5IGVuZC11c2VycywgaXQgaXMgdGhlIHByaW1hcnkgb2JqZWN0IGludGVyYWN0ZWQgd2l0aCB3aGVuIGl0IGNvbWVzIHRpbWUgdG9cbiAqIGFkZCBkYXRhIHRvIGEgdmlldy5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogaHR0cC5yZXF1ZXN0KCdteS1mcmllbmRzLnR4dCcpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLmZyaWVuZHMgPSByZXNwb25zZS50ZXh0KCkpO1xuICogYGBgXG4gKlxuICogVGhlIFJlc3BvbnNlJ3MgaW50ZXJmYWNlIGlzIGluc3BpcmVkIGJ5IHRoZSBSZXNwb25zZSBjb25zdHJ1Y3RvciBkZWZpbmVkIGluIHRoZSBbRmV0Y2hcbiAqIFNwZWNdKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNyZXNwb25zZS1jbGFzcyksIGJ1dCBpcyBjb25zaWRlcmVkIGEgc3RhdGljIHZhbHVlIHdob3NlIGJvZHlcbiAqIGNhbiBiZSBhY2Nlc3NlZCBtYW55IHRpbWVzLiBUaGVyZSBhcmUgb3RoZXIgZGlmZmVyZW5jZXMgaW4gdGhlIGltcGxlbWVudGF0aW9uLCBidXQgdGhpcyBpcyB0aGVcbiAqIG1vc3Qgc2lnbmlmaWNhbnQuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgUmVzcG9uc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlc3BvbnNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fYm9keSA9IHJlc3BvbnNlT3B0aW9ucy5ib2R5O1xuICAgICAgICBfdGhpcy5zdGF0dXMgPSAvKiogQHR5cGUgez99ICovICgocmVzcG9uc2VPcHRpb25zLnN0YXR1cykpO1xuICAgICAgICBfdGhpcy5vayA9IChfdGhpcy5zdGF0dXMgPj0gMjAwICYmIF90aGlzLnN0YXR1cyA8PSAyOTkpO1xuICAgICAgICBfdGhpcy5zdGF0dXNUZXh0ID0gcmVzcG9uc2VPcHRpb25zLnN0YXR1c1RleHQ7XG4gICAgICAgIF90aGlzLmhlYWRlcnMgPSByZXNwb25zZU9wdGlvbnMuaGVhZGVycztcbiAgICAgICAgX3RoaXMudHlwZSA9IC8qKiBAdHlwZSB7P30gKi8gKChyZXNwb25zZU9wdGlvbnMudHlwZSkpO1xuICAgICAgICBfdGhpcy51cmwgPSAvKiogQHR5cGUgez99ICovICgocmVzcG9uc2VPcHRpb25zLnVybCkpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVzcG9uc2UucHJvdG90eXBlLnRvU3RyaW5nID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlJlc3BvbnNlIHdpdGggc3RhdHVzOiBcIiArIHRoaXMuc3RhdHVzICsgXCIgXCIgKyB0aGlzLnN0YXR1c1RleHQgKyBcIiBmb3IgVVJMOiBcIiArIHRoaXMudXJsO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc3BvbnNlO1xufShCb2R5KSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBfbmV4dFJlcXVlc3RJZCA9IDA7XG52YXIgSlNPTlBfSE9NRSA9ICdfX25nX2pzb25wX18nO1xudmFyIF9qc29ucENvbm5lY3Rpb25zID0gbnVsbDtcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2dldEpzb25wQ29ubmVjdGlvbnMoKSB7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgPyB3aW5kb3cgOiB7fTtcbiAgICBpZiAoX2pzb25wQ29ubmVjdGlvbnMgPT09IG51bGwpIHtcbiAgICAgICAgX2pzb25wQ29ubmVjdGlvbnMgPSB3W0pTT05QX0hPTUVdID0ge307XG4gICAgfVxuICAgIHJldHVybiBfanNvbnBDb25uZWN0aW9ucztcbn1cbnZhciBCcm93c2VySnNvbnAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3Nlckpzb25wKCkge1xuICAgIH1cbiAgICAvLyBDb25zdHJ1Y3QgYSA8c2NyaXB0PiBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBVUkxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQnJvd3Nlckpzb25wLnByb3RvdHlwZS5idWlsZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgbm9kZS5zcmMgPSB1cmw7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLm5leHRSZXF1ZXN0SUQgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiX19yZXFcIiArIF9uZXh0UmVxdWVzdElkKys7IH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQnJvd3Nlckpzb25wLnByb3RvdHlwZS5yZXF1ZXN0Q2FsbGJhY2sgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIEpTT05QX0hPTUUgKyBcIi5cIiArIGlkICsgXCIuZmluaXNoZWRcIjsgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHBhcmFtIHs/fSBjb25uZWN0aW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLmV4cG9zZUNvbm5lY3Rpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGlkXG4gICAgICogQHBhcmFtIHs/fSBjb25uZWN0aW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoaWQsIGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29ubmVjdGlvbnMgPSBfZ2V0SnNvbnBDb25uZWN0aW9ucygpO1xuICAgICAgICBjb25uZWN0aW9uc1tpZF0gPSBjb25uZWN0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgQnJvd3Nlckpzb25wLnByb3RvdHlwZS5yZW1vdmVDb25uZWN0aW9uID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbm5lY3Rpb25zID0gX2dldEpzb25wQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgY29ubmVjdGlvbnNbaWRdID0gbnVsbDtcbiAgICB9O1xuICAgIC8vIEF0dGFjaCB0aGUgPHNjcmlwdD4gZWxlbWVudCB0byB0aGUgRE9NXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLnNlbmQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IG5vZGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChub2RlKSB7IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoLyoqIEB0eXBlIHs/fSAqLyAoKG5vZGUpKSk7IH07XG4gICAgLy8gUmVtb3ZlIDxzY3JpcHQ+IGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBub2RlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBCcm93c2VySnNvbnAucHJvdG90eXBlLmNsZWFudXAgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IG5vZGVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgvKiogQHR5cGUgez99ICovICgobm9kZSkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQnJvd3Nlckpzb25wLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgQnJvd3Nlckpzb25wLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEJyb3dzZXJKc29ucDtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBKU09OUF9FUlJfTk9fQ0FMTEJBQ0sgPSAnSlNPTlAgaW5qZWN0ZWQgc2NyaXB0IGRpZCBub3QgaW52b2tlIGNhbGxiYWNrLic7XG52YXIgSlNPTlBfRVJSX1dST05HX01FVEhPRCA9ICdKU09OUCByZXF1ZXN0cyBtdXN0IHVzZSBHRVQgcmVxdWVzdCBtZXRob2QuJztcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgYW4gaW4tZmxpZ2h0IEpTT05QIHJlcXVlc3QuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgSlNPTlBDb25uZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBmdW5jdGlvbiBKU09OUENvbm5lY3Rpb24ocmVxLCBfZG9tLCBiYXNlUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2RvbSA9IF9kb207XG4gICAgICAgIHRoaXMuYmFzZVJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnM7XG4gICAgICAgIHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXEubWV0aG9kICE9PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihKU09OUF9FUlJfV1JPTkdfTUVUSE9EKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXE7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xuICAgICAgICAgICAgX3RoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuTG9hZGluZztcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlkID0gX3RoaXMuX2lkID0gX2RvbS5uZXh0UmVxdWVzdElEKCk7XG4gICAgICAgICAgICBfZG9tLmV4cG9zZUNvbm5lY3Rpb24oaWQsIF90aGlzKTtcbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgRGFydFxuICAgICAgICAgICAgLy8gdXJsID0gdXJsLnJlcGxhY2UoLz1KU09OUF9DQUxMQkFDSygmfCQpLywgYGdlbmVyYXRlZCBtZXRob2RgKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNhbGxiYWNrID0gX2RvbS5yZXF1ZXN0Q2FsbGJhY2soX3RoaXMuX2lkKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHVybCA9IHJlcS51cmw7XG4gICAgICAgICAgICBpZiAodXJsLmluZGV4T2YoJz1KU09OUF9DQUxMQkFDSyYnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoJz1KU09OUF9DQUxMQkFDSyYnLCBcIj1cIiArIGNhbGxiYWNrICsgXCImXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodXJsLmxhc3RJbmRleE9mKCc9SlNPTlBfQ0FMTEJBQ0snKSA9PT0gdXJsLmxlbmd0aCAtICc9SlNPTlBfQ0FMTEJBQ0snLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtICc9SlNPTlBfQ0FMTEJBQ0snLmxlbmd0aCkgKyAoXCI9XCIgKyBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzY3JpcHQgPSBfdGhpcy5fc2NyaXB0ID0gX2RvbS5idWlsZCh1cmwpO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb25Mb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnJlYWR5U3RhdGUgPT09IFJlYWR5U3RhdGUuQ2FuY2VsbGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgX3RoaXMucmVhZHlTdGF0ZSA9IFJlYWR5U3RhdGUuRG9uZTtcbiAgICAgICAgICAgICAgICBfZG9tLmNsZWFudXAoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZU9wdGlvbnNfMSA9IG5ldyBSZXNwb25zZU9wdGlvbnMoeyBib2R5OiBKU09OUF9FUlJfTk9fQ0FMTEJBQ0ssIHR5cGU6IFJlc3BvbnNlVHlwZS5FcnJvciwgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9wdGlvbnNfMSA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IobmV3IFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9uc18xKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7IGJvZHk6IF90aGlzLl9yZXNwb25zZURhdGEsIHVybDogdXJsIH0pO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5iYXNlUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IF90aGlzLmJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KG5ldyBSZXNwb25zZShyZXNwb25zZU9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLkNhbmNlbGxlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkRvbmU7XG4gICAgICAgICAgICAgICAgX2RvbS5jbGVhbnVwKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7IGJvZHk6IGVycm9yLm1lc3NhZ2UsIHR5cGU6IFJlc3BvbnNlVHlwZS5FcnJvciB9KTtcbiAgICAgICAgICAgICAgICBpZiAoYmFzZVJlc3BvbnNlT3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9wdGlvbnMgPSBiYXNlUmVzcG9uc2VPcHRpb25zLm1lcmdlKHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IobmV3IFJlc3BvbnNlKHJlc3BvbnNlT3B0aW9ucykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgX2RvbS5zZW5kKHNjcmlwdCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlYWR5U3RhdGUgPSBSZWFkeVN0YXRlLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2RvbS5jbGVhbnVwKHNjcmlwdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIEpTT05QIHJlcXVlc3QgY29tcGxldGVzLCB0byBub3RpZnkgdGhlIGFwcGxpY2F0aW9uXG4gICAgICogb2YgdGhlIG5ldyBkYXRhLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBKU09OUCByZXF1ZXN0IGNvbXBsZXRlcywgdG8gbm90aWZ5IHRoZSBhcHBsaWNhdGlvblxuICAgICAqIG9mIHRoZSBuZXcgZGF0YS5cbiAgICAgKiBAcGFyYW0gez89fSBkYXRhXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBKU09OUENvbm5lY3Rpb24ucHJvdG90eXBlLmZpbmlzaGVkID0gLyoqXG4gICAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIEpTT05QIHJlcXVlc3QgY29tcGxldGVzLCB0byBub3RpZnkgdGhlIGFwcGxpY2F0aW9uXG4gICAgICogb2YgdGhlIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7Pz19IGRhdGFcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIERvbid0IGxlYWsgY29ubmVjdGlvbnNcbiAgICAgICAgdGhpcy5fZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kb20ucmVtb3ZlQ29ubmVjdGlvbih0aGlzLl9pZCk7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IFJlYWR5U3RhdGUuQ2FuY2VsbGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9yZXNwb25zZURhdGEgPSBkYXRhO1xuICAgIH07XG4gICAgcmV0dXJuIEpTT05QQ29ubmVjdGlvbjtcbn0oKSk7XG4vKipcbiAqIEEge1xcQGxpbmsgQ29ubmVjdGlvbkJhY2tlbmR9IHRoYXQgdXNlcyB0aGUgSlNPTlAgc3RyYXRlZ3kgb2YgbWFraW5nIHJlcXVlc3RzLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIEpTT05QQmFja2VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSlNPTlBCYWNrZW5kLCBfc3VwZXIpO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBmdW5jdGlvbiBKU09OUEJhY2tlbmQoX2Jyb3dzZXJKU09OUCwgX2Jhc2VSZXNwb25zZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2Jyb3dzZXJKU09OUCA9IF9icm93c2VySlNPTlA7XG4gICAgICAgIF90aGlzLl9iYXNlUmVzcG9uc2VPcHRpb25zID0gX2Jhc2VSZXNwb25zZU9wdGlvbnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXF1ZXN0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBKU09OUEJhY2tlbmQucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgSlNPTlBDb25uZWN0aW9uKHJlcXVlc3QsIHRoaXMuX2Jyb3dzZXJKU09OUCwgdGhpcy5fYmFzZVJlc3BvbnNlT3B0aW9ucyk7XG4gICAgfTtcbiAgICBKU09OUEJhY2tlbmQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBKU09OUEJhY2tlbmQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogQnJvd3Nlckpzb25wLCB9LFxuICAgICAgICB7IHR5cGU6IFJlc3BvbnNlT3B0aW9ucywgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBKU09OUEJhY2tlbmQ7XG59KENvbm5lY3Rpb25CYWNrZW5kKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBYU1NJX1BSRUZJWCA9IC9eXFwpXFxdXFx9Jyw/XFxuLztcbi8qKlxuICogQ3JlYXRlcyBjb25uZWN0aW9ucyB1c2luZyBgWE1MSHR0cFJlcXVlc3RgLiBHaXZlbiBhIGZ1bGx5LXF1YWxpZmllZFxuICogcmVxdWVzdCwgYW4gYFhIUkNvbm5lY3Rpb25gIHdpbGwgaW1tZWRpYXRlbHkgY3JlYXRlIGFuIGBYTUxIdHRwUmVxdWVzdGAgb2JqZWN0IGFuZCBzZW5kIHRoZVxuICogcmVxdWVzdC5cbiAqXG4gKiBUaGlzIGNsYXNzIHdvdWxkIHR5cGljYWxseSBub3QgYmUgY3JlYXRlZCBvciBpbnRlcmFjdGVkIHdpdGggZGlyZWN0bHkgaW5zaWRlIGFwcGxpY2F0aW9ucywgdGhvdWdoXG4gKiB0aGUge1xcQGxpbmsgTW9ja0Nvbm5lY3Rpb259IG1heSBiZSBpbnRlcmFjdGVkIHdpdGggaW4gdGVzdHMuXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgWEhSQ29ubmVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBYSFJDb25uZWN0aW9uKHJlcSwgYnJvd3NlclhIUiwgYmFzZVJlc3BvbnNlT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSByZXE7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gX3hociA9IGJyb3dzZXJYSFIuYnVpbGQoKTtcbiAgICAgICAgICAgIF94aHIub3BlbihSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdLnRvVXBwZXJDYXNlKCksIHJlcS51cmwpO1xuICAgICAgICAgICAgaWYgKHJlcS53aXRoQ3JlZGVudGlhbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF94aHIud2l0aENyZWRlbnRpYWxzID0gcmVxLndpdGhDcmVkZW50aWFscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN0YXR1cyA9IF94aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogX3hoci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYm9keSA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gSFRUUCAyMDQgbWVhbnMgbm8gY29udGVudFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IDIwNCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gUmVzb3VyY2VMb2FkZXIgTGV2ZWwyIHNwZWNcbiAgICAgICAgICAgICAgICAgICAgLy8gKHN1cHBvcnRlZCBieSBJRTEwKVxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gKHR5cGVvZiBfeGhyLnJlc3BvbnNlID09PSAndW5kZWZpbmVkJykgPyBfeGhyLnJlc3BvbnNlVGV4dCA6IF94aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltcGxpY2l0bHkgc3RyaXAgYSBwb3RlbnRpYWwgWFNTSSBwcmVmaXguXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBib2R5LnJlcGxhY2UoWFNTSV9QUkVGSVgsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmaXggc3RhdHVzIGNvZGUgd2hlbiBpdCBpcyAwICgwIHN0YXR1cyBpcyB1bmRvY3VtZW50ZWQpLlxuICAgICAgICAgICAgICAgIC8vIE9jY3VycyB3aGVuIGFjY2Vzc2luZyBmaWxlIHJlc291cmNlcyBvciBvbiBBbmRyb2lkIDQuMSBzdG9jayBicm93c2VyXG4gICAgICAgICAgICAgICAgLy8gd2hpbGUgcmV0cmlldmluZyBmaWxlcyBmcm9tIGFwcGxpY2F0aW9uIGNhY2hlLlxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gYm9keSA/IDIwMCA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGhlYWRlcnMgPSBIZWFkZXJzLmZyb21SZXNwb25zZUhlYWRlclN0cmluZyhfeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgICAgICAgICAgICAgICAvLyBJRSA5IGRvZXMgbm90IHByb3ZpZGUgdGhlIHdheSB0byBnZXQgVVJMIG9mIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdXJsID0gZ2V0UmVzcG9uc2VVUkwoX3hocikgfHwgcmVxLnVybDtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBzdGF0dXNUZXh0ID0gX3hoci5zdGF0dXNUZXh0IHx8ICdPSyc7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzcG9uc2VPcHRpb25zID0gbmV3IFJlc3BvbnNlT3B0aW9ucyh7IGJvZHk6IGJvZHksIHN0YXR1czogc3RhdHVzLCBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LCB1cmw6IHVybCB9KTtcbiAgICAgICAgICAgICAgICBpZiAoYmFzZVJlc3BvbnNlT3B0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5vayA9IGlzU3VjY2VzcyhzdGF0dXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLm5leHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKGdkaTIyOTApOiBkZWZlciBjb21wbGV0ZSBpZiBhcnJheSBidWZmZXIgdW50aWwgZG9uZVxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gZXJyb3IgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZU9wdGlvbnMgPSBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZXJyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBSZXNwb25zZVR5cGUuRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogX3hoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IF94aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoYmFzZVJlc3BvbnNlT3B0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlT3B0aW9ucyA9IGJhc2VSZXNwb25zZU9wdGlvbnMubWVyZ2UocmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihuZXcgUmVzcG9uc2UocmVzcG9uc2VPcHRpb25zKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuc2V0RGV0ZWN0ZWRDb250ZW50VHlwZShyZXEsIF94aHIpO1xuICAgICAgICAgICAgaWYgKHJlcS5oZWFkZXJzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXEuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlcS5oZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcbiAgICAgICAgICAgICAgICByZXEuaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcS5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlcywgbmFtZSkgeyByZXR1cm4gX3hoci5zZXRSZXF1ZXN0SGVhZGVyKC8qKiBAdHlwZSB7P30gKi8gKChuYW1lKSksIHZhbHVlcy5qb2luKCcsJykpOyB9KTtcbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgY29ycmVjdCBidWZmZXIgdHlwZSB0byBzdG9yZSB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgIGlmIChyZXEucmVzcG9uc2VUeXBlICE9IG51bGwgJiYgX3hoci5yZXNwb25zZVR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVxLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29udGVudFR5cGUuQXJyYXlCdWZmZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvbnRlbnRUeXBlLkpzb246XG4gICAgICAgICAgICAgICAgICAgICAgICBfeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29udGVudFR5cGUuVGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF94aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb250ZW50VHlwZS5CbG9iOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3hoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlbGVjdGVkIHJlc3BvbnNlVHlwZSBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3hoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgICAgIF94aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIF94aHIuc2VuZChfdGhpcy5yZXF1ZXN0LmdldEJvZHkoKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF94aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICAgICAgICAgICAgX3hoci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIF94aHIuYWJvcnQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlcVxuICAgICAqIEBwYXJhbSB7P30gX3hoclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgWEhSQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0RGV0ZWN0ZWRDb250ZW50VHlwZSA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gcmVxXG4gICAgICogQHBhcmFtIHs/fSBfeGhyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocmVxIC8qKiBUT0RPIFJlcXVlc3QgKi8sIF94aHIgLyoqIFhNTEh0dHBSZXF1ZXN0ICovKSB7XG4gICAgICAgIC8vIFNraXAgaWYgYSBjdXN0b20gQ29udGVudC1UeXBlIGhlYWRlciBpcyBwcm92aWRlZFxuICAgICAgICBpZiAocmVxLmhlYWRlcnMgIT0gbnVsbCAmJiByZXEuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgdGhlIGRldGVjdGVkIGNvbnRlbnQgdHlwZVxuICAgICAgICBzd2l0Y2ggKHJlcS5jb250ZW50VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5OT05FOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5KU09OOlxuICAgICAgICAgICAgICAgIF94aHIuc2V0UmVxdWVzdEhlYWRlcignY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29udGVudFR5cGUuRk9STTpcbiAgICAgICAgICAgICAgICBfeGhyLnNldFJlcXVlc3RIZWFkZXIoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5URVhUOlxuICAgICAgICAgICAgICAgIF94aHIuc2V0UmVxdWVzdEhlYWRlcignY29udGVudC10eXBlJywgJ3RleHQvcGxhaW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29udGVudFR5cGUuQkxPQjpcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBibG9iID0gcmVxLmJsb2IoKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvYi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIF94aHIuc2V0UmVxdWVzdEhlYWRlcignY29udGVudC10eXBlJywgYmxvYi50eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBYSFJDb25uZWN0aW9uO1xufSgpKTtcbi8qKlxuICogYFhTUkZDb25maWd1cmF0aW9uYCBzZXRzIHVwIENyb3NzIFNpdGUgUmVxdWVzdCBGb3JnZXJ5IChYU1JGKSBwcm90ZWN0aW9uIGZvciB0aGUgYXBwbGljYXRpb25cbiAqIHVzaW5nIGEgY29va2llLiBTZWUgaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9Dcm9zcy1TaXRlX1JlcXVlc3RfRm9yZ2VyeV8oQ1NSRilcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIFhTUkYuXG4gKlxuICogQXBwbGljYXRpb25zIGNhbiBjb25maWd1cmUgY3VzdG9tIGNvb2tpZSBhbmQgaGVhZGVyIG5hbWVzIGJ5IGJpbmRpbmcgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xuICogd2l0aCBkaWZmZXJlbnQgYGNvb2tpZU5hbWVgIGFuZCBgaGVhZGVyTmFtZWAgdmFsdWVzLiBTZWUgdGhlIG1haW4gSFRUUCBkb2N1bWVudGF0aW9uIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIENvb2tpZVhTUkZTdHJhdGVneSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb29raWVYU1JGU3RyYXRlZ3koX2Nvb2tpZU5hbWUsIF9oZWFkZXJOYW1lKSB7XG4gICAgICAgIGlmIChfY29va2llTmFtZSA9PT0gdm9pZCAwKSB7IF9jb29raWVOYW1lID0gJ1hTUkYtVE9LRU4nOyB9XG4gICAgICAgIGlmIChfaGVhZGVyTmFtZSA9PT0gdm9pZCAwKSB7IF9oZWFkZXJOYW1lID0gJ1gtWFNSRi1UT0tFTic7IH1cbiAgICAgICAgdGhpcy5fY29va2llTmFtZSA9IF9jb29raWVOYW1lO1xuICAgICAgICB0aGlzLl9oZWFkZXJOYW1lID0gX2hlYWRlck5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcmVxXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBDb29raWVYU1JGU3RyYXRlZ3kucHJvdG90eXBlLmNvbmZpZ3VyZVJlcXVlc3QgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHJlcVxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB4c3JmVG9rZW4gPSDJtWdldERPTSgpLmdldENvb2tpZSh0aGlzLl9jb29raWVOYW1lKTtcbiAgICAgICAgaWYgKHhzcmZUb2tlbikge1xuICAgICAgICAgICAgcmVxLmhlYWRlcnMuc2V0KHRoaXMuX2hlYWRlck5hbWUsIHhzcmZUb2tlbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb29raWVYU1JGU3RyYXRlZ3k7XG59KCkpO1xuLyoqXG4gKiBDcmVhdGVzIHtcXEBsaW5rIFhIUkNvbm5lY3Rpb259IGluc3RhbmNlcy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdvdWxkIHR5cGljYWxseSBub3QgYmUgdXNlZCBieSBlbmQgdXNlcnMsIGJ1dCBjb3VsZCBiZVxuICogb3ZlcnJpZGRlbiBpZiBhIGRpZmZlcmVudCBiYWNrZW5kIGltcGxlbWVudGF0aW9uIHNob3VsZCBiZSB1c2VkLFxuICogc3VjaCBhcyBpbiBhIG5vZGUgYmFja2VuZC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtIdHRwLCBNeU5vZGVCYWNrZW5kLCBIVFRQX1BST1ZJREVSUywgQmFzZVJlcXVlc3RPcHRpb25zfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICogXFxAQ29tcG9uZW50KHtcbiAqICAgdmlld1Byb3ZpZGVyczogW1xuICogICAgIEhUVFBfUFJPVklERVJTLFxuICogICAgIHtwcm92aWRlOiBIdHRwLCB1c2VGYWN0b3J5OiAoYmFja2VuZCwgb3B0aW9ucykgPT4ge1xuICogICAgICAgcmV0dXJuIG5ldyBIdHRwKGJhY2tlbmQsIG9wdGlvbnMpO1xuICogICAgIH0sIGRlcHM6IFtNeU5vZGVCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdfV1cbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkge1xuICogICAgIGh0dHAucmVxdWVzdCgncGVvcGxlLmpzb24nKS5zdWJzY3JpYmUocmVzID0+IHRoaXMucGVvcGxlID0gcmVzLmpzb24oKSk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgWEhSQmFja2VuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBYSFJCYWNrZW5kKF9icm93c2VyWEhSLCBfYmFzZVJlc3BvbnNlT3B0aW9ucywgX3hzcmZTdHJhdGVneSkge1xuICAgICAgICB0aGlzLl9icm93c2VyWEhSID0gX2Jyb3dzZXJYSFI7XG4gICAgICAgIHRoaXMuX2Jhc2VSZXNwb25zZU9wdGlvbnMgPSBfYmFzZVJlc3BvbnNlT3B0aW9ucztcbiAgICAgICAgdGhpcy5feHNyZlN0cmF0ZWd5ID0gX3hzcmZTdHJhdGVneTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXF1ZXN0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBYSFJCYWNrZW5kLnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gLyoqXG4gICAgICogQHBhcmFtIHs/fSByZXF1ZXN0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICB0aGlzLl94c3JmU3RyYXRlZ3kuY29uZmlndXJlUmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBYSFJDb25uZWN0aW9uKHJlcXVlc3QsIHRoaXMuX2Jyb3dzZXJYSFIsIHRoaXMuX2Jhc2VSZXNwb25zZU9wdGlvbnMpO1xuICAgIH07XG4gICAgWEhSQmFja2VuZC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIFhIUkJhY2tlbmQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogQnJvd3NlclhociwgfSxcbiAgICAgICAgeyB0eXBlOiBSZXNwb25zZU9wdGlvbnMsIH0sXG4gICAgICAgIHsgdHlwZTogWFNSRlN0cmF0ZWd5LCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIFhIUkJhY2tlbmQ7XG59KCkpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIENyZWF0ZXMgYSByZXF1ZXN0IG9wdGlvbnMgb2JqZWN0IHRvIGJlIG9wdGlvbmFsbHkgcHJvdmlkZWQgd2hlbiBpbnN0YW50aWF0aW5nIGFcbiAqIHtcXEBsaW5rIFJlcXVlc3R9LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgYmFzZWQgb24gdGhlIGBSZXF1ZXN0SW5pdGAgZGVzY3JpcHRpb24gaW4gdGhlIFtGZXRjaFxuICogU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3JlcXVlc3Rpbml0KS5cbiAqXG4gKiBBbGwgdmFsdWVzIGFyZSBudWxsIGJ5IGRlZmF1bHQuIFR5cGljYWwgZGVmYXVsdHMgY2FuIGJlIGZvdW5kIGluIHRoZSB7XFxAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9XG4gKiBjbGFzcywgd2hpY2ggc3ViLWNsYXNzZXMgYFJlcXVlc3RPcHRpb25zYC5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge1JlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICpcbiAqIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICogICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCxcbiAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICogfSk7XG4gKiBjb25zdCByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zKTtcbiAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAqIGBgYFxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBcXEBhbmd1bGFyL2NvbW1vbi9odHRwIGluc3RlYWRcbiAqL1xudmFyIFJlcXVlc3RPcHRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE8oRHptaXRyeSk6IHJlbW92ZSBzZWFyY2ggd2hlbiB0aGlzLnNlYXJjaCBpcyByZW1vdmVkXG4gICAgZnVuY3Rpb24gUmVxdWVzdE9wdGlvbnMob3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgICB2YXIgbWV0aG9kID0gb3B0cy5tZXRob2QsIGhlYWRlcnMgPSBvcHRzLmhlYWRlcnMsIGJvZHkgPSBvcHRzLmJvZHksIHVybCA9IG9wdHMudXJsLCBzZWFyY2ggPSBvcHRzLnNlYXJjaCwgcGFyYW1zID0gb3B0cy5wYXJhbXMsIHdpdGhDcmVkZW50aWFscyA9IG9wdHMud2l0aENyZWRlbnRpYWxzLCByZXNwb25zZVR5cGUgPSBvcHRzLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2QgIT0gbnVsbCA/IG5vcm1hbGl6ZU1ldGhvZE5hbWUobWV0aG9kKSA6IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnMgIT0gbnVsbCA/IGhlYWRlcnMgOiBudWxsO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5ICE9IG51bGwgPyBib2R5IDogbnVsbDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmwgIT0gbnVsbCA/IHVybCA6IG51bGw7XG4gICAgICAgIHRoaXMucGFyYW1zID0gdGhpcy5fbWVyZ2VTZWFyY2hQYXJhbXMocGFyYW1zIHx8IHNlYXJjaCk7XG4gICAgICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzICE9IG51bGwgPyB3aXRoQ3JlZGVudGlhbHMgOiBudWxsO1xuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSAhPSBudWxsID8gcmVzcG9uc2VUeXBlIDogbnVsbDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlcXVlc3RPcHRpb25zLnByb3RvdHlwZSwgXCJzZWFyY2hcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgZnJvbSA0LjAuMC4gVXNlIHBhcmFtcyBpbnN0ZWFkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiAvKipcbiAgICAgICAgICogQGRlcHJlY2F0ZWQgZnJvbSA0LjAuMC4gVXNlIHBhcmFtcyBpbnN0ZWFkLlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5wYXJhbXM7IH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBmcm9tIDQuMC4wLiBVc2UgcGFyYW1zIGluc3RlYWQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IC8qKlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBmcm9tIDQuMC4wLiBVc2UgcGFyYW1zIGluc3RlYWQuXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyYW1zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAocGFyYW1zKSB7IHRoaXMucGFyYW1zID0gcGFyYW1zOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgYFJlcXVlc3RPcHRpb25zYCBpbnN0YW5jZSwgdXNpbmcgdGhlIG9wdGlvbmFsIGlucHV0IGFzIHZhbHVlcyB0byBvdmVycmlkZVxuICAgICAqIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZXRob2Qgd2lsbCBub3QgY2hhbmdlIHRoZSB2YWx1ZXMgb2YgdGhlIGluc3RhbmNlIG9uIHdoaWNoIGl0IGlzIGJlaW5nXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGBoZWFkZXJzYCBhbmQgYHNlYXJjaGAgd2lsbCBvdmVycmlkZSBleGlzdGluZyB2YWx1ZXMgY29tcGxldGVseSBpZiBwcmVzZW50IGluXG4gICAgICogdGhlIGBvcHRpb25zYCBvYmplY3QuIElmIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgbWVyZ2VkLCBpdCBzaG91bGQgYmUgZG9uZSBwcmlvciB0byBjYWxsaW5nXG4gICAgICogYG1lcmdlYCBvbiB0aGUgYFJlcXVlc3RPcHRpb25zYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpbXBvcnQge1JlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdAYW5ndWxhci9odHRwJztcbiAgICAgKlxuICAgICAqIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAqICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgICAgKiB9KTtcbiAgICAgKiBjb25zdCByZXEgPSBuZXcgUmVxdWVzdChvcHRpb25zLm1lcmdlKHtcbiAgICAgKiAgIHVybDogJ2h0dHBzOi8vZ29vZ2xlLmNvbSdcbiAgICAgKiB9KSk7XG4gICAgICogY29uc29sZS5sb2coJ3JlcS5tZXRob2Q6JywgUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kXSk7IC8vIFBvc3RcbiAgICAgKiBjb25zb2xlLmxvZygnb3B0aW9ucy51cmw6Jywgb3B0aW9ucy51cmwpOyAvLyBudWxsXG4gICAgICogY29uc29sZS5sb2coJ3JlcS51cmw6JywgcmVxLnVybCk7IC8vIGh0dHBzOi8vZ29vZ2xlLmNvbVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBgUmVxdWVzdE9wdGlvbnNgIGluc3RhbmNlLCB1c2luZyB0aGUgb3B0aW9uYWwgaW5wdXQgYXMgdmFsdWVzIHRvIG92ZXJyaWRlXG4gICAgICogZXhpc3RpbmcgdmFsdWVzLiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjaGFuZ2UgdGhlIHZhbHVlcyBvZiB0aGUgaW5zdGFuY2Ugb24gd2hpY2ggaXQgaXMgYmVpbmdcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgYGhlYWRlcnNgIGFuZCBgc2VhcmNoYCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIHZhbHVlcyBjb21wbGV0ZWx5IGlmIHByZXNlbnQgaW5cbiAgICAgKiB0aGUgYG9wdGlvbnNgIG9iamVjdC4gSWYgdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBtZXJnZWQsIGl0IHNob3VsZCBiZSBkb25lIHByaW9yIHRvIGNhbGxpbmdcbiAgICAgKiBgbWVyZ2VgIG9uIHRoZSBgUmVxdWVzdE9wdGlvbnNgIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7UmVxdWVzdE9wdGlvbnMsIFJlcXVlc3QsIFJlcXVlc3RNZXRob2R9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gICAgICpcbiAgICAgKiBjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtcbiAgICAgKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0XG4gICAgICogfSk7XG4gICAgICogY29uc3QgcmVxID0gbmV3IFJlcXVlc3Qob3B0aW9ucy5tZXJnZSh7XG4gICAgICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gICAgICogfSkpO1xuICAgICAqIGNvbnNvbGUubG9nKCdyZXEubWV0aG9kOicsIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZF0pOyAvLyBQb3N0XG4gICAgICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICAgICAqIGNvbnNvbGUubG9nKCdyZXEudXJsOicsIHJlcS51cmwpOyAvLyBodHRwczovL2dvb2dsZS5jb21cbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXF1ZXN0T3B0aW9ucy5wcm90b3R5cGUubWVyZ2UgPSAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGUgYFJlcXVlc3RPcHRpb25zYCBpbnN0YW5jZSwgdXNpbmcgdGhlIG9wdGlvbmFsIGlucHV0IGFzIHZhbHVlcyB0byBvdmVycmlkZVxuICAgICAqIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZXRob2Qgd2lsbCBub3QgY2hhbmdlIHRoZSB2YWx1ZXMgb2YgdGhlIGluc3RhbmNlIG9uIHdoaWNoIGl0IGlzIGJlaW5nXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGBoZWFkZXJzYCBhbmQgYHNlYXJjaGAgd2lsbCBvdmVycmlkZSBleGlzdGluZyB2YWx1ZXMgY29tcGxldGVseSBpZiBwcmVzZW50IGluXG4gICAgICogdGhlIGBvcHRpb25zYCBvYmplY3QuIElmIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgbWVyZ2VkLCBpdCBzaG91bGQgYmUgZG9uZSBwcmlvciB0byBjYWxsaW5nXG4gICAgICogYG1lcmdlYCBvbiB0aGUgYFJlcXVlc3RPcHRpb25zYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBpbXBvcnQge1JlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICAgICAqXG4gICAgICogY29uc3Qgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICogICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdFxuICAgICAqIH0pO1xuICAgICAqIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMubWVyZ2Uoe1xuICAgICAqICAgdXJsOiAnaHR0cHM6Ly9nb29nbGUuY29tJ1xuICAgICAqIH0pKTtcbiAgICAgKiBjb25zb2xlLmxvZygncmVxLm1ldGhvZDonLCBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdKTsgLy8gUG9zdFxuICAgICAqIGNvbnNvbGUubG9nKCdvcHRpb25zLnVybDonLCBvcHRpb25zLnVybCk7IC8vIG51bGxcbiAgICAgKiBjb25zb2xlLmxvZygncmVxLnVybDonLCByZXEudXJsKTsgLy8gaHR0cHM6Ly9nb29nbGUuY29tXG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXRob2QgIT0gbnVsbCA/IG9wdGlvbnMubWV0aG9kIDogdGhpcy5tZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyAhPSBudWxsID8gb3B0aW9ucy5oZWFkZXJzIDogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIGJvZHk6IG9wdGlvbnMgJiYgb3B0aW9ucy5ib2R5ICE9IG51bGwgPyBvcHRpb25zLmJvZHkgOiB0aGlzLmJvZHksXG4gICAgICAgICAgICB1cmw6IG9wdGlvbnMgJiYgb3B0aW9ucy51cmwgIT0gbnVsbCA/IG9wdGlvbnMudXJsIDogdGhpcy51cmwsXG4gICAgICAgICAgICBwYXJhbXM6IG9wdGlvbnMgJiYgdGhpcy5fbWVyZ2VTZWFyY2hQYXJhbXMob3B0aW9ucy5wYXJhbXMgfHwgb3B0aW9ucy5zZWFyY2gpLFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBvcHRpb25zICYmIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzICE9IG51bGwgPyBvcHRpb25zLndpdGhDcmVkZW50aWFscyA6XG4gICAgICAgICAgICAgICAgdGhpcy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IG9wdGlvbnMgJiYgb3B0aW9ucy5yZXNwb25zZVR5cGUgIT0gbnVsbCA/IG9wdGlvbnMucmVzcG9uc2VUeXBlIDpcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IHBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVxdWVzdE9wdGlvbnMucHJvdG90eXBlLl9tZXJnZVNlYXJjaFBhcmFtcyA9IC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IHBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBpZiAoIXBhcmFtcylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcy5jbG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2VQYXJhbXMocGFyYW1zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IG9ialBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgUmVxdWVzdE9wdGlvbnMucHJvdG90eXBlLl9wYXJzZVBhcmFtcyA9IC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IG9ialBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKG9ialBhcmFtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob2JqUGFyYW1zID09PSB2b2lkIDApIHsgb2JqUGFyYW1zID0ge307IH1cbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBPYmplY3Qua2V5cyhvYmpQYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsdWUgPSBvYmpQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIF90aGlzLl9hcHBlbmRQYXJhbShrZXksIGl0ZW0sIHBhcmFtcyk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2FwcGVuZFBhcmFtKGtleSwgdmFsdWUsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBrZXlcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHBhcmFtIHs/fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlcXVlc3RPcHRpb25zLnByb3RvdHlwZS5fYXBwZW5kUGFyYW0gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGtleVxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcGFyYW0gez99IHBhcmFtc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGtleSwgdmFsdWUsIHBhcmFtcykge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXF1ZXN0T3B0aW9ucztcbn0oKSk7XG4vKipcbiAqIFN1YmNsYXNzIG9mIHtcXEBsaW5rIFJlcXVlc3RPcHRpb25zfSwgd2l0aCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBEZWZhdWx0IHZhbHVlczpcbiAqICAqIG1ldGhvZDoge1xcQGxpbmsgUmVxdWVzdE1ldGhvZCBSZXF1ZXN0TWV0aG9kLkdldH1cbiAqICAqIGhlYWRlcnM6IGVtcHR5IHtcXEBsaW5rIEhlYWRlcnN9IG9iamVjdFxuICpcbiAqIFRoaXMgY2xhc3MgY291bGQgYmUgZXh0ZW5kZWQgYW5kIGJvdW5kIHRvIHRoZSB7XFxAbGluayBSZXF1ZXN0T3B0aW9uc30gY2xhc3NcbiAqIHdoZW4gY29uZmlndXJpbmcgYW4ge1xcQGxpbmsgSW5qZWN0b3J9LCBpbiBvcmRlciB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zXG4gKiB1c2VkIGJ5IHtcXEBsaW5rIEh0dHB9IHRvIGNyZWF0ZSBhbmQgc2VuZCB7XFxAbGluayBSZXF1ZXN0IFJlcXVlc3RzfS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQge0Jhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKlxuICogY2xhc3MgTXlPcHRpb25zIGV4dGVuZHMgQmFzZVJlcXVlc3RPcHRpb25zIHtcbiAqICAgc2VhcmNoOiBzdHJpbmcgPSAnY29yZVRlYW09dHJ1ZSc7XG4gKiB9XG4gKlxuICoge3Byb3ZpZGU6IFJlcXVlc3RPcHRpb25zLCB1c2VDbGFzczogTXlPcHRpb25zfTtcbiAqIGBgYFxuICpcbiAqIFRoZSBvcHRpb25zIGNvdWxkIGFsc28gYmUgZXh0ZW5kZWQgd2hlbiBtYW51YWxseSBjcmVhdGluZyBhIHtcXEBsaW5rIFJlcXVlc3R9XG4gKiBvYmplY3QuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0Jhc2VSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdCwgUmVxdWVzdE1ldGhvZH0gZnJvbSAnXFxAYW5ndWxhci9odHRwJztcbiAqXG4gKiBjb25zdCBvcHRpb25zID0gbmV3IEJhc2VSZXF1ZXN0T3B0aW9ucygpO1xuICogY29uc3QgcmVxID0gbmV3IFJlcXVlc3Qob3B0aW9ucy5tZXJnZSh7XG4gKiAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5Qb3N0LFxuICogICB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gKiB9KSk7XG4gKiBjb25zb2xlLmxvZygncmVxLm1ldGhvZDonLCBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2RdKTsgLy8gUG9zdFxuICogY29uc29sZS5sb2coJ29wdGlvbnMudXJsOicsIG9wdGlvbnMudXJsKTsgLy8gbnVsbFxuICogY29uc29sZS5sb2coJ3JlcS51cmw6JywgcmVxLnVybCk7IC8vIGh0dHBzOi8vZ29vZ2xlLmNvbVxuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgQmFzZVJlcXVlc3RPcHRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYXNlUmVxdWVzdE9wdGlvbnMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFzZVJlcXVlc3RPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgeyBtZXRob2Q6IFJlcXVlc3RNZXRob2QuR2V0LCBoZWFkZXJzOiBuZXcgSGVhZGVycygpIH0pIHx8IHRoaXM7XG4gICAgfVxuICAgIEJhc2VSZXF1ZXN0T3B0aW9ucy5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEJhc2VSZXF1ZXN0T3B0aW9ucy5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBCYXNlUmVxdWVzdE9wdGlvbnM7XG59KFJlcXVlc3RPcHRpb25zKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBgUmVxdWVzdGAgaW5zdGFuY2VzIGZyb20gcHJvdmlkZWQgdmFsdWVzLlxuICpcbiAqIFRoZSBSZXF1ZXN0J3MgaW50ZXJmYWNlIGlzIGluc3BpcmVkIGJ5IHRoZSBSZXF1ZXN0IGNvbnN0cnVjdG9yIGRlZmluZWQgaW4gdGhlIFtGZXRjaFxuICogU3BlY10oaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI3JlcXVlc3QtY2xhc3MpLFxuICogYnV0IGlzIGNvbnNpZGVyZWQgYSBzdGF0aWMgdmFsdWUgd2hvc2UgYm9keSBjYW4gYmUgYWNjZXNzZWQgbWFueSB0aW1lcy4gVGhlcmUgYXJlIG90aGVyXG4gKiBkaWZmZXJlbmNlcyBpbiB0aGUgaW1wbGVtZW50YXRpb24sIGJ1dCB0aGlzIGlzIHRoZSBtb3N0IHNpZ25pZmljYW50LlxuICpcbiAqIGBSZXF1ZXN0YCBpbnN0YW5jZXMgYXJlIHR5cGljYWxseSBjcmVhdGVkIGJ5IGhpZ2hlci1sZXZlbCBjbGFzc2VzLCBsaWtlIHtcXEBsaW5rIEh0dHB9IGFuZFxuICoge1xcQGxpbmsgSnNvbnB9LCBidXQgaXQgbWF5IG9jY2FzaW9uYWxseSBiZSB1c2VmdWwgdG8gZXhwbGljaXRseSBjcmVhdGUgYFJlcXVlc3RgIGluc3RhbmNlcy5cbiAqIE9uZSBzdWNoIGV4YW1wbGUgaXMgd2hlbiBjcmVhdGluZyBzZXJ2aWNlcyB0aGF0IHdyYXAgaGlnaGVyLWxldmVsIHNlcnZpY2VzLCBsaWtlIHtcXEBsaW5rIEh0dHB9LFxuICogd2hlcmUgaXQgbWF5IGJlIHVzZWZ1bCB0byBnZW5lcmF0ZSBhIGBSZXF1ZXN0YCB3aXRoIGFyYml0cmFyeSBoZWFkZXJzIGFuZCBzZWFyY2ggcGFyYW1zLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ1xcQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXF1ZXN0LCBSZXF1ZXN0TWV0aG9kfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAnO1xuICpcbiAqIFxcQEluamVjdGFibGUoKVxuICogY2xhc3MgQXV0b0F1dGhlbnRpY2F0b3Ige1xuICogICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7fVxuICogICByZXF1ZXN0KHVybDpzdHJpbmcpIHtcbiAqICAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobmV3IFJlcXVlc3Qoe1xuICogICAgICAgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkdldCxcbiAqICAgICAgIHVybDogdXJsLFxuICogICAgICAgc2VhcmNoOiAncGFzc3dvcmQ9MTIzJ1xuICogICAgIH0pKTtcbiAqICAgfVxuICogfVxuICpcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW0hUVFBfUFJPVklERVJTLCBBdXRvQXV0aGVudGljYXRvcl0pO1xuICogdmFyIGF1dGhlbnRpY2F0b3IgPSBpbmplY3Rvci5nZXQoQXV0b0F1dGhlbnRpY2F0b3IpO1xuICogYXV0aGVudGljYXRvci5yZXF1ZXN0KCdwZW9wbGUuanNvbicpLnN1YnNjcmliZShyZXMgPT4ge1xuICogICAvL1VSTCBzaG91bGQgaGF2ZSBpbmNsdWRlZCAnP3Bhc3N3b3JkPTEyMydcbiAqICAgY29uc29sZS5sb2coJ3Blb3BsZScsIHJlcy5qc29uKCkpO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBSZXF1ZXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXF1ZXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlcXVlc3QocmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgLy8gVE9ETzogYXNzZXJ0IHRoYXQgdXJsIGlzIHByZXNlbnRcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdXJsID0gcmVxdWVzdE9wdGlvbnMudXJsO1xuICAgICAgICBfdGhpcy51cmwgPSAvKiogQHR5cGUgez99ICovICgocmVxdWVzdE9wdGlvbnMudXJsKSk7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBhcmFtc0FyZyA9IHJlcXVlc3RPcHRpb25zLnBhcmFtcyB8fCByZXF1ZXN0T3B0aW9ucy5zZWFyY2g7XG4gICAgICAgIGlmIChwYXJhbXNBcmcpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHBhcmFtcyA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zQXJnID09PSAnb2JqZWN0JyAmJiAhKHBhcmFtc0FyZyBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB1cmxFbmNvZGVQYXJhbXMocGFyYW1zQXJnKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zQXJnLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcmVmaXggPSAnPyc7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnVybC5pbmRleE9mKCc/JykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ID0gKF90aGlzLnVybFtfdGhpcy51cmwubGVuZ3RoIC0gMV0gPT0gJyYnKSA/ICcnIDogJyYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBqdXN0IGRlbGV0ZSBzZWFyY2gtcXVlcnktbG9va2luZyBzdHJpbmcgaW4gdXJsP1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGp1c3QgZGVsZXRlIHNlYXJjaC1xdWVyeS1sb29raW5nIHN0cmluZyBpbiB1cmw/XG4gICAgICAgICAgICAgICAgX3RoaXMudXJsID0gdXJsICsgcHJlZml4ICsgcGFyYW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9ib2R5ID0gcmVxdWVzdE9wdGlvbnMuYm9keTtcbiAgICAgICAgX3RoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kTmFtZSgvKiogQHR5cGUgez99ICovICgocmVxdWVzdE9wdGlvbnMubWV0aG9kKSkpO1xuICAgICAgICAvLyBUT0RPKGplZmZiY3Jvc3MpOiBpbXBsZW1lbnQgYmVoYXZpb3JcbiAgICAgICAgLy8gRGVmYXVsdHMgdG8gJ29taXQnLCBjb25zaXN0ZW50IHdpdGggYnJvd3NlclxuICAgICAgICAvLyBUT0RPKGplZmZiY3Jvc3MpOiBpbXBsZW1lbnQgYmVoYXZpb3JcbiAgICAgICAgLy8gRGVmYXVsdHMgdG8gJ29taXQnLCBjb25zaXN0ZW50IHdpdGggYnJvd3NlclxuICAgICAgICBfdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMocmVxdWVzdE9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIF90aGlzLmNvbnRlbnRUeXBlID0gX3RoaXMuZGV0ZWN0Q29udGVudFR5cGUoKTtcbiAgICAgICAgX3RoaXMud2l0aENyZWRlbnRpYWxzID0gLyoqIEB0eXBlIHs/fSAqLyAoKHJlcXVlc3RPcHRpb25zLndpdGhDcmVkZW50aWFscykpO1xuICAgICAgICBfdGhpcy5yZXNwb25zZVR5cGUgPSAvKiogQHR5cGUgez99ICovICgocmVxdWVzdE9wdGlvbnMucmVzcG9uc2VUeXBlKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udGVudCB0eXBlIGVudW0gYmFzZWQgb24gaGVhZGVyIG9wdGlvbnMuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udGVudCB0eXBlIGVudW0gYmFzZWQgb24gaGVhZGVyIG9wdGlvbnMuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5kZXRlY3RDb250ZW50VHlwZSA9IC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgdHlwZSBlbnVtIGJhc2VkIG9uIGhlYWRlciBvcHRpb25zLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuSlNPTjtcbiAgICAgICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLkZPUk07XG4gICAgICAgICAgICBjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuRk9STV9EQVRBO1xuICAgICAgICAgICAgY2FzZSAndGV4dC9wbGFpbic6XG4gICAgICAgICAgICBjYXNlICd0ZXh0L2h0bWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5URVhUO1xuICAgICAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYm9keSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyJDEgPyBDb250ZW50VHlwZS5BUlJBWV9CVUZGRVIgOiBDb250ZW50VHlwZS5CTE9CO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZXRlY3RDb250ZW50VHlwZUZyb21Cb2R5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgdHlwZSBvZiByZXF1ZXN0J3MgYm9keSBiYXNlZCBvbiBpdHMgdHlwZS5cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IHR5cGUgb2YgcmVxdWVzdCdzIGJvZHkgYmFzZWQgb24gaXRzIHR5cGUuXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5kZXRlY3RDb250ZW50VHlwZUZyb21Cb2R5ID0gLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udGVudCB0eXBlIG9mIHJlcXVlc3QncyBib2R5IGJhc2VkIG9uIGl0cyB0eXBlLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29udGVudFR5cGUuRk9STTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ib2R5IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5GT1JNX0RBVEE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fYm9keSBpbnN0YW5jZW9mIEJsb2IkMSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLkJMT0I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fYm9keSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5BUlJBWV9CVUZGRVI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fYm9keSAmJiB0eXBlb2YgdGhpcy5fYm9keSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250ZW50VHlwZS5KU09OO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRlbnRUeXBlLlRFWFQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlcXVlc3QncyBib2R5IGFjY29yZGluZyB0byBpdHMgdHlwZS4gSWYgYm9keSBpcyB1bmRlZmluZWQsIHJldHVyblxuICAgICAqIG51bGwuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVxdWVzdCdzIGJvZHkgYWNjb3JkaW5nIHRvIGl0cyB0eXBlLiBJZiBib2R5IGlzIHVuZGVmaW5lZCwgcmV0dXJuXG4gICAgICogbnVsbC5cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFJlcXVlc3QucHJvdG90eXBlLmdldEJvZHkgPSAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZXF1ZXN0J3MgYm9keSBhY2NvcmRpbmcgdG8gaXRzIHR5cGUuIElmIGJvZHkgaXMgdW5kZWZpbmVkLCByZXR1cm5cbiAgICAgKiBudWxsLlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY29udGVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ29udGVudFR5cGUuSlNPTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCk7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLkZPUk06XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5GT1JNX0RBVEE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JvZHk7XG4gICAgICAgICAgICBjYXNlIENvbnRlbnRUeXBlLlRFWFQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpO1xuICAgICAgICAgICAgY2FzZSBDb250ZW50VHlwZS5CTE9COlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKTtcbiAgICAgICAgICAgIGNhc2UgQ29udGVudFR5cGUuQVJSQVlfQlVGRkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUmVxdWVzdDtcbn0oQm9keSkpO1xuLyoqXG4gKiBAcGFyYW0gez99IHBhcmFtc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gdXJsRW5jb2RlUGFyYW1zKHBhcmFtcykge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBlbGVtZW50LnRvU3RyaW5nKCkpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbnZhciB3ID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyA/IHdpbmRvdyA6IG5vb3A7XG52YXIgRm9ybURhdGEgPSAoLyoqIEB0eXBlIHs/fSAqLyAodyAvKiogVE9ETyAjOTEwMCAqLykgLyoqIFRPRE8gIzkxMDAgKi8pWydGb3JtRGF0YSddIHx8IG5vb3A7XG52YXIgQmxvYiQxID0gKC8qKiBAdHlwZSB7P30gKi8gKHcgLyoqIFRPRE8gIzkxMDAgKi8pIC8qKiBUT0RPICM5MTAwICovKVsnQmxvYiddIHx8IG5vb3A7XG52YXIgQXJyYXlCdWZmZXIkMSA9ICgvKiogQHR5cGUgez99ICovICh3IC8qKiBUT0RPICM5MTAwICovKSAvKiogVE9ETyAjOTEwMCAqLylbJ0FycmF5QnVmZmVyJ10gfHwgbm9vcDtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAcGFyYW0gez99IGJhY2tlbmRcbiAqIEBwYXJhbSB7P30gcmVxdWVzdFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaHR0cFJlcXVlc3QoYmFja2VuZCwgcmVxdWVzdCkge1xuICAgIHJldHVybiBiYWNrZW5kLmNyZWF0ZUNvbm5lY3Rpb24ocmVxdWVzdCkucmVzcG9uc2U7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gZGVmYXVsdE9wdHNcbiAqIEBwYXJhbSB7P30gcHJvdmlkZWRPcHRzXG4gKiBAcGFyYW0gez99IG1ldGhvZFxuICogQHBhcmFtIHs/fSB1cmxcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0T3B0cywgcHJvdmlkZWRPcHRzLCBtZXRob2QsIHVybCkge1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG5ld09wdGlvbnMgPSBkZWZhdWx0T3B0cztcbiAgICBpZiAocHJvdmlkZWRPcHRzKSB7XG4gICAgICAgIC8vIEhhY2sgc28gRGFydCBjYW4gdXNlZCBuYW1lZCBwYXJhbWV0ZXJzXG4gICAgICAgIHJldHVybiAvKiogQHR5cGUgez99ICovIChuZXdPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICAgICAgICBtZXRob2Q6IHByb3ZpZGVkT3B0cy5tZXRob2QgfHwgbWV0aG9kLFxuICAgICAgICAgICAgdXJsOiBwcm92aWRlZE9wdHMudXJsIHx8IHVybCxcbiAgICAgICAgICAgIHNlYXJjaDogcHJvdmlkZWRPcHRzLnNlYXJjaCxcbiAgICAgICAgICAgIHBhcmFtczogcHJvdmlkZWRPcHRzLnBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHByb3ZpZGVkT3B0cy5oZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogcHJvdmlkZWRPcHRzLmJvZHksXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHByb3ZpZGVkT3B0cy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IHByb3ZpZGVkT3B0cy5yZXNwb25zZVR5cGVcbiAgICAgICAgfSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8gKG5ld09wdGlvbnMubWVyZ2UobmV3IFJlcXVlc3RPcHRpb25zKHsgbWV0aG9kOiBtZXRob2QsIHVybDogdXJsIH0pKSk7XG59XG4vKipcbiAqIFBlcmZvcm1zIGh0dHAgcmVxdWVzdHMgdXNpbmcgYFhNTEh0dHBSZXF1ZXN0YCBhcyB0aGUgZGVmYXVsdCBiYWNrZW5kLlxuICpcbiAqIGBIdHRwYCBpcyBhdmFpbGFibGUgYXMgYW4gaW5qZWN0YWJsZSBjbGFzcywgd2l0aCBtZXRob2RzIHRvIHBlcmZvcm0gaHR0cCByZXF1ZXN0cy4gQ2FsbGluZ1xuICogYHJlcXVlc3RgIHJldHVybnMgYW4gYE9ic2VydmFibGVgIHdoaWNoIHdpbGwgZW1pdCBhIHNpbmdsZSB7XFxAbGluayBSZXNwb25zZX0gd2hlbiBhXG4gKiByZXNwb25zZSBpcyByZWNlaXZlZC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7SHR0cCwgSFRUUF9QUk9WSURFUlN9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKiBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbiAqIFxcQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnaHR0cC1hcHAnLFxuICogICB2aWV3UHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlNdLFxuICogICB0ZW1wbGF0ZVVybDogJ3Blb3BsZS5odG1sJ1xuICogfSlcbiAqIGNsYXNzIFBlb3BsZUNvbXBvbmVudCB7XG4gKiAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcbiAqICAgICBodHRwLmdldCgncGVvcGxlLmpzb24nKVxuICogICAgICAgLy8gQ2FsbCBtYXAgb24gdGhlIHJlc3BvbnNlIG9ic2VydmFibGUgdG8gZ2V0IHRoZSBwYXJzZWQgcGVvcGxlIG9iamVjdFxuICogICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAqICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgb2JzZXJ2YWJsZSB0byBnZXQgdGhlIHBhcnNlZCBwZW9wbGUgb2JqZWN0IGFuZCBhdHRhY2ggaXQgdG8gdGhlXG4gKiAgICAgICAvLyBjb21wb25lbnRcbiAqICAgICAgIC5zdWJzY3JpYmUocGVvcGxlID0+IHRoaXMucGVvcGxlID0gcGVvcGxlKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgXG4gKiBodHRwLmdldCgncGVvcGxlLmpzb24nKS5zdWJzY3JpYmUoKHJlczpSZXNwb25zZSkgPT4gdGhpcy5wZW9wbGUgPSByZXMuanNvbigpKTtcbiAqIGBgYFxuICpcbiAqIFRoZSBkZWZhdWx0IGNvbnN0cnVjdCB1c2VkIHRvIHBlcmZvcm0gcmVxdWVzdHMsIGBYTUxIdHRwUmVxdWVzdGAsIGlzIGFic3RyYWN0ZWQgYXMgYSBcIkJhY2tlbmRcIiAoXG4gKiB7XFxAbGluayBYSFJCYWNrZW5kfSBpbiB0aGlzIGNhc2UpLCB3aGljaCBjb3VsZCBiZSBtb2NrZWQgd2l0aCBkZXBlbmRlbmN5IGluamVjdGlvbiBieSByZXBsYWNpbmdcbiAqIHRoZSB7XFxAbGluayBYSFJCYWNrZW5kfSBwcm92aWRlciwgYXMgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtCYXNlUmVxdWVzdE9wdGlvbnMsIEh0dHB9IGZyb20gJ1xcQGFuZ3VsYXIvaHR0cCc7XG4gKiBpbXBvcnQge01vY2tCYWNrZW5kfSBmcm9tICdcXEBhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG4gKiB2YXIgaW5qZWN0b3IgPSBJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcbiAqICAgQmFzZVJlcXVlc3RPcHRpb25zLFxuICogICBNb2NrQmFja2VuZCxcbiAqICAge3Byb3ZpZGU6IEh0dHAsIHVzZUZhY3Rvcnk6XG4gKiAgICAgICBmdW5jdGlvbihiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucykge1xuICogICAgICAgICByZXR1cm4gbmV3IEh0dHAoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpO1xuICogICAgICAgfSxcbiAqICAgICAgIGRlcHM6IFtNb2NrQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zXX1cbiAqIF0pO1xuICogdmFyIGh0dHAgPSBpbmplY3Rvci5nZXQoSHR0cCk7XG4gKiBodHRwLmdldCgncmVxdWVzdC1mcm9tLW1vY2stYmFja2VuZC5qc29uJykuc3Vic2NyaWJlKChyZXM6UmVzcG9uc2UpID0+IGRvU29tZXRoaW5nKHJlcykpO1xuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWQgdXNlIFxcQGFuZ3VsYXIvY29tbW9uL2h0dHAgaW5zdGVhZFxuICovXG52YXIgSHR0cCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwKF9iYWNrZW5kLCBfZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fYmFja2VuZCA9IF9iYWNrZW5kO1xuICAgICAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IF9kZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW55IHR5cGUgb2YgaHR0cCByZXF1ZXN0LiBGaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCwgYW5kIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3JcbiAgICAgKiBhIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZS4gSWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgdXJsLCBhbiBvcHRpb25hbCB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9XG4gICAgICogb2JqZWN0IGNhbiBiZSBwcm92aWRlZCBhcyB0aGUgMm5kIGFyZ3VtZW50LiBUaGUgb3B0aW9ucyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGUgdmFsdWVzXG4gICAgICogb2Yge0BsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc30gYmVmb3JlIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW55IHR5cGUgb2YgaHR0cCByZXF1ZXN0LiBGaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCwgYW5kIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3JcbiAgICAgKiBhIHtcXEBsaW5rIFJlcXVlc3R9IGluc3RhbmNlLiBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSB1cmwsIGFuIG9wdGlvbmFsIHtcXEBsaW5rIFJlcXVlc3RPcHRpb25zfVxuICAgICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgICAqIG9mIHtcXEBsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc30gYmVmb3JlIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIdHRwLnByb3RvdHlwZS5yZXF1ZXN0ID0gLyoqXG4gICAgICogUGVyZm9ybXMgYW55IHR5cGUgb2YgaHR0cCByZXF1ZXN0LiBGaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCwgYW5kIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3JcbiAgICAgKiBhIHtcXEBsaW5rIFJlcXVlc3R9IGluc3RhbmNlLiBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSB1cmwsIGFuIG9wdGlvbmFsIHtcXEBsaW5rIFJlcXVlc3RPcHRpb25zfVxuICAgICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgICAqIG9mIHtcXEBsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc30gYmVmb3JlIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc3BvbnNlT2JzZXJ2YWJsZTtcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXNwb25zZU9ic2VydmFibGUgPSBodHRwUmVxdWVzdCh0aGlzLl9iYWNrZW5kLCBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuR2V0LCAvKiogQHR5cGUgez99ICovICh1cmwpKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2YWJsZSA9IGh0dHBSZXF1ZXN0KHRoaXMuX2JhY2tlbmQsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB1cmwgc3RyaW5nIG9yIFJlcXVlc3QgaW5zdGFuY2UuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlT2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBnZXRgIGh0dHAgbWV0aG9kLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBnZXRgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSHR0cC5wcm90b3R5cGUuZ2V0ID0gLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGdldGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLkdldCwgdXJsKSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHBvc3RgIGh0dHAgbWV0aG9kLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwb3N0YCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7P30gYm9keVxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEh0dHAucHJvdG90eXBlLnBvc3QgPSAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgcG9zdGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez99IGJvZHlcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGJvZHk6IGJvZHkgfSkpLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLlBvc3QsIHVybCkpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwdXRgIGh0dHAgbWV0aG9kLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwdXRgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/fSBib2R5XG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSHR0cC5wcm90b3R5cGUucHV0ID0gLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYHB1dGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez99IGJvZHlcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGJvZHk6IGJvZHkgfSkpLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLlB1dCwgdXJsKSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGRlbGV0ZWAgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGRlbGV0ZWAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIdHRwLnByb3RvdHlwZS5kZWxldGUgPSAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgZGVsZXRlYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuRGVsZXRlLCB1cmwpKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgcGF0Y2hgIGh0dHAgbWV0aG9kLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwYXRjaGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez99IGJvZHlcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBIdHRwLnByb3RvdHlwZS5wYXRjaCA9IC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBwYXRjaGAgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez99IGJvZHlcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLm1lcmdlKG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGJvZHk6IGJvZHkgfSkpLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLlBhdGNoLCB1cmwpKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgaGVhZGAgaHR0cCBtZXRob2QuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYGhlYWRgIGh0dHAgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgSHR0cC5wcm90b3R5cGUuaGVhZCA9IC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBoZWFkYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuSGVhZCwgdXJsKSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSByZXF1ZXN0IHdpdGggYG9wdGlvbnNgIGh0dHAgbWV0aG9kLlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgcmVxdWVzdCB3aXRoIGBvcHRpb25zYCBodHRwIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0gez99IHVybFxuICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEh0dHAucHJvdG90eXBlLm9wdGlvbnMgPSAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHJlcXVlc3Qgd2l0aCBgb3B0aW9uc2AgaHR0cCBtZXRob2QuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobmV3IFJlcXVlc3QobWVyZ2VPcHRpb25zKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zLCBSZXF1ZXN0TWV0aG9kLk9wdGlvbnMsIHVybCkpKTtcbiAgICB9O1xuICAgIEh0dHAuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBIdHRwLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IENvbm5lY3Rpb25CYWNrZW5kLCB9LFxuICAgICAgICB7IHR5cGU6IFJlcXVlc3RPcHRpb25zLCB9LFxuICAgIF07IH07XG4gICAgcmV0dXJuIEh0dHA7XG59KCkpO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBKc29ucCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSnNvbnAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSnNvbnAoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbnkgdHlwZSBvZiBodHRwIHJlcXVlc3QuIEZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLCBhbmQgY2FuIGVpdGhlciBiZSBhIHVybCBvclxuICAgICAqIGEge0BsaW5rIFJlcXVlc3R9IGluc3RhbmNlLiBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSB1cmwsIGFuIG9wdGlvbmFsIHtAbGluayBSZXF1ZXN0T3B0aW9uc31cbiAgICAgKiBvYmplY3QgY2FuIGJlIHByb3ZpZGVkIGFzIHRoZSAybmQgYXJndW1lbnQuIFRoZSBvcHRpb25zIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSB2YWx1ZXNcbiAgICAgKiBvZiB7QGxpbmsgQmFzZVJlcXVlc3RPcHRpb25zfSBiZWZvcmUgcGVyZm9ybWluZyB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBzZWN1cml0eSBSZWd1bGFyIFhIUiBpcyB0aGUgc2FmZXN0IGFsdGVybmF0aXZlIHRvIEpTT05QIGZvciBtb3N0IGFwcGxpY2F0aW9ucywgYW5kIGlzXG4gICAgICogc3VwcG9ydGVkIGJ5IGFsbCBjdXJyZW50IGJyb3dzZXJzLiBCZWNhdXNlIEpTT05QIGNyZWF0ZXMgYSBgPHNjcmlwdD5gIGVsZW1lbnQgd2l0aFxuICAgICAqIGNvbnRlbnRzIHJldHJpZXZlZCBmcm9tIGEgcmVtb3RlIHNvdXJjZSwgYXR0YWNrZXItY29udHJvbGxlZCBkYXRhIGludHJvZHVjZWQgYnkgYW4gdW50cnVzdGVkXG4gICAgICogc291cmNlIGNvdWxkIGV4cG9zZSB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTUyByaXNrcy4gRGF0YSBleHBvc2VkIGJ5IEpTT05QIG1heSBhbHNvIGJlXG4gICAgICogcmVhZGFibGUgYnkgbWFsaWNpb3VzIHRoaXJkLXBhcnR5IHdlYnNpdGVzLiBJbiBhZGRpdGlvbiwgSlNPTlAgaW50cm9kdWNlcyBwb3RlbnRpYWwgcmlzayBmb3JcbiAgICAgKiBmdXR1cmUgc2VjdXJpdHkgaXNzdWVzIChlLmcuIGNvbnRlbnQgc25pZmZpbmcpLiAgRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlXG4gICAgICogW1NlY3VyaXR5IEd1aWRlXShodHRwOi8vZy5jby9uZy9zZWN1cml0eSkuXG4gICAgICovXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW55IHR5cGUgb2YgaHR0cCByZXF1ZXN0LiBGaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCwgYW5kIGNhbiBlaXRoZXIgYmUgYSB1cmwgb3JcbiAgICAgKiBhIHtcXEBsaW5rIFJlcXVlc3R9IGluc3RhbmNlLiBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSB1cmwsIGFuIG9wdGlvbmFsIHtcXEBsaW5rIFJlcXVlc3RPcHRpb25zfVxuICAgICAqIG9iamVjdCBjYW4gYmUgcHJvdmlkZWQgYXMgdGhlIDJuZCBhcmd1bWVudC4gVGhlIG9wdGlvbnMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlIHZhbHVlc1xuICAgICAqIG9mIHtcXEBsaW5rIEJhc2VSZXF1ZXN0T3B0aW9uc30gYmVmb3JlIHBlcmZvcm1pbmcgdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBcXEBzZWN1cml0eSBSZWd1bGFyIFhIUiBpcyB0aGUgc2FmZXN0IGFsdGVybmF0aXZlIHRvIEpTT05QIGZvciBtb3N0IGFwcGxpY2F0aW9ucywgYW5kIGlzXG4gICAgICogc3VwcG9ydGVkIGJ5IGFsbCBjdXJyZW50IGJyb3dzZXJzLiBCZWNhdXNlIEpTT05QIGNyZWF0ZXMgYSBgPHNjcmlwdD5gIGVsZW1lbnQgd2l0aFxuICAgICAqIGNvbnRlbnRzIHJldHJpZXZlZCBmcm9tIGEgcmVtb3RlIHNvdXJjZSwgYXR0YWNrZXItY29udHJvbGxlZCBkYXRhIGludHJvZHVjZWQgYnkgYW4gdW50cnVzdGVkXG4gICAgICogc291cmNlIGNvdWxkIGV4cG9zZSB5b3VyIGFwcGxpY2F0aW9uIHRvIFhTUyByaXNrcy4gRGF0YSBleHBvc2VkIGJ5IEpTT05QIG1heSBhbHNvIGJlXG4gICAgICogcmVhZGFibGUgYnkgbWFsaWNpb3VzIHRoaXJkLXBhcnR5IHdlYnNpdGVzLiBJbiBhZGRpdGlvbiwgSlNPTlAgaW50cm9kdWNlcyBwb3RlbnRpYWwgcmlzayBmb3JcbiAgICAgKiBmdXR1cmUgc2VjdXJpdHkgaXNzdWVzIChlLmcuIGNvbnRlbnQgc25pZmZpbmcpLiAgRm9yIG1vcmUgZGV0YWlsLCBzZWUgdGhlXG4gICAgICogW1NlY3VyaXR5IEd1aWRlXShodHRwOi8vZy5jby9uZy9zZWN1cml0eSkuXG4gICAgICogQHBhcmFtIHs/fSB1cmxcbiAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBKc29ucC5wcm90b3R5cGUucmVxdWVzdCA9IC8qKlxuICAgICAqIFBlcmZvcm1zIGFueSB0eXBlIG9mIGh0dHAgcmVxdWVzdC4gRmlyc3QgYXJndW1lbnQgaXMgcmVxdWlyZWQsIGFuZCBjYW4gZWl0aGVyIGJlIGEgdXJsIG9yXG4gICAgICogYSB7XFxAbGluayBSZXF1ZXN0fSBpbnN0YW5jZS4gSWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgdXJsLCBhbiBvcHRpb25hbCB7XFxAbGluayBSZXF1ZXN0T3B0aW9uc31cbiAgICAgKiBvYmplY3QgY2FuIGJlIHByb3ZpZGVkIGFzIHRoZSAybmQgYXJndW1lbnQuIFRoZSBvcHRpb25zIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSB2YWx1ZXNcbiAgICAgKiBvZiB7XFxAbGluayBCYXNlUmVxdWVzdE9wdGlvbnN9IGJlZm9yZSBwZXJmb3JtaW5nIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogXFxAc2VjdXJpdHkgUmVndWxhciBYSFIgaXMgdGhlIHNhZmVzdCBhbHRlcm5hdGl2ZSB0byBKU09OUCBmb3IgbW9zdCBhcHBsaWNhdGlvbnMsIGFuZCBpc1xuICAgICAqIHN1cHBvcnRlZCBieSBhbGwgY3VycmVudCBicm93c2Vycy4gQmVjYXVzZSBKU09OUCBjcmVhdGVzIGEgYDxzY3JpcHQ+YCBlbGVtZW50IHdpdGhcbiAgICAgKiBjb250ZW50cyByZXRyaWV2ZWQgZnJvbSBhIHJlbW90ZSBzb3VyY2UsIGF0dGFja2VyLWNvbnRyb2xsZWQgZGF0YSBpbnRyb2R1Y2VkIGJ5IGFuIHVudHJ1c3RlZFxuICAgICAqIHNvdXJjZSBjb3VsZCBleHBvc2UgeW91ciBhcHBsaWNhdGlvbiB0byBYU1Mgcmlza3MuIERhdGEgZXhwb3NlZCBieSBKU09OUCBtYXkgYWxzbyBiZVxuICAgICAqIHJlYWRhYmxlIGJ5IG1hbGljaW91cyB0aGlyZC1wYXJ0eSB3ZWJzaXRlcy4gSW4gYWRkaXRpb24sIEpTT05QIGludHJvZHVjZXMgcG90ZW50aWFsIHJpc2sgZm9yXG4gICAgICogZnV0dXJlIHNlY3VyaXR5IGlzc3VlcyAoZS5nLiBjb250ZW50IHNuaWZmaW5nKS4gIEZvciBtb3JlIGRldGFpbCwgc2VlIHRoZVxuICAgICAqIFtTZWN1cml0eSBHdWlkZV0oaHR0cDovL2cuY28vbmcvc2VjdXJpdHkpLlxuICAgICAqIEBwYXJhbSB7P30gdXJsXG4gICAgICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNwb25zZU9ic2VydmFibGU7XG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdXJsID1cbiAgICAgICAgICAgICAgICBuZXcgUmVxdWVzdChtZXJnZU9wdGlvbnModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIFJlcXVlc3RNZXRob2QuR2V0LCAvKiogQHR5cGUgez99ICovICh1cmwpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmICh1cmwubWV0aG9kICE9PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTlAgcmVxdWVzdHMgbXVzdCB1c2UgR0VUIHJlcXVlc3QgbWV0aG9kLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZhYmxlID0gaHR0cFJlcXVlc3QodGhpcy5fYmFja2VuZCwgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHVybCBzdHJpbmcgb3IgUmVxdWVzdCBpbnN0YW5jZS4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VPYnNlcnZhYmxlO1xuICAgIH07XG4gICAgSnNvbnAuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBKc29ucC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBDb25uZWN0aW9uQmFja2VuZCwgfSxcbiAgICAgICAgeyB0eXBlOiBSZXF1ZXN0T3B0aW9ucywgfSxcbiAgICBdOyB9O1xuICAgIHJldHVybiBKc29ucDtcbn0oSHR0cCkpO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogQHN1cHByZXNzIHtjaGVja1R5cGVzfSBjaGVja2VkIGJ5IHRzY1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGh0dHAgbW9kdWxlIHByb3ZpZGVzIHNlcnZpY2VzIHRvIHBlcmZvcm0gaHR0cCByZXF1ZXN0cy4gVG8gZ2V0IHN0YXJ0ZWQsIHNlZSB0aGUge0BsaW5rIEh0dHB9XG4gKiBjbGFzcy5cbiAqL1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfY3JlYXRlRGVmYXVsdENvb2tpZVhTUkZTdHJhdGVneSgpIHtcbiAgICByZXR1cm4gbmV3IENvb2tpZVhTUkZTdHJhdGVneSgpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHhockJhY2tlbmRcbiAqIEBwYXJhbSB7P30gcmVxdWVzdE9wdGlvbnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGh0dHBGYWN0b3J5KHhockJhY2tlbmQsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBIdHRwKHhockJhY2tlbmQsIHJlcXVlc3RPcHRpb25zKTtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBqc29ucEJhY2tlbmRcbiAqIEBwYXJhbSB7P30gcmVxdWVzdE9wdGlvbnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGpzb25wRmFjdG9yeShqc29ucEJhY2tlbmQsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBKc29ucChqc29ucEJhY2tlbmQsIHJlcXVlc3RPcHRpb25zKTtcbn1cbi8qKlxuICogVGhlIG1vZHVsZSB0aGF0IGluY2x1ZGVzIGh0dHAncyBwcm92aWRlcnNcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBIdHRwTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBNb2R1bGUoKSB7XG4gICAgfVxuICAgIEh0dHBNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBhc2NhbCk6IHVzZSBmYWN0b3J5IHR5cGUgYW5ub3RhdGlvbnMgb25jZSBzdXBwb3J0ZWQgaW4gRElcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMTgzXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh0dHAsIHVzZUZhY3Rvcnk6IGh0dHBGYWN0b3J5LCBkZXBzOiBbWEhSQmFja2VuZCwgUmVxdWVzdE9wdGlvbnNdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBCcm93c2VyWGhyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBSZXF1ZXN0T3B0aW9ucywgdXNlQ2xhc3M6IEJhc2VSZXF1ZXN0T3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBSZXNwb25zZU9wdGlvbnMsIHVzZUNsYXNzOiBCYXNlUmVzcG9uc2VPcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBYSFJCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBYU1JGU3RyYXRlZ3ksIHVzZUZhY3Rvcnk6IF9jcmVhdGVEZWZhdWx0Q29va2llWFNSRlN0cmF0ZWd5IH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBIdHRwTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgcmV0dXJuIEh0dHBNb2R1bGU7XG59KCkpO1xuLyoqXG4gKiBUaGUgbW9kdWxlIHRoYXQgaW5jbHVkZXMganNvbnAncyBwcm92aWRlcnNcbiAqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBKc29ucE1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKc29ucE1vZHVsZSgpIHtcbiAgICB9XG4gICAgSnNvbnBNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPKHBhc2NhbCk6IHVzZSBmYWN0b3J5IHR5cGUgYW5ub3RhdGlvbnMgb25jZSBzdXBwb3J0ZWQgaW4gRElcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMTgzXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEpzb25wLCB1c2VGYWN0b3J5OiBqc29ucEZhY3RvcnksIGRlcHM6IFtKU09OUEJhY2tlbmQsIFJlcXVlc3RPcHRpb25zXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJvd3Nlckpzb25wLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBSZXF1ZXN0T3B0aW9ucywgdXNlQ2xhc3M6IEJhc2VSZXF1ZXN0T3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBSZXNwb25zZU9wdGlvbnMsIHVzZUNsYXNzOiBCYXNlUmVzcG9uc2VPcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OUEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBKc29ucE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgIHJldHVybiBKc29ucE1vZHVsZTtcbn0oKSk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIHB1YmxpYyBBUElzIG9mIHRoZSBjb21tb24gcGFja2FnZS5cbiAqL1xuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXFxAYW5ndWxhci9jb21tb24vaHR0cCBpbnN0ZWFkXG4gKi9cbnZhciBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzUuMS4xJyk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlc30gY2hlY2tlZCBieSB0c2NcbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhpcyBwYWNrYWdlLlxuICovXG5cbi8vIFRoaXMgZmlsZSBvbmx5IHJlZXhwb3J0cyBjb250ZW50IG9mIHRoZSBgc3JjYCBmb2xkZXIuIEtlZXAgaXQgdGhhdCB3YXkuXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0IHsgQnJvd3NlclhociwgSlNPTlBCYWNrZW5kLCBKU09OUENvbm5lY3Rpb24sIENvb2tpZVhTUkZTdHJhdGVneSwgWEhSQmFja2VuZCwgWEhSQ29ubmVjdGlvbiwgQmFzZVJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9ucywgQmFzZVJlc3BvbnNlT3B0aW9ucywgUmVzcG9uc2VPcHRpb25zLCBSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZUNvbnRlbnRUeXBlLCBSZXNwb25zZVR5cGUsIEhlYWRlcnMsIEh0dHAsIEpzb25wLCBIdHRwTW9kdWxlLCBKc29ucE1vZHVsZSwgQ29ubmVjdGlvbiwgQ29ubmVjdGlvbkJhY2tlbmQsIFhTUkZTdHJhdGVneSwgUmVxdWVzdCwgUmVzcG9uc2UsIFF1ZXJ5RW5jb2RlciwgVVJMU2VhcmNoUGFyYW1zLCBWRVJTSU9OLCBCcm93c2VySnNvbnAgYXMgybVlLCBCb2R5IGFzIMm1ZiwgX2NyZWF0ZURlZmF1bHRDb29raWVYU1JGU3RyYXRlZ3kgYXMgybVhLCBodHRwRmFjdG9yeSBhcyDJtWIsIGpzb25wRmFjdG9yeSBhcyDJtWMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2VzbTUvaHR0cC5qc1xuLy8gbW9kdWxlIGlkID0gMTE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuaW1wb3J0IEhvcm9zY29wZSA9IHJlcXVpcmUoXCIuL2hvcm9zY29wZVwiKTtcclxuaW1wb3J0IElIb3Jvc2NvcGUgPSBIb3Jvc2NvcGUuSG9yb3Njb3BlO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXN0cm9TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnYXBpL2FzdHJvL2dldCcpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vYXN0cm8uc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FzdHJvU2VydmljZX0gZnJvbSAnLi4vYXN0cm8uc2VydmljZSdcclxuaW1wb3J0IEhvcm9zY29wZSA9IHJlcXVpcmUoXCIuLi9ob3Jvc2NvcGVcIik7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgSUhvcm9zY29wZSA9IEhvcm9zY29wZS5Ib3Jvc2NvcGU7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGlzcGxheScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kaXNwbGF5LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Rpc3BsYXkuY29tcG9uZW50LnNjc3MnKV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGxheUNvbXBvbmVudCB7XHJcbiAgICBob3Jvc2NvcGVzOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXN0cm9TZXJ2aWNlOkFzdHJvU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYXN0cm9TZXJ2aWNlLmdldCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yb3Njb3BlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPGRpdiBzdHlsZT1cXFwiYm9yZGVyOiAxcHggc29saWQgcmVkXFxcIj5kaXNwbGF5IENvbXBvbmVudDwvZGl2Plxcclxcblxcclxcbjx1bD5cXHJcXG4gICAgPGxpICpuZ0Zvcj1cXFwibGV0IGhvcm9zY29wZSBvZiBob3Jvc2NvcGVzXFxcIj5cXHJcXG4gICAgICAgIHt7aG9yb3Njb3BlPy5zaWduICYmIGhvcm9zY29wZT8uc2lnbj8ubmFtZX19XFxyXFxuICAgIDwvbGk+LS0+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xXFxcIiAqbmdGb3I9XFxcImxldCBob3Jvc2NvcGUgb2YgaG9yb3Njb3Blc1xcXCI+XFxyXFxuICAgICAgICA8IS0tIFNUQVJUIHdpZGdldC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgd2lkZ2V0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHJvdy10YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nLWNpcmNsZSB0aHVtYjk2XFxcIiBzcmM9XFxcImFzc2V0cy9pbWcvc2lnbnMve3tob3Jvc2NvcGU/LnNpZ24/LnRlY2huaWNhbE5hbWV9fS5wbmdcXFwiIGFsdD1cXFwiSW1hZ2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcIm10MFxcXCI+e3tob3Jvc2NvcGU/LnNpZ24/Lm5hbWV9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJsaXN0LXVuc3R5bGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJtYi1zbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aG9yb3Njb3BlPy5nbG9iYWxUZXh0fX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHkgYmctaW52ZXJzZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyByb3ctdGFibGUgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHJvdy10YWJsZSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCIgICpuZ0Zvcj1cXFwibGV0IHRvcGljIG9mIGhvcm9zY29wZT8udG9waWNzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7dG9waWM/LnRpdGxlfX08L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHByb2dyZXNzYmFyIFttYXhdPVxcXCJ0b3BpYy50b3RhbFN0YXJzXFxcIiBbdmFsdWVdPVxcXCJ0b3BpYy5zdGFyc1xcXCI+PHNwYW4gc3R5bGU9XFxcImNvbG9yOndoaXRlOyB3aGl0ZS1zcGFjZTpub3dyYXA7XFxcIj57e3RvcGljPy5zdGFyc319IC8ge3t0b3BpYz8udG90YWxTdGFyc319PC9zcGFuPjwvcHJvZ3Jlc3NiYXI+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmF0aW5nIFtuZ01vZGVsXT1cXFwidG9waWMuc3RhcnNcXFwiIFttYXhdPVxcXCJ0b3BpYy50b3RhbFN0YXJzXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCIgc3RhdGVPbj1cXFwiZmEgZmEtc3RhciB0ZXh0LXllbGxvd1xcXCIgc3RhdGVPZmY9XFxcImZhIGZhLXN0YXItb1xcXCI+PC9yYXRpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPHVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB0b3BpYyBvZiBob3Jvc2NvcGU/LnRvcGljc1xcXCI+e3t0b3BpYz8udGl0bGV9fTxwcm9ncmVzc2JhciBbbWF4XT1cXFwidG9waWMudG90YWxTdGFyc1xcXCIgW3ZhbHVlXT1cXFwidG9waWMuc3RhcnNcXFwiPjxzcGFuIHN0eWxlPVxcXCJjb2xvcjp3aGl0ZTsgd2hpdGUtc3BhY2U6bm93cmFwO1xcXCI+e3t0b3BpYz8uc3RhcnN9fSAvIHt7dG9waWM/LnRvdGFsU3RhcnN9fTwvc3Bhbj48L3Byb2dyZXNzYmFyPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibTAgaDNcXFwiPjcwMDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibTAgdGV4dC1tdXRlZFxcXCI+Rm9sbG93ZXJzPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm0wIGgzXFxcIj4xNTAwPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtMCB0ZXh0LW11dGVkXFxcIj5Gb2xsb3dpbmc8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibTAgaDNcXFwiPjUxMDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibTAgdGV4dC1tdXRlZFxcXCI+TG92ZWQ8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwhLS0gRU5EIHdpZGdldC0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvYXN0cm8vZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzID0gXCIuYnMtcmF0aW5nLXN0YXIge1xcbiAgZm9udC1zaXplOiA1MHB4OyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvcm91dGVzL2FzdHJvL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTM0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlbGVjdE1vZHVsZSB9IGZyb20gJ25nMi1zZWxlY3QnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBc3Ryb1NlcnZpY2UgfSBmcm9tICcuL2FzdHJvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50JztcclxuXHJcbi8vaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC9saXN0LmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgUG9zdENvbXBvbmVudCB9IGZyb20gJy4vcG9zdC9wb3N0LmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgQXJ0aWNsZXNDb21wb25lbnQgfSBmcm9tICcuL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgQXJ0aWNsZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL2FydGljbGV2aWV3L2FydGljbGV2aWV3LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdkaXNwbGF5JyB9LFxyXG4gICAgeyBwYXRoOiAnZGlzcGxheScsIGNvbXBvbmVudDogRGlzcGxheUNvbXBvbmVudCB9LFxyXG4gICAgLy97IHBhdGg6ICdsaXN0JywgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAvL3sgcGF0aDogJ3Bvc3QnLCBjb21wb25lbnQ6IFBvc3RDb21wb25lbnQgfSxcclxuICAgIC8veyBwYXRoOiAnYXJ0aWNsZXMnLCBjb21wb25lbnQ6IEFydGljbGVzQ29tcG9uZW50IH0sXHJcbiAgICAvL3sgcGF0aDogJ2FydGljbGV2aWV3JywgY29tcG9uZW50OiBBcnRpY2xldmlld0NvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIFNlbGVjdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIERpc3BsYXlDb21wb25lbnQsXHJcbiAgICAgICAgLy9Qb3N0Q29tcG9uZW50LFxyXG4gICAgICAgIC8vQXJ0aWNsZXNDb21wb25lbnQsXHJcbiAgICAgICAgLy9BcnRpY2xldmlld0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtBc3Ryb1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBc3Ryb01vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9hc3Ryby9hc3Ryby5tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9