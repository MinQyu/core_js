const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', END_POINT);

xhr.send();
