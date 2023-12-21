import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comments' ,()=> {

  const comments = ref('')

  const commentStore = reactive({
    upvotes: 2372,
    downvotes: 246,
    favorite: false,
    comments: [],
    commentInput: '',

    uphq() {
      const input = this.commentInput.trim();
      if (input) {
        this.comments.push(input);
        this.commentInput = '';
      }
    },
    upvote() {
      commentStore.upvotes++
    },
    downvote() {
      commentStore.downvotes++
    }
  })

  return commentStore
})