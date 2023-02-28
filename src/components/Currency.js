import React from "react";
import { AppContext } from "../context/AppContext";
import { Dropdown } from "react-bootstrap";


const Currency = () => {
    const { currency, dispatch } = React.useContext(AppContext);
    const currencyName = {
        '$': 'Dollar',
        '£': 'Pound',
        '€': 'Euro',
        '₹': 'Rupee',
    }

    function updateCurrency(e) {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.name,
        })
    }

    return (
        <div className='btn-group'>
            <Dropdown>
                <Dropdown.Toggle
                    variant='secondary'
                    id='dropdown-currency'
                    style={{
                        backgroundColor: '#92E399',
                        borderColor: '#92E399',
                    }}
                >
                    Currency: ({currency} {currencyName[currency]})
                </Dropdown.Toggle>
                <Dropdown.Menu
                    style={{
                        backgroundColor: '#92E399',
                    }}>
                    <Dropdown.Item name='$' onClick={updateCurrency}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item name='£' onClick={updateCurrency}>£ Pound</Dropdown.Item>
                    <Dropdown.Item name='€' onClick={updateCurrency}>€ Euro</Dropdown.Item>
                    <Dropdown.Item name='₹' onClick={updateCurrency}>₹ Rupee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Currency