let search, title, author, desc,image, img, info, book, bookIsbn,bookis, item, tith, view;
let endpoint = "https://www.googleapis.com/books/v1/volumes?q=";
let showImg = document.getElementById("images");
let mess = "Please enter a search query.. Thanks!"
let mess1 = "Error retrieving the data..! Http request is not successful";

$(function(){
    showImg.innerHTML+= " ";
$("#search-button").click(() =>{ 
 fetchbook();

 
 });
fetchbook = ()=>{
    search = $("#searching").val();

if (search == " ") {
    alert(mess);

 } else {

  $.ajax({
      url: endpoint + search,
      dataType: 'JSON',
      success: (book) =>{
          bookis =book.items;
          for(i =  0; i< bookis.length; i++){
           item = bookis[i].volumeInfo;
           if(item === 0){
   
            alert(mess1)
        }else{
               title = item.title;
               author = item.authors;
               img = item.imageLinks.smallThumbnail; 
               desc = item.description;
               info = item.infoLink;
               bookIsbn = item.industryIdentifiers[1].identifier;
            

               view = "viewer.html?bookIsbn="+bookIsbn;
               showImg.innerHTML+=`<div class = "container p-5">
           
               <div class = "row inner-row shadow pb-5 ">
               
               <div class = "image-column col-sm-12 col-md-12 col-lg-4 p-3 " style ="height:30vh">
               <div class ="image-box shadow-2xl">
                <img src="${img}" alt="the book image" class=" rounded-lg card-img-top"> 
                </div>
                </div>
              
                <div class = "text-column col-sm-12 col-md-12 col-lg-8 p-3 " style ="height:30vh">
                <div class = "text-box ">
                <h6 class = "card-title"> <strong>Title:</strong> ${title}</h6>
                <h6 class = "card-title"> <strong>Author:</strong> ${author}</h6>
                <p class=" txt-desc has-text-black-ter has-text-weight-normal"> Desc: ${desc.slice(
                      0,
                          150
                        ) + '...'}</p>
                <p class = "links">
                <a href="${info}" class="btn btn-danger btn-sm btn-vendor">Go to vendors page</a>
                <a href="${view}" class="btn btn-danger btn-sm btn-embedded" >Read for free here</a>
                </p>
                </div>
                </div>
               </div>
           
                </div>
                `
                }
          
          }
  
      },
      type:'GET'
  }); 
}
search = $("#searching").val(" ");

}

 });