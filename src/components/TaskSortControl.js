import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton, Dropdown } from 'react-bootstrap';

class TaskSortControl extends Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <DropdownButton id="dropdown-basic-button" title="Sap Xep">
                    <Dropdown.Item onClick={ () => this.onClick('name', 1) }>
                        <a 
                        className={
                            (this.props.sortBy === 'name' && this.props.sortValue === 1)
                            ? 'sort_selected' : ''
                        }
                        >
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.onClick('name', -1) }>
                        <a 
                        className={
                            (this.props.sortBy === 'name' && this.props.sortValue === -1)
                            ? 'sort_selected' : ''
                        }
                        >
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Ten A-Z
                            </span>
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.onClick('status', 1) }>
                        <a 
                        className={
                            (this.props.sortBy === 'status' && this.props.sortValue === 1)
                            ? 'sort_selected' : ''
                        }
                        >
                            Trang Thai Kich Hoat
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.onClick('status', -1) }>
                        <a 
                        className={
                            (this.props.sortBy === 'status' && this.props.sortValue === -1)
                            ? 'sort_selected' : ''
                        }
                        >
                            Trang Thai An
                        </a>
                    </Dropdown.Item>
                </DropdownButton>
          </div>
        )
    }
}

export default TaskSortControl;