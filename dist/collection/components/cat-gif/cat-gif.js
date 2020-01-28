import { h } from "@stencil/core";
export class CatGif {
    constructor() {
        /**
         * Internal state
         */
        this.images = [];
        this.imageUrl = '';
    }
    watchHandler(newValue, oldValue) {
        if (oldValue === newValue) {
            return;
        }
        this.images = [];
        this.updateImage();
    }
    connectedCallback() {
        this.updateImage();
    }
    handleClick() {
        this.updateImage();
    }
    async fetchGifs() {
        const key = 'gwWthNT5DFpvrh04kt4PYiakYO12aM3B';
        let keywords = `cat`;
        if (this.keyword) {
            keywords += ` ${this.keyword}`;
        }
        const url = `${window.location.protocol}//api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(keywords)}`;
        const result = await fetch(url);
        const JSONresult = await result.json();
        this.images = JSONresult.data.map(item => item.images.original.url);
    }
    async getRandomImageUrl() {
        if (!this.images.length) {
            await this.fetchGifs();
        }
        return this.images[Math.floor(Math.random() * this.images.length)];
    }
    async updateImage() {
        this.imageUrl = await this.getRandomImageUrl();
    }
    render() {
        return h("img", { src: this.imageUrl, alt: `Cat${this.keyword ? ' ' + this.keyword : ''} gif` });
    }
    static get is() { return "cat-gif"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["cat-gif.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cat-gif.css"]
    }; }
    static get properties() { return {
        "keyword": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optional keyword"
            },
            "attribute": "keyword",
            "reflect": false
        }
    }; }
    static get states() { return {
        "images": {},
        "imageUrl": {}
    }; }
    static get watchers() { return [{
            "propName": "keyword",
            "methodName": "watchHandler"
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
