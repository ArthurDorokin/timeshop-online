import React, {Component} from "react";
import Select from "react-select";
import {catalog} from "../../../constans";

const brand = [
    {value: 0, label: "Samsung"},
    {value: 1, label: "Huawei"},
    {value: 2, label: 'Garmin'},
    {value: 3, label: 'Apple'},
    {value: 4, label: 'Diesel'},
    {value: 5, label: 'Casio'},
    {value: 6, label: 'Fitbit'},
    {value: 7, label: 'Armani'},
    {value: 8, label: 'Xiaomi'},
    {value: 9, label: 'Smart'},
    {value: 10, label: 'Бренд'}
];

class Filter extends Component {
    state = {
        default: {
            catalog
        },
        catalog
    }

    handleChangeBrend = selectedOptionBrend => {
        this.setState({catalog});
        if (selectedOptionBrend.value === 0) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 0);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 1) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 1);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 2) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 2);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 3) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 3);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 4) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 4);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 5) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 5);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 6) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 6);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 7) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 7);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 8) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 8);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 9) {
            const byFilterBrend = this.state.default.catalog;
            const sortFilterBrend = byFilterBrend.filter((item) => item.brand.val === 9);
            this.setState({catalog: sortFilterBrend});
            this.props.handleChangeBrend(sortFilterBrend)
        }
        if (selectedOptionBrend.value === 10) {
            const byRestBrendData = this.state.default.catalog;
            this.setState({catalog: byRestBrendData});
            this.props.handleChangeBrend(byRestBrendData)
        }
    };

    render() {
        const { selectedBrend } = this.state;
        return (
            <div className="filter">
                <div className="container">
                    <p>Фильтр</p>

                    <div className="brand">
                        <Select
                            value={selectedBrend}
                            onChange={this.handleChangeBrend}
                            options={brand}
                            defaultValue={{value: 3, label: 'Бренд'}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter