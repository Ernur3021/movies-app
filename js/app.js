const videoContent = document.querySelector('.video__content')

let url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmXmlB4-HJytD7wek0Uo97A&part=snippet%2Cid&order=date&maxResults=50https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29c3345dbcmshd2abb9a719b4570p1af0b5jsn94f7646fc1e7',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
function display(data) {
  console.log(data);
  let cartItems = '';
  data.items.forEach((item) => {
    cartItems += `
        <div class="video-card">
          <div class="video__wrapper">
            <img
              src="${item?.snippet?.thumbnails?.high?.url}"
              alt="${item?.snippet?.title}"
              class="video-image"
            />
          </div>
          <div class="content">
            <p class="video-title">
            ${item?.snippet?.title}
            </p>
            <div class="checked">
              <p class="channel-title">${item?.snippet?.channelTitle}</p>
              <img src="./assets/check.svg" alt="chech"/>
            </div>
          </div>
        </div>
  `;
  });

  videoContent.innerHTML = data ? cartItems : 'Loading...';
}
async function fetchData(callback) {
  try {
    let response = await fetch() ;
    let data = await response.json();
    callback(data);
  } catch (error) {
    console.error(error);
  } 
}

fetchData(display);

async function fetchData(callback) {
  try {
    const response = await fetch(url, options);

    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error(error);
  }
}  

