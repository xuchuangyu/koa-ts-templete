if (import.meta.env.MODE == 'production') {
  (function noDebuger() {
    return
    function testDebuger() {
      var wWADWeTEd1: any = new window["Date"]();
      if ((new window["Date"]() as any) - wWADWeTEd1 > 10) {
        window["document"]['body']['innerHTML'] = '<div>私有接口，请勿调用</div>';
        return true
      }
      return false
    }

    function start() {
      while (testDebuger()) {
        testDebuger()
      }
    }
    if (!testDebuger()) {
      window['onblur'] = function () {
        setTimeout(function () {
          start()
        }, 500)
      }
    } else {
      start()
    }
  })();
}
