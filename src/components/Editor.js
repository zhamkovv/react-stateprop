import React from 'react';
import {Form, Input, Button} from 'antd';
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={5} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType='submit'
          loading={submitting}
          onClick={onSubmit}
          type='primary'>
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
  export default Editor