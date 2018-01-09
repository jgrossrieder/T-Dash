webpackJsonp([5],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__ = __webpack_require__(1022);



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    return GoogleMapsAPIWrapper;
}());

GoogleMapsAPIWrapper.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
GoogleMapsAPIWrapper.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsAPILoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    return MapsAPILoader;
}());

MapsAPILoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MapsAPILoader.ctorParameters = function () { return []; };
//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);



var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return MarkerManager;
}());

MarkerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MarkerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);



var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    return CircleManager;
}());

CircleManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
CircleManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marker_manager__ = __webpack_require__(1023);




var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return InfoWindowManager;
}());

InfoWindowManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
InfoWindowManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], },
    { type: __WEBPACK_IMPORTED_MODULE_3__marker_manager__["a" /* MarkerManager */], },
]; };
//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);



var PolygonManager = (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolygonManager;
}());

PolygonManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
PolygonManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolylineManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);



var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolylineManager;
}());

PolylineManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
PolylineManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KmlLayerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return KmlLayerManager;
}());

KmlLayerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
KmlLayerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLayerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(1011);



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    DataLayerManager.prototype.addDataLayer = function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    return DataLayerManager;
}());

DataLayerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
DataLayerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmInfoWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__ = __webpack_require__(1030);


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    AgmInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    AgmInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    return AgmInfoWindow;
}());

AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'agm-info-window',
                template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmInfoWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__["a" /* InfoWindowManager */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
AgmInfoWindow.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disableAutoPan': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'infoWindowClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolylinePoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    return AgmPolylinePoint;
}());

AgmPolylinePoint.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
];
/** @nocollapse */
AgmPolylinePoint.ctorParameters = function () { return []; };
AgmPolylinePoint.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'positionChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LazyMapsAPILoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader__ = __webpack_require__(1022);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        var _this = _super.call(this) || this;
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[callbackName] = function () {
                resolve();
            };
            script.onerror = function (error) {
                reject(error);
            };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    return LazyMapsAPILoader;
}(__WEBPACK_IMPORTED_MODULE_2__maps_api_loader__["a" /* MapsAPILoader */]));

LazyMapsAPILoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
LazyMapsAPILoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["c" /* WindowRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["b" /* DocumentRef */], },
]; };
//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__ = __webpack_require__(1034);









/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = (function () {
    function AgmMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /** @internal */
    AgmMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    AgmMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    AgmMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    AgmMap.prototype.triggerResize = function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    return AgmMap;
}());

/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
    'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
    'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
    'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
    'mapTypeId', 'clickableIcons', 'gestureHandling'
];
AgmMap.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'agm-map',
                providers: [
                    __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__["a" /* MarkerManager */], __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__["a" /* InfoWindowManager */], __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__["a" /* CircleManager */], __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__["a" /* PolylineManager */],
                    __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__["a" /* PolygonManager */], __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__["a" /* DataLayerManager */]
                ],
                host: {
                    // todo: deprecated - we will remove it with the next version
                    '[class.sebm-google-map-container]': 'true'
                },
                styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmMap.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
]; };
AgmMap.propDecorators = {
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'minZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mapDraggable',] },],
    'disableDoubleClickZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disableDefaultUI': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'scrollwheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'backgroundColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggableCursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggingCursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'keyboardShortcuts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zoomControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zoomControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'styles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'usePanning': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'streetViewControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'streetViewControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fitBounds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'scaleControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'scaleControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mapTypeControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mapTypeControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'panControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'panControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rotateControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rotateControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fullscreenControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fullscreenControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mapTypeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'clickableIcons': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'gestureHandling': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mapClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mapRightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mapDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'centerChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'boundsChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'idle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'zoomChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mapReady': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCircle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__(1029);


var AgmCircle = (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    AgmCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    return AgmCircle;
}());

AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable'
];
AgmCircle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-circle'
            },] },
];
/** @nocollapse */
AgmCircle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__["a" /* CircleManager */], },
]; };
AgmCircle.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['circleDraggable',] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fillColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fillOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'radius': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokePosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'centerChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'circleClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'circleDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'drag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'radiusChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'rightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmKmlLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__ = __webpack_require__(1033);


var layerId = 0;
var AgmKmlLayer = (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmKmlLayer;
}());

AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-kml-layer'
            },] },
];
/** @nocollapse */
AgmKmlLayer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], },
]; };
AgmKmlLayer.propDecorators = {
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'preserveViewport': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenOverlays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'suppressInfoWindows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'layerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'defaultViewportChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'statusChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmDataLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__ = __webpack_require__(1034);


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmDataLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    return AgmDataLayer;
}());

AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-data-layer'
            },] },
];
/** @nocollapse */
AgmDataLayer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__["a" /* DataLayerManager */], },
]; };
AgmDataLayer.propDecorators = {
    'layerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'geoJson': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'style': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMarker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_marker_manager__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_window__ = __webpack_require__(1035);



var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @internal
         */
        this.infoWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    AgmMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    AgmMarker.prototype.id = function () { return this._id; };
    /** @internal */
    AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmMarker;
}());

AgmMarker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-marker'
            },] },
];
/** @nocollapse */
AgmMarker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_marker_manager__["a" /* MarkerManager */], },
]; };
AgmMarker.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['markerDraggable',] },],
    'iconUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'openInfoWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'opacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['markerClickable',] },],
    'markerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'infoWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__info_window__["a" /* AgmInfoWindow */],] },],
};
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolygon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__ = __webpack_require__(1031);


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This even is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    AgmPolygon.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolygon;
}());

AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible'
];
AgmPolygon.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-polygon'
            },] },
];
/** @nocollapse */
AgmPolygon.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__["a" /* PolygonManager */], },
]; };
AgmPolygon.propDecorators = {
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['polyDraggable',] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fillColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'fillOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'geodesic': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'paths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'polyClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyMouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyMouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'polyRightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolyline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyline_point__ = __webpack_require__(1036);



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    AgmPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolyline;
}());

AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex'
];
AgmPolyline.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'agm-polyline'
            },] },
];
/** @nocollapse */
AgmPolyline.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__["a" /* PolylineManager */], },
]; };
AgmPolyline.propDecorators = {
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['polylineDraggable',] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'geodesic': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'lineClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineMouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineMouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'lineRightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'points': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__polyline_point__["a" /* AgmPolylinePoint */],] },],
};
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(1080);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(1081);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__(1083);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return __WEBPACK_IMPORTED_MODULE_2__core_module__["a"]; });
// main modules


// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_map__ = __webpack_require__(1049);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__directives_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_circle__ = __webpack_require__(1050);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__directives_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_info_window__ = __webpack_require__(1035);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_info_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_kml_layer__ = __webpack_require__(1051);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__directives_kml_layer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_data_layer__ = __webpack_require__(1052);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__directives_data_layer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_marker__ = __webpack_require__(1053);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__directives_marker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polygon__ = __webpack_require__(1054);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__directives_polygon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline__ = __webpack_require__(1055);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__directives_polyline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_polyline_point__ = __webpack_require__(1036);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_polyline_point__["a"]; });









//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_google_maps_api_wrapper__ = __webpack_require__(1011);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__services_google_maps_api_wrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__(1029);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_info_window_manager__ = __webpack_require__(1030);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__services_managers_info_window_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_marker_manager__ = __webpack_require__(1023);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__services_managers_marker_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_polygon_manager__ = __webpack_require__(1031);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__services_managers_polygon_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polyline_manager__ = __webpack_require__(1032);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__services_managers_polyline_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_kml_layer_manager__ = __webpack_require__(1033);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__services_managers_kml_layer_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_data_layer_manager__ = __webpack_require__(1034);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__services_managers_data_layer_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__(1037);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__services_maps_api_loader_lazy_maps_api_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__services_maps_api_loader_lazy_maps_api_loader__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__services_maps_api_loader_lazy_maps_api_loader__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_maps_api_loader_maps_api_loader__ = __webpack_require__(1022);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__services_maps_api_loader_maps_api_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_noop_maps_api_loader__ = __webpack_require__(1082);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_noop_maps_api_loader__["a"]; });











//# sourceMappingURL=services.js.map

/***/ }),

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coreDirectives */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_map__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_circle__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_info_window__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_marker__ = __webpack_require__(1053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_polygon__ = __webpack_require__(1054);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polyline__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline_point__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_kml_layer__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_maps_api_loader__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_browser_globals__ = __webpack_require__(1056);














/**
 * @internal
 */
function coreDirectives() {
    return [
        __WEBPACK_IMPORTED_MODULE_1__directives_map__["a" /* AgmMap */], __WEBPACK_IMPORTED_MODULE_4__directives_marker__["a" /* AgmMarker */], __WEBPACK_IMPORTED_MODULE_3__directives_info_window__["a" /* AgmInfoWindow */], __WEBPACK_IMPORTED_MODULE_2__directives_circle__["a" /* AgmCircle */],
        __WEBPACK_IMPORTED_MODULE_5__directives_polygon__["a" /* AgmPolygon */], __WEBPACK_IMPORTED_MODULE_6__directives_polyline__["a" /* AgmPolyline */], __WEBPACK_IMPORTED_MODULE_7__directives_polyline_point__["a" /* AgmPolylinePoint */], __WEBPACK_IMPORTED_MODULE_8__directives_kml_layer__["a" /* AgmKmlLayer */],
        __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__["a" /* AgmDataLayer */]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: __WEBPACK_IMPORTED_MODULE_12__utils_browser_globals__["a" /* BROWSER_GLOBALS_PROVIDERS */].concat([
                { provide: __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], useClass: __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__["c" /* LazyMapsAPILoader */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__["b" /* LAZY_MAPS_API_CONFIG */], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    return AgmCoreModule;
}());

AgmCoreModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
];
/** @nocollapse */
AgmCoreModule.ctorParameters = function () { return []; };
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 1553:
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
var GoogleComponent = (function () {
    function GoogleComponent() {
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        // custom map style
        this.mapStyles = [{ 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#bdd1f9' }] }, { 'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];
    }
    GoogleComponent.prototype.ngOnInit = function () {
    };
    GoogleComponent = __decorate([
        core_1.Component({
            selector: 'app-google',
            template: __webpack_require__(1554),
            styles: [__webpack_require__(1555)]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleComponent);
    return GoogleComponent;
}());
exports.GoogleComponent = GoogleComponent;


/***/ }),

/***/ 1554:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Google Maps\r\n    <small>This directive allows you to add Google Maps Javascript API elements.</small>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Classic Map</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Custom zoom</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"19\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Different Map Type (not supported yet)</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Multiple Markers</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        <agm-marker [latitude]=\"33.787453\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Styled Maps</div>\r\n                <div class=\"panel-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [styles]=\"mapStyles\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 1555:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1556:
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
var VectorComponent = (function () {
    function VectorComponent() {
        this.defaultColors = {
            markerColor: '#23b7e5',
            bgColor: 'transparent',
            scaleColors: ['#878c9a'],
            regionFill: '#bbbec6' // the base region color
        };
        this.mapName = 'world_mill_en';
        this.mapOptions = {
            markerColor: this.defaultColors.markerColor,
            bgColor: this.defaultColors.bgColor,
            scale: 1,
            scaleColors: this.defaultColors.scaleColors,
            regionFill: this.defaultColors.regionFill
        };
        this.seriesData = {
            'CA': 11100,
            'DE': 2510,
            'FR': 3710,
            'AU': 5710,
            'GB': 8310,
            'RU': 9310,
            'BR': 6610,
            'IN': 7810,
            'CN': 4310,
            'US': 839,
            'SA': 410 // Saudi Arabia
        };
        this.markersData = [
            { latLng: [41.90, 12.45], name: 'Vatican City' },
            { latLng: [43.73, 7.41], name: 'Monaco' },
            { latLng: [-0.52, 166.93], name: 'Nauru' },
            { latLng: [-8.51, 179.21], name: 'Tuvalu' },
            { latLng: [7.11, 171.06], name: 'Marshall Islands' },
            { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { latLng: [3.2, 73.22], name: 'Maldives' },
            { latLng: [35.88, 14.5], name: 'Malta' },
            { latLng: [41.0, -71.06], name: 'New England' },
            { latLng: [12.05, -61.75], name: 'Grenada' },
            { latLng: [13.16, -59.55], name: 'Barbados' },
            { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { latLng: [-4.61, 55.45], name: 'Seychelles' },
            { latLng: [7.35, 134.46], name: 'Palau' },
            { latLng: [42.5, 1.51], name: 'Andorra' }
        ];
    }
    VectorComponent.prototype.ngOnInit = function () {
    };
    VectorComponent = __decorate([
        core_1.Component({
            selector: 'app-vector',
            template: __webpack_require__(1557),
            styles: [__webpack_require__(1558)]
        }),
        __metadata("design:paramtypes", [])
    ], VectorComponent);
    return VectorComponent;
}());
exports.VectorComponent = VectorComponent;


/***/ }),

/***/ 1557:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Vector Maps\r\n   <br/>\r\n   <small>Resolution independent maps</small>\r\n</div>\r\n<div vectormap [mapHeight]=\"700\" [mapName]=\"mapName\" [seriesData]=\"seriesData\" [markersData]=\"markersData\" [mapOptions]=\"mapOptions\" ></div>\r\n"

/***/ }),

/***/ 1558:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 999:
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
var core_2 = __webpack_require__(1079);
var shared_module_1 = __webpack_require__(83);
var google_component_1 = __webpack_require__(1553);
var vector_component_1 = __webpack_require__(1556);
var routes = [
    { path: 'google', component: google_component_1.GoogleComponent },
    { path: 'vector', component: vector_component_1.VectorComponent }
];
var MapsModule = (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
                })
            ],
            declarations: [
                google_component_1.GoogleComponent,
                vector_component_1.VectorComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvcG9seWxpbmUtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL2ttbC1sYXllci1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvZGF0YS1sYXllci1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvZGlyZWN0aXZlcy9pbmZvLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvcG9seWxpbmUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9kaXJlY3RpdmVzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvZGlyZWN0aXZlcy9rbWwtbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9kaXJlY3RpdmVzL2RhdGEtbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9kaXJlY3RpdmVzL21hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvcG9seWdvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvcG9seWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS91dGlscy9icm93c2VyLWdsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9ub29wLW1hcHMtYXBpLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2NvcmUubW9kdWxlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvbWFwcy9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvbWFwcy9tYXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNSO0FBQ0c7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsOEJBQThCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUIsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0Msa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQTRDLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBQUMsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUs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UyxFQUFFLGtDQUFlLEVBQUU7Q0FDakQsQ0FBQztBQWtCRjtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBaEJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1oscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM3QixvQkFBYSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsTUFBTSxFQUFFLHlDQUF5QztpQkFDcEQsQ0FBQzthQUNMO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2dCQUNmLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2FBQ2Y7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQTtBQUFkLGdDQUFVIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG4vKipcbiAqIFdyYXBwZXIgY2xhc3MgdGhhdCBoYW5kbGVzIHRoZSBjb21tdW5pY2F0aW9uIHdpdGggdGhlIEdvb2dsZSBNYXBzIEphdmFzY3JpcHRcbiAqIEFQSSB2M1xuICovXG52YXIgR29vZ2xlTWFwc0FQSVdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdvb2dsZU1hcHNBUElXcmFwcGVyKF9sb2FkZXIsIF96b25lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xvYWRlciA9IF9sb2FkZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbWFwID1cbiAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IF90aGlzLl9tYXBSZXNvbHZlciA9IHJlc29sdmU7IH0pO1xuICAgIH1cbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuY3JlYXRlTWFwID0gZnVuY3Rpb24gKGVsLCBtYXBPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWwsIG1hcE9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMuX21hcFJlc29sdmVyKG1hcCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnNldE1hcE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobSkgeyBtLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdvb2dsZSBtYXAgbWFya2VyIHdpdGggdGhlIG1hcCBjb250ZXh0XG4gICAgICovXG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmNyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBhZGRUb01hcCkge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICBpZiAoYWRkVG9NYXAgPT09IHZvaWQgMCkgeyBhZGRUb01hcCA9IHRydWU7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgICAgIGlmIChhZGRUb01hcCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubWFwID0gbWFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5NYXJrZXIob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmNyZWF0ZUluZm9XaW5kb3cgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3cob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdvb2dsZS5tYXAuQ2lyY2xlIGZvciB0aGUgY3VycmVudCBtYXAuXG4gICAgICovXG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmNyZWF0ZUNpcmNsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICBvcHRpb25zLm1hcCA9IG1hcDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5jcmVhdGVQb2x5bGluZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUob3B0aW9ucyk7XG4gICAgICAgICAgICBsaW5lLnNldE1hcChtYXApO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmNyZWF0ZVBvbHlnb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXRpdmVNYXAoKS50aGVuKGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgICAgIHZhciBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlnb24ob3B0aW9ucyk7XG4gICAgICAgICAgICBwb2x5Z29uLnNldE1hcChtYXApO1xuICAgICAgICAgICAgcmV0dXJuIHBvbHlnb247XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBnb29nbGUubWFwLkRhdGEgbGF5ZXIgZm9yIHRoZSBjdXJyZW50IG1hcFxuICAgICAqL1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5jcmVhdGVEYXRhTGF5ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IGdvb2dsZS5tYXBzLkRhdGEob3B0aW9ucyk7XG4gICAgICAgICAgICBkYXRhLnNldE1hcChtKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgZ2l2ZW4gY29vcmRpbmF0ZXMgYXJlIGluc2l0ZSBhIFBvbHlnb24gcGF0aC5cbiAgICAgKi9cbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuY29udGFpbnNMb2NhdGlvbiA9IGZ1bmN0aW9uIChsYXRMbmcsIHBvbHlnb24pIHtcbiAgICAgICAgcmV0dXJuIGdvb2dsZS5tYXBzLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsYXRMbmcsIHBvbHlnb24pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnN1YnNjcmliZVRvTWFwRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoYXJnKSB7IF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5uZXh0KGFyZyk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAobGF0TG5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7IHJldHVybiBtYXAuc2V0Q2VudGVyKGxhdExuZyk7IH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLmdldFpvb20gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7IHJldHVybiBtYXAuZ2V0Wm9vbSgpOyB9KTsgfTtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLmdldEJvdW5kcygpOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5zZXRab29tID0gZnVuY3Rpb24gKHpvb20pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIG1hcC5zZXRab29tKHpvb20pOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAudGhlbihmdW5jdGlvbiAobWFwKSB7IHJldHVybiBtYXAuZ2V0Q2VudGVyKCk7IH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnBhblRvID0gZnVuY3Rpb24gKGxhdExuZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLnBhblRvKGxhdExuZyk7IH0pO1xuICAgIH07XG4gICAgR29vZ2xlTWFwc0FQSVdyYXBwZXIucHJvdG90eXBlLnBhbkJ5ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIG1hcC5wYW5CeSh4LCB5KTsgfSk7XG4gICAgfTtcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUuZml0Qm91bmRzID0gZnVuY3Rpb24gKGxhdExuZykge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gbWFwLmZpdEJvdW5kcyhsYXRMbmcpOyB9KTtcbiAgICB9O1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5wYW5Ub0JvdW5kcyA9IGZ1bmN0aW9uIChsYXRMbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIG1hcC5wYW5Ub0JvdW5kcyhsYXRMbmcpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5hdGl2ZSBHb29nbGUgTWFwcyBNYXAgaW5zdGFuY2UuIEJlIGNhcmVmdWwgd2hlbiB1c2luZyB0aGlzIGluc3RhbmNlIGRpcmVjdGx5LlxuICAgICAqL1xuICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLnByb3RvdHlwZS5nZXROYXRpdmVNYXAgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXA7IH07XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGdpdmVuIGV2ZW50IG5hbWUgb24gdGhlIG1hcCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlci5wcm90b3R5cGUudHJpZ2dlck1hcEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobSwgZXZlbnROYW1lKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gR29vZ2xlTWFwc0FQSVdyYXBwZXI7XG59KCkpO1xuZXhwb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfTtcbkdvb2dsZU1hcHNBUElXcmFwcGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5Hb29nbGVNYXBzQVBJV3JhcHBlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IE1hcHNBUElMb2FkZXIsIH0sXG4gICAgeyB0eXBlOiBOZ1pvbmUsIH0sXG5dOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z29vZ2xlLW1hcHMtYXBpLXdyYXBwZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDYiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG52YXIgTWFwc0FQSUxvYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwc0FQSUxvYWRlcigpIHtcbiAgICB9XG4gICAgcmV0dXJuIE1hcHNBUElMb2FkZXI7XG59KCkpO1xuZXhwb3J0IHsgTWFwc0FQSUxvYWRlciB9O1xuTWFwc0FQSUxvYWRlci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuTWFwc0FQSUxvYWRlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwcy1hcGktbG9hZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDYiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbnZhciBNYXJrZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXJrZXJNYW5hZ2VyKF9tYXBzV3JhcHBlciwgX3pvbmUpIHtcbiAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIgPSBfbWFwc1dyYXBwZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbWFya2VycyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUuZGVsZXRlTWFya2VyID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbSA9IHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG1hcmtlciBhbHJlYWR5IGRlbGV0ZWRcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS50aGVuKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFya2Vycy5kZWxldGUobWFya2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZU1hcmtlclBvc2l0aW9uID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnNldFBvc2l0aW9uKHsgbGF0OiBtYXJrZXIubGF0aXR1ZGUsIGxuZzogbWFya2VyLmxvbmdpdHVkZSB9KTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVUaXRsZSA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zZXRUaXRsZShtYXJrZXIudGl0bGUpOyB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUxhYmVsID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IG0uc2V0TGFiZWwobWFya2VyLmxhYmVsKTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVEcmFnZ2FibGUgPSBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uc2V0RHJhZ2dhYmxlKG1hcmtlci5kcmFnZ2FibGUpOyB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUljb24gPSBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uc2V0SWNvbihtYXJrZXIuaWNvblVybCk7IH0pO1xuICAgIH07XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUudXBkYXRlT3BhY2l0eSA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zZXRPcGFjaXR5KG1hcmtlci5vcGFjaXR5KTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVWaXNpYmxlID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnNldFZpc2libGUobWFya2VyLnZpc2libGUpOyB9KTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVpJbmRleCA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbihmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5zZXRaSW5kZXgobWFya2VyLnpJbmRleCk7IH0pO1xuICAgIH07XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUudXBkYXRlQ2xpY2thYmxlID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnNldENsaWNrYWJsZShtYXJrZXIuY2xpY2thYmxlKTsgfSk7XG4gICAgfTtcbiAgICBNYXJrZXJNYW5hZ2VyLnByb3RvdHlwZS5hZGRNYXJrZXIgPSBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgIHZhciBtYXJrZXJQcm9taXNlID0gdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlTWFya2VyKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogbWFya2VyLmxhdGl0dWRlLCBsbmc6IG1hcmtlci5sb25naXR1ZGUgfSxcbiAgICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IG1hcmtlci5kcmFnZ2FibGUsXG4gICAgICAgICAgICBpY29uOiBtYXJrZXIuaWNvblVybCxcbiAgICAgICAgICAgIG9wYWNpdHk6IG1hcmtlci5vcGFjaXR5LFxuICAgICAgICAgICAgdmlzaWJsZTogbWFya2VyLnZpc2libGUsXG4gICAgICAgICAgICB6SW5kZXg6IG1hcmtlci56SW5kZXgsXG4gICAgICAgICAgICB0aXRsZTogbWFya2VyLnRpdGxlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiBtYXJrZXIuY2xpY2thYmxlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9tYXJrZXJzLnNldChtYXJrZXIsIG1hcmtlclByb21pc2UpO1xuICAgIH07XG4gICAgTWFya2VyTWFuYWdlci5wcm90b3R5cGUuZ2V0TmF0aXZlTWFya2VyID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKTtcbiAgICB9O1xuICAgIE1hcmtlck1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG1hcmtlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgbS5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIubmV4dChlKTsgfSk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgTWFya2VyTWFuYWdlciB9O1xuTWFya2VyTWFuYWdlci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuTWFya2VyTWFuYWdlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCB9LFxuICAgIHsgdHlwZTogTmdab25lLCB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcmtlci1tYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9tYXJrZXItbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xudmFyIENpcmNsZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENpcmNsZU1hbmFnZXIoX2FwaVdyYXBwZXIsIF96b25lKSB7XG4gICAgICAgIHRoaXMuX2FwaVdyYXBwZXIgPSBfYXBpV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fem9uZSA9IF96b25lO1xuICAgICAgICB0aGlzLl9jaXJjbGVzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5hZGRDaXJjbGUgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHRoaXMuX2NpcmNsZXMuc2V0KGNpcmNsZSwgdGhpcy5fYXBpV3JhcHBlci5jcmVhdGVDaXJjbGUoe1xuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogY2lyY2xlLmxhdGl0dWRlLCBsbmc6IGNpcmNsZS5sb25naXR1ZGUgfSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogY2lyY2xlLmNsaWNrYWJsZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogY2lyY2xlLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGVkaXRhYmxlOiBjaXJjbGUuZWRpdGFibGUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IGNpcmNsZS5maWxsQ29sb3IsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogY2lyY2xlLmZpbGxPcGFjaXR5LFxuICAgICAgICAgICAgcmFkaXVzOiBjaXJjbGUucmFkaXVzLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IGNpcmNsZS5zdHJva2VDb2xvcixcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IGNpcmNsZS5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgICAgc3Ryb2tlUG9zaXRpb246IGNpcmNsZS5zdHJva2VQb3NpdGlvbixcbiAgICAgICAgICAgIHN0cm9rZVdlaWdodDogY2lyY2xlLnN0cm9rZVdlaWdodCxcbiAgICAgICAgICAgIHZpc2libGU6IGNpcmNsZS52aXNpYmxlLFxuICAgICAgICAgICAgekluZGV4OiBjaXJjbGUuekluZGV4XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNpcmNsZSBmcm9tIHRoZSBtYXAuXG4gICAgICovXG4gICAgQ2lyY2xlTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQ2lyY2xlID0gZnVuY3Rpb24gKGNpcmNsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICBjLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIF90aGlzLl9jaXJjbGVzLmRlbGV0ZShjaXJjbGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoY2lyY2xlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuc2V0T3B0aW9ucyhvcHRpb25zKTsgfSk7XG4gICAgfTtcbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuZ2V0Qm91bmRzKCk7IH0pO1xuICAgIH07XG4gICAgQ2lyY2xlTWFuYWdlci5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKGNpcmNsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2lyY2xlcy5nZXQoY2lyY2xlKS50aGVuKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmdldENlbnRlcigpOyB9KTtcbiAgICB9O1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLmdldFJhZGl1cyA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5nZXRSYWRpdXMoKTsgfSk7XG4gICAgfTtcbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuc2V0Q2VudGVyKHsgbGF0OiBjaXJjbGUubGF0aXR1ZGUsIGxuZzogY2lyY2xlLmxvbmdpdHVkZSB9KTsgfSk7XG4gICAgfTtcbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5zZXRFZGl0YWJsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5zZXRFZGl0YWJsZShjaXJjbGUuZWRpdGFibGUpOyB9KTtcbiAgICB9O1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLnNldERyYWdnYWJsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5zZXREcmFnZ2FibGUoY2lyY2xlLmRyYWdnYWJsZSk7IH0pO1xuICAgIH07XG4gICAgQ2lyY2xlTWFuYWdlci5wcm90b3R5cGUuc2V0VmlzaWJsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5zZXRWaXNpYmxlKGNpcmNsZS52aXNpYmxlKTsgfSk7XG4gICAgfTtcbiAgICBDaXJjbGVNYW5hZ2VyLnByb3RvdHlwZS5zZXRSYWRpdXMgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjbGVzLmdldChjaXJjbGUpLnRoZW4oZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuc2V0UmFkaXVzKGNpcmNsZS5yYWRpdXMpOyB9KTtcbiAgICB9O1xuICAgIENpcmNsZU1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNpcmNsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgX3RoaXMuX2NpcmNsZXMuZ2V0KGNpcmNsZSkudGhlbihmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIubmV4dChlKTsgfSk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDaXJjbGVNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IENpcmNsZU1hbmFnZXIgfTtcbkNpcmNsZU1hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkNpcmNsZU1hbmFnZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICB7IHR5cGU6IE5nWm9uZSwgfSxcbl07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUtbWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IE1hcmtlck1hbmFnZXIgfSBmcm9tICcuL21hcmtlci1tYW5hZ2VyJztcbnZhciBJbmZvV2luZG93TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5mb1dpbmRvd01hbmFnZXIoX21hcHNXcmFwcGVyLCBfem9uZSwgX21hcmtlck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIgPSBfbWFwc1dyYXBwZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlciA9IF9tYXJrZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93cyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgSW5mb1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmRlbGV0ZUluZm9XaW5kb3cgPSBmdW5jdGlvbiAoaW5mb1dpbmRvdykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaVdpbmRvdyA9IHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KTtcbiAgICAgICAgaWYgKGlXaW5kb3cgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gaW5mbyB3aW5kb3cgYWxyZWFkeSBkZWxldGVkXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlXaW5kb3cudGhlbihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9pbmZvV2luZG93cy5kZWxldGUoaW5mb1dpbmRvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJbmZvV2luZG93TWFuYWdlci5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoaW5mb1dpbmRvdykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd3MuZ2V0KGluZm9XaW5kb3cpLnRoZW4oZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuc2V0UG9zaXRpb24oe1xuICAgICAgICAgICAgbGF0OiBpbmZvV2luZG93LmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBpbmZvV2luZG93LmxvbmdpdHVkZVxuICAgICAgICB9KTsgfSk7XG4gICAgfTtcbiAgICBJbmZvV2luZG93TWFuYWdlci5wcm90b3R5cGUuc2V0WkluZGV4ID0gZnVuY3Rpb24gKGluZm9XaW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuc2V0WkluZGV4KGluZm9XaW5kb3cuekluZGV4KTsgfSk7XG4gICAgfTtcbiAgICBJbmZvV2luZG93TWFuYWdlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChpbmZvV2luZG93KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbihmdW5jdGlvbiAodykge1xuICAgICAgICAgICAgaWYgKGluZm9XaW5kb3cuaG9zdE1hcmtlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9tYXJrZXJNYW5hZ2VyLmdldE5hdGl2ZU1hcmtlcihpbmZvV2luZG93Lmhvc3RNYXJrZXIpLnRoZW4oZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX21hcHNXcmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gdy5vcGVuKG1hcCwgbWFya2VyKTsgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX21hcHNXcmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkgeyByZXR1cm4gdy5vcGVuKG1hcCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChpbmZvV2luZG93KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbihmdW5jdGlvbiAodykgeyByZXR1cm4gdy5jbG9zZSgpOyB9KTtcbiAgICB9O1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKGluZm9XaW5kb3csIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KS50aGVuKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgSW5mb1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmFkZEluZm9XaW5kb3cgPSBmdW5jdGlvbiAoaW5mb1dpbmRvdykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGluZm9XaW5kb3cuY29udGVudCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBpbmZvV2luZG93Lm1heFdpZHRoLFxuICAgICAgICAgICAgekluZGV4OiBpbmZvV2luZG93LnpJbmRleCxcbiAgICAgICAgICAgIGRpc2FibGVBdXRvUGFuOiBpbmZvV2luZG93LmRpc2FibGVBdXRvUGFuXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2YgaW5mb1dpbmRvdy5sYXRpdHVkZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGluZm9XaW5kb3cubG9uZ2l0dWRlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgb3B0aW9ucy5wb3NpdGlvbiA9IHsgbGF0OiBpbmZvV2luZG93LmxhdGl0dWRlLCBsbmc6IGluZm9XaW5kb3cubG9uZ2l0dWRlIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZm9XaW5kb3dQcm9taXNlID0gdGhpcy5fbWFwc1dyYXBwZXIuY3JlYXRlSW5mb1dpbmRvdyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5faW5mb1dpbmRvd3Muc2V0KGluZm9XaW5kb3csIGluZm9XaW5kb3dQcm9taXNlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIEluZm9XaW5kb3cgYXMgYW4gT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIEluZm9XaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmZvV2luZG93KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGkuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmVyLm5leHQoZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBJbmZvV2luZG93TWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBJbmZvV2luZG93TWFuYWdlciB9O1xuSW5mb1dpbmRvd01hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkluZm9XaW5kb3dNYW5hZ2VyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIH0sXG4gICAgeyB0eXBlOiBOZ1pvbmUsIH0sXG4gICAgeyB0eXBlOiBNYXJrZXJNYW5hZ2VyLCB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZm8td2luZG93LW1hbmFnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbnZhciBQb2x5Z29uTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9seWdvbk1hbmFnZXIoX21hcHNXcmFwcGVyLCBfem9uZSkge1xuICAgICAgICB0aGlzLl9tYXBzV3JhcHBlciA9IF9tYXBzV3JhcHBlcjtcbiAgICAgICAgdGhpcy5fem9uZSA9IF96b25lO1xuICAgICAgICB0aGlzLl9wb2x5Z29ucyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgUG9seWdvbk1hbmFnZXIucHJvdG90eXBlLmFkZFBvbHlnb24gPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB2YXIgcG9seWdvblByb21pc2UgPSB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVQb2x5Z29uKHtcbiAgICAgICAgICAgIGNsaWNrYWJsZTogcGF0aC5jbGlja2FibGUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHBhdGguZHJhZ2dhYmxlLFxuICAgICAgICAgICAgZWRpdGFibGU6IHBhdGguZWRpdGFibGUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHBhdGguZmlsbENvbG9yLFxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IHBhdGguZmlsbE9wYWNpdHksXG4gICAgICAgICAgICBnZW9kZXNpYzogcGF0aC5nZW9kZXNpYyxcbiAgICAgICAgICAgIHBhdGhzOiBwYXRoLnBhdGhzLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHBhdGguc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBwYXRoLnN0cm9rZU9wYWNpdHksXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IHBhdGguc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgdmlzaWJsZTogcGF0aC52aXNpYmxlLFxuICAgICAgICAgICAgekluZGV4OiBwYXRoLnpJbmRleCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3BvbHlnb25zLnNldChwYXRoLCBwb2x5Z29uUHJvbWlzZSk7XG4gICAgfTtcbiAgICBQb2x5Z29uTWFuYWdlci5wcm90b3R5cGUudXBkYXRlUG9seWdvbiA9IGZ1bmN0aW9uIChwb2x5Z29uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtID0gdGhpcy5fcG9seWdvbnMuZ2V0KHBvbHlnb24pO1xuICAgICAgICBpZiAobSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0udGhlbihmdW5jdGlvbiAobCkgeyByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgbC5zZXRQYXRocyhwb2x5Z29uLnBhdGhzKTsgfSk7IH0pO1xuICAgIH07XG4gICAgUG9seWdvbk1hbmFnZXIucHJvdG90eXBlLnNldFBvbHlnb25PcHRpb25zID0gZnVuY3Rpb24gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbHlnb25zLmdldChwYXRoKS50aGVuKGZ1bmN0aW9uIChsKSB7IGwuc2V0T3B0aW9ucyhvcHRpb25zKTsgfSk7XG4gICAgfTtcbiAgICBQb2x5Z29uTWFuYWdlci5wcm90b3R5cGUuZGVsZXRlUG9seWdvbiA9IGZ1bmN0aW9uIChwYXRocykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbSA9IHRoaXMuX3BvbHlnb25zLmdldChwYXRocyk7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS50aGVuKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcG9seWdvbnMuZGVsZXRlKHBhdGhzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFBvbHlnb25NYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBwYXRoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLl9wb2x5Z29ucy5nZXQocGF0aCkudGhlbihmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgICAgIGwuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmVyLm5leHQoZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBQb2x5Z29uTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBQb2x5Z29uTWFuYWdlciB9O1xuUG9seWdvbk1hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblBvbHlnb25NYW5hZ2VyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIH0sXG4gICAgeyB0eXBlOiBOZ1pvbmUsIH0sXG5dOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWdvbi1tYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5Z29uLW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbnZhciBQb2x5bGluZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvbHlsaW5lTWFuYWdlcihfbWFwc1dyYXBwZXIsIF96b25lKSB7XG4gICAgICAgIHRoaXMuX21hcHNXcmFwcGVyID0gX21hcHNXcmFwcGVyO1xuICAgICAgICB0aGlzLl96b25lID0gX3pvbmU7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0UG9pbnRzID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIHBhdGggPSBsaW5lLl9nZXRQb2ludHMoKS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4geyBsYXQ6IHBvaW50LmxhdGl0dWRlLCBsbmc6IHBvaW50LmxvbmdpdHVkZSB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbiAgICBQb2x5bGluZU1hbmFnZXIucHJvdG90eXBlLmFkZFBvbHlsaW5lID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIHBhdGggPSBQb2x5bGluZU1hbmFnZXIuX2NvbnZlcnRQb2ludHMobGluZSk7XG4gICAgICAgIHZhciBwb2x5bGluZVByb21pc2UgPSB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVQb2x5bGluZSh7XG4gICAgICAgICAgICBjbGlja2FibGU6IGxpbmUuY2xpY2thYmxlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBsaW5lLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGVkaXRhYmxlOiBsaW5lLmVkaXRhYmxlLFxuICAgICAgICAgICAgZ2VvZGVzaWM6IGxpbmUuZ2VvZGVzaWMsXG4gICAgICAgICAgICBzdHJva2VDb2xvcjogbGluZS5zdHJva2VDb2xvcixcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IGxpbmUuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgIHN0cm9rZVdlaWdodDogbGluZS5zdHJva2VXZWlnaHQsXG4gICAgICAgICAgICB2aXNpYmxlOiBsaW5lLnZpc2libGUsXG4gICAgICAgICAgICB6SW5kZXg6IGxpbmUuekluZGV4LFxuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVzLnNldChsaW5lLCBwb2x5bGluZVByb21pc2UpO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVQb2x5bGluZVBvaW50cyA9IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwYXRoID0gUG9seWxpbmVNYW5hZ2VyLl9jb252ZXJ0UG9pbnRzKGxpbmUpO1xuICAgICAgICB2YXIgbSA9IHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSk7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS50aGVuKGZ1bmN0aW9uIChsKSB7IHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkgeyBsLnNldFBhdGgocGF0aCk7IH0pOyB9KTtcbiAgICB9O1xuICAgIFBvbHlsaW5lTWFuYWdlci5wcm90b3R5cGUuc2V0UG9seWxpbmVPcHRpb25zID0gZnVuY3Rpb24gKGxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvbHlsaW5lcy5nZXQobGluZSkudGhlbihmdW5jdGlvbiAobCkgeyBsLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLnByb3RvdHlwZS5kZWxldGVQb2x5bGluZSA9IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtID0gdGhpcy5fcG9seWxpbmVzLmdldChsaW5lKTtcbiAgICAgICAgaWYgKG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLnRoZW4oZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fem9uZS5ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGwuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9wb2x5bGluZXMuZGVsZXRlKGxpbmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9seWxpbmVNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsaW5lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLl9wb2x5bGluZXMuZ2V0KGxpbmUpLnRoZW4oZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgICAgICBsLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5uZXh0KGUpOyB9KTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gUG9seWxpbmVNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IFBvbHlsaW5lTWFuYWdlciB9O1xuUG9seWxpbmVNYW5hZ2VyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5Qb2x5bGluZU1hbmFnZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICB7IHR5cGU6IE5nWm9uZSwgfSxcbl07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2x5bGluZS1tYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDYiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbi8qKlxuICogTWFuYWdlcyBhbGwgS01MIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG52YXIgS21sTGF5ZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLbWxMYXllck1hbmFnZXIoX3dyYXBwZXIsIF96b25lKSB7XG4gICAgICAgIHRoaXMuX3dyYXBwZXIgPSBfd3JhcHBlcjtcbiAgICAgICAgdGhpcy5fem9uZSA9IF96b25lO1xuICAgICAgICB0aGlzLl9sYXllcnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBuZXcgS01MIExheWVyIHRvIHRoZSBtYXAuXG4gICAgICovXG4gICAgS21sTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5hZGRLbWxMYXllciA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICB2YXIgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuS21sTGF5ZXIoe1xuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogbGF5ZXIuY2xpY2thYmxlLFxuICAgICAgICAgICAgICAgIG1hcDogbSxcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZVZpZXdwb3J0OiBsYXllci5wcmVzZXJ2ZVZpZXdwb3J0LFxuICAgICAgICAgICAgICAgIHNjcmVlbk92ZXJsYXlzOiBsYXllci5zY3JlZW5PdmVybGF5cyxcbiAgICAgICAgICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBsYXllci5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICAgICAgICAgIHVybDogbGF5ZXIudXJsLFxuICAgICAgICAgICAgICAgIHpJbmRleDogbGF5ZXIuekluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2xheWVycy5zZXQobGF5ZXIsIG5ld0xheWVyKTtcbiAgICB9O1xuICAgIEttbExheWVyTWFuYWdlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChsYXllciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsLnNldE9wdGlvbnMob3B0aW9ucyk7IH0pO1xuICAgIH07XG4gICAgS21sTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5kZWxldGVLbWxMYXllciA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIF90aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgS21sTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVFdmVudE9ic2VydmFibGUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBfdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIG0uYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuX3pvbmUucnVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmVyLm5leHQoZSk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBLbWxMYXllck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgS21sTGF5ZXJNYW5hZ2VyIH07XG5LbWxMYXllck1hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkttbExheWVyTWFuYWdlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEdvb2dsZU1hcHNBUElXcmFwcGVyLCB9LFxuICAgIHsgdHlwZTogTmdab25lLCB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWttbC1sYXllci1tYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG4vKipcbiAqIE1hbmFnZXMgYWxsIERhdGEgTGF5ZXJzIGZvciBhIEdvb2dsZSBNYXAgaW5zdGFuY2UuXG4gKi9cbnZhciBEYXRhTGF5ZXJNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRhTGF5ZXJNYW5hZ2VyKF93cmFwcGVyLCBfem9uZSkge1xuICAgICAgICB0aGlzLl93cmFwcGVyID0gX3dyYXBwZXI7XG4gICAgICAgIHRoaXMuX3pvbmUgPSBfem9uZTtcbiAgICAgICAgdGhpcy5fbGF5ZXJzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbmV3IERhdGEgTGF5ZXIgdG8gdGhlIG1hcC5cbiAgICAgKi9cbiAgICBEYXRhTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS5hZGREYXRhTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5ld0xheWVyID0gdGhpcy5fd3JhcHBlci5jcmVhdGVEYXRhTGF5ZXIoe1xuICAgICAgICAgICAgc3R5bGU6IGxheWVyLnN0eWxlXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKGxheWVyLmdlb0pzb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nZXREYXRhRmVhdHVyZXMoZCwgbGF5ZXIuZ2VvSnNvbikudGhlbihmdW5jdGlvbiAoZmVhdHVyZXMpIHsgcmV0dXJuIGQuZmVhdHVyZXMgPSBmZWF0dXJlczsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2xheWVycy5zZXQobGF5ZXIsIG5ld0xheWVyKTtcbiAgICB9O1xuICAgIERhdGFMYXllck1hbmFnZXIucHJvdG90eXBlLmRlbGV0ZURhdGFMYXllciA9IGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICBsLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgIF90aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXRhTGF5ZXJNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVHZW9Kc29uID0gZnVuY3Rpb24gKGxheWVyLCBnZW9Kc29uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIGwuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIGwucmVtb3ZlKGZlYXR1cmUpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGwuZmVhdHVyZXMuaW5kZXhPZihmZWF0dXJlLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsLmZlYXR1cmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5nZXREYXRhRmVhdHVyZXMobCwgZ2VvSnNvbikudGhlbihmdW5jdGlvbiAoZmVhdHVyZXMpIHsgcmV0dXJuIGwuZmVhdHVyZXMgPSBmZWF0dXJlczsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF0YUxheWVyTWFuYWdlci5wcm90b3R5cGUuc2V0RGF0YU9wdGlvbnMgPSBmdW5jdGlvbiAobGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgbC5zZXRDb250cm9sUG9zaXRpb24ob3B0aW9ucy5jb250cm9sUG9zaXRpb24pO1xuICAgICAgICAgICAgbC5zZXRDb250cm9scyhvcHRpb25zLmNvbnRyb2xzKTtcbiAgICAgICAgICAgIGwuc2V0RHJhd2luZ01vZGUob3B0aW9ucy5kcmF3aW5nTW9kZSk7XG4gICAgICAgICAgICBsLnNldFN0eWxlKG9wdGlvbnMuc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBHb29nbGUgTWFwcyBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIERhdGFMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgRGF0YUxheWVyTWFuYWdlci5wcm90b3R5cGUuY3JlYXRlRXZlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgbGF5ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgX3RoaXMuX2xheWVycy5nZXQobGF5ZXIpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBkLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLl96b25lLnJ1bihmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5uZXh0KGUpOyB9KTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGZlYXR1cmVzIGZyb20gYSBnZW9Kc29uIHVzaW5nIGdvb2dsZS5tYXBzIERhdGEgQ2xhc3NcbiAgICAgKiBAcGFyYW0gZCA6IGdvb2dsZS5tYXBzLkRhdGEgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gZ2VvSnNvbiA6IHVybCBvciBnZW9qc29uIG9iamVjdFxuICAgICAqL1xuICAgIERhdGFMYXllck1hbmFnZXIucHJvdG90eXBlLmdldERhdGFGZWF0dXJlcyA9IGZ1bmN0aW9uIChkLCBnZW9Kc29uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGdlb0pzb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVzID0gZC5hZGRHZW9Kc29uKGdlb0pzb24pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBnZW9Kc29uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGQubG9hZEdlb0pzb24oZ2VvSnNvbiwgbnVsbCwgcmVzb2x2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJJbXBvc3NpYmxlIHRvIGV4dHJhY3QgZmVhdHVyZXMgZnJvbSBnZW9Kc29uOiB3cm9uZyBhcmd1bWVudCB0eXBlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEYXRhTGF5ZXJNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IERhdGFMYXllck1hbmFnZXIgfTtcbkRhdGFMYXllck1hbmFnZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkRhdGFMYXllck1hbmFnZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgfSxcbiAgICB7IHR5cGU6IE5nWm9uZSwgfSxcbl07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhLWxheWVyLW1hbmFnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZm9XaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvaW5mby13aW5kb3ctbWFuYWdlcic7XG52YXIgaW5mb1dpbmRvd0lkID0gMDtcbi8qKlxuICogQWdtSW5mb1dpbmRvdyByZW5kZXJzIGEgaW5mbyB3aW5kb3cgaW5zaWRlIGEge0BsaW5rIEFnbU1hcmtlcn0gb3Igc3RhbmRhbG9uZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW2xhYmVsXT1cIidNJ1wiPlxuICogICAgICAgIDxhZ20taW5mby13aW5kb3cgW2Rpc2FibGVBdXRvUGFuXT1cInRydWVcIj5cbiAqICAgICAgICAgIEhpLCB0aGlzIGlzIHRoZSBjb250ZW50IG9mIHRoZSA8c3Ryb25nPmluZm8gd2luZG93PC9zdHJvbmc+XG4gKiAgICAgICAgPC9hZ20taW5mby13aW5kb3c+XG4gKiAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbnZhciBBZ21JbmZvV2luZG93ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZ21JbmZvV2luZG93KF9pbmZvV2luZG93TWFuYWdlciwgX2VsKSB7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyID0gX2luZm9XaW5kb3dNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9lbCA9IF9lbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIG9wZW4gc3RhdGUgZm9yIHRoZSBJbmZvV2luZG93LiBZb3UgY2FuIGFsc28gY2FsbCB0aGUgb3BlbigpIGFuZCBjbG9zZSgpIG1ldGhvZHMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaW5mbyB3aW5kb3cgaXMgY2xvc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbmZvV2luZG93Q2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pZCA9IChpbmZvV2luZG93SWQrKykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1pbmZvLXdpbmRvdy1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmFkZEluZm9XaW5kb3codGhpcyk7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wZW5TdGF0ZSgpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoIXRoaXMuX2luZm9XaW5kb3dBZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkgJiYgdHlwZW9mIHRoaXMubGF0aXR1ZGUgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5sb25naXR1ZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRQb3NpdGlvbih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snekluZGV4J10pIHtcbiAgICAgICAgICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLnNldFpJbmRleCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaXNPcGVuJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU9wZW5TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldEluZm9XaW5kb3dPcHRpb25zKGNoYW5nZXMpO1xuICAgIH07XG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUuX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnY2xvc2VjbGljaycsIHRoaXMpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmluZm9XaW5kb3dDbG9zZS5lbWl0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUuX3VwZGF0ZU9wZW5TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPyB0aGlzLm9wZW4oKSA6IHRoaXMuY2xvc2UoKTtcbiAgICB9O1xuICAgIEFnbUluZm9XaW5kb3cucHJvdG90eXBlLl9zZXRJbmZvV2luZG93T3B0aW9ucyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgIHZhciBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBBZ21JbmZvV2luZG93Ll9pbmZvV2luZG93T3B0aW9uc0lucHV0cy5pbmRleE9mKGspICE9PSAtMTsgfSk7XG4gICAgICAgIG9wdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7IH0pO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIGluZm8gd2luZG93LlxuICAgICAqL1xuICAgIEFnbUluZm9XaW5kb3cucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5vcGVuKHRoaXMpOyB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgaW5mbyB3aW5kb3cuXG4gICAgICovXG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93TWFuYWdlci5jbG9zZSh0aGlzKS50aGVuKGZ1bmN0aW9uICgpIHsgX3RoaXMuaW5mb1dpbmRvd0Nsb3NlLmVtaXQoKTsgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pZDsgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnQWdtSW5mb1dpbmRvdy0nICsgdGhpcy5faWQudG9TdHJpbmcoKTsgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtSW5mb1dpbmRvdy5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX2luZm9XaW5kb3dNYW5hZ2VyLmRlbGV0ZUluZm9XaW5kb3codGhpcyk7IH07XG4gICAgcmV0dXJuIEFnbUluZm9XaW5kb3c7XG59KCkpO1xuZXhwb3J0IHsgQWdtSW5mb1dpbmRvdyB9O1xuQWdtSW5mb1dpbmRvdy5faW5mb1dpbmRvd09wdGlvbnNJbnB1dHMgPSBbJ2Rpc2FibGVBdXRvUGFuJywgJ21heFdpZHRoJ107XG5BZ21JbmZvV2luZG93LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhZ20taW5mby13aW5kb3cnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9J2FnbS1pbmZvLXdpbmRvdy1jb250ZW50Jz5cXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuICAgIDwvZGl2PlxcbiAgXCJcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuQWdtSW5mb1dpbmRvdy5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEluZm9XaW5kb3dNYW5hZ2VyLCB9LFxuICAgIHsgdHlwZTogRWxlbWVudFJlZiwgfSxcbl07IH07XG5BZ21JbmZvV2luZG93LnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdsYXRpdHVkZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnbG9uZ2l0dWRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdkaXNhYmxlQXV0b1Bhbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnekluZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdtYXhXaWR0aCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNPcGVuJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpbmZvV2luZG93Q2xvc2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZm8td2luZG93LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9kaXJlY3RpdmVzL2luZm8td2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDYiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBBZ21Qb2x5bGluZVBvaW50IHJlcHJlc2VudHMgb25lIGVsZW1lbnQgb2YgYSBwb2x5bGluZSB3aXRoaW4gYSAge0BsaW5rXG4gKiBTZW1iR29vZ2xlTWFwUG9seWxpbmV9XG4gKi9cbnZhciBBZ21Qb2x5bGluZVBvaW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZ21Qb2x5bGluZVBvaW50KCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9pbnQgY2hhbmdlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBBZ21Qb2x5bGluZVBvaW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydsYXRpdHVkZSddIHx8IGNoYW5nZXNbJ2xvbmdpdHVkZSddKSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgbGF0OiBjaGFuZ2VzWydsYXRpdHVkZSddLmN1cnJlbnRWYWx1ZSxcbiAgICAgICAgICAgICAgICBsbmc6IGNoYW5nZXNbJ2xvbmdpdHVkZSddLmN1cnJlbnRWYWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2VkLmVtaXQocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQWdtUG9seWxpbmVQb2ludDtcbn0oKSk7XG5leHBvcnQgeyBBZ21Qb2x5bGluZVBvaW50IH07XG5BZ21Qb2x5bGluZVBvaW50LmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnYWdtLXBvbHlsaW5lLXBvaW50JyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkFnbVBvbHlsaW5lUG9pbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbkFnbVBvbHlsaW5lUG9pbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2xhdGl0dWRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdsb25naXR1ZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3Bvc2l0aW9uQ2hhbmdlZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWxpbmUtcG9pbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvcG9seWxpbmUtcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDEwMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRSZWYsIFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3V0aWxzL2Jyb3dzZXItZ2xvYmFscyc7XG5pbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXInO1xuZXhwb3J0IHZhciBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2w7XG4oZnVuY3Rpb24gKEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbCkge1xuICAgIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbFtHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2xbXCJIVFRQXCJdID0gMV0gPSBcIkhUVFBcIjtcbiAgICBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2xbR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sW1wiSFRUUFNcIl0gPSAyXSA9IFwiSFRUUFNcIjtcbiAgICBHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2xbR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sW1wiQVVUT1wiXSA9IDNdID0gXCJBVVRPXCI7XG59KShHb29nbGVNYXBzU2NyaXB0UHJvdG9jb2wgfHwgKEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbCA9IHt9KSk7XG4vKipcbiAqIFRva2VuIGZvciB0aGUgY29uZmlnIG9mIHRoZSBMYXp5TWFwc0FQSUxvYWRlci4gUGxlYXNlIHByb3ZpZGUgYW4gb2JqZWN0IG9mIHR5cGUge0BsaW5rXG4gKiBMYXp5TWFwc0FQSUxvYWRlckNvbmZpZ30uXG4gKi9cbmV4cG9ydCB2YXIgTEFaWV9NQVBTX0FQSV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2FuZ3VsYXItZ29vZ2xlLW1hcHMgTEFaWV9NQVBTX0FQSV9DT05GSUcnKTtcbnZhciBMYXp5TWFwc0FQSUxvYWRlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExhenlNYXBzQVBJTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExhenlNYXBzQVBJTG9hZGVyKGNvbmZpZywgdywgZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgICBfdGhpcy5fd2luZG93UmVmID0gdztcbiAgICAgICAgX3RoaXMuX2RvY3VtZW50UmVmID0gZDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMYXp5TWFwc0FQSUxvYWRlci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX3NjcmlwdExvYWRpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NyaXB0TG9hZGluZ1Byb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjcmlwdCA9IHRoaXMuX2RvY3VtZW50UmVmLmdldE5hdGl2ZURvY3VtZW50KCkuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICAgIHZhciBjYWxsYmFja05hbWUgPSBcImFuZ3VsYXIyR29vZ2xlTWFwc0xhenlNYXBzQVBJTG9hZGVyXCI7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB0aGlzLl9nZXRTY3JpcHRTcmMoY2FsbGJhY2tOYW1lKTtcbiAgICAgICAgdGhpcy5fc2NyaXB0TG9hZGluZ1Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5fd2luZG93UmVmLmdldE5hdGl2ZVdpbmRvdygpW2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9kb2N1bWVudFJlZi5nZXROYXRpdmVEb2N1bWVudCgpLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmlwdExvYWRpbmdQcm9taXNlO1xuICAgIH07XG4gICAgTGF6eU1hcHNBUElMb2FkZXIucHJvdG90eXBlLl9nZXRTY3JpcHRTcmMgPSBmdW5jdGlvbiAoY2FsbGJhY2tOYW1lKSB7XG4gICAgICAgIHZhciBwcm90b2NvbFR5cGUgPSAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5wcm90b2NvbCkgfHwgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sLkhUVFBTO1xuICAgICAgICB2YXIgcHJvdG9jb2w7XG4gICAgICAgIHN3aXRjaCAocHJvdG9jb2xUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5BVVRPOlxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbC5IVFRQOlxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJ2h0dHA6JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR29vZ2xlTWFwc1NjcmlwdFByb3RvY29sLkhUVFBTOlxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gJ2h0dHBzOic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhvc3RBbmRQYXRoID0gdGhpcy5fY29uZmlnLmhvc3RBbmRQYXRoIHx8ICdtYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzJztcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICAgICAgdjogdGhpcy5fY29uZmlnLmFwaVZlcnNpb24gfHwgJzMnLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrTmFtZSxcbiAgICAgICAgICAgIGtleTogdGhpcy5fY29uZmlnLmFwaUtleSxcbiAgICAgICAgICAgIGNsaWVudDogdGhpcy5fY29uZmlnLmNsaWVudElkLFxuICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5fY29uZmlnLmNoYW5uZWwsXG4gICAgICAgICAgICBsaWJyYXJpZXM6IHRoaXMuX2NvbmZpZy5saWJyYXJpZXMsXG4gICAgICAgICAgICByZWdpb246IHRoaXMuX2NvbmZpZy5yZWdpb24sXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5fY29uZmlnLmxhbmd1YWdlXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcylcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIHF1ZXJ5UGFyYW1zW2tdICE9IG51bGw7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgZW1wdHkgYXJyYXlzXG4gICAgICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkocXVlcnlQYXJhbXNba10pIHx8XG4gICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkocXVlcnlQYXJhbXNba10pICYmIHF1ZXJ5UGFyYW1zW2tdLmxlbmd0aCA+IDApO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgLy8gam9pbiBhcnJheXMgYXMgY29tbWEgc2VwZXJhdGVkIHN0cmluZ3NcbiAgICAgICAgICAgIHZhciBpID0gcXVlcnlQYXJhbXNba107XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGtleTogaywgdmFsdWU6IGkuam9pbignLCcpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGssIHZhbHVlOiBxdWVyeVBhcmFtc1trXSB9O1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5rZXkgKyBcIj1cIiArIGVudHJ5LnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICAgICAgcmV0dXJuIHByb3RvY29sICsgXCIvL1wiICsgaG9zdEFuZFBhdGggKyBcIj9cIiArIHBhcmFtcztcbiAgICB9O1xuICAgIHJldHVybiBMYXp5TWFwc0FQSUxvYWRlcjtcbn0oTWFwc0FQSUxvYWRlcikpO1xuZXhwb3J0IHsgTGF6eU1hcHNBUElMb2FkZXIgfTtcbkxhenlNYXBzQVBJTG9hZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5MYXp5TWFwc0FQSUxvYWRlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IHVuZGVmaW5lZCwgZGVjb3JhdG9yczogW3sgdHlwZTogSW5qZWN0LCBhcmdzOiBbTEFaWV9NQVBTX0FQSV9DT05GSUcsXSB9LF0gfSxcbiAgICB7IHR5cGU6IFdpbmRvd1JlZiwgfSxcbiAgICB7IHR5cGU6IERvY3VtZW50UmVmLCB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxhenktbWFwcy1hcGktbG9hZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IENpcmNsZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jaXJjbGUtbWFuYWdlcic7XG5pbXBvcnQgeyBJbmZvV2luZG93TWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXInO1xuaW1wb3J0IHsgTWFya2VyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcbmltcG9ydCB7IFBvbHlnb25NYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFBvbHlsaW5lTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlsaW5lLW1hbmFnZXInO1xuaW1wb3J0IHsgS21sTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgeyBEYXRhTGF5ZXJNYW5hZ2VyIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9tYW5hZ2Vycy9kYXRhLWxheWVyLW1hbmFnZXInO1xuLyoqXG4gKiBBZ21NYXAgcmVuZGVycyBhIEdvb2dsZSBNYXAuXG4gKiAqKkltcG9ydGFudCBub3RlKio6IFRvIGJlIGFibGUgc2VlIGEgbWFwIGluIHRoZSBicm93c2VyLCB5b3UgaGF2ZSB0byBkZWZpbmUgYSBoZWlnaHQgZm9yIHRoZVxuICogZWxlbWVudCBgYWdtLW1hcGAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xudmFyIEFnbU1hcCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWdtTWFwKF9lbGVtLCBfbWFwc1dyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5fZWxlbSA9IF9lbGVtO1xuICAgICAgICB0aGlzLl9tYXBzV3JhcHBlciA9IF9tYXBzV3JhcHBlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsb25naXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYXRpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLiBUaGUgZGVmYXVsdCB6b29tIGxldmVsIGlzIDguXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnpvb20gPSA4O1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBpZiBtYXAgaXMgZHJhZ2dhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIHpvb20gYW5kIGNlbnRlciBvbiBkb3VibGUgY2xpY2suIEVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBhbGwgZGVmYXVsdCBVSSBvZiB0aGUgR29vZ2xlIG1hcC4gUGxlYXNlIG5vdGU6IFdoZW4gdGhlIG1hcCBpcyBjcmVhdGVkLCB0aGlzXG4gICAgICAgICAqIHZhbHVlIGNhbm5vdCBnZXQgdXBkYXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZURlZmF1bHRVSSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2Nyb2xsd2hlZWwgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgZmFsc2UsIHByZXZlbnRzIHRoZSBtYXAgZnJvbSBiZWluZyBjb250cm9sbGVkIGJ5IHRoZSBrZXlib2FyZC4gS2V5Ym9hcmQgc2hvcnRjdXRzIGFyZVxuICAgICAgICAgKiBlbmFibGVkIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleWJvYXJkU2hvcnRjdXRzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBab29tIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnpvb21Db250cm9sID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0eWxlcyB0byBhcHBseSB0byBlYWNoIG9mIHRoZSBkZWZhdWx0IG1hcCB0eXBlcy4gTm90ZSB0aGF0IGZvciBTYXRlbGxpdGUvSHlicmlkIGFuZCBUZXJyYWluXG4gICAgICAgICAqIG1vZGVzLCB0aGVzZSBzdHlsZXMgd2lsbCBvbmx5IGFwcGx5IHRvIGxhYmVscyBhbmQgZ2VvbWV0cnkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0eWxlcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlIGFuZCB0aGUgbGF0aXR1ZGUgYW5kL29yIGxvbmdpdHVkZSB2YWx1ZXMgY2hhbmdlcywgdGhlIEdvb2dsZSBNYXBzIHBhblRvIG1ldGhvZCBpc1xuICAgICAgICAgKiB1c2VkIHRvXG4gICAgICAgICAqIGNlbnRlciB0aGUgbWFwLiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXNlUGFubmluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgU3RyZWV0IFZpZXcgUGVnbWFuIGNvbnRyb2wuXG4gICAgICAgICAqIFRoaXMgY29udHJvbCBpcyBwYXJ0IG9mIHRoZSBkZWZhdWx0IFVJLCBhbmQgc2hvdWxkIGJlIHNldCB0byBmYWxzZSB3aGVuIGRpc3BsYXlpbmcgYSBtYXAgdHlwZVxuICAgICAgICAgKiBvbiB3aGljaCB0aGUgU3RyZWV0IFZpZXcgcm9hZCBvdmVybGF5IHNob3VsZCBub3QgYXBwZWFyIChlLmcuIGEgbm9uLUVhcnRoIG1hcCB0eXBlKS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RyZWV0Vmlld0NvbnRyb2wgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgdmlld3BvcnQgdG8gY29udGFpbiB0aGUgZ2l2ZW4gYm91bmRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maXRCb3VuZHMgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgU2NhbGUgY29udHJvbC4gVGhpcyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2FsZUNvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIE1hcCB0eXBlIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hcFR5cGVDb250cm9sID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW5pdGlhbCBlbmFibGVkL2Rpc2FibGVkIHN0YXRlIG9mIHRoZSBQYW4gY29udHJvbC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGFuQ29udHJvbCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluaXRpYWwgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZSBvZiB0aGUgUm90YXRlIGNvbnRyb2wuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdGF0ZUNvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbml0aWFsIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIEZ1bGxzY3JlZW4gY29udHJvbC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkNvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXAgbWFwVHlwZUlkLiBEZWZhdWx0cyB0byAncm9hZG1hcCcuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hcFR5cGVJZCA9ICdyb2FkbWFwJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gZmFsc2UsIG1hcCBpY29ucyBhcmUgbm90IGNsaWNrYWJsZS4gQSBtYXAgaWNvbiByZXByZXNlbnRzIGEgcG9pbnQgb2YgaW50ZXJlc3QsXG4gICAgICAgICAqIGFsc28ga25vd24gYXMgYSBQT0kuIEJ5IGRlZmF1bHQgbWFwIGljb25zIGFyZSBjbGlja2FibGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWNrYWJsZUljb25zID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2V0dGluZyBjb250cm9scyBob3cgZ2VzdHVyZXMgb24gdGhlIG1hcCBhcmUgaGFuZGxlZC5cbiAgICAgICAgICogQWxsb3dlZCB2YWx1ZXM6XG4gICAgICAgICAqIC0gJ2Nvb3BlcmF0aXZlJyAoVHdvLWZpbmdlciB0b3VjaCBnZXN0dXJlcyBwYW4gYW5kIHpvb20gdGhlIG1hcC4gT25lLWZpbmdlciB0b3VjaCBnZXN0dXJlcyBhcmUgbm90IGhhbmRsZWQgYnkgdGhlIG1hcC4pXG4gICAgICAgICAqIC0gJ2dyZWVkeScgICAgICAoQWxsIHRvdWNoIGdlc3R1cmVzIHBhbiBvciB6b29tIHRoZSBtYXAuKVxuICAgICAgICAgKiAtICdub25lJyAgICAgICAgKFRoZSBtYXAgY2Fubm90IGJlIHBhbm5lZCBvciB6b29tZWQgYnkgdXNlciBnZXN0dXJlcy4pXG4gICAgICAgICAqIC0gJ2F1dG8nICAgICAgICBbZGVmYXVsdF0gKEdlc3R1cmUgaGFuZGxpbmcgaXMgZWl0aGVyIGNvb3BlcmF0aXZlIG9yIGdyZWVkeSwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHBhZ2UgaXMgc2Nyb2xsYWJsZSBvciBub3QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdlc3R1cmVIYW5kbGluZyA9ICdhdXRvJztcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2sgb24gYVxuICAgICAgICAgKiBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIHJpZ2h0LWNsaWNrcyBvbiB0aGUgbWFwIChidXQgbm90IHdoZW4gdGhleSBjbGlja1xuICAgICAgICAgKiBvbiBhIG1hcmtlciBvciBpbmZvV2luZG93KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWFwUmlnaHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAgICAgICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXBEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgY2VudGVyIGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNlbnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdmlld3BvcnQgYm91bmRzIGhhdmUgY2hhbmdlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm91bmRzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXAgYmVjb21lcyBpZGxlIGFmdGVyIHBhbm5pbmcgb3Igem9vbWluZy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWRsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgem9vbSBsZXZlbCBoYXMgY2hhbmdlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgZ29vZ2xlIG1hcCBpcyBmdWxseSBpbml0aWFsaXplZC5cbiAgICAgICAgICogWW91IGdldCB0aGUgZ29vZ2xlLm1hcHMuTWFwIGluc3RhbmNlIGFzIGEgcmVzdWx0IG9mIHRoaXMgRXZlbnRFbWl0dGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXBSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbU1hcC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRvZG86IHRoaXMgc2hvdWxkIGJlIHNvbHZlZCB3aXRoIGEgbmV3IGNvbXBvbmVudCBhbmQgYSB2aWV3Q2hpbGQgZGVjb3JhdG9yXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFnbS1tYXAtY29udGFpbmVyLWlubmVyJyk7XG4gICAgICAgIHRoaXMuX2luaXRNYXBJbnN0YW5jZShjb250YWluZXIpO1xuICAgIH07XG4gICAgQWdtTWFwLnByb3RvdHlwZS5faW5pdE1hcEluc3RhbmNlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZU1hcChlbCwge1xuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogdGhpcy5sYXRpdHVkZSB8fCAwLCBsbmc6IHRoaXMubG9uZ2l0dWRlIHx8IDAgfSxcbiAgICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRoaXMuZGlzYWJsZURlZmF1bHRVSSxcbiAgICAgICAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRoaXMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSxcbiAgICAgICAgICAgIHNjcm9sbHdoZWVsOiB0aGlzLnNjcm9sbHdoZWVsLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICAgICAgICBkcmFnZ2FibGVDdXJzb3I6IHRoaXMuZHJhZ2dhYmxlQ3Vyc29yLFxuICAgICAgICAgICAgZHJhZ2dpbmdDdXJzb3I6IHRoaXMuZHJhZ2dpbmdDdXJzb3IsXG4gICAgICAgICAgICBrZXlib2FyZFNob3J0Y3V0czogdGhpcy5rZXlib2FyZFNob3J0Y3V0cyxcbiAgICAgICAgICAgIHN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczogdGhpcy56b29tQ29udHJvbE9wdGlvbnMsXG4gICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogdGhpcy5zdHJlZXRWaWV3Q29udHJvbCxcbiAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sT3B0aW9uczogdGhpcy5zdHJlZXRWaWV3Q29udHJvbE9wdGlvbnMsXG4gICAgICAgICAgICBzY2FsZUNvbnRyb2w6IHRoaXMuc2NhbGVDb250cm9sLFxuICAgICAgICAgICAgc2NhbGVDb250cm9sT3B0aW9uczogdGhpcy5zY2FsZUNvbnRyb2xPcHRpb25zLFxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRoaXMubWFwVHlwZUNvbnRyb2wsXG4gICAgICAgICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHRoaXMubWFwVHlwZUNvbnRyb2xPcHRpb25zLFxuICAgICAgICAgICAgcGFuQ29udHJvbDogdGhpcy5wYW5Db250cm9sLFxuICAgICAgICAgICAgcGFuQ29udHJvbE9wdGlvbnM6IHRoaXMucGFuQ29udHJvbE9wdGlvbnMsXG4gICAgICAgICAgICByb3RhdGVDb250cm9sOiB0aGlzLnJvdGF0ZUNvbnRyb2wsXG4gICAgICAgICAgICByb3RhdGVDb250cm9sT3B0aW9uczogdGhpcy5yb3RhdGVDb250cm9sT3B0aW9ucyxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sLFxuICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiB0aGlzLmZ1bGxzY3JlZW5Db250cm9sT3B0aW9ucyxcbiAgICAgICAgICAgIG1hcFR5cGVJZDogdGhpcy5tYXBUeXBlSWQsXG4gICAgICAgICAgICBjbGlja2FibGVJY29uczogdGhpcy5jbGlja2FibGVJY29ucyxcbiAgICAgICAgICAgIGdlc3R1cmVIYW5kbGluZzogdGhpcy5nZXN0dXJlSGFuZGxpbmdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9tYXBzV3JhcHBlci5nZXROYXRpdmVNYXAoKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChtYXApIHsgcmV0dXJuIF90aGlzLm1hcFJlYWR5LmVtaXQobWFwKTsgfSk7XG4gICAgICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICB0aGlzLl9oYW5kbGVNYXBDZW50ZXJDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5faGFuZGxlTWFwWm9vbUNoYW5nZSgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVNYXBNb3VzZUV2ZW50cygpO1xuICAgICAgICB0aGlzLl9oYW5kbGVCb3VuZHNDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSWRsZUV2ZW50KCk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtTWFwLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudW5zdWJzY3JpYmUoKTsgfSk7XG4gICAgfTtcbiAgICAvKiBAaW50ZXJuYWwgKi9cbiAgICBBZ21NYXAucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlTWFwT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKGNoYW5nZXMpO1xuICAgIH07XG4gICAgQWdtTWFwLnByb3RvdHlwZS5fdXBkYXRlTWFwT3B0aW9uc0NoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgICB2YXIgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gQWdtTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcy5pbmRleE9mKGspICE9PSAtMTsgfSk7XG4gICAgICAgIG9wdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7IH0pO1xuICAgICAgICB0aGlzLl9tYXBzV3JhcHBlci5zZXRNYXBPcHRpb25zKG9wdGlvbnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSByZXNpemUgZXZlbnQgb24gdGhlIGdvb2dsZSBtYXAgaW5zdGFuY2UuXG4gICAgICogV2hlbiByZWNlbnRlciBpcyB0cnVlLCB0aGUgb2YgdGhlIGdvb2dsZSBtYXAgZ2V0cyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCBsYXQvbG5nIHZhbHVlcyBvciBmaXRCb3VuZHMgdmFsdWUgdG8gcmVjZW50ZXIgdGhlIG1hcC5cbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGdldHMgcmVzb2x2ZWQgYWZ0ZXIgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICovXG4gICAgQWdtTWFwLnByb3RvdHlwZS50cmlnZ2VyUmVzaXplID0gZnVuY3Rpb24gKHJlY2VudGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyZWNlbnRlciA9PT0gdm9pZCAwKSB7IHJlY2VudGVyID0gdHJ1ZTsgfVxuICAgICAgICAvLyBOb3RlOiBXaGVuIHdlIHdvdWxkIHRyaWdnZXIgdGhlIHJlc2l6ZSBldmVudCBhbmQgc2hvdyB0aGUgbWFwIGluIHRoZSBzYW1lIHR1cm4gKHdoaWNoIGlzIGFcbiAgICAgICAgLy8gY29tbW9uIGNhc2UgZm9yIHRyaWdnZXJpbmcgYSByZXNpemUgZXZlbnQpLCB0aGVuIHRoZSByZXNpemUgZXZlbnQgd291bGQgbm90XG4gICAgICAgIC8vIHdvcmsgKHRvIHNob3cgdGhlIG1hcCksIHNvIHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluIGEgdGltZW91dC5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX21hcHNXcmFwcGVyLnRyaWdnZXJNYXBFdmVudCgncmVzaXplJykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZml0Qm91bmRzICE9IG51bGwgPyBfdGhpcy5fZml0Qm91bmRzKCkgOiBfdGhpcy5fc2V0Q2VudGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQWdtTWFwLnByb3RvdHlwZS5fdXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSA9PSBudWxsICYmIGNoYW5nZXNbJ2xvbmdpdHVkZSddID09IG51bGwgJiZcbiAgICAgICAgICAgIGNoYW5nZXNbJ2ZpdEJvdW5kcyddID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIHBvc2l0aW9uIHVwZGF0ZSBuZWVkZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBwcmVmZXIgZml0Qm91bmRzIGluIGNoYW5nZXNcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ZpdEJvdW5kcyddICYmIHRoaXMuZml0Qm91bmRzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpdEJvdW5kcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldENlbnRlcigpO1xuICAgIH07XG4gICAgQWdtTWFwLnByb3RvdHlwZS5fc2V0Q2VudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3Q2VudGVyID0ge1xuICAgICAgICAgICAgbGF0OiB0aGlzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiB0aGlzLmxvbmdpdHVkZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMudXNlUGFubmluZykge1xuICAgICAgICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG8obmV3Q2VudGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnNldENlbnRlcihuZXdDZW50ZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBZ21NYXAucHJvdG90eXBlLl9maXRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZVBhbm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcHNXcmFwcGVyLnBhblRvQm91bmRzKHRoaXMuZml0Qm91bmRzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXBzV3JhcHBlci5maXRCb3VuZHModGhpcy5maXRCb3VuZHMpO1xuICAgIH07XG4gICAgQWdtTWFwLnByb3RvdHlwZS5faGFuZGxlTWFwQ2VudGVyQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcyA9IHRoaXMuX21hcHNXcmFwcGVyLnN1YnNjcmliZVRvTWFwRXZlbnQoJ2NlbnRlcl9jaGFuZ2VkJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9tYXBzV3JhcHBlci5nZXRDZW50ZXIoKS50aGVuKGZ1bmN0aW9uIChjZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5sYXRpdHVkZSA9IGNlbnRlci5sYXQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb25naXR1ZGUgPSBjZW50ZXIubG5nKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2VudGVyQ2hhbmdlLmVtaXQoeyBsYXQ6IF90aGlzLmxhdGl0dWRlLCBsbmc6IF90aGlzLmxvbmdpdHVkZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9O1xuICAgIEFnbU1hcC5wcm90b3R5cGUuX2hhbmRsZUJvdW5kc0NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KCdib3VuZHNfY2hhbmdlZCcpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Qm91bmRzKCkudGhlbihmdW5jdGlvbiAoYm91bmRzKSB7IF90aGlzLmJvdW5kc0NoYW5nZS5lbWl0KGJvdW5kcyk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9O1xuICAgIEFnbU1hcC5wcm90b3R5cGUuX2hhbmRsZU1hcFpvb21DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnem9vbV9jaGFuZ2VkJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9tYXBzV3JhcHBlci5nZXRab29tKCkudGhlbihmdW5jdGlvbiAoeikge1xuICAgICAgICAgICAgICAgIF90aGlzLnpvb20gPSB6O1xuICAgICAgICAgICAgICAgIF90aGlzLnpvb21DaGFuZ2UuZW1pdCh6KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChzKTtcbiAgICB9O1xuICAgIEFnbU1hcC5wcm90b3R5cGUuX2hhbmRsZUlkbGVFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KCdpZGxlJykuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgX3RoaXMuaWRsZS5lbWl0KHZvaWQgMCk7IH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICAgIH07XG4gICAgQWdtTWFwLnByb3RvdHlwZS5faGFuZGxlTWFwTW91c2VFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBldmVudHMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwQ2xpY2sgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3JpZ2h0Y2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcFJpZ2h0Q2xpY2sgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RibGNsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBEYmxDbGljayB9LFxuICAgICAgICBdO1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHMgPSBfdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudChlLm5hbWUpLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB7IGNvb3JkczogeyBsYXQ6IGV2ZW50LmxhdExuZy5sYXQoKSwgbG5nOiBldmVudC5sYXRMbmcubG5nKCkgfSB9O1xuICAgICAgICAgICAgICAgIGUuZW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFnbU1hcDtcbn0oKSk7XG5leHBvcnQgeyBBZ21NYXAgfTtcbi8qKlxuICogTWFwIG9wdGlvbiBhdHRyaWJ1dGVzIHRoYXQgY2FuIGNoYW5nZSBvdmVyIHRpbWVcbiAqL1xuQWdtTWFwLl9tYXBPcHRpb25zQXR0cmlidXRlcyA9IFtcbiAgICAnZGlzYWJsZURvdWJsZUNsaWNrWm9vbScsICdzY3JvbGx3aGVlbCcsICdkcmFnZ2FibGUnLCAnZHJhZ2dhYmxlQ3Vyc29yJywgJ2RyYWdnaW5nQ3Vyc29yJyxcbiAgICAna2V5Ym9hcmRTaG9ydGN1dHMnLCAnem9vbUNvbnRyb2wnLCAnem9vbUNvbnRyb2xPcHRpb25zJywgJ3N0eWxlcycsICdzdHJlZXRWaWV3Q29udHJvbCcsXG4gICAgJ3N0cmVldFZpZXdDb250cm9sT3B0aW9ucycsICd6b29tJywgJ21hcFR5cGVDb250cm9sJywgJ21hcFR5cGVDb250cm9sT3B0aW9ucycsICdtaW5ab29tJyxcbiAgICAnbWF4Wm9vbScsICdwYW5Db250cm9sJywgJ3BhbkNvbnRyb2xPcHRpb25zJywgJ3JvdGF0ZUNvbnRyb2wnLCAncm90YXRlQ29udHJvbE9wdGlvbnMnLFxuICAgICdmdWxsc2NyZWVuQ29udHJvbCcsICdmdWxsc2NyZWVuQ29udHJvbE9wdGlvbnMnLCAnc2NhbGVDb250cm9sJywgJ3NjYWxlQ29udHJvbE9wdGlvbnMnLFxuICAgICdtYXBUeXBlSWQnLCAnY2xpY2thYmxlSWNvbnMnLCAnZ2VzdHVyZUhhbmRsaW5nJ1xuXTtcbkFnbU1hcC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYWdtLW1hcCcsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIEdvb2dsZU1hcHNBUElXcmFwcGVyLCBNYXJrZXJNYW5hZ2VyLCBJbmZvV2luZG93TWFuYWdlciwgQ2lyY2xlTWFuYWdlciwgUG9seWxpbmVNYW5hZ2VyLFxuICAgICAgICAgICAgICAgICAgICBQb2x5Z29uTWFuYWdlciwgS21sTGF5ZXJNYW5hZ2VyLCBEYXRhTGF5ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBob3N0OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGRlcHJlY2F0ZWQgLSB3ZSB3aWxsIHJlbW92ZSBpdCB3aXRoIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgJ1tjbGFzcy5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyXSc6ICd0cnVlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXCJcXG4gICAgLmFnbS1tYXAtY29udGFpbmVyLWlubmVyIHtcXG4gICAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIH1cXG4gICAgLmFnbS1tYXAtY29udGVudCB7XFxuICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuICBcIl0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiXFxuICAgIDxkaXYgY2xhc3M9J2FnbS1tYXAtY29udGFpbmVyLWlubmVyIHNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXItaW5uZXInPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPSdhZ20tbWFwLWNvbnRlbnQnPlxcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG4gICAgPC9kaXY+XFxuICBcIlxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5BZ21NYXAuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIH0sXG5dOyB9O1xuQWdtTWFwLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdsb25naXR1ZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2xhdGl0dWRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd6b29tJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdtaW5ab29tJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdtYXhab29tJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdkcmFnZ2FibGUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydtYXBEcmFnZ2FibGUnLF0gfSxdLFxuICAgICdkaXNhYmxlRG91YmxlQ2xpY2tab29tJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdkaXNhYmxlRGVmYXVsdFVJJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdzY3JvbGx3aGVlbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnYmFja2dyb3VuZENvbG9yJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdkcmFnZ2FibGVDdXJzb3InOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2RyYWdnaW5nQ3Vyc29yJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdrZXlib2FyZFNob3J0Y3V0cyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnem9vbUNvbnRyb2wnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3pvb21Db250cm9sT3B0aW9ucyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3R5bGVzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd1c2VQYW5uaW5nJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdzdHJlZXRWaWV3Q29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdmaXRCb3VuZHMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3NjYWxlQ29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc2NhbGVDb250cm9sT3B0aW9ucyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnbWFwVHlwZUNvbnRyb2wnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ21hcFR5cGVDb250cm9sT3B0aW9ucyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAncGFuQ29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAncGFuQ29udHJvbE9wdGlvbnMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3JvdGF0ZUNvbnRyb2wnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3JvdGF0ZUNvbnRyb2xPcHRpb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdmdWxsc2NyZWVuQ29udHJvbCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdtYXBUeXBlSWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2NsaWNrYWJsZUljb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdnZXN0dXJlSGFuZGxpbmcnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ21hcENsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbWFwUmlnaHRDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ21hcERibENsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnY2VudGVyQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnYm91bmRzQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnaWRsZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3pvb21DaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdtYXBSZWFkeSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9kaXJlY3RpdmVzL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENpcmNsZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9jaXJjbGUtbWFuYWdlcic7XG52YXIgQWdtQ2lyY2xlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZ21DaXJjbGUoX21hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlciA9IF9tYW5hZ2VyO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBDaXJjbGUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBjaXJjbGUgb3ZlciB0aGUgbWFwLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgICovXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIGNpcmNsZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbCBwb2ludHMgc2hvd24gYXRcbiAgICAgICAgICogdGhlIGNlbnRlciBhbmQgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIG9mIHRoZSBjaXJjbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBpbiBtZXRlcnMgb24gdGhlIEVhcnRoJ3Mgc3VyZmFjZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmFkaXVzID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdHJva2UgcG9zaXRpb24uIERlZmF1bHRzIHRvIENFTlRFUi5cbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIEludGVybmV0IEV4cGxvcmVyIDggYW5kIGVhcmxpZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0cm9rZVBvc2l0aW9uID0gJ0NFTlRFUic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVscy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3Ryb2tlV2VpZ2h0ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhpcyBjaXJjbGUgaXMgdmlzaWJsZSBvbiB0aGUgbWFwLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlJ3MgY2VudGVyIGlzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNlbnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2lyY2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBjaXJjbGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNpcmNsZURibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBjaXJjbGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIGNpcmNsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIGNpcmNsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBjaXJjbGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VzZU1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIGNpcmNsZSBtb3VzZW91dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIGNpcmNsZSBtb3VzZW92ZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlJ3MgcmFkaXVzIGlzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJhZGl1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJpZ2h0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX2NpcmNsZUFkZGVkVG9NYW5hZ2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtQ2lyY2xlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlci5hZGRDaXJjbGUodGhpcyk7XG4gICAgICAgIHRoaXMuX2NpcmNsZUFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbUNpcmNsZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoIXRoaXMuX2NpcmNsZUFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZXIuc2V0Q2VudGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydlZGl0YWJsZSddKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLnNldEVkaXRhYmxlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydkcmFnZ2FibGUnXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5zZXREcmFnZ2FibGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5zZXRWaXNpYmxlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydyYWRpdXMnXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5zZXRSYWRpdXModGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQ2lyY2xlT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gICAgfTtcbiAgICBBZ21DaXJjbGUucHJvdG90eXBlLl91cGRhdGVDaXJjbGVPcHRpb25zQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge307XG4gICAgICAgIHZhciBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBBZ21DaXJjbGUuX21hcE9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTE7IH0pO1xuICAgICAgICBvcHRpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcbiAgICAgICAgaWYgKG9wdGlvbktleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBZ21DaXJjbGUucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZXZlbnRzID0gbmV3IE1hcCgpO1xuICAgICAgICBldmVudHMuc2V0KCdjZW50ZXJfY2hhbmdlZCcsIHRoaXMuY2VudGVyQ2hhbmdlKTtcbiAgICAgICAgZXZlbnRzLnNldCgnY2xpY2snLCB0aGlzLmNpcmNsZUNsaWNrKTtcbiAgICAgICAgZXZlbnRzLnNldCgnZGJsY2xpY2snLCB0aGlzLmNpcmNsZURibENsaWNrKTtcbiAgICAgICAgZXZlbnRzLnNldCgnZHJhZycsIHRoaXMuZHJhZyk7XG4gICAgICAgIGV2ZW50cy5zZXQoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmQpO1xuICAgICAgICBldmVudHMuc2V0KCdkcmFnU3RhcnQnLCB0aGlzLmRyYWdTdGFydCk7XG4gICAgICAgIGV2ZW50cy5zZXQoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICAgICAgZXZlbnRzLnNldCgnbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgICBldmVudHMuc2V0KCdtb3VzZW91dCcsIHRoaXMubW91c2VPdXQpO1xuICAgICAgICBldmVudHMuc2V0KCdtb3VzZW92ZXInLCB0aGlzLm1vdXNlT3Zlcik7XG4gICAgICAgIGV2ZW50cy5zZXQoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgICAgICBldmVudHMuc2V0KCdyYWRpdXNfY2hhbmdlZCcsIHRoaXMucmFkaXVzQ2hhbmdlKTtcbiAgICAgICAgZXZlbnRzLnNldCgncmlnaHRjbGljaycsIHRoaXMucmlnaHRDbGljayk7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEVtaXR0ZXIsIGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgX3RoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKF90aGlzLl9tYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZShldmVudE5hbWUsIF90aGlzKS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaXVzX2NoYW5nZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX21hbmFnZXIuZ2V0UmFkaXVzKF90aGlzKS50aGVuKGZ1bmN0aW9uIChyYWRpdXMpIHsgcmV0dXJuIGV2ZW50RW1pdHRlci5lbWl0KHJhZGl1cyk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NlbnRlcl9jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9tYW5hZ2VyLmdldENlbnRlcihfdGhpcykudGhlbihmdW5jdGlvbiAoY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RW1pdHRlci5lbWl0KHsgbGF0OiBjZW50ZXIubGF0KCksIGxuZzogY2VudGVyLmxuZygpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHsgY29vcmRzOiB7IGxhdDogdmFsdWUubGF0TG5nLmxhdCgpLCBsbmc6IHZhbHVlLmxhdExuZy5sbmcoKSB9IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtQ2lyY2xlLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcy51bnN1YnNjcmliZSgpOyB9KTtcbiAgICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFuYWdlci5yZW1vdmVDaXJjbGUodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBMYXRMbmdCb3VuZHMgb2YgdGhpcyBDaXJjbGUuXG4gICAgICovXG4gICAgQWdtQ2lyY2xlLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYW5hZ2VyLmdldEJvdW5kcyh0aGlzKTsgfTtcbiAgICBBZ21DaXJjbGUucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hbmFnZXIuZ2V0Q2VudGVyKHRoaXMpOyB9O1xuICAgIHJldHVybiBBZ21DaXJjbGU7XG59KCkpO1xuZXhwb3J0IHsgQWdtQ2lyY2xlIH07XG5BZ21DaXJjbGUuX21hcE9wdGlvbnMgPSBbXG4gICAgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVBvc2l0aW9uJywgJ3N0cm9rZVdlaWdodCcsXG4gICAgJ3Zpc2libGUnLCAnekluZGV4JywgJ2NsaWNrYWJsZSdcbl07XG5BZ21DaXJjbGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FnbS1jaXJjbGUnXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkFnbUNpcmNsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IENpcmNsZU1hbmFnZXIsIH0sXG5dOyB9O1xuQWdtQ2lyY2xlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdsYXRpdHVkZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnbG9uZ2l0dWRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdjbGlja2FibGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2RyYWdnYWJsZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2NpcmNsZURyYWdnYWJsZScsXSB9LF0sXG4gICAgJ2VkaXRhYmxlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdmaWxsQ29sb3InOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2ZpbGxPcGFjaXR5JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdyYWRpdXMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3N0cm9rZUNvbG9yJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdzdHJva2VPcGFjaXR5JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdzdHJva2VQb3NpdGlvbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3Ryb2tlV2VpZ2h0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd2aXNpYmxlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd6SW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2NlbnRlckNoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2NpcmNsZUNsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnY2lyY2xlRGJsQ2xpY2snOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdkcmFnJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnZHJhZ0VuZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2RyYWdTdGFydCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ21vdXNlRG93bic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ21vdXNlTW92ZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ21vdXNlT3V0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbW91c2VPdmVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbW91c2VVcCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3JhZGl1c0NoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3JpZ2h0Q2xpY2snOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvZGlyZWN0aXZlcy9jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLbWxMYXllck1hbmFnZXIgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2ttbC1sYXllci1tYW5hZ2VyJztcbnZhciBsYXllcklkID0gMDtcbnZhciBBZ21LbWxMYXllciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWdtS21sTGF5ZXIoX21hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlciA9IF9tYW5hZ2VyO1xuICAgICAgICB0aGlzLl9hZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pZCA9IChsYXllcklkKyspLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRydWUsIHRoZSBsYXllciByZWNlaXZlcyBtb3VzZSBldmVudHMuIERlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBpbnB1dCBtYXAgaXMgY2VudGVyZWQgYW5kIHpvb21lZCB0byB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBjb250ZW50cyBvZiB0aGVcbiAgICAgICAgICogbGF5ZXIuXG4gICAgICAgICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB0byB0cnVlLCB0aGUgdmlld3BvcnQgaXMgbGVmdCB1bmNoYW5nZWQsIHVubGVzcyB0aGUgbWFwJ3MgY2VudGVyIGFuZCB6b29tXG4gICAgICAgICAqIHdlcmUgbmV2ZXIgc2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmVzZXJ2ZVZpZXdwb3J0ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgc2NyZWVuIG92ZXJsYXlzLiBEZWZhdWx0IHRydWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjcmVlbk92ZXJsYXlzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN1cHByZXNzIHRoZSByZW5kZXJpbmcgb2YgaW5mbyB3aW5kb3dzIHdoZW4gbGF5ZXIgZmVhdHVyZXMgYXJlIGNsaWNrZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN1cHByZXNzSW5mb1dpbmRvd3MgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBVUkwgb2YgdGhlIEtNTCBkb2N1bWVudCB0byBkaXNwbGF5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51cmwgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHotaW5kZXggb2YgdGhlIGxheWVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy56SW5kZXggPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIGEgZmVhdHVyZSBpbiB0aGUgbGF5ZXIgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF5ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgS01MIGxheWVycyBkZWZhdWx0IHZpZXdwb3J0IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld3BvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIEtNTCBsYXllciBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICogQXQgdGhpcyBwb2ludCBpdCBpcyBzYWZlIHRvIHJlYWQgdGhlIHN0YXR1cyBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgaWYgdGhlIGxheWVyIGxvYWRlZFxuICAgICAgICAgKiBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXR1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG4gICAgQWdtS21sTGF5ZXIucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYW5hZ2VyLmFkZEttbExheWVyKHRoaXMpO1xuICAgICAgICB0aGlzLl9hZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBBZ21LbWxMYXllci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoIXRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlUG9seWdvbk9wdGlvbnMoY2hhbmdlcyk7XG4gICAgfTtcbiAgICBBZ21LbWxMYXllci5wcm90b3R5cGUuX3VwZGF0ZVBvbHlnb25PcHRpb25zID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gQWdtS21sTGF5ZXIuX2ttbExheWVyT3B0aW9ucy5pbmRleE9mKGspICE9PSAtMTsgfSlcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgaykge1xuICAgICAgICAgICAgb2JqW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFnbUttbExheWVyLnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdjbGljaycsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGF5ZXJDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZGVmYXVsdHZpZXdwb3J0X2NoYW5nZWQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWZhdWx0Vmlld3BvcnRDaGFuZ2UuZW1pdCgpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdzdGF0dXNfY2hhbmdlZCcsIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnN0YXR1c0NoYW5nZS5lbWl0KCk7IH0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIG9zID0gX3RoaXMuX21hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCBfdGhpcykuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcbiAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBBZ21LbWxMYXllci5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pZDsgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtS21sTGF5ZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJBZ21LbWxMYXllci1cIiArIHRoaXMuX2lkLnRvU3RyaW5nKCk7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbUttbExheWVyLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbWFuYWdlci5kZWxldGVLbWxMYXllcih0aGlzKTtcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBZ21LbWxMYXllcjtcbn0oKSk7XG5leHBvcnQgeyBBZ21LbWxMYXllciB9O1xuQWdtS21sTGF5ZXIuX2ttbExheWVyT3B0aW9ucyA9IFsnY2xpY2thYmxlJywgJ3ByZXNlcnZlVmlld3BvcnQnLCAnc2NyZWVuT3ZlcmxheXMnLCAnc3VwcHJlc3NJbmZvV2luZG93cycsICd1cmwnLCAnekluZGV4J107XG5BZ21LbWxMYXllci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYWdtLWttbC1sYXllcidcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuQWdtS21sTGF5ZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBLbWxMYXllck1hbmFnZXIsIH0sXG5dOyB9O1xuQWdtS21sTGF5ZXIucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2NsaWNrYWJsZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAncHJlc2VydmVWaWV3cG9ydCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc2NyZWVuT3ZlcmxheXMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3N1cHByZXNzSW5mb1dpbmRvd3MnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3VybCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnekluZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdsYXllckNsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnZGVmYXVsdFZpZXdwb3J0Q2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnc3RhdHVzQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rbWwtbGF5ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMva21sLWxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDYiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUxheWVyTWFuYWdlciB9IGZyb20gJy4vLi4vc2VydmljZXMvbWFuYWdlcnMvZGF0YS1sYXllci1tYW5hZ2VyJztcbnZhciBsYXllcklkID0gMDtcbi8qKlxuICogQWdtRGF0YUxheWVyIGVuYWJsZXMgdGhlIHVzZXIgdG8gYWRkIGRhdGEgbGF5ZXJzIHRvIHRoZSBtYXAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuICogaW1wb3J0IHsgQWdtTWFwLCBBZ21EYXRhTGF5ZXIgfSBmcm9tXG4gKiAnYW5ndWxhci1nb29nbGUtbWFwcy9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIGRpcmVjdGl2ZXM6IFtBZ21NYXAsIEFnbURhdGFMYXllcl0sXG4gKiAgc3R5bGVzOiBbYFxuICogICAgLmFnbS1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqIFx0ICA8YWdtLWRhdGEtbGF5ZXIgW2dlb0pzb25dPVwiZ2VvSnNvbk9iamVjdFwiIChsYXllckNsaWNrKT1cImNsaWNrZWQoJGV2ZW50KVwiIFtzdHlsZV09XCJzdHlsZUZ1bmNcIj5cbiAqIFx0ICA8L2FnbS1kYXRhLWxheWVyPlxuICogPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTXlNYXBDbXAge1xuICogICBsYXQ6IG51bWJlciA9IC0yNS4yNzQ0NDk7XG4gKiAgIGxuZzogbnVtYmVyID0gMTMzLjc3NTA2MDtcbiAqICAgem9vbTogbnVtYmVyID0gNTtcbiAqXG4gKiBjbGlja2VkKGNsaWNrRXZlbnQpIHtcbiAqICAgIGNvbnNvbGUubG9nKGNsaWNrRXZlbnQpO1xuICogIH1cbiAqXG4gKiAgc3R5bGVGdW5jKGZlYXR1cmUpIHtcbiAqICAgIHJldHVybiAoe1xuICogICAgICBjbGlja2FibGU6IGZhbHNlLFxuICogICAgICBmaWxsQ29sb3I6IGZlYXR1cmUuZ2V0UHJvcGVydHkoJ2NvbG9yJyksXG4gKiAgICAgIHN0cm9rZVdlaWdodDogMVxuICogICAgfSk7XG4gKiAgfVxuICpcbiAqICBnZW9Kc29uT2JqZWN0OiBPYmplY3QgPSB7XG4gKiAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICogICAgXCJmZWF0dXJlc1wiOiBbXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwiR1wiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcImJsdWVcIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjdcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCI3MVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEyMy42MSwgLTIyLjE0XSwgWzEyMi4zOCwgLTIxLjczXSwgWzEyMS4wNiwgLTIxLjY5XSwgWzExOS42NiwgLTIyLjIyXSwgWzExOS4wMCwgLTIzLjQwXSxcbiAqICAgICAgICAgICAgICBbMTE4LjY1LCAtMjQuNzZdLCBbMTE4LjQzLCAtMjYuMDddLCBbMTE4Ljc4LCAtMjcuNTZdLCBbMTE5LjIyLCAtMjguNTddLCBbMTIwLjIzLCAtMjkuNDldLFxuICogICAgICAgICAgICAgIFsxMjEuNzcsIC0yOS44N10sIFsxMjMuNTcsIC0yOS42NF0sIFsxMjQuNDUsIC0yOS4wM10sIFsxMjQuNzEsIC0yNy45NV0sIFsxMjQuODAsIC0yNi43MF0sXG4gKiAgICAgICAgICAgICAgWzEyNC44MCwgLTI1LjYwXSwgWzEyMy42MSwgLTI1LjY0XSwgWzEyMi41NiwgLTI1LjY0XSwgWzEyMS43MiwgLTI1LjcyXSwgWzEyMS44MSwgLTI2LjYyXSxcbiAqICAgICAgICAgICAgICBbMTIxLjg2LCAtMjYuOThdLCBbMTIyLjYwLCAtMjYuOTBdLCBbMTIzLjU3LCAtMjcuMDVdLCBbMTIzLjU3LCAtMjcuNjhdLCBbMTIzLjM1LCAtMjguMThdLFxuICogICAgICAgICAgICAgIFsxMjIuNTEsIC0yOC4zOF0sIFsxMjEuNzcsIC0yOC4yNl0sIFsxMjEuMDIsIC0yNy45MV0sIFsxMjAuNDksIC0yNy4yMV0sIFsxMjAuMTQsIC0yNi41MF0sXG4gKiAgICAgICAgICAgICAgWzEyMC4xMCwgLTI1LjY0XSwgWzEyMC4yNywgLTI0LjUyXSwgWzEyMC42NywgLTIzLjY4XSwgWzEyMS43MiwgLTIzLjMyXSwgWzEyMi40MywgLTIzLjQ4XSxcbiAqICAgICAgICAgICAgICBbMTIzLjA0LCAtMjQuMDRdLCBbMTI0LjU0LCAtMjQuMjhdLCBbMTI0LjU4LCAtMjMuMjBdLCBbMTIzLjYxLCAtMjIuMTRdXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwib1wiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiMTVcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCIxMTFcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gKiAgICAgICAgICBcInR5cGVcIjogXCJQb2x5Z29uXCIsXG4gKiAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxMjguODQsIC0yNS43Nl0sIFsxMjguMTgsIC0yNS42MF0sIFsxMjcuOTYsIC0yNS41Ml0sIFsxMjcuODgsIC0yNS41Ml0sIFsxMjcuNzAsIC0yNS42MF0sXG4gKiAgICAgICAgICAgICAgWzEyNy4yNiwgLTI1Ljc5XSwgWzEyNi42MCwgLTI2LjExXSwgWzEyNi4xNiwgLTI2Ljc4XSwgWzEyNi4xMiwgLTI3LjY4XSwgWzEyNi4yMSwgLTI4LjQyXSxcbiAqICAgICAgICAgICAgICBbMTI2LjY5LCAtMjkuNDldLCBbMTI3Ljc0LCAtMjkuODBdLCBbMTI4LjgwLCAtMjkuNzJdLCBbMTI5LjQxLCAtMjkuMDNdLCBbMTI5LjcyLCAtMjcuOTVdLFxuICogICAgICAgICAgICAgIFsxMjkuNjgsIC0yNy4yMV0sIFsxMjkuMzMsIC0yNi4yM10sIFsxMjguODQsIC0yNS43Nl1cbiAqICAgICAgICAgICAgXSxcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxMjguNDUsIC0yNy40NF0sIFsxMjguMzIsIC0yNi45NF0sIFsxMjcuNzAsIC0yNi44Ml0sIFsxMjcuMzUsIC0yNy4wNV0sIFsxMjcuMTcsIC0yNy44MF0sXG4gKiAgICAgICAgICAgICAgWzEyNy41NywgLTI4LjIyXSwgWzEyOC4xMCwgLTI4LjQyXSwgWzEyOC40OSwgLTI3LjgwXSwgWzEyOC40NSwgLTI3LjQ0XVxuICogICAgICAgICAgICBdXG4gKiAgICAgICAgICBdXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICB7XG4gKiAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICogICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gKiAgICAgICAgICBcImxldHRlclwiOiBcIm9cIixcbiAqICAgICAgICAgIFwiY29sb3JcIjogXCJ5ZWxsb3dcIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjE1XCIsXG4gKiAgICAgICAgICBcImFzY2lpXCI6IFwiMTExXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICogICAgICAgICAgXCJ0eXBlXCI6IFwiUG9seWdvblwiLFxuICogICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTMxLjg3LCAtMjUuNzZdLCBbMTMxLjM1LCAtMjYuMDddLCBbMTMwLjk1LCAtMjYuNzhdLCBbMTMwLjgyLCAtMjcuNjRdLCBbMTMwLjg2LCAtMjguNTNdLFxuICogICAgICAgICAgICAgIFsxMzEuMjYsIC0yOS4yMl0sIFsxMzEuOTIsIC0yOS43Nl0sIFsxMzIuNDUsIC0yOS44N10sIFsxMzMuMDYsIC0yOS43Nl0sIFsxMzMuNzIsIC0yOS4zNF0sXG4gKiAgICAgICAgICAgICAgWzEzNC4wNywgLTI4LjgwXSwgWzEzNC4yMCwgLTI3LjkxXSwgWzEzNC4wNywgLTI3LjIxXSwgWzEzMy44MSwgLTI2LjMxXSwgWzEzMy4zNywgLTI1LjgzXSxcbiAqICAgICAgICAgICAgICBbMTMyLjcxLCAtMjUuNjRdLCBbMTMxLjg3LCAtMjUuNzZdXG4gKiAgICAgICAgICAgIF0sXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTMzLjE1LCAtMjcuMTddLCBbMTMyLjcxLCAtMjYuODZdLCBbMTMyLjA5LCAtMjYuOTBdLCBbMTMxLjc0LCAtMjcuNTZdLCBbMTMxLjc5LCAtMjguMjZdLFxuICogICAgICAgICAgICAgIFsxMzIuMzYsIC0yOC40NV0sIFsxMzIuOTMsIC0yOC4zNF0sIFsxMzMuMTUsIC0yNy43Nl0sIFsxMzMuMTUsIC0yNy4xN11cbiAqICAgICAgICAgICAgXVxuICogICAgICAgICAgXVxuICogICAgICAgIH1cbiAqICAgICAgfSxcbiAqICAgICAge1xuICogICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAqICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICogICAgICAgICAgXCJsZXR0ZXJcIjogXCJnXCIsXG4gKiAgICAgICAgICBcImNvbG9yXCI6IFwiYmx1ZVwiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiN1wiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjEwM1wiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEzOC4xMiwgLTI1LjA0XSwgWzEzNi44NCwgLTI1LjE2XSwgWzEzNS45NiwgLTI1LjM2XSwgWzEzNS4yNiwgLTI1Ljk5XSwgWzEzNSwgLTI2LjkwXSxcbiAqICAgICAgICAgICAgICBbMTM1LjA0LCAtMjcuOTFdLCBbMTM1LjI2LCAtMjguODhdLCBbMTM2LjA1LCAtMjkuNDVdLCBbMTM3LjAyLCAtMjkuNDldLCBbMTM3LjgxLCAtMjkuNDldLFxuICogICAgICAgICAgICAgIFsxMzcuOTQsIC0yOS45OV0sIFsxMzcuOTAsIC0zMS4yMF0sIFsxMzcuODUsIC0zMi4yNF0sIFsxMzYuODgsIC0zMi42OV0sIFsxMzYuNDUsIC0zMi4zNl0sXG4gKiAgICAgICAgICAgICAgWzEzNi4yNywgLTMxLjgwXSwgWzEzNC45NSwgLTMxLjg0XSwgWzEzNS4xNywgLTMyLjk5XSwgWzEzNS41MiwgLTMzLjQzXSwgWzEzNi4xNCwgLTMzLjc2XSxcbiAqICAgICAgICAgICAgICBbMTM3LjA2LCAtMzMuODNdLCBbMTM4LjEyLCAtMzMuNjVdLCBbMTM4Ljg2LCAtMzMuMjFdLCBbMTM5LjMwLCAtMzIuMjhdLCBbMTM5LjMwLCAtMzEuMjRdLFxuICogICAgICAgICAgICAgIFsxMzkuMzAsIC0zMC4xNF0sIFsxMzkuMjEsIC0yOC45Nl0sIFsxMzkuMTcsIC0yOC4yMl0sIFsxMzkuMDgsIC0yNy40MV0sIFsxMzkuMDgsIC0yNi40N10sXG4gKiAgICAgICAgICAgICAgWzEzOC45OSwgLTI1LjQwXSwgWzEzOC43MywgLTI1LjAwXSwgWzEzOC4xMiwgLTI1LjA0XVxuICogICAgICAgICAgICBdLFxuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEzNy41MCwgLTI2LjU0XSwgWzEzNi45NywgLTI2LjQ3XSwgWzEzNi40OSwgLTI2LjU4XSwgWzEzNi4zMSwgLTI3LjEzXSwgWzEzNi4zMSwgLTI3LjcyXSxcbiAqICAgICAgICAgICAgICBbMTM2LjU4LCAtMjcuOTldLCBbMTM3LjUwLCAtMjguMDNdLCBbMTM3LjY4LCAtMjcuNjhdLCBbMTM3LjU5LCAtMjYuNzhdLCBbMTM3LjUwLCAtMjYuNTRdXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwibFwiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gKiAgICAgICAgICBcInJhbmtcIjogXCIxMlwiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjEwOFwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzE0MC4xNCwgLTIxLjA0XSwgWzE0MC4zMSwgLTI5LjQyXSwgWzE0MS42NywgLTI5LjQ5XSwgWzE0MS41OSwgLTIwLjkyXSwgWzE0MC4xNCwgLTIxLjA0XVxuICogICAgICAgICAgICBdXG4gKiAgICAgICAgICBdXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICB7XG4gKiAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICogICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gKiAgICAgICAgICBcImxldHRlclwiOiBcImVcIixcbiAqICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjVcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCIxMDFcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gKiAgICAgICAgICBcInR5cGVcIjogXCJQb2x5Z29uXCIsXG4gKiAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxNDQuMTQsIC0yNy40MV0sIFsxNDUuNjcsIC0yNy41Ml0sIFsxNDYuODYsIC0yNy4wOV0sIFsxNDYuODIsIC0yNS42NF0sIFsxNDYuMjUsIC0yNS4wNF0sXG4gKiAgICAgICAgICAgICAgWzE0NS40NSwgLTI0LjY4XSwgWzE0NC42NiwgLTI0LjYwXSwgWzE0NC4wOSwgLTI0Ljc2XSwgWzE0My40MywgLTI1LjA4XSwgWzE0Mi45OSwgLTI1LjQwXSxcbiAqICAgICAgICAgICAgICBbMTQyLjY0LCAtMjYuMDNdLCBbMTQyLjY0LCAtMjcuMDVdLCBbMTQyLjY0LCAtMjguMjZdLCBbMTQzLjMwLCAtMjkuMTFdLCBbMTQ0LjE4LCAtMjkuNTddLFxuICogICAgICAgICAgICAgIFsxNDUuNDEsIC0yOS42NF0sIFsxNDYuNDYsIC0yOS4xOV0sIFsxNDYuNjQsIC0yOC43Ml0sIFsxNDYuODIsIC0yOC4xNF0sIFsxNDQuODQsIC0yOC40Ml0sXG4gKiAgICAgICAgICAgICAgWzE0NC4zMSwgLTI4LjI2XSwgWzE0NC4xNCwgLTI3LjQxXVxuICogICAgICAgICAgICBdLFxuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzE0NC4xOCwgLTI2LjM5XSwgWzE0NC41MywgLTI2LjU4XSwgWzE0NS4xOSwgLTI2LjYyXSwgWzE0NS43MiwgLTI2LjM1XSwgWzE0NS44MSwgLTI1LjkxXSxcbiAqICAgICAgICAgICAgICBbMTQ1LjQxLCAtMjUuNjhdLCBbMTQ0Ljk3LCAtMjUuNjhdLCBbMTQ0LjQ5LCAtMjUuNjRdLCBbMTQ0LCAtMjUuOTldLCBbMTQ0LjE4LCAtMjYuMzldXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH1cbiAqICAgIF1cbiAqICB9O1xuICogfVxuICogYGBgXG4gKi9cbnZhciBBZ21EYXRhTGF5ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFnbURhdGFMYXllcihfbWFuYWdlcikge1xuICAgICAgICB0aGlzLl9tYW5hZ2VyID0gX21hbmFnZXI7XG4gICAgICAgIHRoaXMuX2FkZGVkVG9NYW5hZ2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lkID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIGEgZmVhdHVyZSBpbiB0aGUgbGF5ZXIgaXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGF5ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBnZW9Kc29uIHRvIGJlIGRpc3BsYXllZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nZW9Kc29uID0gbnVsbDtcbiAgICB9XG4gICAgQWdtRGF0YUxheWVyLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFuYWdlci5hZGREYXRhTGF5ZXIodGhpcyk7XG4gICAgICAgIHRoaXMuX2FkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9O1xuICAgIEFnbURhdGFMYXllci5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnY2xpY2snLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxheWVyQ2xpY2suZW1pdChldik7IH0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIG9zID0gX3RoaXMuX21hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCBfdGhpcykuc3Vic2NyaWJlKG9iai5oYW5kbGVyKTtcbiAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBBZ21EYXRhTGF5ZXIucHJvdG90eXBlLmlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faWQ7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbURhdGFMYXllci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBcIkFnbURhdGFMYXllci1cIiArIHRoaXMuX2lkLnRvU3RyaW5nKCk7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbURhdGFMYXllci5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21hbmFnZXIuZGVsZXRlRGF0YUxheWVyKHRoaXMpO1xuICAgICAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbURhdGFMYXllci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdlb0pzb25DaGFuZ2UgPSBjaGFuZ2VzWydnZW9Kc29uJ107XG4gICAgICAgIGlmIChnZW9Kc29uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VyLnVwZGF0ZUdlb0pzb24odGhpcywgZ2VvSnNvbkNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhT3B0aW9ucyA9IHt9O1xuICAgICAgICBBZ21EYXRhTGF5ZXIuX2RhdGFPcHRpb25zQXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IHJldHVybiBkYXRhT3B0aW9uc1trXSA9IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaykgPyBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZSA6IF90aGlzW2tdOyB9KTtcbiAgICAgICAgdGhpcy5fbWFuYWdlci5zZXREYXRhT3B0aW9ucyh0aGlzLCBkYXRhT3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gQWdtRGF0YUxheWVyO1xufSgpKTtcbmV4cG9ydCB7IEFnbURhdGFMYXllciB9O1xuQWdtRGF0YUxheWVyLl9kYXRhT3B0aW9uc0F0dHJpYnV0ZXMgPSBbJ3N0eWxlJ107XG5BZ21EYXRhTGF5ZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FnbS1kYXRhLWxheWVyJ1xuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5BZ21EYXRhTGF5ZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBEYXRhTGF5ZXJNYW5hZ2VyLCB9LFxuXTsgfTtcbkFnbURhdGFMYXllci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnbGF5ZXJDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2dlb0pzb24nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3N0eWxlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGEtbGF5ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvZGF0YS1sYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXJrZXJNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvbWFya2VyLW1hbmFnZXInO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vaW5mby13aW5kb3cnO1xudmFyIG1hcmtlcklkID0gMDtcbi8qKlxuICogQWdtTWFya2VyIHJlbmRlcnMgYSBtYXAgbWFya2VyIGluc2lkZSBhIHtAbGluayBBZ21NYXB9LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ215LW1hcC1jbXAnLFxuICogIHN0eWxlczogW2BcbiAqICAgIC5hZ20tbWFwLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbbGFiZWxdPVwiJ00nXCI+XG4gKiAgICAgIDwvYWdtLW1hcmtlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbnZhciBBZ21NYXJrZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFnbU1hcmtlcihfbWFya2VyTWFuYWdlcikge1xuICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyID0gX21hcmtlck1hbmFnZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0cnVlLCB0aGUgbWFya2VyIGNhbiBiZSBkcmFnZ2VkLiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBpcyB2aXNpYmxlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IG9wZW4gdGhlIGNoaWxkIGluZm8gd2luZG93IHdoZW4gdGhlIG1hcmtlciBpcyBjbGlja2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcGVuSW5mb1dpbmRvdyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWFya2VyJ3Mgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYXJrZXJzIGFyZSBkaXNwbGF5ZWQgb24gdGhlIG1hcCBpbiBvcmRlciBvZiB0aGVpciB6SW5kZXgsIHdpdGggaGlnaGVyIHZhbHVlcyBkaXNwbGF5aW5nIGluXG4gICAgICAgICAqIGZyb250IG9mIG1hcmtlcnMgd2l0aCBsb3dlciB2YWx1ZXMuIEJ5IGRlZmF1bHQsIG1hcmtlcnMgYXJlIGRpc3BsYXllZCBhY2NvcmRpbmcgdG8gdGhlaXJcbiAgICAgICAgICogdmVydGljYWwgcG9zaXRpb24gb24gc2NyZWVuLCB3aXRoIGxvd2VyIG1hcmtlcnMgYXBwZWFyaW5nIGluIGZyb250IG9mIG1hcmtlcnMgZnVydGhlciB1cCB0aGVcbiAgICAgICAgICogc2NyZWVuLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy56SW5kZXggPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdHJ1ZSwgdGhlIG1hcmtlciBjYW4gYmUgY2xpY2tlZC4gRGVmYXVsdCB2YWx1ZSBpcyB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXJrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hcmtlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBtYXJrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgbW91c2VzIG92ZXIgdGhlIG1hcmtlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIG1vdXNlcyBvdXRzaWRlIHRoZSBtYXJrZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluZm9XaW5kb3cgPSBuZXcgUXVlcnlMaXN0KCk7XG4gICAgICAgIHRoaXMuX21hcmtlckFkZGVkVG9NYW5nZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5faWQgPSAobWFya2VySWQrKykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyogQGludGVybmFsICovXG4gICAgQWdtTWFya2VyLnByb3RvdHlwZS5uZ0FmdGVyQ29udGVudEluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSgpO1xuICAgICAgICB0aGlzLmluZm9XaW5kb3cuY2hhbmdlcy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSgpOyB9KTtcbiAgICB9O1xuICAgIEFnbU1hcmtlci5wcm90b3R5cGUuaGFuZGxlSW5mb1dpbmRvd1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaW5mb1dpbmRvdy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIG5vIG1vcmUgdGhhbiBvbmUgaW5mbyB3aW5kb3cuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmZvV2luZG93LmZvckVhY2goZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgICAgbWFya2VyLmhvc3RNYXJrZXIgPSBfdGhpcztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtTWFya2VyLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fbWFya2VyQWRkZWRUb01hbmdlcikge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci5hZGRNYXJrZXIodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJBZGRlZFRvTWFuZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlTWFya2VyUG9zaXRpb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ3RpdGxlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlVGl0bGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2xhYmVsJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlTGFiZWwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2RyYWdnYWJsZSddKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZURyYWdnYWJsZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snaWNvblVybCddKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrZXJNYW5hZ2VyLnVwZGF0ZUljb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ29wYWNpdHknXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVPcGFjaXR5KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlVmlzaWJsZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlc1snekluZGV4J10pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIudXBkYXRlWkluZGV4KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzWydjbGlja2FibGUnXSkge1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyTWFuYWdlci51cGRhdGVDbGlja2FibGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFnbU1hcmtlci5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY3MgPSB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnY2xpY2snLCB0aGlzKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wZW5JbmZvV2luZG93KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5mb1dpbmRvdy5mb3JFYWNoKGZ1bmN0aW9uIChpbmZvV2luZG93KSB7IHJldHVybiBpbmZvV2luZG93Lm9wZW4oKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5tYXJrZXJDbGljay5lbWl0KG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMucHVzaChjcyk7XG4gICAgICAgIHZhciBkcyA9IHRoaXMuX21hcmtlck1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKCdkcmFnZW5kJywgdGhpcylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLmRyYWdFbmQuZW1pdCh7IGNvb3JkczogeyBsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKGRzKTtcbiAgICAgICAgdmFyIG1vdmVyID0gdGhpcy5fbWFya2VyTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUoJ21vdXNlb3ZlcicsIHRoaXMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5tb3VzZU92ZXIuZW1pdCh7IGNvb3JkczogeyBsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdmVyKTtcbiAgICAgICAgdmFyIG1vdXQgPSB0aGlzLl9tYXJrZXJNYW5hZ2VyLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZSgnbW91c2VvdXQnLCB0aGlzKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMubW91c2VPdXQuZW1pdCh7IGNvb3JkczogeyBsYXQ6IGUubGF0TG5nLmxhdCgpLCBsbmc6IGUubGF0TG5nLmxuZygpIH0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG1vdXQpO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbU1hcmtlci5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9pZDsgfTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtTWFya2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdBZ21NYXJrZXItJyArIHRoaXMuX2lkLnRvU3RyaW5nKCk7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbU1hcmtlci5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21hcmtlck1hbmFnZXIuZGVsZXRlTWFya2VyKHRoaXMpO1xuICAgICAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBZ21NYXJrZXI7XG59KCkpO1xuZXhwb3J0IHsgQWdtTWFya2VyIH07XG5BZ21NYXJrZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FnbS1tYXJrZXInXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkFnbU1hcmtlci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IE1hcmtlck1hbmFnZXIsIH0sXG5dOyB9O1xuQWdtTWFya2VyLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdsYXRpdHVkZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnbG9uZ2l0dWRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd0aXRsZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnbGFiZWwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2RyYWdnYWJsZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ21hcmtlckRyYWdnYWJsZScsXSB9LF0sXG4gICAgJ2ljb25VcmwnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3Zpc2libGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ29wZW5JbmZvV2luZG93JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdvcGFjaXR5JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd6SW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2NsaWNrYWJsZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ21hcmtlckNsaWNrYWJsZScsXSB9LF0sXG4gICAgJ21hcmtlckNsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnZHJhZ0VuZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ21vdXNlT3Zlcic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ21vdXNlT3V0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnaW5mb1dpbmRvdyc6IFt7IHR5cGU6IENvbnRlbnRDaGlsZHJlbiwgYXJnczogW0FnbUluZm9XaW5kb3csXSB9LF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFya2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9kaXJlY3RpdmVzL21hcmtlci5qc1xuLy8gbW9kdWxlIGlkID0gMTA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvbHlnb25NYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJztcbi8qKlxuICogQWdtUG9seWdvbiByZW5kZXJzIGEgcG9seWdvbiBvbiBhIHtAbGluayBBZ21NYXB9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLXBvbHlnb24gW3BhdGhzXT1cInBhdGhzXCI+XG4gKiAgICAgIDwvYWdtLXBvbHlnb24+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeU1hcENtcCB7XG4gKiAgIGxhdDogbnVtYmVyID0gMDtcbiAqICAgbG5nOiBudW1iZXIgPSAwO1xuICogICB6b29tOiBudW1iZXIgPSAxMDtcbiAqICAgcGF0aHM6IEFycmF5PExhdExuZ0xpdGVyYWw+ID0gW1xuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9XG4gKiAgIF1cbiAqICAgLy8gTmVzdGluZyBwYXRocyB3aWxsIGNyZWF0ZSBhIGhvbGUgd2hlcmUgdGhleSBvdmVybGFwO1xuICogICBuZXN0ZWRQYXRoczogQXJyYXk8QXJyYXk8TGF0TG5nTGl0ZXJhbD4+ID0gW1tcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfVxuICogICBdLCBbXG4gKiAgICAgeyBsYXQ6IDAsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiA1LCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDUsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAxNSB9XG4gKiAgIF1dXG4gKiB9XG4gKiBgYGBcbiAqL1xudmFyIEFnbVBvbHlnb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFnbVBvbHlnb24oX3BvbHlnb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyID0gX3BvbHlnb25NYW5hZ2VyO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBQb2x5Z29uIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLiBUaGUgZ2VvZGVzaWNcbiAgICAgICAgICogcHJvcGVydHkgZGVmaW5lcyB0aGUgbW9kZSBvZiBkcmFnZ2luZy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbFxuICAgICAgICAgKiBwb2ludHMgc2hvd24gYXQgdGhlIHZlcnRpY2VzIGFuZCBvbiBlYWNoIHNlZ21lbnQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGxcbiAgICAgICAgICogZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLiBXaGVuIGZhbHNlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmVcbiAgICAgICAgICogcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGFcbiAgICAgICAgICogZ2VvZGVzaWMgcG9seWdvbiBtYXkgYXBwZWFyIHRvIGNoYW5nZSB3aGVuIGRyYWdnZWQsIGFzIHRoZSBkaW1lbnNpb25zXG4gICAgICAgICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdlb2Rlc2ljID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3JkZXJlZCBzZXF1ZW5jZSBvZiBjb29yZGluYXRlcyB0aGF0IGRlc2lnbmF0ZXMgYSBjbG9zZWQgbG9vcC5cbiAgICAgICAgICogVW5saWtlIHBvbHlsaW5lcywgYSBwb2x5Z29uIG1heSBjb25zaXN0IG9mIG9uZSBvciBtb3JlIHBhdGhzLlxuICAgICAgICAgKiAgQXMgYSByZXN1bHQsIHRoZSBwYXRocyBwcm9wZXJ0eSBtYXkgc3BlY2lmeSBvbmUgb3IgbW9yZSBhcnJheXMgb2ZcbiAgICAgICAgICogTGF0TG5nIGNvb3JkaW5hdGVzLiBQYXRocyBhcmUgY2xvc2VkIGF1dG9tYXRpY2FsbHk7IGRvIG5vdCByZXBlYXQgdGhlXG4gICAgICAgICAqIGZpcnN0IHZlcnRleCBvZiB0aGUgcGF0aCBhcyB0aGUgbGFzdCB2ZXJ0ZXguIFNpbXBsZSBwb2x5Z29ucyBtYXkgYmVcbiAgICAgICAgICogZGVmaW5lZCB1c2luZyBhIHNpbmdsZSBhcnJheSBvZiBMYXRMbmdzLiBNb3JlIGNvbXBsZXggcG9seWdvbnMgbWF5XG4gICAgICAgICAqIHNwZWNpZnkgYW4gYXJyYXkgb2YgYXJyYXlzLiBBbnkgc2ltcGxlIGFycmF5cyBhcmUgY29udmVydGVkIGludG8gQXJyYXlzLlxuICAgICAgICAgKiBJbnNlcnRpbmcgb3IgcmVtb3ZpbmcgTGF0TG5ncyBmcm9tIHRoZSBBcnJheSB3aWxsIGF1dG9tYXRpY2FsbHkgdXBkYXRlXG4gICAgICAgICAqIHRoZSBwb2x5Z29uIG9uIHRoZSBtYXAuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gZGJsY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvbHlEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgcG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seURyYWcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHBvbHlnb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvbHlEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgcG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seURyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seU1vdXNlRG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seU1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWdvbiBtb3VzZW91dC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seU1vdXNlT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5Z29uIG1vdXNlb3Zlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucG9seU1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb2x5TW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbiBpcyBmaXJlZCB3aGVuIHRoZSBQb2x5Z29uIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvbHlSaWdodENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9wb2x5Z29uQWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgQWdtUG9seWdvbi5wcm90b3R5cGUubmdBZnRlckNvbnRlbnRJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BvbHlnb25BZGRlZFRvTWFuYWdlcikge1xuICAgICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBZ21Qb2x5Z29uLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIGlmICghdGhpcy5fcG9seWdvbkFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcG9seWdvbk1hbmFnZXIuc2V0UG9seWdvbk9wdGlvbnModGhpcywgdGhpcy5fdXBkYXRlUG9seWdvbk9wdGlvbnMoY2hhbmdlcykpO1xuICAgIH07XG4gICAgQWdtUG9seWdvbi5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyLmFkZFBvbHlnb24odGhpcyk7XG4gICAgICAgIHRoaXMuX3BvbHlnb25BZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBBZ21Qb2x5Z29uLnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ2NsaWNrJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5wb2x5Q2xpY2suZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RiY2xpY2snLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlEYmxDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZHJhZycsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMucG9seURyYWcuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RyYWdlbmQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlEcmFnRW5kLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkcmFnc3RhcnQnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlEcmFnU3RhcnQuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNlZG93bicsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMucG9seU1vdXNlRG93bi5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnbW91c2Vtb3ZlJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5wb2x5TW91c2VNb3ZlLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW91dCcsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMucG9seU1vdXNlT3V0LmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW92ZXInLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlNb3VzZU92ZXIuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNldXAnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLnBvbHlNb3VzZVVwLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdyaWdodGNsaWNrJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5wb2x5UmlnaHRDbGljay5lbWl0KGV2KTsgfSB9LFxuICAgICAgICBdO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBvcyA9IF90aGlzLl9wb2x5Z29uTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUob2JqLm5hbWUsIF90aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgICAgICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQWdtUG9seWdvbi5wcm90b3R5cGUuX3VwZGF0ZVBvbHlnb25PcHRpb25zID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNoYW5nZXMpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBBZ21Qb2x5Z29uLl9wb2x5Z29uT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTE7IH0pXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChvYmosIGspIHtcbiAgICAgICAgICAgIG9ialtrXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbVBvbHlnb24ucHJvdG90eXBlLmlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faWQ7IH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbVBvbHlnb24ucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9wb2x5Z29uTWFuYWdlci5kZWxldGVQb2x5Z29uKHRoaXMpO1xuICAgICAgICAvLyB1bnN1YnNjcmliZSBhbGwgcmVnaXN0ZXJlZCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnVuc3Vic2NyaWJlKCk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFnbVBvbHlnb247XG59KCkpO1xuZXhwb3J0IHsgQWdtUG9seWdvbiB9O1xuQWdtUG9seWdvbi5fcG9seWdvbk9wdGlvbnNBdHRyaWJ1dGVzID0gW1xuICAgICdjbGlja2FibGUnLCAnZHJhZ2dhYmxlJywgJ2VkaXRhYmxlJywgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdnZW9kZXNpYycsICdpY29uJywgJ21hcCcsXG4gICAgJ3BhdGhzJywgJ3N0cm9rZUNvbG9yJywgJ3N0cm9rZU9wYWNpdHknLCAnc3Ryb2tlV2VpZ2h0JywgJ3Zpc2libGUnLCAnekluZGV4JywgJ2RyYWdnYWJsZScsXG4gICAgJ2VkaXRhYmxlJywgJ3Zpc2libGUnXG5dO1xuQWdtUG9seWdvbi5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYWdtLXBvbHlnb24nXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkFnbVBvbHlnb24uY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBQb2x5Z29uTWFuYWdlciwgfSxcbl07IH07XG5BZ21Qb2x5Z29uLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdjbGlja2FibGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2RyYWdnYWJsZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3BvbHlEcmFnZ2FibGUnLF0gfSxdLFxuICAgICdlZGl0YWJsZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnZmlsbENvbG9yJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdmaWxsT3BhY2l0eSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnZ2VvZGVzaWMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3BhdGhzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdzdHJva2VDb2xvcic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3Ryb2tlT3BhY2l0eSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3Ryb2tlV2VpZ2h0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd2aXNpYmxlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd6SW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3BvbHlDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3BvbHlEYmxDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3BvbHlEcmFnJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAncG9seURyYWdFbmQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdwb2x5RHJhZ1N0YXJ0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAncG9seU1vdXNlRG93bic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3BvbHlNb3VzZU1vdmUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdwb2x5TW91c2VPdXQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdwb2x5TW91c2VPdmVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAncG9seU1vdXNlVXAnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdwb2x5UmlnaHRDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWdvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvZGlyZWN0aXZlcy9wb2x5Z29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA1IDYiLCJpbXBvcnQgeyBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2x5bGluZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJztcbmltcG9ydCB7IEFnbVBvbHlsaW5lUG9pbnQgfSBmcm9tICcuL3BvbHlsaW5lLXBvaW50JztcbnZhciBwb2x5bGluZUlkID0gMDtcbi8qKlxuICogQWdtUG9seWxpbmUgcmVuZGVycyBhIHBvbHlsaW5lIG9uIGEge0BsaW5rIEFnbU1hcH1cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLW1hcC1jb250YWluZXIge1xuICogICAgICBoZWlnaHQ6IDMwMHB4O1xuICogICAgfVxuICogYF0sXG4gKiAgdGVtcGxhdGU6IGBcbiAqICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFt6b29tXT1cInpvb21cIj5cbiAqICAgICAgPGFnbS1wb2x5bGluZT5cbiAqICAgICAgICAgIDxhZ20tcG9seWxpbmUtcG9pbnQgW2xhdGl0dWRlXT1cImxhdEFcIiBbbG9uZ2l0dWRlXT1cImxuZ0FcIj5cbiAqICAgICAgICAgIDwvYWdtLXBvbHlsaW5lLXBvaW50PlxuICogICAgICAgICAgPGFnbS1wb2x5bGluZS1wb2ludCBbbGF0aXR1ZGVdPVwibGF0QlwiIFtsb25naXR1ZGVdPVwibG5nQlwiPlxuICogICAgICAgICAgPC9hZ20tcG9seWxpbmUtcG9pbnQ+XG4gKiAgICAgIDwvYWdtLXBvbHlsaW5lPlxuICogICAgPC9hZ20tbWFwPlxuICogIGBcbiAqIH0pXG4gKiBgYGBcbiAqL1xudmFyIEFnbVBvbHlsaW5lID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZ21Qb2x5bGluZShfcG9seWxpbmVNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlciA9IF9wb2x5bGluZU1hbmFnZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIFBvbHlsaW5lIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLiBUaGUgZ2VvZGVzaWMgcHJvcGVydHkgZGVmaW5lcyB0aGVcbiAgICAgICAgICogbW9kZSBvZiBkcmFnZ2luZy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbCBwb2ludHMgc2hvd24gYXQgdGhlXG4gICAgICAgICAqIHZlcnRpY2VzIGFuZCBvbiBlYWNoIHNlZ21lbnQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGwgZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2ZcbiAgICAgICAgICogdGhlIEVhcnRoLiBXaGVuIGZhbHNlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLlxuICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGEgZ2VvZGVzaWMgcG9seWdvbiBtYXkgYXBwZWFyIHRvIGNoYW5nZSB3aGVuIGRyYWdnZWQsIGFzIHRoZSBkaW1lbnNpb25zXG4gICAgICAgICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdlb2Rlc2ljID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRoaXMgcG9seWxpbmUgaXMgdmlzaWJsZSBvbiB0aGUgbWFwLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIGNsaWNrIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5bGluZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGluZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gZGJsY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lRGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHBvbHlsaW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lRHJhZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgcG9seWxpbmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVEcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgcG9seWxpbmUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVEcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlsaW5lLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lTW91c2VEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vtb3ZlIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5bGluZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGluZU1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWxpbmUgbW91c2VvdXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxpbmVNb3VzZU91dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWxpbmUgbW91c2VvdmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lTW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGUgdGhlIERPTSBtb3VzZXVwIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5bGluZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lTW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgZXZlbiBpcyBmaXJlZCB3aGVuIHRoZSBQb2x5bGluZSBpcyByaWdodC1jbGlja2VkIG9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5saW5lUmlnaHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVBZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuX2lkID0gKHBvbHlsaW5lSWQrKykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbVBvbHlsaW5lLnByb3RvdHlwZS5uZ0FmdGVyQ29udGVudEluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBwb2ludC5wb3NpdGlvbkNoYW5nZWQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgX3RoaXMuX3BvbHlsaW5lTWFuYWdlci51cGRhdGVQb2x5bGluZVBvaW50cyhfdGhpcyk7IH0pO1xuICAgICAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3BvbHlsaW5lQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcyA9IHRoaXMucG9pbnRzLmNoYW5nZXMuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlUG9seWxpbmVQb2ludHMoX3RoaXMpOyB9KTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICAgICAgICB0aGlzLl9wb2x5bGluZU1hbmFnZXIudXBkYXRlUG9seWxpbmVQb2ludHModGhpcyk7XG4gICAgfTtcbiAgICBBZ21Qb2x5bGluZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICBpZiAoIXRoaXMuX3BvbHlsaW5lQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgICB2YXIgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gQWdtUG9seWxpbmUuX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTE7IH0pO1xuICAgICAgICBvcHRpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHsgcmV0dXJuIG9wdGlvbnNba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTsgfSk7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5zZXRQb2x5bGluZU9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBBZ21Qb2x5bGluZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5hZGRQb2x5bGluZSh0aGlzKTtcbiAgICAgICAgdGhpcy5fcG9seWxpbmVBZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBBZ21Qb2x5bGluZS5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSBbXG4gICAgICAgICAgICB7IG5hbWU6ICdjbGljaycsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZUNsaWNrLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkYmxjbGljaycsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZURibENsaWNrLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdkcmFnJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5saW5lRHJhZy5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnZHJhZ2VuZCcsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZURyYWdFbmQuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2RyYWdzdGFydCcsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZURyYWdTdGFydC5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnbW91c2Vkb3duJywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5saW5lTW91c2VEb3duLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdtb3VzZW1vdmUnLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVNb3VzZU1vdmUuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNlb3V0JywgaGFuZGxlcjogZnVuY3Rpb24gKGV2KSB7IHJldHVybiBfdGhpcy5saW5lTW91c2VPdXQuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ21vdXNlb3ZlcicsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZU1vdXNlT3Zlci5lbWl0KGV2KTsgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnbW91c2V1cCcsIGhhbmRsZXI6IGZ1bmN0aW9uIChldikgeyByZXR1cm4gX3RoaXMubGluZU1vdXNlVXAuZW1pdChldik7IH0gfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ3JpZ2h0Y2xpY2snLCBoYW5kbGVyOiBmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIF90aGlzLmxpbmVSaWdodENsaWNrLmVtaXQoZXYpOyB9IH0sXG4gICAgICAgIF07XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIG9zID0gX3RoaXMuX3BvbHlsaW5lTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUob2JqLm5hbWUsIF90aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgICAgICAgX3RoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChvcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbVBvbHlsaW5lLnByb3RvdHlwZS5fZ2V0UG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvaW50cy50b0FycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIEFnbVBvbHlsaW5lLnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2lkOyB9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBBZ21Qb2x5bGluZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3BvbHlsaW5lTWFuYWdlci5kZWxldGVQb2x5bGluZSh0aGlzKTtcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBZ21Qb2x5bGluZTtcbn0oKSk7XG5leHBvcnQgeyBBZ21Qb2x5bGluZSB9O1xuQWdtUG9seWxpbmUuX3BvbHlsaW5lT3B0aW9uc0F0dHJpYnV0ZXMgPSBbXG4gICAgJ2RyYWdnYWJsZScsICdlZGl0YWJsZScsICd2aXNpYmxlJywgJ2dlb2Rlc2ljJywgJ3N0cm9rZUNvbG9yJywgJ3N0cm9rZU9wYWNpdHknLCAnc3Ryb2tlV2VpZ2h0JyxcbiAgICAnekluZGV4J1xuXTtcbkFnbVBvbHlsaW5lLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhZ20tcG9seWxpbmUnXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkFnbVBvbHlsaW5lLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogUG9seWxpbmVNYW5hZ2VyLCB9LFxuXTsgfTtcbkFnbVBvbHlsaW5lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdjbGlja2FibGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2RyYWdnYWJsZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3BvbHlsaW5lRHJhZ2dhYmxlJyxdIH0sXSxcbiAgICAnZWRpdGFibGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2dlb2Rlc2ljJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdzdHJva2VDb2xvcic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3Ryb2tlT3BhY2l0eSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc3Ryb2tlV2VpZ2h0JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd2aXNpYmxlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICd6SW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2xpbmVDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2xpbmVEYmxDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2xpbmVEcmFnJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbGluZURyYWdFbmQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdsaW5lRHJhZ1N0YXJ0JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbGluZU1vdXNlRG93bic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2xpbmVNb3VzZU1vdmUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdsaW5lTW91c2VPdXQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdsaW5lTW91c2VPdmVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbGluZU1vdXNlVXAnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdsaW5lUmlnaHRDbGljayc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ3BvaW50cyc6IFt7IHR5cGU6IENvbnRlbnRDaGlsZHJlbiwgYXJnczogW0FnbVBvbHlsaW5lUG9pbnQsXSB9LF0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWxpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFnbS9jb3JlL2RpcmVjdGl2ZXMvcG9seWxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDEwNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsInZhciBXaW5kb3dSZWYgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpbmRvd1JlZigpIHtcbiAgICB9XG4gICAgV2luZG93UmVmLnByb3RvdHlwZS5nZXROYXRpdmVXaW5kb3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3c7IH07XG4gICAgcmV0dXJuIFdpbmRvd1JlZjtcbn0oKSk7XG5leHBvcnQgeyBXaW5kb3dSZWYgfTtcbnZhciBEb2N1bWVudFJlZiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRSZWYoKSB7XG4gICAgfVxuICAgIERvY3VtZW50UmVmLnByb3RvdHlwZS5nZXROYXRpdmVEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50OyB9O1xuICAgIHJldHVybiBEb2N1bWVudFJlZjtcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudFJlZiB9O1xuZXhwb3J0IHZhciBCUk9XU0VSX0dMT0JBTFNfUFJPVklERVJTID0gW1dpbmRvd1JlZiwgRG9jdW1lbnRSZWZdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1nbG9iYWxzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS91dGlscy9icm93c2VyLWdsb2JhbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsIi8vIG1haW4gbW9kdWxlc1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMnO1xuLy8gY29yZSBtb2R1bGVcbi8vIHdlIGV4cGxpY2l0bHkgZXhwb3J0IHRoZSBtb2R1bGUgaGVyZSB0byBwcmV2ZW50IHRoaXMgSW9uaWMgMiBidWc6XG4vLyBodHRwOi8vc3RldmVtaWNoZWxvdHRpLmNvbS9pbnRlZ3JhdGUtYW5ndWxhci0yLWdvb2dsZS1tYXBzLWludG8taW9uaWMtMi9cbmV4cG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmUubW9kdWxlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiZXhwb3J0IHsgQWdtTWFwIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hcCc7XG5leHBvcnQgeyBBZ21DaXJjbGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2lyY2xlJztcbmV4cG9ydCB7IEFnbUluZm9XaW5kb3cgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5mby13aW5kb3cnO1xuZXhwb3J0IHsgQWdtS21sTGF5ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmV4cG9ydCB7IEFnbURhdGFMYXllciB9IGZyb20gJy4vZGlyZWN0aXZlcy9kYXRhLWxheWVyJztcbmV4cG9ydCB7IEFnbU1hcmtlciB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXJrZXInO1xuZXhwb3J0IHsgQWdtUG9seWdvbiB9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5Z29uJztcbmV4cG9ydCB7IEFnbVBvbHlsaW5lIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvbHlsaW5lJztcbmV4cG9ydCB7IEFnbVBvbHlsaW5lUG9pbnQgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUtcG9pbnQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlcy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYWdtL2NvcmUvZGlyZWN0aXZlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiZXhwb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmV4cG9ydCB7IENpcmNsZU1hbmFnZXIgfSBmcm9tICcuL3NlcnZpY2VzL21hbmFnZXJzL2NpcmNsZS1tYW5hZ2VyJztcbmV4cG9ydCB7IEluZm9XaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyJztcbmV4cG9ydCB7IE1hcmtlck1hbmFnZXIgfSBmcm9tICcuL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcbmV4cG9ydCB7IFBvbHlnb25NYW5hZ2VyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5Z29uLW1hbmFnZXInO1xuZXhwb3J0IHsgUG9seWxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5bGluZS1tYW5hZ2VyJztcbmV4cG9ydCB7IEttbExheWVyTWFuYWdlciB9IGZyb20gJy4vc2VydmljZXMvbWFuYWdlcnMva21sLWxheWVyLW1hbmFnZXInO1xuZXhwb3J0IHsgRGF0YUxheWVyTWFuYWdlciB9IGZyb20gJy4vc2VydmljZXMvbWFuYWdlcnMvZGF0YS1sYXllci1tYW5hZ2VyJztcbmV4cG9ydCB7IEdvb2dsZU1hcHNTY3JpcHRQcm90b2NvbCwgTEFaWV9NQVBTX0FQSV9DT05GSUcsIExhenlNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXInO1xuZXhwb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5leHBvcnQgeyBOb09wTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL25vb3AtbWFwcy1hcGktbG9hZGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlcnZpY2VzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiLyoqXG4gKiBXaGVuIHVzaW5nIHRoZSBOb09wTWFwc0FQSUxvYWRlciwgdGhlIEdvb2dsZSBNYXBzIEFQSSBtdXN0IGJlIGFkZGVkIHRvIHRoZSBwYWdlIHZpYSBhIGA8c2NyaXB0PmBcbiAqIFRhZy5cbiAqIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIEdvb2dsZSBNYXBzIEFQSSBzY3JpcHQgZ2V0cyBsb2FkZWQgZmlyc3Qgb24gdGhlIHBhZ2UuXG4gKi9cbnZhciBOb09wTWFwc0FQSUxvYWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9PcE1hcHNBUElMb2FkZXIoKSB7XG4gICAgfVxuICAgIE5vT3BNYXBzQVBJTG9hZGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5nb29nbGUgfHwgIXdpbmRvdy5nb29nbGUubWFwcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGUgTWFwcyBBUEkgbm90IGxvYWRlZCBvbiBwYWdlLiBNYWtlIHN1cmUgd2luZG93Lmdvb2dsZS5tYXBzIGlzIGF2YWlsYWJsZSEnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9PcE1hcHNBUElMb2FkZXI7XG59KCkpO1xuZXhwb3J0IHsgTm9PcE1hcHNBUElMb2FkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vb3AtbWFwcy1hcGktbG9hZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbm9vcC1tYXBzLWFwaS1sb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwODJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDUgNiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZ21NYXAgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFwJztcbmltcG9ydCB7IEFnbUNpcmNsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jaXJjbGUnO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmZvLXdpbmRvdyc7XG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFya2VyJztcbmltcG9ydCB7IEFnbVBvbHlnb24gfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5bGluZSc7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZVBvaW50IH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvbHlsaW5lLXBvaW50JztcbmltcG9ydCB7IEFnbUttbExheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ttbC1sYXllcic7XG5pbXBvcnQgeyBBZ21EYXRhTGF5ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGF0YS1sYXllcic7XG5pbXBvcnQgeyBMYXp5TWFwc0FQSUxvYWRlciB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyJztcbmltcG9ydCB7IExBWllfTUFQU19BUElfQ09ORklHIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYXBzLWFwaS1sb2FkZXIvbGF6eS1tYXBzLWFwaS1sb2FkZXInO1xuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL21hcHMtYXBpLWxvYWRlcic7XG5pbXBvcnQgeyBCUk9XU0VSX0dMT0JBTFNfUFJPVklERVJTIH0gZnJvbSAnLi91dGlscy9icm93c2VyLWdsb2JhbHMnO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmVEaXJlY3RpdmVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIEFnbU1hcCwgQWdtTWFya2VyLCBBZ21JbmZvV2luZG93LCBBZ21DaXJjbGUsXG4gICAgICAgIEFnbVBvbHlnb24sIEFnbVBvbHlsaW5lLCBBZ21Qb2x5bGluZVBvaW50LCBBZ21LbWxMYXllcixcbiAgICAgICAgQWdtRGF0YUxheWVyXG4gICAgXTtcbn1cbi8qKlxuICogVGhlIGFuZ3VsYXItZ29vZ2xlLW1hcHMgY29yZSBtb2R1bGUuIENvbnRhaW5zIGFsbCBEaXJlY3RpdmVzL1NlcnZpY2VzL1BpcGVzXG4gKiBvZiB0aGUgY29yZSBtb2R1bGUuIFBsZWFzZSB1c2UgYEFnbUNvcmVNb2R1bGUuZm9yUm9vdCgpYCBpbiB5b3VyIGFwcCBtb2R1bGUuXG4gKi9cbnZhciBBZ21Db3JlTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZ21Db3JlTW9kdWxlKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQbGVhc2UgdXNlIHRoaXMgbWV0aG9kIHdoZW4geW91IHJlZ2lzdGVyIHRoZSBtb2R1bGUgYXQgdGhlIHJvb3QgbGV2ZWwuXG4gICAgICovXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGxhenlNYXBzQVBJTG9hZGVyQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQWdtQ29yZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogQlJPV1NFUl9HTE9CQUxTX1BST1ZJREVSUy5jb25jYXQoW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogTWFwc0FQSUxvYWRlciwgdXNlQ2xhc3M6IExhenlNYXBzQVBJTG9hZGVyIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBMQVpZX01BUFNfQVBJX0NPTkZJRywgdXNlVmFsdWU6IGxhenlNYXBzQVBJTG9hZGVyQ29uZmlnIH1cbiAgICAgICAgICAgIF0pLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIEFnbUNvcmVNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgQWdtQ29yZU1vZHVsZSB9O1xuQWdtQ29yZU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7IGRlY2xhcmF0aW9uczogY29yZURpcmVjdGl2ZXMoKSwgZXhwb3J0czogY29yZURpcmVjdGl2ZXMoKSB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkFnbUNvcmVNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUubW9kdWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BhZ20vY29yZS9jb3JlLm1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA2IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZ29vZ2xlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2dvb2dsZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9nb29nbGUuY29tcG9uZW50LnNjc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdvb2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbGF0OiBudW1iZXIgPSAzMy43OTA4MDc7XHJcbiAgICBsbmc6IG51bWJlciA9IC0xMTcuODM1NzM0O1xyXG4gICAgem9vbTogbnVtYmVyID0gMTQ7XHJcbiAgICBzY3JvbGx3aGVlbCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGN1c3RvbSBtYXAgc3R5bGVcclxuICAgIG1hcFN0eWxlcyA9IFt7ICdmZWF0dXJlVHlwZSc6ICd3YXRlcicsICdzdHlsZXJzJzogW3sgJ3Zpc2liaWxpdHknOiAnb24nIH0sIHsgJ2NvbG9yJzogJyNiZGQxZjknIH1dIH0sIHsgJ2ZlYXR1cmVUeXBlJzogJ2FsbCcsICdlbGVtZW50VHlwZSc6ICdsYWJlbHMudGV4dC5maWxsJywgJ3N0eWxlcnMnOiBbeyAnY29sb3InOiAnIzMzNDE2NScgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ2xhbmRzY2FwZScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2U5ZWJmMScgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNjNWM2YzYnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmFydGVyaWFsJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2ZmZicgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3JvYWQubG9jYWwnLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjZmZmJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNkOGRiZTAnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdwb2knLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjY2ZkNWUwJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUnLCBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb24nIH0sIHsgbGlnaHRuZXNzOiAzMyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLCBlbGVtZW50VHlwZTogJ2xhYmVscycsIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvbicgfSwgeyBsaWdodG5lc3M6IDIwIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkJywgc3R5bGVyczogW3sgY29sb3I6ICcjZDhkYmUwJywgbGlnaHRuZXNzOiAyMCB9XSB9XTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL2dvb2dsZS9nb29nbGUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGluZ1xcXCI+R29vZ2xlIE1hcHNcXHJcXG4gICAgPHNtYWxsPlRoaXMgZGlyZWN0aXZlIGFsbG93cyB5b3UgdG8gYWRkIEdvb2dsZSBNYXBzIEphdmFzY3JpcHQgQVBJIGVsZW1lbnRzLjwvc21hbGw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+Q2xhc3NpYyBNYXA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVxcXCJsYXRcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiIFt6b29tXT1cXFwiem9vbVxcXCIgW3Njcm9sbHdoZWVsXT1cXFwic2Nyb2xsd2hlZWxcXFwiIGNsYXNzPVxcXCJnbWFwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVxcXCJsYXRcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiPjwvYWdtLW1hcmtlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYWdtLW1hcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+Q3VzdG9tIHpvb208L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVxcXCJsYXRcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiIFt6b29tXT1cXFwiMTlcXFwiIFtzY3JvbGx3aGVlbF09XFxcInNjcm9sbHdoZWVsXFxcIiBjbGFzcz1cXFwiZ21hcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cXFwibGF0XFxcIiBbbG9uZ2l0dWRlXT1cXFwibG5nXFxcIj48L2FnbS1tYXJrZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2FnbS1tYXA+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5EaWZmZXJlbnQgTWFwIFR5cGUgKG5vdCBzdXBwb3J0ZWQgeWV0KTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCIgW3pvb21dPVxcXCJ6b29tXFxcIiBbc2Nyb2xsd2hlZWxdPVxcXCJzY3JvbGx3aGVlbFxcXCIgY2xhc3M9XFxcImdtYXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCI+PC9hZ20tbWFya2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hZ20tbWFwPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5NdWx0aXBsZSBNYXJrZXJzPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cXFwibGF0XFxcIiBbbG9uZ2l0dWRlXT1cXFwibG5nXFxcIiBbem9vbV09XFxcInpvb21cXFwiIFtzY3JvbGx3aGVlbF09XFxcInNjcm9sbHdoZWVsXFxcIiBjbGFzcz1cXFwiZ21hcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cXFwibGF0XFxcIiBbbG9uZ2l0dWRlXT1cXFwibG5nXFxcIj48L2FnbS1tYXJrZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cXFwiMzMuNzg3NDUzXFxcIiBbbG9uZ2l0dWRlXT1cXFwibG5nXFxcIj48L2FnbS1tYXJrZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2FnbS1tYXA+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+U3R5bGVkIE1hcHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVxcXCJsYXRcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiIFt6b29tXT1cXFwiem9vbVxcXCIgW3Njcm9sbHdoZWVsXT1cXFwic2Nyb2xsd2hlZWxcXFwiIFtzdHlsZXNdPVxcXCJtYXBTdHlsZXNcXFwiIGNsYXNzPVxcXCJnbWFwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVxcXCJsYXRcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiPjwvYWdtLW1hcmtlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYWdtLW1hcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTU1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTU1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC12ZWN0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdmVjdG9yLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3ZlY3Rvci5jb21wb25lbnQuc2NzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBtYXBOYW1lOiBzdHJpbmc7XHJcbiAgICBzZXJpZXNEYXRhOiBhbnk7XHJcbiAgICBtYXJrZXJzRGF0YTogYW55O1xyXG4gICAgbWFwT3B0aW9uczogYW55O1xyXG5cclxuICAgIGRlZmF1bHRDb2xvcnM6IGFueSA9IHtcclxuICAgICAgICBtYXJrZXJDb2xvcjogJyMyM2I3ZTUnLCAgICAgIC8vIHRoZSBtYXJrZXIgcG9pbnRzXHJcbiAgICAgICAgYmdDb2xvcjogJ3RyYW5zcGFyZW50JywgICAgICAvLyB0aGUgYmFja2dyb3VuZFxyXG4gICAgICAgIHNjYWxlQ29sb3JzOiBbJyM4NzhjOWEnXSwgICAgLy8gdGhlIGNvbG9yIG9mIHRoZSByZWdpb24gaW4gdGhlIHNlcmllXHJcbiAgICAgICAgcmVnaW9uRmlsbDogJyNiYmJlYzYnICAgICAgIC8vIHRoZSBiYXNlIHJlZ2lvbiBjb2xvclxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXBOYW1lID0gJ3dvcmxkX21pbGxfZW4nO1xyXG5cclxuICAgICAgICB0aGlzLm1hcE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1hcmtlckNvbG9yOiB0aGlzLmRlZmF1bHRDb2xvcnMubWFya2VyQ29sb3IsXHJcbiAgICAgICAgICAgIGJnQ29sb3I6IHRoaXMuZGVmYXVsdENvbG9ycy5iZ0NvbG9yLFxyXG4gICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcnM6IHRoaXMuZGVmYXVsdENvbG9ycy5zY2FsZUNvbG9ycyxcclxuICAgICAgICAgICAgcmVnaW9uRmlsbDogdGhpcy5kZWZhdWx0Q29sb3JzLnJlZ2lvbkZpbGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNlcmllc0RhdGEgPSB7XHJcbiAgICAgICAgICAgICdDQSc6IDExMTAwLCAgIC8vIENhbmFkYVxyXG4gICAgICAgICAgICAnREUnOiAyNTEwLCAgICAvLyBHZXJtYW55XHJcbiAgICAgICAgICAgICdGUic6IDM3MTAsICAgIC8vIEZyYW5jZVxyXG4gICAgICAgICAgICAnQVUnOiA1NzEwLCAgICAvLyBBdXN0cmFsaWFcclxuICAgICAgICAgICAgJ0dCJzogODMxMCwgICAgLy8gR3JlYXQgQnJpdGFpblxyXG4gICAgICAgICAgICAnUlUnOiA5MzEwLCAgICAvLyBSdXNzaWFcclxuICAgICAgICAgICAgJ0JSJzogNjYxMCwgICAgLy8gQnJhemlsXHJcbiAgICAgICAgICAgICdJTic6IDc4MTAsICAgIC8vIEluZGlhXHJcbiAgICAgICAgICAgICdDTic6IDQzMTAsICAgIC8vIENoaW5hXHJcbiAgICAgICAgICAgICdVUyc6IDgzOSwgICAgIC8vIFVTQVxyXG4gICAgICAgICAgICAnU0EnOiA0MTAgICAgICAvLyBTYXVkaSBBcmFiaWFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlcnNEYXRhID0gW1xyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQxLjkwLCAxMi40NV0sIG5hbWU6ICdWYXRpY2FuIENpdHknIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDMuNzMsIDcuNDFdLCBuYW1lOiAnTW9uYWNvJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWy0wLjUyLCAxNjYuOTNdLCBuYW1lOiAnTmF1cnUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTguNTEsIDE3OS4yMV0sIG5hbWU6ICdUdXZhbHUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNy4xMSwgMTcxLjA2XSwgbmFtZTogJ01hcnNoYWxsIElzbGFuZHMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMTcuMywgLTYyLjczXSwgbmFtZTogJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFszLjIsIDczLjIyXSwgbmFtZTogJ01hbGRpdmVzJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzM1Ljg4LCAxNC41XSwgbmFtZTogJ01hbHRhJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQxLjAsIC03MS4wNl0sIG5hbWU6ICdOZXcgRW5nbGFuZCcgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxMi4wNSwgLTYxLjc1XSwgbmFtZTogJ0dyZW5hZGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMTMuMTYsIC01OS41NV0sIG5hbWU6ICdCYXJiYWRvcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxNy4xMSwgLTYxLjg1XSwgbmFtZTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTQuNjEsIDU1LjQ1XSwgbmFtZTogJ1NleWNoZWxsZXMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNy4zNSwgMTM0LjQ2XSwgbmFtZTogJ1BhbGF1JyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzQyLjUsIDEuNTFdLCBuYW1lOiAnQW5kb3JyYScgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGluZ1xcXCI+VmVjdG9yIE1hcHNcXHJcXG4gICA8YnIvPlxcclxcbiAgIDxzbWFsbD5SZXNvbHV0aW9uIGluZGVwZW5kZW50IG1hcHM8L3NtYWxsPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgdmVjdG9ybWFwIFttYXBIZWlnaHRdPVxcXCI3MDBcXFwiIFttYXBOYW1lXT1cXFwibWFwTmFtZVxcXCIgW3Nlcmllc0RhdGFdPVxcXCJzZXJpZXNEYXRhXFxcIiBbbWFya2Vyc0RhdGFdPVxcXCJtYXJrZXJzRGF0YVxcXCIgW21hcE9wdGlvbnNdPVxcXCJtYXBPcHRpb25zXFxcIiA+PC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTU1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTU1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBHb29nbGVDb21wb25lbnQgfSBmcm9tICcuL2dvb2dsZS9nb29nbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92ZWN0b3IvdmVjdG9yLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ2dvb2dsZScsIGNvbXBvbmVudDogR29vZ2xlQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd2ZWN0b3InLCBjb21wb25lbnQ6IFZlY3RvckNvbXBvbmVudCB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcclxuICAgICAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgICBhcGlLZXk6ICdBSXphU3lCTnM0MlJ0X0N5eEFxZGJJQkswYTVVdDgzUWlhdUVTUEEnXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBHb29nbGVDb21wb25lbnQsXHJcbiAgICAgICAgVmVjdG9yQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwc01vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL21hcHMubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==