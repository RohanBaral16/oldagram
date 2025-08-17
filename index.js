const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContent = document.getElementById("main-container");
// let's define a render function 

function renderPost(posts){

        let contentToPrint = `
        <div class="content">
                <div class="post-profile">
                    <img class="user-profile-pic" src="${posts.avatar}">
                    <div class="post-profile-details">
                        <p class="profile-name">${posts.name}</p>
                        <p class="profile-location">${posts.location}</p>
                    </div>
                </div>

                <img class="post-pic" src="${posts.post}" alt="user's post">
                <div class="interaction-buttons">
                    <img class="interactive-icons" src="images/icon-heart.png">
                    <img class="interactive-icons" src="images/icon-comment.png">
                    <img class="interactive-icons" src="images/icon-dm.png">
                </div>
                <p class="like-count">${posts.likes}</p>
                <p class="user-caption"><span class="username">${posts.username}</span>${posts.comment}</p>
            </div>
            <div class="spacing"></div>
        `
        mainContent.innerHTML += contentToPrint
}

function postLooper(){
    for (let i=0; i<posts.length ; i++){
        renderPost(posts[i])
    }
}

postLooper()