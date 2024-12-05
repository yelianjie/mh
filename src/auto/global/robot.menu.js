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
        <vertical id="start" bg="#000000" alpha="0.5" padding='6' gravity="center">
          <img w="16" h="16" layout_gravity="center" src="data:image/png;base64,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" />
          <text text="开始" textColor="white" textSize="8" gravity="center" />
        </vertical>
        <vertical id="stop" bg="#000000" alpha="0.5" padding='6' gravity="center" marginTop="1">
          <img w="16" h="16" layout_gravity="center" src="data:image/png;base64,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" />
          <text text="停止" id="stopText" textColor="white" textSize="8" gravity="center" />
        </vertical>
      </vertical>
    )

    floatyWindow.setPosition(0, device.height / 2 - 600)

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

