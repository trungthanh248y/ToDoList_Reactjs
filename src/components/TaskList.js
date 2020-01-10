import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1, // all: -1, active: 1, deactive: 0
        }
    }
    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        //Truyền giá trị của filter sang cho app
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name]: value,
        });

    }

    render() {
        var { tasks } = this.props; //Tương đương vs tasks = this.props.tasks
        var { filterStatus, filterName } = this.state;
        var elmTasks = tasks.map((tasks, index) => {
            return <TaskItem 
                key={tasks.id} 
                index={index} 
                task={tasks}
                onUpdateStatus = {this.props.onUpdateStatus}
                onDelete = {this.props.onDelete}
                onUpdate = {this.props.onUpdate}
            />
        });
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Ten</th>
                        <th className="text-center">Trang Thai</th>
                        <th className="text-center">Hanh Dong</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={ filterName }
                                onChange={ this.onChange }
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={ filterStatus }
                                onChange={ this.onChange }
                            >
                                <option value={-1}>Tat Ca</option>
                                <option value={0}>An</option>
                                <option value={1}>Kich Hoat</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {/* phan tu thu 1 */}
                   {elmTasks}
                </tbody>
            </table>
        );
      }
}

export default TaskList;