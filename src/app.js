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
const testimonials = (users, posts) => {
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
};
getUser().then(userss => {
    let users = userss;
    getPosts().then(postss => {
        let posts = postss;
        testimonials(users, posts)
    })
})


