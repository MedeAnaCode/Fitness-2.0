const videoPlace = document.querySelector('[data-id="video-place"]');
const videoButton = document.querySelector('[data-id="video-button"]');
const picture = document.querySelector('[data-id="picture"]');

const play = () => {
  videoPlace.innerHTML = '<iframe width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  videoButton.style.display = 'none';
  picture.style.opacity = '0';
  videoPlace.style.zIndex = '5';
};
const playVideo = () => videoButton.addEventListener('click', play);

export {playVideo};
