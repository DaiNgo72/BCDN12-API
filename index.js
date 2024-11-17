const buttonSearch = document.querySelector(".search button");
const inputSearch = document.querySelector('.search input');

// () => {} ::: Arrow function 
// buttonSearch.onclick = () => {
//     const value = inputSearch.value;

//     // Nếu đã biết được địa chỉ
//     // Request đến server để trả về thông tin
//     fetch(`https://api.github.com/search/users?q=${value}`)
//         // Đợi nó trả về kết quả thành công
//         .then(
//             function (response) {
//                 // Chuyển kiểu json (string) về kiểu dữ liệu javascript
//                 return response.json();
//             }
//         )
//         .then(
//             function (response) {
//                 // Kết quả thật sự
//                 console.log(response);

//                 const user = response.items[0];

//                 // Kiểm tra user có tồn tại hay không
//                 if (user) {
//                     const img = user.avatar_url;
//                     const name = user.login;

//                     renderProfile(img, name);
//                 } else {
//                     renderProfile("https://picsum.photos/id/237/200/300", 'User Not Found');
//                 }
//             }
//         )
//         // Đợi nó trả về thất bại
//         .catch(
//             // Khi nào có lỗi thì sẽ gọi function này
//             function (err) {
//                 console.log(err);
//             }
//         )
// }

buttonSearch.onclick = () => {
    const username = inputSearch.value;

    // then: xử lý thành công
    // catch: xử lý thất bại
    fetch(`https://api.github.com/search/users?q=${username}`)
        .then(function (response) {
            // response: string (json)
            // => object => array
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            const user = response.items[0];

            if (user) {
                const img = user.avatar_url;
                const name = user.login;

                renderProfile(img, name)
            } else {
                const img = "https://picsum.photos/id/237/200/300";
                const name = "Not Found";
                renderProfile(img, name)
            }

        })
        .catch(function (error) {
            console.log(error);
        })

}


// 1. declaration function
// function sum() {
//     // chay 100ms
//     return 10
// }

// // 2. expression function
// const sum2 = function () {}

// // // 3. Arrow function
// const sum3 = () => {}

// function renderProfile(img, name) {
//     const avatarUsr = document.createElement('img');

//     avatarUsr.src = img;
//     avatarUsr.alt = 'Đây là avatar của user: ' + name;

//     // -----------
//     const nameUsr = document.createElement('p');

//     nameUsr.textContent = name;

//     const contentGithub = document.querySelector('.content-github');

//     // Reset content
//     contentGithub.textContent = '';

//     // Thêm element vào contentGithub
//     contentGithub.append(avatarUsr);
//     contentGithub.append(nameUsr);
// }

const contentGithub = document.querySelector('.content-github');

function renderProfile(img, name) {
    // reset
    contentGithub.textContent = '';

    console.log(img, name);
    const imageEle = document.createElement('img');
    imageEle.src = img;
    imageEle.alt = 'Avartar user';

    const pEle = document.createElement('p');
    pEle.textContent = name;


    contentGithub.append(imageEle);
    contentGithub.append(pEle);
}