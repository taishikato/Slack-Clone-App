import { InfoOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import firebase from 'firebase';

import './ChatInput.css';
import db from './firebase';
import { useStateValue } from './StateProvider';

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('hello');
    if (channelId) {
      console.log('hello2');
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput('');
  };
  return (
    <div className="chatInput">
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          value={input}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
