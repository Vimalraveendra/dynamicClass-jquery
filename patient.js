
class Patient{
    patient(name,age){
        $('.card-title').text(`${name}`)
        $('.card-text').text(`${age}`)
    }      

}


function loadPatient(){
    let patient1 = new Patient;
    patient1.patient("Boss",54);
    
}




// $('#value').change(function(){
    
// })




function loadArticles(){
 return `
 <div.class="container">
    <div.class="row">
       <div.class="col-sm-4>
         <input type='text' id="value"/>
         <button id="add" class="btn btn-success">Add</button>
       </div>
        <div.cla class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text"></p>
                    <a href="#" class="card-link">Read...</a>
                </div>
            </div>
        </div>  
    </div>
</div>

 `

}
function renderHtml(){
   
        let value = $('#value').val()
        if(value.length>0){
            let patient2 = new Patient;
            patient2.patient(value,45)
        }
     
        $('#value').val('')
}

function loadPage(){
    $('body').append(loadArticles())
    loadPatient()
   renderHtml()
   
}
// loadPage();

function filterList(list){
 $(window.parent.document.querySelectorAll('li')).remove()
 $(window.parent.document.querySelectorAll('.list')).append(list)
    
}

function changeName(list){

    let name = $(list).text()
    let patient3 =new Patient
    patient3.patient(name,58)   
    // let name = $(list).text()
    // let patient3 =new Patient
    // patient3.patient(name,58)
}

// appending list name to the name field
window.parent.document.querySelectorAll('li').forEach(list=>{
     $(list).on('click',function(){
         changeName(list);
         filterList(list);
     })
})

window.addEventListener('load', () => {
    $('body').append(loadArticles())
    loadPatient()
    $("#add").click(renderHtml)
    
    // window.parent.$('li')
  });

// $(window).on('load',function(){
//    $('body').append(loadArticles())
//    loadPatient()

//    $('#add').click(function(){
//    let value= $('#value').val(); 
//    if(value.length>0){ 
//    let patient2 = new Patient
//     patient2.patient(value,45)
//    }
//    })

// })
// $(window).on('load',function(){
//     $('.container').append(loadArticles());
// })