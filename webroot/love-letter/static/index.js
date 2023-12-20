window.addEventListener("load", () => {
    new Container(config.wish, config.time, config.texts);
});

function Container(wish, time, texts) {
    this.passedSeconds = 0;
    this.finalText = wish;
    this.beginDate = time
    this.texts = texts
    this.textIndex = 0;

    // this.renderTexts(this.texts);
    this.renderText(this.texts[this.textIndex]);
    this.updateText();
    document.querySelector('.pass-time .finalText').innerHTML = this.finalText;
    setInterval(() => {
        this.passedSeconds = Math.ceil((+ new Date() - new Date(this.beginDate).getTime()) / 1000);
        let list = ['days', 'hours', 'minutes', 'seconds'];

        list.forEach(item => {
            document.querySelector(`.pass-time .${item}`).innerHTML = this[item]();
        })
    }, 1000);
}

Container.prototype = {
    renderText(text) {
        document.getElementById("letter").innerText = text;
    },
    updateText() {
        let that = this;
        document.addEventListener('click', function (e) {
            if(e.target.id == "img_music") {
                return;
            }
            that.textIndex++
            if (that.textIndex >= that.texts.length) {
              that.textIndex--
              return
            }
            let text = that.texts[that.textIndex]
            document.getElementById("letter").innerText = text;
          }, false)
    },
    renderTexts(texts) {
        let div = document.createElement("div");
        texts.forEach(item => {
            let d = document.createElement("div");
            d.innerHTML = item;
            div.appendChild(d);
        })
        document.getElementById("letter").innerHTML = div.innerHTML;
    },
    finalText() {
        return this.text || "";
    },
    beginDate() {
        return this.time;
    },
    days: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / (3600 * 24));
    },
    hours: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 3600) % 24;
    },
    minutes: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 60) % 60;
    },
    seconds: function () {
        if (this.passedSeconds === 0) return "";
        return this.passedSeconds % 60;
    },
};
