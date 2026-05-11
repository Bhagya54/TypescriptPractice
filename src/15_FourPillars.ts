/*
Inheritance - avoids redundancy of code
Polymorphism - function overloading/function overriding
Abstraction - hide the implementation - Interface, Abstract Class
RBI - bank - set the rules - what should each bank should have functionality - withdraw/deposit
icici - implement rbi rules
sbi - implement rbi rules
hdfc
Encapsulation


class Browser (parent)
navigateToURL()
2bhk

chrome extends Browser


firfox extends Browser


*/


class Browser {
    url: string

    constructor(url: string) {
        this.url = url
    }

    navigateToUrl(): void {
        console.log(`Navigated to url: ${this.url}`)
    }

}


class ChromeBrowser extends Browser {
    launchBrowser(): void {
        console.log("Launch Chrome Browser")
    }

    override navigateToUrl(): void {
        console.log(`Navigated to url through chrome browser: ${this.url}`)
    }

}

class FirefoxBrowser extends Browser {
    launchBrowser(): void {
        console.log("Launch firefox Browser")
    }

    override navigateToUrl(): void {
        console.log(`Navigated to url through firefox browser: ${this.url}`)
    }
}


const ch = new ChromeBrowser("https://gmail.com")
ch.launchBrowser();
ch.navigateToUrl();

const ff = new FirefoxBrowser("https://google.com")
ff.launchBrowser();
ff.navigateToUrl();