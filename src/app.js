let user2 = document.getElementById("user2");
let user7 = document.getElementById("user7");
let user8 = document.getElementById("user8");

let cardHTML = [];

//Getting data with Axios
const getUser = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            resolve(response.data);
        })
    })
};
const getPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            resolve(response.data);
        })
    })
};

const addPostsToUsers = (users, posts) => {
    console.log(users, posts)
    users.forEach(user => {
        arry = []
        posts.forEach(post => {
            if (post.userId === user.id) {
                arry.push(post.body);
            }
        })
        user.posts = arry;
    })
    testimonials(users)
};

const testimonials = (data) => {
console.log(data)
let witnesses = [];
data.filter(user=> {
    if (user.id ===2 || user.id ===7 || user.id ===8) {
        witnesses.push(user);
}
});
console.log(witnesses)
createCard(witnesses)

};

const createCard = (data) => {
    data.forEach(user => {
        cardHTML.push(
            `<div class="carousel">
            <div class="card">
            <div class="row justify-content-center">
            <img class="card-img-top" src="./assets/img/person_${user.id}.jpg" alt="person_${user.id}">
            </div>
            <div class="card-body">
            <p class="card-text text-center">${user.posts[0]}</p>
            <h6 class="text-center">${user.name}</h6>
            </div>
            </div>`
            )
    })
      user2.innerHTML = cardHTML[0];
      user7.innerHTML = cardHTML[1];
      user8.innerHTML = cardHTML[2];
};

getUser().then(userss => {
    let users = userss;
    getPosts().then(postss => {
        let posts = postss;
        addPostsToUsers(users, posts)
    })
})


