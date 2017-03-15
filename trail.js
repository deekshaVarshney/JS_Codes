  function clearInput(){
    $("#myForm").each(function(){
     $(this).val('');
    });
        
} 
        $(document).ready(function() {
            
            $("#sub").click(function(event){
                
               $.post( 
                  $("#myForm").attr("action"),
                  $("#myForm").serializeArray(),
                  function(data) {
                     $('#result').html(data);
                  }
               );
                       
            });
            clearInput();
              
         });
$("#sub").click(function() {
   return false;
});


    
    
