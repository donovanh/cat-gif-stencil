import { Component, Prop, State, Listen, Watch, h } from '@stencil/core';

@Component({
  tag: 'cat-gif',
  styleUrl: 'cat-gif.css',
  shadow: true
})
export class CatGif {
  /**
   * Optional keyword
   */
  @Prop() keyword: string;

  @Watch('keyword')
  watchHandler(newValue: boolean, oldValue: boolean) {
    if (oldValue === newValue) {
      return;
    }
    this.images = [];
    this.updateImage();
  }

  /**
   * Internal state
   */
  @State() images: string[] = [];
  @State() imageUrl: string = '';

  connectedCallback() {
    this.updateImage();
  }

  @Listen('click', { capture: true })
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
    return this.images[Math.floor(Math.random()*this.images.length)];
  }

  async updateImage() {
    this.imageUrl = await this.getRandomImageUrl();
  }

  render() {
    return <img src={this.imageUrl} alt={`Cat${this.keyword ? ' ' +this.keyword : ''} gif`} />;
  }
}
