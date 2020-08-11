import React, {Component} from "react";
import Select from "react-select";

const icon = [
    {value: 0, label: "Новинка"},
    {value: 1, label: "Хит"},
    {value: 2, label: 'Иконки'}
];
const brand = [
    {value: 0, label: "Samsung"},
    {value: 1, label: "Huawei"},
    {value: 2, label: 'Garmin'},
    {value: 3, label: 'Бренд'}
];

class Filter extends Component {
    state = {

    };

    handleChangeIcon = selectedOptionIcon => {
        this.setState({ selectedOptionIcon });
    };

    handleChangeBrend = selectedOptionBrend => {
        this.setState({ selectedOptionBrend });
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="filter">
                <div className="container">
                    <p>Фильтр</p>
                    <div className="icon">
                        <Select
                            value={selectedOption}
                            onChange={this.handleChangeIcon}
                            options={icon}
                            defaultValue={{value: 2, label: 'Иконки'}}
                        />
                    </div>
                    <div className="brand">
                        <Select
                            value={selectedOption}
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