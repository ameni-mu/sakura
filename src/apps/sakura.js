let radiusDiff = 7; //花びらの最低半径x

export default class Sakura {
  ///////////////////////////
  /// constructor
  ////////////////////////////
  constructor(x,y){

    this.x = x;
    this.y = y;

    this.aDegree = Math.floor(Math.random() * 360);
    this.angle = 0;
    this.wind = 0;
    this.windVal = Math.floor(Math.floor(Math.random() * 5) + 1) / 2;

  }

  ///////////////////////////
  /// update
  ////////////////////////////
  update(i){

    this.wind -= this.windVal;
    this.angle += this.speedX;
    if(this.pattern < 1){
      this.dx = Math.floor(Math.sin(this.angle) * 20);
    }else{
      this.dx = Math.floor(Math.cos(this.angle) * 20);
    }

    this.render(i);

  }

  ///////////////////////////
  /// render
  ////////////////////////////
  render(i){

    let x = this.x + this.dx + this.wind;
    let y = this.y = this.y + (this.speedX * 100);
    if(y > window.innerHeight){
      y = this.y = 0;
    }
    if(x < 0){
      this.wind = 0;
      y = this.y = 0;
      this.x = this.x + (stage.width / 2);
    }

    //degree
    //A
    let aDegree = this.aDegree = this.aDegree + (this.speedX * 200);
    //B
    this.bDegree = aDegree - 90;
    let bDegree = this.bDegree;
    if(bDegree < 0) bDegree = 360 + bDegree;
    //C
    this.cDegree = bDegree - 70;
    let cDegree = this.cDegree;
    if(cDegree < 0) cDegree = 360 + cDegree;
    //D
    this.dDegree = bDegree - 90;
    let dDegree = this.dDegree;
    if(dDegree < 0) dDegree = 360 + dDegree;
    //E
    this.eDegree = bDegree - 110;
    let eDegree = this.eDegree;
    if(eDegree < 0) eDegree = 360 + eDegree;
    //F
    this.fDegree = dDegree - 90;
    let fDegree = this.fDegree;
    if(fDegree < 0) fDegree = 360 + fDegree;

    //radius
    let radius = this.radius;
    let aPointRadius = this.aPointRadius = radius * 0.8;
    let curvePointRadius = this.curvePointRadius = radius * 0.9;
    let notchPointRadius = this.notchPointRadius = radius - (radius * 0.3);

    //radian
    //A
    this.aRadian = aDegree * (Math.PI / 180);
    let aRadian = this.aRadian;
    //B
    this.bRadian = bDegree * (Math.PI / 180);
    let bRadian = this.bRadian;
    //C
    this.cRadian = cDegree * (Math.PI / 180);
    let cRadian = this.cRadian;
    //D
    this.dRadian = dDegree * (Math.PI / 180);
    let dRadian = this.dRadian;
    //E
    this.eRadian = eDegree * (Math.PI / 180);
    let eRadian = this.eRadian;
    //F
    this.fRadian = fDegree * (Math.PI / 180);
    let fRadian = this.fRadian;

    //座標
    //a
    this.ax = Math.cos(aRadian) * aPointRadius + x;
    this.ay = Math.sin(aRadian) * aPointRadius + y;
    //b
    this.bx = Math.cos(bRadian) * curvePointRadius + x;
    this.by = Math.sin(bRadian) * curvePointRadius + y;
    //c
    this.cx = Math.cos(cRadian) * radius + x;
    this.cy = Math.sin(cRadian) * radius + y;
    //d
    this.dx = Math.cos(dRadian) * notchPointRadius + x;
    this.dy = Math.sin(dRadian) * notchPointRadius + y;
    //e
    this.ex = Math.cos(eRadian) * radius + x;
    this.ey = Math.sin(eRadian) * radius + y;
    //f
    this.fx = Math.cos(fRadian) * curvePointRadius + x;
    this.fy = Math.sin(fRadian) * curvePointRadius + y;

  }
}
