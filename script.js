$(document).ready(function(){

function getUserRepos(){
let gitAPI = 'https://api.github.com/users/'; 
let username = $('#username').val();
let apiPath = gitAPI+username+'/repos?type=all&direction=desc';

fetch(apiPath)
.then(status)
.then(response => response.json())
.then(responseJson =>
    displayResults(responseJson))

}

function status(response){
    if(!response.ok){
        throw alert("User not found. Try again.");
    }
    return response;
}

function displayResults(responseJson){
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++) {
        $('#results-list').append(
            `<h3>Repos</h3>
            <li>
            <p>${responseJson[i].name}</p>
            <p><a href="${responseJson[i].html_url}"></a></p>
            </li>`
        )};
    $('#results').removeClass('hidden');
}

function runForm(){
    $('form').submit(e=>{
        event.preventDefault();
        getUserRepos();

    });
}

$(runForm);








})