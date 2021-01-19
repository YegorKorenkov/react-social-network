import React from 'react';
import Dialogs from './Dialogs'
import {updateNewMessageTextCreator, sendMessageCreator} from '../../redux/messages-reducer'
import { connect } from 'react-redux'
import WithAuthRedirect from '../../hoc/WithAuthRedirect';


let mapStateToProps = state => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

let mapDispatchToProps = dispatch => {
    return {
        onAddMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: messageText => {
            dispatch(updateNewMessageTextCreator(messageText))
        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;