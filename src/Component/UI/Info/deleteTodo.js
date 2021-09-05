import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import dataService from '../../../data-service'
import './deleteTodo.css'
const Delete = (props) => {
  const [open, setOpen] = React.useState(false)

  const handleDeleteInfo = (id) => {
    dataService.delete(id).then(res => {
      console.log(res);
      if (res.status == 204) {
        setOpen(false)
        props.displayOffInfo()
        props.getData();
      }
    }).catch(e => console.log(e))
  }
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<i className="las la-trash-alt"></i>}
    >
      <Header icon>
        <Icon name='trash' />
        Delete This Task
      </Header>
      <Modal.Content>
        <p style={{ textAlign: 'center' }}>
          are you sure delete this this task?
        </p>
      </Modal.Content>
      <div style={{ textAlign: 'center' }}>
        <Modal.Actions>
          <Button basic color='grey' inverted onClick={() => setOpen(false)}>
            <Icon name='remove' /> Cancel
          </Button>
          <Button color='red' inverted onClick={(id) => handleDeleteInfo(props.InfoDetail.todo_id)}>
            <Icon name='checkmark' /> Delete
          </Button>
        </Modal.Actions>
      </div>
    </Modal>
  )

}

export default Delete

