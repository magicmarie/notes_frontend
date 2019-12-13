import React, { Component } from 'react'
import { Button, Collapse, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-responsive-modal';
import { Form } from "../helpers/helper";
import { toast } from 'react-toastify';


class schoolsComponent extends Component {
    state = {
        open: false,
        errorHandled: false,
        openStreamModal: false

    }

    componentDidMount = () => {
        const { getSchools } = this.props;
        getSchools();
        const { schools } = this.props;

        if (schools.success) {
            this.setState({ schools_list: schools.schools_list })
        }

    }
    componentDidUpdate = () => {
        const { createschool, schools, createstream } = this.props;
        const { schools_list, errorHandled } = this.state
        if (schools.success && schools_list !== schools.schools_list) {
            this.setState({ schools_list: schools.schools_list })
        }
        if (createschool.success && !schools_list.includes(createschool.created_school)) {
            schools_list.push(createschool.created_school)
            this.setState({ open: false, schools_list: schools_list })

            toast(`school ${createschool.created_school.name} created successfully`)
        }
        else if (createschool.rejected && !errorHandled) {
            toast.error(createschool.error)
            this.setState({ errorHandled: true })
        }
        if (createstream.success && !schools_list.includes(createstream.created_stream )){
            console.log("stream added")
            console.log(this.state )
            console.log('hello')
            console.log(createstream)
            var x;
            for(x in schools_list){
                console.log(schools_list[x]);
                if (schools_list[x].id === createstream.created_stream.id && schools_list[x] !== createstream.created_stream ){
                    schools_list[x] =createstream.created_stream
                    this.setState({schools_list})

                }
            }
        }

    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { createSchool, } = this.props;
        const { school_name } = this.state;
        createSchool({ name: school_name });
        this.setState({ errorHandled: false });

    }

    handleStreamSubmit =(e, id)=> {
        e.preventDefault();
        const {createStream } = this.props
        createStream(id, {name: this.state.stream_name})
        this.setState({[`modal${id}`]: !this.state[`modal${id}`]})

    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleStreamModal = e => {
        this.setState({ openStreamModal: !this.state.openStreamModal })
    }
    onCloseStreamModal = () => {
        this.setState({ openStreamModal: false })
    }
    render() {
        const { schools_list } = this.props.schools
        const { open, openStreamModal } = this.state
        return (
            <React.Fragment >
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-8'>
                        <h2 className='text-center'>Schools</h2>
                        {
                            <ul className='list-group'>


                                {
                                    schools_list.map(school =>

                                        <div key={school.id}>
                                            <li className='list-group-item' key={school.id}
                                                onClick={() => this.setState({ [school.id]: !this.state[school.id] })}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}
                                            >
                                                {school.name}
                                            </li>
                                            <Collapse key={`collapse${school.id}`} in={this.state[school.id]}>
                                                <div id="example-collapse-text">
                                                    <ul className='list group'>
                                                        <h4>{school.name} Streams</h4>
                                                        {school.streams.map(
                                                            stream =>
                                                                <li key={stream.id} className='list-group-item'>
                                                                    {stream.name}
                                                                </li>

                                                        )}
                                                        <Button onClick={() => this.setState({[`modal${school.id}`]:!this.state[`modal${school.id}`]})} key={`btn ${school.id}`}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Button>
                                                        <Modal open={this.state[`modal${school.id}`]} onClose={() => this.setState({[`modal${school.id}`]:false})}center>
                                                            <div>
                                                                <form onSubmit={(e) => this.handleStreamSubmit(e, school.id)}>
                                                                    <div className="form-group">
                                                                        <label htmlFor="stream_name">Stream Name</label>
                                                                        <input
                                                                            type="text"
                                                                            
                                                                            onChange={this.onChange}
                                                                            name="stream_name"
                                                                            className="form-control"
                                                                        />
                                                                        <input
                                                                            type="text"
                                                                            name="school_id"
                                                                            value={`${school.id}`}
                                                                            hidden
                                                                            readOnly
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                    <button type="submit" className="btn btn-primary btn-block" >
                                                                        Add Stream to {school.name}
                                                                    </button>
                                                                </form>


                                                            </div>
                                                        </Modal>

                                                    </ul>
                                                </div>
                                            </Collapse>
                                        </div>


                                    )
                                }
                            </ul>


                        }
                        <br></br>
                        <Button onClick={this.onOpenModal}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <Form formFields={[{
                                        type: "text",
                                        name: "school_name",
                                        label: "School Name"
                                    },

                                    ]} onChange={this.onChange} />
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Add School
                    </button>
                                </form>


                            </div>
                        </Modal>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default schoolsComponent