
  //{Authorization: "[h5VhVqQB6IrpYIubq7CPzzZj81yyqwCcIWbMDNCJVh0aCSwSAkgJgy8N]"}

  const apiKey = "h5VhVqQB6IrpYIubq7CPzzZj81yyqwCcIWbMDNCJVh0aCSwSAkgJgy8N"
  const baseUrl = "https://api.pexels.com/v1/search"



  const loadImagesButton = document.getElementById("load-images")
  const loadSecondaryImagesButton = document.getElementById("load-secondary-images")

  

    function loadImages(query = "nature"){
    fetch(`https://api.pexels.com/v1/search?query=${query}`,{
        headers:{
            authorization: apiKey,
        },
        
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        }else{
            throw new Error ("Errore")
        }

    })
    .then((data) => {
        const gallery = document.getElementById("gallery")
        gallery.innerHTML = ""
        data.photos.forEach(photo => {
            const imageCard = document.createElement("div")
            imageCard.classList = "col-md-4 mb-4"
            imageCard.innerHTML = ` <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="${photo.src.medium}"
                  class="bd-placeholder-img card-img-top"
                  alt="${photo.alt}"
                />
                <div class="card-body">
                  <h5 class="card-title">Photo ID: "${photo.id}"</h5>
                  <p class="card-text">"${photo.photographer}"
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick="toggleCardView(this)"
                      >
                        View
                      </button>
                      
                    </div>
                    <small class="text-muted">ID: "${photo.id}"</small>
                  </div>
                </div>
              </div>
            </div>
             `
             gallery.appendChild(imageCard)
        });
    })
    .catch((error) => {
        console.log(error)
    })
    function loadSecondaryImages(query = "ocean"){
        fetch(`https://api.pexels.com/v1/search?query=${query}`,{
            headers:{
                authorization: apiKey,
            },
            
        })
        .then((response) => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error ("Errore")
            }
    
        })
        .then((data) => {
            const gallery = document.getElementById("gallery")
            gallery.innerHTML = ""
            data.photos.forEach(photo => {
                const imageCard = document.createElement("div")
                imageCard.classList = "col-md-4 mb-4"
                imageCard.innerHTML = ` <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <img
                      src="${photo.src.medium}"
                      class="bd-placeholder-img card-img-top"
                      alt="${photo.alt}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Photo ID: "${photo.id}"</h5>
                      <p class="card-text">"${photo.photographer}"
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="btn-group">
                          
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            onclick="hideCard(this)
                          >
                            Hide
                          </button>
                        </div>
                        <small class="text-muted">ID: "${photo.id}"</small>
                      </div>
                    </div>
                  </div>
                </div>
                 `
                 gallery.appendChild(imageCard)
            });
        })
        .catch((error) => {
            console.log(error)
        })

        function toggleCardView(button){
            if(button.textContent === "View"){
                button.textContent = "Hide"
            }else {
                button.textContent = "View"
            }

        }

        function hideCard(button){
            button.closest(".col-md-4").style.display = "none"
        }

    document.querySelector(".btn-primary").addEventListener("click", () => loadImages())
    document.querySelector("btn-secondary").addEventListener("click", () => loadSecondaryImages())
    toggleCardView()
    hideCard()
  }
    }
