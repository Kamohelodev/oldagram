const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21,492"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: "14,567"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: "15,678"
    }
]

const mainEl = document.querySelector("main"); // Select the main element

let html = `
    <header>
        <div class="nav">
            <img class="logo" src="images/logo.png">
            <img class="user-avatar" src="images/user-avatar.png">
        </div>
    </header>
`;

posts.forEach(post => {
    html += `
        <div class="post">
            <div class="header2">
                <img class="avatar" src="${post.avatar}">
                <div class="user-info">
                    <p class="name">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            
            <div>
                <img class="img" src="${post.post}">
            </div>
            
            <div class="icons">
                <img class="icon-heart" src="images/icon-heart.png">
                <img class="icon-comment" src="images/icon-comment.png">
                <img class="icon-dm" src="images/icon-dm.png">
            </div>
            <div>
                <p class="likes">${post.likes.toLocaleString()} likes</p>
            </div>
            <div>
                <p class="comment"><span class="username">${post.username}</span> ${post.comment}</p>
            </div>
        </div>
    `;
});

mainEl.innerHTML = html;