$(".submitBtn").on("click",function(event){
    console.log("click submit");
    event.preventDefault();
    var scoreArr=[];


    var passVal=validateInput();

    if(passVal){
        scoreArr.push(  $("#select01").val(),$("#select02").val(),$("#select03").val(),
                        $("#select04").val(),$("#select05").val(),$("#select06").val(),
                        $("#select07").val(),$("#select08").val(),$("#select09").val(),
                        $("#select10").val()
                        );

        var newSurvey = {
            name:$("#name").val().trim(),
            photo:$("#imgLink").val().trim(),
            scores:scoreArr
        }

        $.post("api/friends",newSurvey,function(data){
            console.log("response data",data);
            if (data){
                
                console.log("name",data.name);
                console.log("photo",data.photo);
                createMatchModal(data.name,data.photo);
                
            }
        })
    }
})

function validateInput(){
    
    var errFlg=false;
    $(".modal-body-info").empty();

    if($("#select01").val() === "Choose..." || $("#select02").val() === "Choose..." ||
       $("#select03").val() === "Choose..." || $("#select04").val() === "Choose..." ||
       $("#select05").val() === "Choose..." || $("#select06").val() === "Choose..." ||
       $("#select07").val() === "Choose..." || $("#select08").val() === "Choose..." ||
       $("#select09").val() === "Choose..." || $("#select10").val() === "Choose..." 
       )
    {
        var divTagQ=$("<div>").text("Please fill in all the question fields!");
        $(".modal-body-info").append(divTagQ);
        $('#modal-info').modal("show");
        errFlg=true;
    }

    if($("#imgLink").val() === "" )
    {        
        var divTagN=$("<div>").text("Please fill in the link of the photo field!");
        $(".modal-body-info").append(divTagN);        
        $('#modal-info').modal("show");
        $('#modal-info').on('hidden.bs.modal', function () {
            $('#imgLink').focus();})
        errFlg=true;   
    }
    if($("#name").val() === "" )
    {        
        var divTagL=$("<div>").text("Please fill in the name field!");
        $(".modal-body-info").append(divTagL);   
        $('#modal-info').modal("show");     
        $('#modal-info').on('hidden.bs.modal', function () {
            $('#name').focus();})
        errFlg=true;  
    }

    if(errFlg){
        return false;
    }else{
        return true;
    }
}

function createMatchModal(name,photo){

    $(".modal-body-match").empty();

    var nameH3=$("<h3>").text(name);
    var photoDiv=$("<img>").attr("src",photo);
    console.log("name h3",nameH3);
    // console.log("photo",photoDiv);

    $(".modal-body-match").append(nameH3,photoDiv);        
    $('#modalFriends').modal("show");
    //reset

}