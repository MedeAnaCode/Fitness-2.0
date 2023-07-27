const videoWrapper = document.querySelector('[data-id="video-wrapper"]');
const videoButton = videoWrapper.querySelector('[data-id="video-button"]');

const play = () => videoWrapper.innerHTML = '<iframe width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
const playVideo = () => videoButton.addEventListener('click', play);

export {playVideo};
