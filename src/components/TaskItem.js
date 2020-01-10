import React, { Component } from 'react';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
        //Chuyền id tới những thằng mà onUpdateStatus đi qua
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    //Làm sao để bỏ dc đoạn "localhost: 3000 says"
    setNotification = () => {
        const notification = window.confirm('Ban co chac muon xoa khong');
        if(notification === true) {
            this.onDelete();
        }
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }

    render() {   
        var { task, index } = this.props;     
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <span 
                    className={ task.status === true ? 'badge badge-danger' : 'badge badge-success'}
                            onClick={ this.onUpdateStatus }
                    >
                        { task.status === true ? 'Kich hoat' : 'An' }
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={ this.onUpdate }
                    >
                        <span className="fa fa-pencil mr-5"></span>Sua
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={ this.setNotification }
                    >
                        <span className="fa fa-trash mr-5"></span>Xoa
                    </button>
                </td>
            </tr>
        )
    }
}

export default TaskItem;