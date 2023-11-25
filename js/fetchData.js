fetch("./data/youtube-videos.json")
.then(function(response){
  return response.json();
})
.then(function(youtubeVideos){
  let placeholder = document.querySelector("#ytdata-output");
  let out = "";

  for (let youtubeVideo of youtubeVideos){
    out += 
    `
      <div class="col-lg-2 col-11 col-md-3 box" data-aos="zoom-in">
        <img src="${youtubeVideo.thumbnail}" alt="${youtubeVideo.title} thumb"
          class="src-thumb img-fluid w-100" data-bs-target="#${youtubeVideo.targetId}" data-bs-toggle="modal">
        <div class="img-title">
          <h2 class="text-center my-2">${youtubeVideo.title}</h2>
        </div>
      </div>

      <div class="modal fade" id="${youtubeVideo.targetId}" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5>${youtubeVideo.modalTitle}</h5>
              <button type="button" class="btn-close me-1" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <img src="${youtubeVideo.modalImage}" alt="${youtubeVideo.title}" class="img-fluid">
              </div>
              <div class="modal-desc mt-4">
                <p>${youtubeVideo.desc}</p>
                <h5 class="mt-2">Requirements</h5>
                <ul>
                  <li>${youtubeVideo.requirements.first}</li>
                  <li>${youtubeVideo.requirements.second}</li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <a href="${youtubeVideo.link}" target="_blank" class="mx-auto"><button
                  class="btn">Watch</button></a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  placeholder.innerHTML = out;
})