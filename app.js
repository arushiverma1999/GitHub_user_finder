//initialise github api class
const github=new git_hub;

//initialise profile class
const ui =new UI;

//search input
const search=document.getElementById("search_user");

//add event listener
input_button.addEventListener("click",search_function);
clear.addEventListener("click",clear_fn);

//search function
function search_function(e)
{
    //get input text
    //const search_value=e.target.value;
    const search_value=search.value;
    console.log(search_value);
    if(search_value !== "")
    {
            //make http call
            github.get_user(search_value)
            .then(
                (data)=>{
                    if(data.profile.message==="Not Found")
                        ui.show_alert("user not found","alert alert-danger")
                    else
                    {
                    ui.show_profile(data.profile);
                    ui.show_repo(data.repo);
                    console.log(data);
                    }
                }
            );
    }
   // else{
        //clear the profile
      //    ui.clear_profile();
   // }
    e.preventDefault();
    
}
function clear_fn()
    {
        ui.clear_profile();
        search.value="";
    }