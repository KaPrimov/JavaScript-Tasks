import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Article {
    constructor(
        public title: string,
        public description: string,
        public author: string,
        public imageUrl: string
    ) {}
}