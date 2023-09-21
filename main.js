$(document).ready(function () {
    const endpoint = "https://api.github.com/users/staanb"

    fetch(endpoint)
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        // Colocando os textos e os links corretamente
        $("#profile-avatar").attr("src", json.avatar_url)
        $("#profile-name").text(json.name)
        $("#profile-username").text(`@${json.login}`)
        $("#repository-number").text(json.public_repos)
        $("#followers-number").text(json.followers)
        $("#follow-number").text(json.following)
    })
    .catch((err) => {
        alert("Ocorreu um erro na requisição")
    })
});