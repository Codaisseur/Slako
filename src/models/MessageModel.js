import BaseModel from './BaseModel';

class MessageModel extends BaseModel {
  defaults() {
    return {
      username: null,
      text: null,
      createdAt: null,
      updatedAt: null
    };
  }

  constructor() {
    super('message');
  }
}

export default MessageModel;
