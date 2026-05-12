abstract class WebDriver {
    url: string


    constructor(url: string) {
        this.url = url
    }

    abstract launchBrowser():void;

    abstract navigateToUrl(): void;

    getTitle():void{
        console.log("Get the title")
    }    
}

class ChromeDriver extends WebDriver{
    override launchBrowser(): void {
        console.log("Launch Chrome Browser")
    }
    override navigateToUrl(): void {
        console.log("Navigate to the url from chrome: " + this.url)
    }

}


class FirefoxDriver extends WebDriver{
    override launchBrowser(): void {
        console.log("Launch firefox Browser")
    }
    override navigateToUrl(): void {
        console.log("Navigate to the url from ff: " + this.url)
    }

}
//const ab = new WebDriver()

const chr = new ChromeDriver("https://google.com");
chr.launchBrowser()
chr.navigateToUrl()
chr.getTitle()



