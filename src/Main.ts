class Main{
    private static RES:string = "res/img/bg.jpg";
    private _img:Laya.Sprite;

    constructor()
    {
        Laya.init(1500,720);
        Laya.stage.bgColor = "#ffffff";
        Laya.loader.load(Main.RES, Laya.Handler.create(this,this.graphicsImg))
    }

    private graphicsImg():void
    {
        this._img = new Laya.Sprite();
        this._img.graphics.drawTexture(Laya.loader.getRes(Main.RES),150,50);
        // Laya.stage.addChild(this._img); 

    }
}