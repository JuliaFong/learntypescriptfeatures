"use strict";
var profile = {
    name: 'jules',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
//Or you can update age like:
profile.age = 20;
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
