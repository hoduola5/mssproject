// let a = 'Message Generator';
// console.log(a);
// let user = 'Kindly press 1 to start the project';
// console.log(user);
// if(user === 1){
//     console.log('it\'s time to start');
// }
let messages = [
    'Suratul Baqaroh', 'Suratul Imran', 'Suratul Nisah', 
    'Suratul Maidah', 'Suratul Lukman', 'Suratul Ibrahim', 
    'Suratul Yunus', 'Suratul Yusuf', 'Suratul Taha', 
    'Suratul Furqan'
]
function newMessage() {
    let randomNumber = Math.floor(Math.random() * (messages.length));
    document.getElementById('messageDisplay').innerHTML = messages[randomNumber];
}
