export declare class CatGif {
    /**
     * Optional keyword
     */
    keyword: string;
    watchHandler(newValue: boolean, oldValue: boolean): void;
    /**
     * Internal state
     */
    images: string[];
    imageUrl: string;
    connectedCallback(): void;
    handleClick(): void;
    fetchGifs(): Promise<void>;
    getRandomImageUrl(): Promise<string>;
    updateImage(): Promise<void>;
    render(): any;
}
