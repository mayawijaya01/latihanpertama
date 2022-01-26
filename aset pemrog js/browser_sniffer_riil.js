navigator.mozId = null
navigator.mozPay = null
navigator.mozContacts = [object ContactManager]
navigator.mozApps = [xpconnect wrapped (nsISupports, mozIDOMApplicationRegistry, mozIDOMApplicationRegistry2)]
navigator.mozTCPSocket = null
navigator.vibrate = function vibrate() {
    [native code]
}
navigator.javaEnabled = function javaEnabled() {
    [native code]
}
navigator.mozIsLocallyAvailable = function mozIsLocallyAvailable() {
    [native code]
}
navigator.getGamepads = function getGamepads() {
    [native code]
}
navigator.mozGetUserMedia = function mozGetUserMedia() {
    [native code]
}
navigator.sendBeacon = function sendBeacon() {
    [native code]
}
navigator.registerProtocolHandler = function registerProtocolHandler() {
    [native code]
}
navigator.registerContentHandler = function registerContentHandler() {
    [native code]
}
navigator.taintEnabled = function taintEnabled() {
    [native code]
}
navigator.mimeTypes = [object MimeTypeArray]
navigator.plugins = [object PluginArray]
navigator.doNotTrack = 0
navigator.oscpu = Windows NT 6.1; WOW64
navigator.vendor = 
navigator.vendorSub = 
navigator.productSub = 20100101
navigator.cookieEnabled = true
navigator.buildID = 20141007073543
navigator.battery = [object BatteryManager]
navigator.geolocation = [object Geolocation]
navigator.appCodeName = Mozilla
navigator.appName = Netscape
navigator.appVersion = 5.0 (Windows)
navigator.platform = Win32
navigator.userAgent = Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20100101 Firefox/33.0
navigator.product = Gecko
navigator.language = en-US
navigator.languages = en-US,en
navigator.onLine = true

printResults: function display(){
document.write("<b>This browser is "+BrowserDetect.browser);
document.write( " version "+ BrowserDetect.version + ".<br />");
document.write("The Operating System is "+ BrowserDetect.OS +
"</b>.<br />");
}