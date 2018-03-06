var Main = /** @class */ (function () {
    function Main() {
        Laya.init(1500, 720);
        Laya.stage.bgColor = "#ffffff";
        Laya.loader.load(Main.RES, Laya.Handler.create(this, this.graphicsImg));
    }
    Main.prototype.graphicsImg = function () {
        this._img = new Laya.Sprite();
        this._img.graphics.drawTexture(Laya.loader.getRes(Main.RES), 150, 50);
        // Laya.stage.addChild(this._img); 
    };
    Main.RES = "res/img/bg.jpg";
    return Main;
}());
//# sourceMappingURL=Main.js.map