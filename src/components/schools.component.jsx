import  React, { Component } from 'react'


class schoolsComponent extends Component {
    componentDidMount = () => {
        const { getSchools, schools } = this.props;
        getSchools();
        if (schools.success){
            this.setState({schools_list: schools.schools_list})
        }
   
    }
    render() {
        const { schools_list } = this.props.schools
        return (
            <React.Fragment >
                <div className='col-xs-1 center-block'>
                <h2 className='text-center'>Schools</h2>
            <ul className='list-group'>
        {schools_list.map( school =>
            <li className = 'list-group-item' key={school.id}>
                {school.name}
            </li>

        )}
        </ul>
        </div>
        </React.Fragment>
        )
    }
}

export default schoolsComponent