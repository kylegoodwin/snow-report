window.onload = function(){

var ajaxOptions = {
  url: 'http://forecast.weather.gov/MapClick.php?lat=47.43969913094723&lon=-121.45317077636719&FcstType=json',
  dataType: 'json',
  success: updatePage,
  error: printError
};
 
$.ajax(ajaxOptions);

ajaxOptions.url = 'http://forecast.weather.gov/MapClick.php?lat=47.437376962080776&lon=-121.4154052734375&FcstType=json';
ajaxOptions.success = updatePage2;

$.ajax(ajaxOptions);

function updatePage(data){

    var text = data.data.text;
    var days = data.time.startPeriodName;

    days.forEach(addDaysOne);
    text.forEach(addTextOne);
    
}

function updatePage2(data){

    console.log(data);
    var text = data.data.text;
    var days = data.time.startPeriodName;

    days.forEach(addDaysTwo);
    text.forEach(addTextTwo);
    
}

function printError(req,status,err){
    console.log("fuck",status, err );
}

function addDaysOne(item,index){
    $('#stevens').append('<div' + ' id="t' + index + '" class="wtext"> <h4>' + item + '</h4></div>');
}

function addTextOne(item,index){
    
    $('#t'+index).append('<p class="desc">' + item + '</p>' );
}

function addDaysTwo(item,index){
    $('#sno').append('<div' + ' id="s' + index + '" class="wtext"> <h4>' + item + '</h4></div>');
}

function addTextTwo(item,index){
    $('#s'+index).append('<p class="desc">' + item + '</p>' );
}

}