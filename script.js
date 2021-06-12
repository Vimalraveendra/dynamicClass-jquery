
const userData =[
    {
        id:1000,
        name:"John"
    }, {
        id:10002,
        name:"Boss"
    },
    , {
        id:10003,
        name:"Mann"
    },
    , {
        id:10004,
        name:"Denver"
    },
    , {
        id:10005,
        name:"Jackson"
    },
]

function addItem(lis){
      
 userData.forEach(list=> 

    $(`<li>${list.name}</li>`))
   
}

function addList(){
    //clearing the parent container before adding
 $('.list').html('');
    userData.forEach(item=>{
        $('.list').append(
            `<li>${item.name}</li>`
        ) 
    })
}

$(window).on('load', addList)