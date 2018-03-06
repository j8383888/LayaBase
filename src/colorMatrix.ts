class ColorMatrix
{
    constructor()
    {
        Laya.init(800,600);
        Laya.stage.bgColor = ColorUtil.HTML_BLACK;
        this.creatGrayFilter();
    }

    private createImg():Laya.Sprite
    {
        var img:Laya.Sprite = new Laya.Sprite();
        //添加到舞台
        Laya.stage.addChild(img);
        //加载显示图片
        img.loadImage("res/img/bg2.jpg");
       return img;
    }

    private creatGrayFilter():void
    {
                    
        var GrayMatrix:any = 
        [
            0.3086, 0.6094, 0.0820, 0, 0, //R
            0.3086, 0.6094, 0.0820, 0, 0, //G
            0.3086, 0.6094, 0.0820, 0, 0, //B
            0,      0,      0,      1, 0, //A
        ]
        var GrayFilter:Laya.ColorFilter = new Laya.ColorFilter(GrayMatrix);
        var img:Laya.Sprite = this.createImg();
        img.filters = [GrayFilter];
    }
}