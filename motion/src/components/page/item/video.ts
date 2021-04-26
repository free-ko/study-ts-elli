import { BaseComponent } from "./../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
            <section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                    <h3 class="video__title"></h3>
                </div>
        </section>`);

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;

    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // Input URL
  // https://www.youtube.com/watch?v=uviU-WPqKng
  // https://youtu.be/uviU-WPqKng

  // Output URL
  // https://www.youtube.com/embed/uviU-WPqKng

  // 정규표현식 Regex(개발자라면 필수적으로 알아야하는 내용)
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// EX)
// <iframe
//     width="1264"
//     height="720"
//     src="https://www.youtube.com/embed/uviU-WPqKng"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen
// ></iframe>
