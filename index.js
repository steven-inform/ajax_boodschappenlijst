$(function(){

    var items = $("#items");
    var nieuwvak = '<input class="invoer" value=""><br>';

    //onmiddellijk een eerste invoerlijn voorzien
    items.append(nieuwvak);

    //bij verlaten van een input...
    $("body").on("blur", ".invoer", function(){
        if ( $(this).val().length > 0 )
        {
            SaveToServer( $(this).val() );      //opslaan in databank
            items.append(nieuwvak);         //nieuw invoervak
            $(".invoer:last").focus();            //naar het nieuwe invoervak gaan
        }
    });

    //bij klikken op de knop...
    $("#button1").click( function() {
        //aantal items ophalen
        GetNrOfItems( function(response){
            $("#responseText").html(response.aantal + " items in de databank");
        } );
    });

});

function SaveToServer( item )
{
    $.ajax({
        url: "server_add_item.php",
        type: 'POST',
        data: { item: item },
        dataType: "json",                            //wat verwachten we terug?
        async: true,
        success: function(response) {
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Error");
        }
    });
}

function GetNrOfItems( function_on_succes )
{
    $.ajax({
        url: "server_nrofitems.php",
        type: 'GET',
        dataType: "json",                            //wat verwachten we terug?
        async: true,
        success: function(response) {
            function_on_succes(response) ;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Error");
        }
    });
}