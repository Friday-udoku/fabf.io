
let search, title, author, desc,image, img, info, book, bookIsbn,bookis, item, tith, view;
let endpoint = "https://www.googleapis.com/books/v1/volumes?q=";
let showimg = document.getElementById("showimgs");
let mess = "Please enter a search query.. Thanks!"
let mess1 = "Error retrieving the data..! Http request is not successful";

$(function(){
$("#search-button").click(() =>{
    showimg.innerHTML = " ";
fetchbook();

});
fetchbook = ()=>{
search = $("#search").val();
 $("#showimgs").css({
     "height": "auto",
     "background":"white"
 });
if (search == "") {
    alert(mess);
} else {
  $.ajax({
      url: endpoint + search,
      dataType: 'JSON',
      success: (book) =>{
          bookis =book.items;
          for(i =  0; i< bookis.length; i++){
           item = bookis[i].volumeInfo;
           if(item!=""){
               title = item.title;
               author = item.authors;
               img = item.imageLinks.smallThumbnail; 
               desc = item.description;
               info = item.infoLink;
               bookIsbn = item.industryIdentifiers[1].identifier;
               view = "viewer.html?bookIsbn="+bookIsbn;
               showimg.innerHTML+=`
              <div class = "container-fluid mt-n5" id = "inner-container">
               <div class = "inner-row row shadow mb-5 bg-light p-3 m-2  rounded ">
               
               <div class = "c-img col-sm-12 col-md-12col-lg-4">
               <div class ="imgry ">
                <img src="${img}" alt="the book image" class="card-img-top img-fluid rounded-lg card-img-top"> 
                </div>
                </div>
              
                <div class = "c-txt col-sm-12 col-md-12 col-lg-8 ">
                <div class = "card-body text">
                <h6 class = "card-title"> Title: ${title}</h6>
                <h6 class = "card-title"> Athout: ${author}</h6>
                <p class=" txt-desc has-text-black-ter has-text-weight-normal"> Desc: ${desc.slice(
                      0,
                          150
                        ) + '...'}</p>
                <p class = "ancor">
                <a href="${info}" class="btn btn-primary btn-sm a-up">Go to vendors page</a>
                <a href="${view}" class="btn btn-primary btn-sm a-down" >Go to embedded page</a>
                </p>
                </div>
                </div>
               
                </div>
                <hr>
                </dv>
                `

           }else{
               alert(mess1)
           }
 
          }
  
      },
      type:'GET'
  }); 
}
search = $("#search").val(" ");

}

});

