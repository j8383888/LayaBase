var ColorMatrix = /** @class */ (function () {
    function ColorMatrix() {
        Laya.init(800, 600);
        Laya.stage.bgColor = ColorUtil.HTML_BLACK;
        this.creatGrayFilter();
    }
    ColorMatrix.prototype.createImg = function () {
        var img = new Laya.Sprite();
        //添加到舞台
        Laya.stage.addChild(img);
        //加载显示图片
        img.loadImage("res/img/bg2.jpg");
        return img;
    };
    ColorMatrix.prototype.creatGrayFilter = function () {
        var GrayMatrix = [
            0.3086, 0.6094, 0.0820, 0, 0,
            0.3086, 0.6094, 0.0820, 0, 0,
            0.3086, 0.6094, 0.0820, 0, 0,
            0, 0, 0, 1, 0,
        ];
        var GrayFilter = new Laya.ColorFilter(GrayMatrix);
        var img = this.createImg();
        img.filters = [GrayFilter];
    };
    return ColorMatrix;
}());
new ColorMatrix();
//# sourceMappingURL=colorMatrix.js.map