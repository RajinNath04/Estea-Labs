import React, { Component } from "react";
import { Formik, Form } from "formik";
import InputText from '../Form/InputText';
import InputDate from '../Form/InputDate';
import _ from 'lodash';
import SingleSelect from '../Form/SingleSelect';
import './FilterHeader.scss';

class FileHeader extends Component {


    handleSubmit = (values) => {
        console.log(values)
    };

    render() {

        let arrayForGuest = [];
        var current = new Date().getFullYear();
        var min = 1;
        var max = 50;
        for (var i = min; i <= max; i++) {
            arrayForGuest.push({ value: i, label: i });
        }

        let arrayForRooms = [];
        var current = new Date().getFullYear();
        var min = 1;
        var max = 10;
        for (var i = min; i <= max; i++) {
            arrayForRooms.push({ value: i, label: i });
        }

        return (

            <div className="profile profile-page shadowCard">
                <Formik
                    initialValues={{
                        location: "",
                        CheckIn: "",
                        CheckOut: "",
                        rooms: "",
                        guest: "",
                    }}
                    onSubmit={(values) => this.handleSubmit(values)}
                    enableReinitialize
                    render={({ values, handleBlur, setFieldValue, disabled }) => {
                        return (
                            <Form>
                                <div className="filter">
                                    <div className="filter-SectionOne">
                                        <InputText
                                            type="text"
                                            placeholder="LOCATION"
                                            name="location"
                                            onBlur={handleBlur}
                                            value={values.location}
                                            onChange={(e) => {
                                                setFieldValue('location', e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="filter-SectionTwo">
                                        <InputDate
                                            name="CheckIn"
                                            label={"Check In"}
                                            placeholder={"Select Date"}
                                            value={values.CheckIn}
                                            onChange={(value) => setFieldValue("CheckIn", value)}
                                        />
                                    </div>

                                    <div className="filter-SectionTwo">
                                        <InputDate
                                            name="CheckOut"
                                            label={"Check Out"}
                                            placeholder={"Select Date"}

                                            value={values.CheckOut}
                                            onChange={(value) => setFieldValue("CheckOut", value)}
                                        />
                                    </div>

                                    <div className="filter-SectionTwo">
                                        < SingleSelect
                                            name="guest"
                                            placeholder={"Select Guest"}
                                            value={_.filter(arrayForGuest, obj => obj.value == values.guest)}
                                            onChange={(name, value) => {
                                                setFieldValue("guest", value);
                                            }}
                                            options={arrayForGuest}
                                        />
                                    </div>
                                    <div className="filter-SectionTwo">
                                        <SingleSelect
                                            name="rooms"
                                            placeholder={"Select Room"}
                                            value={_.filter(arrayForRooms, obj => obj.value == values.rooms)}
                                            onChange={(name, value) => {
                                                setFieldValue("rooms", value);
                                            }}
                                            options={arrayForRooms}
                                        />
                                    </div>

                                    <div className="profile-btns" >
                                        <button type="submit" className="primary">Search</button>
                                    </div>
                                </div>

                            </Form>
                        );
                    }}
                />

            </div>
        );
    }
}



export default FileHeader