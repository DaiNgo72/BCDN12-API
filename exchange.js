// 1. https://v6.exchangerate-api.com/v6/[key]/codes
// call api để liệt kê tất cả các đồng mà có dữ liệu chuyển đổi
// thêm vào option -> cho cả 2 select
const KEY = "49b3ba7e01938830ded66c1d";

fetch(`https://v6.exchangerate-api.com/v6/${KEY}/codes`)
    .then(
        (response) => response.json()
    )
    .then(
        (response) => {
            console.log(response);

            renderSelectCountry(response.supported_codes);
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )

const codeSelect = document.querySelectorAll('.codes'); // array

const renderSelectCountry = (codes) => {

    codes.forEach(

        (item) => {
            const value = item[0];
            const content = item[1];

            const option = document.createElement('option');

            option.value = value;
            option.textContent = content;
    
            // codeSelect[0].append(option.cloneNode(true));
            // codeSelect[1].append(option.cloneNode(true));

            codeSelect.forEach(
                (select) => {
                    select.append(option.cloneNode(true));
                }
            )
        }

    )
}


// const renderSelectCountry = (countries) => {

//     countries.forEach(
//         (code) => {
//             const option = document.createElement('option');

//             option.value = code[0];
//             option.textContent = code[1];

//             codeSelect.forEach(
//                 (select) => {
//                     select.append(option.cloneNode(true));
//                 }
//             )

//             // codeSelect[0].append(option.cloneNode(true));
//             // codeSelect[1].append(option.cloneNode(true));
//         }
//     )
// }

// 2. https://v6.exchangerate-api.com/v6/[key]/latest/USD
// click exchange 





