import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import './Dialogs.css';


const Dialogs = props => {

    
    let dialogsElements =  props.dialogsData.map((dialog, key) => 
        <DialogItem key={key} name={dialog.name} id={dialog.id} />
    )

    
    let messagesElements  = props.messagesData.map((message, key) => 
        <Message key={key} message={message.message} />
    )


    const onAddMessageClick = () => {
        props.onAddMessageClick()
    }

    const onNewMessageChange = (messageText) => {
        props.onNewMessageChange(messageText)
    }
    
    return (
        <div className="dialogs">
            <div className="dialogs_items">

                {dialogsElements}

            </div>

            <div className="messages_items">
                
               <div>{messagesElements}</div>

            </div>
            <textarea value={props.newMessageText} onChange={e => onNewMessageChange(e.target.value)}></textarea>
            <button onClick={onAddMessageClick}>Send message</button>
        </div>
    );
};

export default Dialogs;