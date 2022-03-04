"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constants_1 = require("./constants");
exports.CloudinaryProvider = {
    provide: constants_1.CLOUDINARY,
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: 'dwigc7xjl',
            api_key: '925767913788942',
            api_secret: 'wDxzG4y-xn0_q7dFZiIhhezkDcY',
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map