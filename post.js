// https://jsonplaceholder.typicode.com/posts?_limit=10
const postContent = document.querySelector('.post-content');

document.querySelector('.btn-get-post').onclick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(
            // return về response.json()
            // (response) => {
            //     return response.json()
            // }

            (response) => response.json()
        )
        .then(
            (r) => {
                console.log(r);

                renderPost(r);
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
}


const renderPost = (listPost) => {

    postContent.innerHTML = '';

    listPost.forEach(
        (item) => {
            console.log(item);

            const postEle = document.createElement('div');

            const titleEle = document.createElement('h2');

            const contentEle = document.createElement('p');

            postEle.className = "post";
            titleEle.textContent = item.title;
            contentEle.textContent = item.body;


            postEle.append(titleEle)
            postEle.append(contentEle);

            postContent.append(postEle);
        }
    )

}

// const renderPost = (listPost) => {
//     postContent.textContent = "";

//     listPost.forEach(
//         (post) => {
//             const divPost = document.createElement('div');
//             divPost.className = 'post';

//             const headPost = document.createElement('h3');
//             headPost.textContent = post.title;

//             const bodyPost = document.createElement('p');
//             bodyPost.textContent = post.body;

//             divPost.append(headPost);
//             divPost.append(bodyPost);

//             postContent.append(divPost);
//         }
//     )
// }