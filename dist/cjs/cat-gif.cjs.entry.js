'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f84f8f5b.js');

const CatGif = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return core.h("img", { src: this.imageUrl, alt: `Cat${this.keyword ? ' ' + this.keyword : ''} gif` });
    }
    static get watchers() { return {
        "keyword": ["watchHandler"]
    }; }
    static get style() { return "img{border:10px solid purple}"; }
};

exports.cat_gif = CatGif;
