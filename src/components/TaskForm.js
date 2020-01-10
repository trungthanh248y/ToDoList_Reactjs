import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
        }
    }

    componentDidMount() {
        // Hàm lifecyce này đc gọi khi click vào nút sửa, và form hiển thị nhưng nó chỉ thực hiện dc lần đầu khi load trang
        if(this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        //Để khắc phục nhược điểm của hàm componentWillMount trên ta sẽ sử dụng dụng componentWillReceiveProps để bắt sau mỗi lần click thay đổi state
        if(nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status,
            });
        }
        //Với điều kiện click từ sửa vào thêm
        else if(nextProps && nextProps.taskEditing === null) {
            this.setState({
                id: '',
                name: '',
                status: false,
            })
        }
    }

    onChange = (event) => {
        var target = event.target;
        var value = target.value;
        // Câu hỏi ?: Tại sao true khi truyền về state lại có kiểu string chứ k phải boole như khi ta chuyền
        if(target.name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [target.name]: value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();//Sau khi submit chánh sự kiện load lại trang có thể có
        if(this.state.name.length > 0) {
            this.props.onSubmit(this.state);//Gửi state đến thằng cha
            //Thêm thành công thì cũng cần hủy bỏ và close form
            this.onClear();
            this.props.onCloseForm();
        } else {
            window.confirm('Ban can nhap gia tri cho form');
        }
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false,
        });
    }

    render() {
        var {id} = this.state;
        return (
            <div className="panel panel-warning">
                <div className="p-3 mb-2 bg-warning text-dark">
                    <h3 className="panel-title">
                        {id !== '' ? 'Cap nhap cong viec' : 'Them Cong Viec'}
                        <span className="fa fa-times-circle text-right"
                        onClick={ this.props.onCloseForm  } ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Ten: </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control" 
                                    value={this.state.name}
                                    onChange={this.onChange} 
                                />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange} 
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Luu Lai
                            </button>&nbsp;
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={ this.onClear }
                            >
                                <span className="fa fa-plus mr-5"></span>Huy Bo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm;