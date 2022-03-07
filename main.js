var apiKey ="563492ad6f917000010000010648330e51ae419c8446bfb8b8fffed6";
        var requestOptions = {
            method: "GET",
            headers: {
            Authorization: apiKey,
            }
        }
var page = 1;

function fetchData(num)
{
    fetch(`https://api.pexels.com/v1/curated?page=${num}&per_page=80`, requestOptions)
        .then((response) => response.json())
        .then((result) =>{ 
        // console.log("result",result)
         showData(result)    
    })
        .catch((error) => console.log("error", error));
}  

fetchData(1)
var cont = document.getElementById("cont")


async function showData(result)
{   
    nextUrl = result.next_page;
    cont.innerHTML = null;
    var n = 0;
    var col1 = document.createElement("div")
    col1.setAttribute("class","column")

    var col2 = document.createElement("div")
    col2.setAttribute("class","column")

    var col3  = document.createElement("div")
    col3.setAttribute("class","column")

    var col4 = document.createElement("div")
    col4.setAttribute("class","column")
   

    result.photos.map((el, i)=>{
   
       var imgDiv = document.createElement("div")
       var img = document.createElement("img")
       img.src = el.src.large
    
        var p = document.createElement("p")
        p.innerText = el.alt;
        
        // Post item Info
        var info = document.createElement("div")
        info.setAttribute("class", "info")

        var votes = document.createElement("div")

        var upvote = document.createElement("div")
        upvote.setAttribute("class","grnOnHover")
        var downvote = document.createElement("div")
        downvote.setAttribute("class","orngOnHover")

        upvote.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>'
        downvote.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" class="Vote Vote-down" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Downvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"></path></svg>'
        let vts = Math.floor(Math.random() * 100);
        votes.append(upvote, vts, downvote)

        var comments = document.createElement("div")
        let cmts = Math.floor(Math.random() * 100);

        comments.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg> ${cmts}`
        comments.setAttribute("class","whtOnHover")

        var views = document.createElement("div")
        let vws = Math.floor(Math.random() * 100);
        views.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>  ${vws}K`
        views.setAttribute("class","whtOnHover")

        info.append(votes,comments, views)
       imgDiv.append(img, p, info)
    
    if(n <= 20)
    {      
        col1.append(imgDiv)
    }
    else if(n > 20 && n <= 40)
    {
         col2.append(imgDiv) 
    }
    else if(n > 40 && n < 60)
    {
       col3.append(imgDiv)  
    }
    else if(n >= 60 && n < 79){
         col4.append(imgDiv)
    }
    n++;

    cont.append(col1, col2, col3, col4)
   })
}

// ########################### //
// ##### Dropdown Filter ##### //
// ########################### //

// show dropdown list on click on dropdown title

var leftFilter = document.getElementById("filter-left-dropDown")
var leftlist = document.getElementById("drop-list")

var rightfilter = document.getElementById("filter-right-dropDown")
var rightList = document.getElementById("drop-list-right")

rightfilter.addEventListener("click", ()=>{
    dropdownList(rightList)
})
var k  = "show"
leftFilter.addEventListener("click", ()=>{
    dropdownList(leftlist)
})

function dropdownList(side)
{ 
  if(k==="show")
  {
    side.style.display = "inherit"
    k = "hide"
  }
  else{
    side.style.display = "none"
    k= "show"
  }
}

// ########################### //
// ##### Search by Query ##### //
// ########################### //

var searchInp = document.getElementById("searchInp")
searchInp.addEventListener("input", debounce)

function searchQuery()
{
    var q = searchInp.value;
    // console.log("q:",q);
    fetch(`https://api.pexels.com/v1/search?query=${q}?page=1&per_page=80`, requestOptions)
    .then((response) => response.json())
    .then((result) =>{ 
    // console.log("result",result)
     showData(result)    
})
    .catch((error) => console.log("error", error)); 
}


let bomb;
function debounce(){
    clearTimeout(bomb);

    bomb = setTimeout(function (){

       searchQuery();
    },1000);

}

// ###################### //
// ##### Pagination ##### //
// ###################### //

var nextPage = document.getElementById("next")
var prevPage = document.getElementById("prev")

nextPage.addEventListener("click",()=>{
    
    if(page >= 1)
    {
        prevPage.disabled = false
        prevPage.style.backgroundColor = `#1BB76E`
        prevPage.style.cursor = "pointer";  
    }
    page++;
    console.log("page",page);
    fetchData(page)
})

prevPage.addEventListener("click", ()=>{
    
    console.log("page", page);
    if(page===1)
    {
    console.log("181 d");
    prevPage.disabled = true
    prevPage.style.backgroundColor = `#90bba7`
    prevPage.style.cursor = "not-allowed";
    }
   else if(page > 1)
    {
        page--; 
        console.log("171 nd");
        prevPage.disabled = false
        prevPage.style.backgroundColor = `#1BB76E`
        prevPage.style.cursor = "pointer";
        fetchData(page)
    }
})

// ###################### //
// ####### Filter ####### //
// ###################### //



function showList()
{

}