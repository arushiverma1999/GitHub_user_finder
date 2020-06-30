class UI{
    constructor()
    {
        this.profile=document.getElementById("profile");
    }
    show_profile(user)
    {
        this.profile.innerHTML=`
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4 offset-4 mb-4">
                 <img class="img-fluid mb-2" src="${user.avatar_url}">
                 <button type="button" class="btn btn-secondary btn-block">
               <a href="${user.html_url}" target="_blank"> view profile</a>
                 </button>
                </div>
            </div>    
            <div class="row">
                <div class="col-md-6">
                    <div class="card border-success mb-3" >
                        <div class="card-header">Profile Info</div>
                             <div class="card-body">
                                 
                                 <p class="card-text">Full Name- ${user.name}</p>
                                 <p class="card-text">Company - ${user.company}</p>
                                 <p class="card-text">Blogs - ${user.blog}</p>
                                 <p class="card-text">Account was created at -${user.created_at}</p>
                             </div>
                        </div>
                    </div>
                   
                   <div class="col-md-6" >
                        <div >
                        <button type="button" class="btn btn-success btn-block">Number of followers : ${user.followers}</button>
                        <br>
                        <br>
                        </div>
                        <div>
                        <button type="button" class="btn btn-outline-success btn-block">Number of following : ${user.following}</button>
                        <br>
                        <br>
                        </div>
                        <div>
                        <button type="button" class="btn btn-success btn-block">Number of public repositories : ${user.public_repos}</button>
                        <br>
                        <br>
                        </div>
                   </div>
               </div>
            
              
            </div>  
            
        </div> 
        <h2>Recent Repositories </h2>
        <div id="repository"></div>
       
        `;
    }

        //show repository
        show_repo(repo)
        {
            let output="";
            repo.forEach(function(repo)
            {
                output +=
                `
                    <div class="card card-body mb3">
                        <div class="row">
                           <div class="col-md-4">
                                <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                               
                            </div>
                            <div class="col-md-4">
                            <span class="badge badge-success">Number of stars :- ${repo.stargazers_count}</span>
                            <span class="badge badge-primary">Number of forks :- ${repo.forks}</span>
                            <span class="badge badge-warning">Number of watchers :- ${repo.watchers}</span>
       
                            </div>
                        </div>
                    </div>
            `;
            });
            
            document.getElementById("repository").innerHTML=output;
        }

    //show alert
    show_alert(message,class_name)
    {       //clear remaining alert
            this.clear_alert();
            //create element
            const div=document.createElement('div');
            //add class to it
            div.className=class_name;
            //add text
            div.appendChild(document.createTextNode(message));
            //get parent
            const container=document.querySelector(".searchContainer");
            //get search box
            const search=document.querySelector(".search");
            //append child by using insert before
            container.insertBefore(div,search);
            setTimeout(()=> 
            {
                    this.clear_alert();
            },3000);
    }
        //clear alert
        clear_alert()
        {
            const curr_alert=document.querySelector(".alert");
            if(curr_alert)
            {
                curr_alert.remove();
            }
        }

        

    //
    clear_profile()
    {
        this.profile.innerHTML= " ";
    }
}