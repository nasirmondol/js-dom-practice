console.log('Hello I am from summary js file now');
const myBlogs = document.getElementsByTagName('p');
// console.log(myBlogs);
for(const blog of myBlogs){
    // console.log(blog);
    blog.style.backgroundColor = 'orange';
    blog.style.color = 'white';
    blog.style.border = '1px solid black';
    blog.style.padding = '10px'
    blog.style.margin = '10px';
}

const special = document.getElementById('specila-one');
special.innerHTML = `
<h2>Its my special one. Do you know</h2>
<ul>
    <li>friends-1</li>
    <li>friends-2</li>
    <li>friends-3</li>
</ul>
`
special.style.backgroundColor = 'red';

const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
// fifth.remove(fifth);

const friendList = document.createElement('li');
friendList.innerText = 'Friends-11';
friends.appendChild(friendList);