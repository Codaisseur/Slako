import BaseModel from './BaseModel';

class MessageModel extends BaseModel {
  defaults() {
    return {
      username: null,
      text: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  constructor() {
    super('message');
  }
}

export default MessageModel;
