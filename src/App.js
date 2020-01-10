import React, { Component } from 'react';
import TastForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks : [], //id: unit, name, status
      isDisplayForm: false,
    }
  }

  componentWillMount() {
    //một lifecyce react dc gán vào khi refets lại trang, nó chỉ dc gọi duy nhất 1 lần
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks //Lưu giá trị tasks vào state mỗi khi load lại trang tránh th mất data
      });
    }
  }

  onGeneraData = () => {
    var tasks = [
      {
        id : this.geberateID(),
        name: 'Hoc Lap Trinh',
        status : true,
      },
      {
        id : this.geberateID(),
        name: 'Di Boi',
        status : false,
      },
      {
        id : this.geberateID(),
        name: 'Ngu',
        status : true,
      }
    ]
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));//localStorete là của html 5 giúp chúng ta lưu vào một vùng nhớ tương tự cookie.
    //Lên load lại trang k bị mất data, JSON.stringify chuyển tasks thành kiểu string để tiện lưu trữ. Trong dự án thực tế thì nó sẽ lưu và tải từ server suống
  }

  s4() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  geberateID(){
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-'  + this.s4() + '-'
    + this.s4() + '-'  + this.s4() + '-'  + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    this.setState({isDisplayForm: !this.setState.isDisplayForm});
  }

  onCloseForm = () => {
    // Sử dụng để đóng form
    this.setState({isDisplayForm: false});
  }

  onSubmit = (data) => {
    //Nhận dữ liệu từ thg con TastForm truyền qua props
    var { tasks } = this.state;
    data.id = this.geberateID;// id của dữ liệu vừa thêm
    tasks.push(data);
    this.setState({
        tasks : tasks,
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    var { tasks, isDisplayForm } = this.state //Tương đương vs tasks = this.state.tasks
    var elmTaskForm = isDisplayForm 
        ? <TastForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> 
        : "";
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {/* Nếu click vào button thêm thì sẽ hiển thị <TastForm /> còn k sẽ ẩn nó đi */}
          <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" }>
            {elmTaskForm}
          </div>
          <div className={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
            <button
              type="button" 
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5" />
              Thêm Công Việc
            </button>
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={this.onGeneraData}>
              Gebarate Data
            </button>
            <TaskControl />
            <TaskList tasks = { tasks }  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
