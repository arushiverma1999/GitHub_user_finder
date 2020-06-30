class git_hub{
    constructor()
    {
        this.client_id="7421f8fbe317fdfae3e3";
        this.client_secret="7b32755f7235f855d2412c75090504ce6a783413";
        this.repos_count=5;
        this.repos_sort="created:asc";
    }

    //function creation using async await
    async get_user(user)
    {
            const profile_response= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
            const repo_response= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
            const profile_data = await profile_response.json();
            const repo_data = await repo_response.json();
            return{
                profile:profile_data,
                repo:repo_data
            }
    }
}