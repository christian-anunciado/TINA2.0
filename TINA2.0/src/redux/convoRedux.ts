// create a slice of state for theme

import { createSlice } from "@reduxjs/toolkit";

export enum MessageType {
  Query = "query",
  Response = "response",
}

export interface MessageState {
  text: string;
  type: MessageType;
  created: Date;
  error?: boolean;
}

type ConvoState = {
  messages: MessageState[];
  count: number;
  loading: boolean;
};

const initialState: ConvoState = {
  messages: [],
  count: 0,
  loading: false,
};

const convoRedux = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    appendMessage: (state, action) => {
      state.messages = state.messages.concat(action.payload);
      state.count = state.count + 1;
      state.loading = true;
    },

    appendResponse: (state, action) => {
      state.messages[state.count - 1] = action.payload;
      state.loading = false;
    },
    clearMessages: (state) => {
      state.messages = [];
      state.count = 0;
      state.loading = false;
    },
  },
});

export const { appendMessage, clearMessages, appendResponse } =
  convoRedux.actions;

export default convoRedux.reducer;
