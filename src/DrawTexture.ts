// 程序入口
class DrawTexture{
    //需要切换的图片资源路径
    private monkey1:string = "res/img/monkey1.png";
    private monkey2:string = "res/img/monkey2.png";
    //切换状态
    private flag:boolean = false;
    private img:Laya.Sprite;
    constructor()
    {
        //初始化引擎
        Laya.init(1334,750);
        //设置舞台背景色
        Laya.stage.bgColor = "#ffffff";
        //加载多张图片，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
        Laya.loader.load([this.monkey1,this.monkey2],Laya.Handler.create(this,this.graphicsImg)); 
    }
    private graphicsImg():void{
        //创建一个实例
        this.img = new Laya.Sprite();
        //添加到舞台
        Laya.stage.addChild(this.img);
        //显示初始化绘制的图片
        this.switchImg();            
        //侦听switchImg中图片区域的点击事件，触发后执行switchImg切换纹理绘制
        this.img.on("click",this,this.switchImg);            
        //设置图片坐标
        this.img.pos(100,50);
    }
    private switchImg():void{
        //清空绘制
        this.img.graphics.clear();
        //获得要切换的图片资源路径
        var imgUrl:String = (this.flag = !this.flag)? this.monkey2:this.monkey1;
        //获取图片资源
        var texture:Laya.Texture = Laya.loader.getRes(imgUrl);
        //绘制纹理
        this.img.graphics.drawTexture(texture);                        
        //设置纹理宽高
        this.img.size(texture.width, texture.height); 
    }
}
new Main();