$(document).ready(function(){

function getUserRepos(){
let gitAPI = 'https://api.github.com/users/'; 
let username = `${username}`;
let apiPath = gitAPI+username+'/repos?type=all&direction=desc';

fetch(apiPath)
.then(status)
.then(response => response.json())
.then(responseJson =>
    displayResults(responseJson))

}

function status(responseJson){
    if(!response.ok){
        throw alert("User not found. Try again.");
    }
    return response;
}

function displayResults(responseJson){
    $('#results-list').empty();
    for (let i = 0; i < responseJson ) {
        $('#results-list').append(

        )
    }


}









}//jquery doc -end bracket 