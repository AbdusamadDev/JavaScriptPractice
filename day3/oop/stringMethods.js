class String {
    constructor(data) {
        this.data = data;
        this.lowerCase = "abcdefghijklmnopqrstuvwxyz";
        this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    capitalize() {
        if (!(this.lowerCase.search(this.data[0]))) {
            return this.data.fromCharCode(this.data.charCodeAt(0) - 32);
        } else {
            return this.data;
        }
    }
}


var usage = new String(data = "somethin")
console.log(usage.capitalize());
