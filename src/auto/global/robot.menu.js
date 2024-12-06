'ui';
if (!global.clickShow) {
    global.clickShow = function (dom) {
      if (dom) {
        var window1 = floaty.rawWindow(
          <vertical gravity="bottom">
            <text id="status" text="" textColor="white" bg="#DF04CD" alpha="0.8"
              w="*" h="*" gravity="center" />
          </vertical>,
        )
        const rect = dom.bounds()
        window1.setSize(rect.width(), rect.height())
        window1.setPosition(rect.left, rect.top)
        sleep(100)
        window1.close()
      }
    }

}

if (!global.floatyWindow) {

    global.floatyWindow = floaty.window(
      <vertical radius="20">
        <vertical id="move" bg="#000000" alpha="0.5" padding='6' gravity="center">
          <text text="移动" textColor="white" textSize="8" gravity="center" />
        </vertical>
        <vertical id="start" bg="#000000" alpha="0.5" padding='6' gravity="center" marginTop="1">
          <text text="开始" textColor="white" textSize="8" gravity="center" />
        </vertical>
        <vertical id="stop" bg="#000000" alpha="0.5" padding='6' gravity="center" marginTop="1">
          <text text="停止" id="stopText" textColor="white" textSize="8" gravity="center" />
        </vertical>
      </vertical>
    )

  wx = 0;
  wy = device.height / 2 - 600;
  x = 0;
  y = 0;
  floatyWindow.setPosition(wx, wy)
  
  floatyWindow.move.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
          case event.ACTION_DOWN:
              X = event.getRawX();
              Y = event.getRawY();
              return true;
          case event.ACTION_MOVE:
              x = event.getRawX() - X;
              y = event.getRawY() - Y;
              floatyWindow.setPosition(wx + x, wy + y);
              return true;
          case event.ACTION_UP:
              wx += x;
              wy += y;
              return true;
      }
      return true;
    });


    floatyWindow.stop.click(() => {
      toastLog('停止脚本!')
      var text = global.floatyWindow.stopText.getText();
      if(text !== '停止'){
        global.floatyWindow.stopText.setText('停止')
      }
      global.robotStop()
    })
    // 点击开始
    let lockStart
    floatyWindow.start.click(() => {
      if (lockStart) {
        return
      }
      if (!global.curRobot) {
        toastLog('请先启动脚本!')
        return
      }
      global.curRobot()
      lockStart = true
      setTimeout(() => {
        lockStart = false
      }, 1000);
    })

}


