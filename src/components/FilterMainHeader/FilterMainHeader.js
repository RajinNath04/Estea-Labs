import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Checkbox } from 'antd';
import InputText from '../Form/InputText';
import _ from 'lodash';
import SingleSelect from '../Form/SingleSelect';
import { Slider } from 'antd';
import RatingStar from "../Form/RatingStar";
import './FileMainHeader.scss';

class FileMainHeader extends Component {


    handleSubmit = (values) => {
        console.log('values');
    };

    checkBoxChange = (values) => {
        console.log(values);
    }

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

        const plainOptions = ['Breakfast Included', 'All Inclusive'];

        const plainOptionsSecond = ['Refundable Only'];

        const plainOptionsThird = ['Show selected Only']

        return (

            <div className="profile profile-page shadowCard">
                <Formik
                    initialValues={{
                        name: "",
                        star: "",
                        price: "",
                        priceTo: "",
                        distance: "",
                        breakfastIncluded: "",
                        breakfastExclusive: "",
                        rating: "",
                        refundable: "",
                        selectedOnly: ""
                    }}
                    onSubmit={(values) => this.handleSubmit(values)}
                    enableReinitialize
                    render={({ values, handleChange, handleBlur, setFieldValue }) => {
                        return (
                            <Form>
                                <div className="filterMainHeader">
                                    <div className="filterMainHeader-SectionOne">
                                        <InputText
                                            type="name"
                                            id="autocomplete"
                                            label={"Hotel Name"}
                                            placeholder="Hotel Name"
                                            name="name"
                                            onBlur={handleBlur}
                                            value={values.name}
                                            onChange={(e) => {
                                                setFieldValue('name', e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="filterMainHeader-SectionTwo">
                                        <RatingStar
                                            name="star"
                                            label={"Rating"}
                                            onChange={(e) => {
                                                setFieldValue("star", e)
                                            }}
                                            value={values.star}
                                            className="RatingAlign" />
                                    </div>

                                    <div className="filterMainHeader-SectionFour">
                                        <div>
                                            <InputText
                                                name="price"
                                                label={"Price"}
                                                placeholder={"From"}
                                                value={values.price}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>

                                        <div>
                                            <InputText
                                                name="priceTo"
                                                placeholder={"To"}
                                                value={values.priceTo}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>

                                    </div>

                                    <div className="filterMainHeader-SectionThree">
                                        <SingleSelect
                                            name="rooms"
                                            label={"Sort By"}
                                            placeholder={"Distance"}
                                            value={_.filter(arrayForRooms, obj => obj.value == values.rooms)}
                                            onChange={(name, value) => {
                                                setFieldValue("rooms", value);
                                            }}
                                            options={arrayForRooms}
                                        />
                                    </div>

                                </div>
                                <div className="filterMainHeaderSecondSection">
                                    <div className="filterMainHeaderSecondSection-one">
                                        <Checkbox.Group options={plainOptions} onChange={this.checkBoxChange} />
                                    </div>
                                    <div className="filterMainHeaderSecondSection-second">
                                        <p>Review Rating</p>
                                        <Slider defaultValue={0} max={10} min={0} tooltipVisible />
                                    </div>
                                    <div className="filterMainHeaderSecondSection-third">
                                        <Checkbox.Group options={plainOptionsSecond} onChange={this.checkBoxChange} />
                                    </div>
                                    <div className="filterMainHeaderSecondSection-four">
                                        <Checkbox.Group options={plainOptionsThird} onChange={this.checkBoxChange} />
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



export default FileMainHeader