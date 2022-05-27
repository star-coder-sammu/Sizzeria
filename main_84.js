pizza_list_array = [];

function getmenu()
	{    
         
        var item = document.getElementById("Pizza name").value; 
       
        //Add push() function to push item into array
        pizza_list_array.push(item);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
	}