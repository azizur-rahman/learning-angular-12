 function uapa(){
     
    var parser = new UAParser();
    // console.log(parser.getResult());

    /*
        /// This will print an object structured like this:
        {
            ua: "",
            browser: {
                name: "",
                version: "",
                major: "" //@deprecated
            },
            engine: {
                name: "",
                version: ""
            },
            os: {
                name: "",
                version: ""
            },
            device: {
                model: "",
                type: "",
                vendor: ""
            },
            cpu: {
                architecture: ""
            }
        }
    */
    // Default result depends on current window.navigator.userAgent value

    // Now let's try a custom user-agent string as an example
    // var uastring1 = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.10 Chromium/15.0.874.106 Chrome/15.0.874.106 Safari/535.2";
    // parser.setUA(uastring1);
    var result = parser.getResult();
    // You can also use UAParser constructor directly without having to create an instance:
    // var result = UAParser(uastring1);

    // console.log(result.browser);        // {name: "Chromium", version: "15.0.874.106"}
    // console.log(result.device);         // {model: undefined, type: undefined, vendor: undefined}
    // console.log(result.os);             // {name: "Ubuntu", version: "11.10"}
    // console.log(result.os.version);     // "11.10"
    // console.log(result.engine.name);    // "WebKit"
    // console.log(result.cpu.architecture);   // "amd64"

    // // Do some other tests
    // var uastring2 = "Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)";
    // console.log(parser.setUA(uastring2).getBrowser().name); // "Konqueror"
    // console.log(parser.getOS());                            // {name: "OpenBSD", version: undefined}
    // console.log(parser.getEngine());                        // {name: "KHTML", version: "4.1.4"}

    // var uastring3 = 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.1.0.7 Safari/534.11';
    // console.log(parser.setUA(uastring3).getDevice().model); // "PlayBook"
    // console.log(parser.getOS())                             // {name: "RIM Tablet OS", version: "1.0.0"}
    // console.log(parser.getBrowser().name);                  // "Safari"

    return result;

 }