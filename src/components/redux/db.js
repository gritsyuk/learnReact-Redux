import {refreshTree} from '../../index';
let db = {
    posts : [
      { id: '1', message: 'Коля', likeCount: 2 },
      { id: '2', message: 'Собзегие 3', likeCount: 2 }
    ],
    textareaValue: '',
    dialogsData : [
        { id: '1', name: 'Коля' },
        { id: '2', name: 'Петя' },
        { id: '3', name: 'Вася' },
        { id: '4', name: 'Саша' },
        { id: '5', name: 'Иван' },
        { id: '6', name: 'Алиса' }
      ],
     msgData : [
        { id: '1', message: 'HI' },
        { id: '2', message: 'HOw are you man' },
        { id: '3', message: 'Hellow' }
      ],
};
let addPost = (msg) => {
  let newPost = {
    id: 3,
    message: msg,
    likeCount : 0
  }
  db.posts.push(newPost);
  refreshTree();
}

let setValueTextarea = (text) => {
    db.textareaValue = text;
}

export {setValueTextarea};
export {addPost};
export default db;