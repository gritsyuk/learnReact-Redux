import { refreshTree } from '../../index';
let store = {
    db: {
        posts: [
            { id: '1', message: 'Коля', likeCount: 2 },
            { id: '2', message: 'Собзегие 3', likeCount: 2 }
        ],
        textareaValue: '',
        dialogsData: [
            { id: '1', name: 'Коля' },
            { id: '2', name: 'Петя' },
            { id: '3', name: 'Вася' },
            { id: '4', name: 'Саша' },
            { id: '5', name: 'Иван' },
            { id: '6', name: 'Алиса' }
        ],
        msgData: [
            { id: '1', message: 'HI' },
            { id: '2', message: 'HOw are you man' },
            { id: '3', message: 'Hellow' }
        ],
    },
    addPost(msg) {
        let newPost = {
            id: 3,
            message: msg,
            likeCount: 0
        }
        this.db.posts.push(newPost);
        refreshTree();
    },

    setValueTextarea(text) {
        this.db.textareaValue = text;
        refreshTree();
    },
    dispatch (action) { // object what to do {type: 'text' (ex 'ADD-POST')} 

    }
}
export default store;