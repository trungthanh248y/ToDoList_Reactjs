import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false,
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
        this.props.onSubmit(this.state);//Gửi state đến thằng cha
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="p-3 mb-2 bg-warning text-dark">
                    <h3 className="panel-title">
                        Them Cong Viec
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
                            <button type="button" className="btn btn-danger">
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