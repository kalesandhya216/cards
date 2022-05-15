

var cl = console.log;
var card = document.getElementById('card');

let cardsData = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://images.unsplash.com/photo-1652272161081-cba73bec814e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://images.unsplash.com/photo-1652283428967-95a1dc4756b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://images.unsplash.com/photo-1652189600254-4ee1c5fe97d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://images.unsplash.com/photo-1652252029347-7030a5ed232a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://images.unsplash.com/photo-1652209911920-2700fcbd5011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
]

					// <div class="card">
						// <div class="card-body">
							// <figure class="myCard">
								// <img src="https://via.placeholder.com/600/92c952">
							// <figcaption>
								// <p class="title">
									// <span>
										// accusamus beatae ad facilis cum similique qui sunt
									// </span>
								// </p>
								// <span class="id">ID : 1</span>
								// <span class="albumId">Album Id : 1</span>
							// </figcaption>
							// </figure>
						// </div>
					// </div>



var result = '';

cardsData.forEach(function(data){
	
	result += `<div class="col-sm-4 mb-4"><div class="card"><div class="card-body"><figure class="myCard"><img src="${data.url}" alt="" class="img-fluid"<figcaption><p class="title"><span>${data.title}</span></p><span class="id">Id : ${data.id}</span><span class="albumId">Album Id : ${data.albumId}</span></figcaption></figure></div></div></div>`;
	
})


cl(result);

card.innerHTML = result;


		