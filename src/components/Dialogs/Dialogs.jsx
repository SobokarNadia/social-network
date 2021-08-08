import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.scss";
import Message from "./Message/Message";
import {Form, Field} from "react-final-form";

const Dialogs = (props) => {
  let dialogElement = props.dialogsData.map((dialog, id) => (
    <DialogItem name={dialog.name} id={dialog.id} img={!dialog.img ? props.defaultImg[id] : dialog.img} key={dialog.id} />
  ));

  let messageElement = props.messagesData.map((message) => (
    <Message className={message.className} text={message.message} key={message.id} />
  ));

  let onSubmit = (data) => {
    console.log('dialogsData', data)
      props.sendMessage(data.messageArea);
  }

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_items}>{dialogElement}</div>
      <div className={cl.messages}>{messageElement}</div>
      <div className={cl.inputArea}>
        <Form onSubmit={onSubmit}
              render={ ({handleSubmit, pristine, submitting}) => (<form onSubmit={handleSubmit}>
                  <div>
                      <Field name={'messageArea'} component={"textarea"} className={cl.text} placeholder={'Enter your message'}/>
                  </div>
                  <div>
                      <button type={'submit'} className={cl.sendButton} disabled={pristine || submitting}>
                          SEND
                      </button>
              </div>
              </form>)}/>
      </div>
    </div>
  );
};

export default Dialogs;
