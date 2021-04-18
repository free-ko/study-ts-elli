import { BaseComponent } from './../../component.js';
// <iframe 
//     width="1264"
//     height="720"
//     src="https://www.youtube.com/embed/uviU-WPqKng"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
// ></iframe>


export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`
            <section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                    <h3 class="video__title"></h3>
                </div>
        </section>`);

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = "https://www.youtube.com/embed/uviU-WPqKng";  // url -> videoID 추출 -> embed
        console.log(url);

        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
        titleElement.textContent = title;
    }
}